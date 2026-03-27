'use client'

import React, { useState } from 'react'

type CitationFormat = 'apa' | 'inline'

interface CitationBlockProps {
  title: string
  source: string
  date: string
  url?: string
  author?: string
  format?: CitationFormat
}

export function CitationBlock({
  title,
  source,
  date,
  url,
  author,
  format = 'inline',
}: CitationBlockProps) {
  const [copied, setCopied] = useState(false)

  const formattedCitation =
    format === 'apa'
      ? `${author ? `${author}. ` : ''}(${date}). ${title}. ${source}.${url ? ` ${url}` : ''}`
      : `"${title}" — ${source}${author ? `, ${author}` : ''}, ${date}${url ? ` (${url})` : ''}`

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(formattedCitation)
    } catch {
      const el = document.createElement('textarea')
      el.value = formattedCitation
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-navy/5 border border-navy/10 rounded-sm p-4 my-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <p className="font-body text-xs font-semibold text-orange uppercase tracking-wider mb-2">
            Citation
          </p>
          <p className="font-body text-sm text-navy/80 leading-relaxed break-words">
            {formattedCitation}
          </p>
        </div>
        <button
          onClick={handleCopy}
          className={`flex-shrink-0 flex items-center gap-1.5 font-body text-xs font-semibold px-3 py-1.5 rounded border transition-all ${
            copied
              ? 'bg-green-600/10 border-green-600/20 text-green-700'
              : 'bg-cream border-navy/20 text-navy/60 hover:border-navy/40 hover:text-navy'
          }`}
          aria-label="Copy citation"
        >
          {copied ? (
            <>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Copied
            </>
          ) : (
            <>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>
    </div>
  )
}
