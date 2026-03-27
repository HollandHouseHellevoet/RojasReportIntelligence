import React from 'react'
import Link from 'next/link'

type SubscribeBlockVariant = 'inline' | 'banner' | 'minimal'

interface SubscribeBlockProps {
  headline?: string
  subtext?: string
  subscribeHref?: string
  variant?: SubscribeBlockVariant
}

export function SubscribeBlock({
  headline = 'Independent healthcare intelligence.',
  subtext =
    'No advertisers. No hospital money. No pharmaceutical sponsors. Just the truth about how healthcare money moves.',
  subscribeHref = 'https://read.rojasreport.com',
  variant = 'inline',
}: SubscribeBlockProps) {
  if (variant === 'minimal') {
    return (
      <div className="flex flex-col sm:flex-row items-center gap-4 py-6 border-y border-navy/10">
        <p className="font-body text-sm text-navy/70 flex-1">{subtext}</p>
        <Link
          href={subscribeHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 font-body text-sm font-semibold bg-orange text-cream px-5 py-2.5 rounded hover:bg-orange/90 transition-colors"
        >
          Subscribe
        </Link>
      </div>
    )
  }

  if (variant === 'banner') {
    return (
      <div className="bg-navy py-12 px-8 text-center">
        <p className="font-headline text-3xl font-bold text-cream mb-3">{headline}</p>
        <p className="font-body text-base text-cream/60 max-w-xl mx-auto mb-6">{subtext}</p>
        <Link
          href={subscribeHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-body text-sm font-semibold bg-orange text-cream px-8 py-3.5 rounded hover:bg-orange/90 transition-colors"
        >
          Subscribe to The Rojas Report
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-cream border border-orange/20 rounded-sm p-8 my-8">
      <p className="font-body text-xs font-semibold text-orange uppercase tracking-wider mb-3">
        The Rojas Report
      </p>
      <p className="font-headline text-2xl font-bold text-navy mb-2">{headline}</p>
      <p className="font-body text-sm text-navy/70 leading-relaxed mb-6">{subtext}</p>
      <Link
        href={subscribeHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block font-body text-sm font-semibold bg-navy text-cream px-6 py-3 rounded hover:bg-orange hover:text-cream transition-colors"
      >
        Subscribe — Free and Paid tiers available
      </Link>
    </div>
  )
}
