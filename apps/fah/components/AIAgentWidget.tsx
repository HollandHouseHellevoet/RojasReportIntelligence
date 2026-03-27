'use client'

import React, { useState, useRef, useEffect } from 'react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const AGENT_LABEL = 'FAH Intelligence Agent'
const PLACEHOLDER = 'Ask about FAH lobbying, board members, PAC activity, or policy positions...'

export function AIAgentWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100)
  }, [open])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const send = async () => {
    if (!input.trim() || loading) return
    const userMsg: Message = { role: 'user', content: input.trim() }
    const updated = [...messages, userMsg]
    setMessages(updated)
    setInput('')
    setLoading(true)
    try {
      const res = await fetch('/.netlify/functions/agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg.content, history: messages }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json()
      setMessages([...updated, { role: 'assistant', content: data.reply }])
    } catch {
      setMessages([...updated, { role: 'assistant', content: 'Something went wrong. Please try again.' }])
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() }
  }

  const panelStyle: React.CSSProperties = {
    position: 'fixed', zIndex: 50, display: 'flex', flexDirection: 'column',
    background: '#0d1a26', border: '1px solid rgba(247,244,239,0.1)', inset: 0,
  }

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          aria-label="Open FAH intelligence agent"
          style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 50, width: 48, height: 48, background: '#EB6E2C', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(0,0,0,0.4)' }}
        >
          <svg width="20" height="20" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}

      {open && (
        <>
          <style>{`
            @media (min-width: 768px) {
              .rr-agent-panel {
                inset: auto !important;
                bottom: 24px !important;
                right: 24px !important;
                width: 400px !important;
                height: 600px !important;
                max-height: 80vh !important;
              }
            }
          `}</style>
          <div className="rr-agent-panel" style={panelStyle}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px', borderBottom: '1px solid rgba(247,244,239,0.1)', flexShrink: 0 }}>
              <span style={{ fontFamily: 'var(--font-body, sans-serif)', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#EB6E2C' }}>
                {AGENT_LABEL}
              </span>
              <button onClick={() => setOpen(false)} aria-label="Close" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(247,244,239,0.4)', fontSize: '1rem', lineHeight: 1 }}>✕</button>
            </div>

            <div style={{ flex: 1, overflowY: 'auto', padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {messages.length === 0 && (
                <p style={{ fontFamily: 'var(--font-body, sans-serif)', fontSize: '0.875rem', color: 'rgba(247,244,239,0.35)', margin: 0 }}>{PLACEHOLDER}</p>
              )}
              {messages.map((msg, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
                  <div style={{ fontFamily: 'var(--font-body, sans-serif)', fontSize: '0.875rem', lineHeight: 1.5, maxWidth: '85%', padding: '8px 12px', background: msg.role === 'user' ? 'rgba(235,110,44,0.15)' : 'rgba(247,244,239,0.05)', color: msg.role === 'user' ? '#f7f4ef' : 'rgba(247,244,239,0.9)' }}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <div style={{ fontFamily: 'var(--font-body, sans-serif)', fontSize: '0.875rem', padding: '8px 12px', background: 'rgba(247,244,239,0.05)', color: 'rgba(247,244,239,0.35)' }}>Searching knowledge base...</div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            <div style={{ padding: '12px', borderTop: '1px solid rgba(247,244,239,0.1)', display: 'flex', gap: 8, flexShrink: 0 }}>
              <textarea
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask a question..."
                rows={2}
                style={{ flex: 1, fontFamily: 'var(--font-body, sans-serif)', fontSize: '0.875rem', padding: '8px', resize: 'none', background: 'rgba(247,244,239,0.05)', color: '#f7f4ef', border: '1px solid rgba(247,244,239,0.1)', outline: 'none' }}
              />
              <button
                onClick={send}
                disabled={loading || !input.trim()}
                style={{ fontFamily: 'var(--font-body, sans-serif)', fontSize: '0.75rem', fontWeight: 600, padding: '8px 12px', alignSelf: 'flex-end', background: loading || !input.trim() ? 'rgba(235,110,44,0.4)' : '#EB6E2C', color: '#fff', border: 'none', cursor: loading || !input.trim() ? 'not-allowed' : 'pointer' }}
              >
                Send
              </button>
            </div>
          </div>
        </>
      )}
    </>
  )
}
