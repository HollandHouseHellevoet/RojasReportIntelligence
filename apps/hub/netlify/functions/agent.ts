import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions'
import Anthropic from '@anthropic-ai/sdk'
import { chunks, type Chunk } from './knowledge-data'

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const SYSTEM_PROMPT = `You are the intelligence routing agent for The Rojas Report — independent healthcare media at rojasreport.com.

The Rojas Report operates three intelligence properties:
1. POH Intelligence (poh.rojasreport.com) — tracks physician-owned hospitals in the United States: Section 6001 of the ACA (the 2010 ban), state-by-state market data, hospital attrition, investment landscape, legislative activity.
2. FAH Intelligence (fah.rojasreport.com) — tracks the Federation of American Hospitals: lobbying spend, board member dossiers, PAC activity, fraud settlements, and policy positions across eight pillars.
3. The Rojas Report Newsletter (read.rojasreport.com) — daily independent healthcare intelligence.

The core thesis: healthcare is not broken, it is rigged. The extraction mechanisms are nonprofit hospital consolidation, CON laws, 340B arbitrage, facility fee fraud, regulatory capture, and the systematic elimination of physician-owned competition.

Answer only from your knowledge base. Route specific data questions to the correct subdomain. If the answer is not in your knowledge base, say so directly and suggest the correct resource. Do not speculate. Do not access the internet. Never start a response with "I". Dry wit is welcome when it sharpens a point — not when it undermines one.`

function bm25Search(query: string, topK = 5): Chunk[] {
  if (chunks.length === 0) return []
  const terms = query.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(w => w.length > 2)
  if (terms.length === 0) return []
  const scored = chunks.map(chunk => {
    let score = 0
    for (const term of terms) {
      if (chunk.keywords.includes(term)) score += 2
      if (chunk.text.toLowerCase().includes(term)) score += 1
    }
    return { chunk, score }
  })
  return scored.filter(s => s.score > 0).sort((a, b) => b.score - a.score).slice(0, topK).map(s => s.chunk)
}

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

export const handler: Handler = async (event: HandlerEvent, _ctx: HandlerContext) => {
  if (event.httpMethod === 'OPTIONS') return { statusCode: 200, headers: CORS, body: '' }
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method not allowed' }
  if (!process.env.ANTHROPIC_API_KEY) return { statusCode: 500, body: JSON.stringify({ error: 'ANTHROPIC_API_KEY not configured' }) }

  try {
    const { message, history = [] } = JSON.parse(event.body || '{}')
    if (!message || typeof message !== 'string') return { statusCode: 400, body: JSON.stringify({ error: 'message required' }) }

    if (chunks.length === 0) {
      return {
        statusCode: 200,
        headers: { ...CORS, 'Content-Type': 'application/json' },
        body: JSON.stringify({ reply: 'The knowledge base for this agent has not been loaded yet.' }),
      }
    }

    const relevant = bm25Search(message)
    let system = SYSTEM_PROMPT
    if (relevant.length > 0) {
      const context = relevant.map(c => `[Source: ${c.source}]\n${c.text}`).join('\n\n---\n\n')
      system = `${SYSTEM_PROMPT}\n\n## KNOWLEDGE BASE CONTEXT\n\n${context}`
    }

    const messages: Anthropic.MessageParam[] = [
      ...history.map((m: { role: string; content: string }) => ({ role: m.role as 'user' | 'assistant', content: m.content })),
      { role: 'user' as const, content: message },
    ]

    const response = await anthropic.messages.create({ model: 'claude-sonnet-4-20250514', max_tokens: 1024, system, messages })
    const reply = response.content[0].type === 'text' ? response.content[0].text : ''

    return { statusCode: 200, headers: { ...CORS, 'Content-Type': 'application/json' }, body: JSON.stringify({ reply }) }
  } catch (err) {
    console.error('Agent error:', err)
    return { statusCode: 500, headers: CORS, body: JSON.stringify({ error: 'Agent error. Please try again.' }) }
  }
}
