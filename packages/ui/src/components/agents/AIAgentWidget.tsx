'use client'

import React, { useState } from 'react'

interface AIAgentWidgetProps {
  agentName?: string
  placeholder?: string
  onQuery?: (query: string) => void
}

export function AIAgentWidget({
  agentName = 'Rojas AI',
  placeholder = 'Ask about physician-owned hospitals, facility fees, CON laws...',
}: AIAgentWidgetProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-navy border-2 border-orange rounded-full shadow-lg hover:bg-navy/90 transition-all flex items-center justify-center group"
        aria-label={open ? 'Close AI agent' : 'Open AI agent'}
      >
        {open ? (
          <svg className="w-6 h-6 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 text-orange"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
            />
          </svg>
        )}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-navy border border-orange/30 rounded-sm shadow-2xl overflow-hidden">
          <div className="bg-navy border-b border-cream/10 px-4 py-3 flex items-center justify-between">
            <div>
              <p className="font-body text-sm font-semibold text-cream">{agentName}</p>
              <p className="font-body text-xs text-cream/40">Healthcare intelligence</p>
            </div>
            <div className="w-2 h-2 rounded-full bg-orange animate-pulse" />
          </div>

          <div className="p-4 h-64 flex flex-col items-center justify-center text-center">
            <div className="w-10 h-10 rounded-full bg-orange/10 border border-orange/20 flex items-center justify-center mb-3">
              <svg
                className="w-5 h-5 text-orange"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                />
              </svg>
            </div>
            <p className="font-body text-sm text-cream/70 leading-relaxed">{placeholder}</p>
            <p className="font-body text-xs text-cream/30 mt-3">AI agent wiring — Phase 4</p>
          </div>

          <div className="border-t border-cream/10 p-3">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Ask a question..."
                disabled
                className="flex-1 bg-cream/5 border border-cream/10 rounded px-3 py-2 font-body text-sm text-cream/50 placeholder:text-cream/30 cursor-not-allowed"
              />
              <button
                disabled
                className="bg-orange/50 text-cream px-3 py-2 rounded cursor-not-allowed"
                aria-label="Send"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
