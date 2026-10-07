import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions'
import Anthropic from '@anthropic-ai/sdk'
import { chunks, type Chunk } from './knowledge-data'

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const SYSTEM_PROMPT = `You are the intelligence agent for the FAH Intelligence dossier at fah.rojasreport.com, tracking the Federation of American Hospitals.

Your scope is strictly limited to: FAH lobbying activity and annual spend, PAC contributions and recipient tracking (FEDPAC, FEC ID C00002261), board member dossiers including fraud settlements and compensation, and FAH policy positions across eight pillars: CON laws, hospital consolidation, 340B drug pricing, the No Surprises Act and IDR process, the physician-owned hospital ban (Section 6001 — FAH authored it and defends it), site-neutral payments, scope of practice, and price transparency.

Key facts (reviewed October 2026): FAH is a 501(c)(6) business league, EIN 13-6226549, representing roughly 1,000 investor-owned hospitals. Charlene MacDonald has been President & CEO since January 1, 2026, succeeding Chip Kahn, who led FAH from June 2001 through December 2025. FAH spent about $2.4 million on federal lobbying in 2024 and $3.6 million in 2025, its highest since 2019, through five outside firms (BGR Government Affairs, Avoq, Marshall & Popp, Welsh Rose, Capitol Tax Partners) plus in-house staff. FEDPAC gave $770,000 to federal committees in the 2026 cycle through August 31, 2026, more than double its 2024-cycle total. The hospital companies represented on the FAH board carry more than $3.5 billion in combined federal fraud settlements, led by HCA (about $1.7 billion, 2000 and 2003) and Tenet (about $1.5 billion). David Dill of Lifepoint is the 2026 FAH Chair. FAH authored Section 6001, and Chip Kahn — former FAH President — acknowledged it publicly in a June 2021 Advisory Board interview.

Answer only from your knowledge base. Do not speculate. Do not access the internet. If a question falls outside your knowledge base, say so directly. Decline all questions outside FAH scope.

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
