'use client'

import React from 'react'

interface PullQuoteProps {
  quote: string
  attribution?: string
  publication?: string
  shareText?: string
}

export function PullQuote({ quote, attribution, publication, shareText }: PullQuoteProps) {
  const textToShare =
    shareText ??
    `"${quote}"${attribution ? ` — ${attribution}` : ''} via @DutchRojas / The Rojas Report`

  const shareToX = () => {
    const encoded = encodeURIComponent(textToShare)
    window.open(`https://x.com/intent/tweet?text=${encoded}`, '_blank', 'noopener,noreferrer')
  }

  const shareToLinkedIn = () => {
    const url = encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  return (
    <div className="relative my-8 border-l-4 border-orange pl-8 py-2">
      <blockquote className="font-headline text-2xl md:text-3xl font-semibold text-navy leading-snug italic mb-4">
        &ldquo;{quote}&rdquo;
      </blockquote>
      {(attribution || publication) && (
        <p className="font-body text-sm text-navy/60">
          {attribution && <span className="font-semibold">{attribution}</span>}
          {attribution && publication && ', '}
          {publication && <span>{publication}</span>}
        </p>
      )}
      <div className="flex items-center gap-3 mt-4">
        <button
          onClick={shareToX}
          className="flex items-center gap-1.5 font-body text-xs font-semibold text-navy/60 hover:text-navy transition-colors"
          aria-label="Share to X"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          Share
        </button>
        <span className="text-navy/20">|</span>
        <button
          onClick={shareToLinkedIn}
          className="flex items-center gap-1.5 font-body text-xs font-semibold text-navy/60 hover:text-navy transition-colors"
          aria-label="Share to LinkedIn"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          Share
        </button>
      </div>
    </div>
  )
}
