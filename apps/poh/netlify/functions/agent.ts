import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions'
import Anthropic from '@anthropic-ai/sdk'
import { chunks, type Chunk } from './knowledge-data'

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const SYSTEM_PROMPT = `You are the intelligence agent for the Physician-Owned Hospitals tracker at poh.rojasreport.com.

Your scope is strictly limited to: physician-owned hospitals in the United States, Section 6001 of the Affordable Care Act (the 2010 ban on new physician-owned hospitals), state-by-state market data, hospital attrition rates, the investment landscape, and legislative activity including the RURAL Act.

Key facts you know: Before the ban, 265 physician-owned hospitals operated in the United States. As of 2026, 104 survive. 85 have been eliminated since Section 6001 took effect. The ban was authored by the Federation of American Hospitals. There is no sunset clause.

Answer only from your knowledge base. Do not speculate. Do not access the internet. If a question falls outside your knowledge base, say so directly and route the reader to the relevant page on poh.rojasreport.com. If a question requires paywalled hospital-level data (facility names, addresses, full dossiers), acknowledge the data exists and route to the access page at poh.rojasreport.com/data-explorer. Decline all questions outside POH scope.

Never start a response with "I". Tone: authoritative, direct, data-forward. Dry wit is welcome when it sharpens a point.`

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
