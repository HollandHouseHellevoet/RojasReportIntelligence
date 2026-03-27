import React from 'react'
import Link from 'next/link'

interface PaywallGateProps {
  subscribeHref?: string
  articleTitle?: string
}

export function PaywallGate({
  subscribeHref = 'https://read.rojasreport.com',
  articleTitle,
}: PaywallGateProps) {
  return (
    <div className="relative">
      <div className="absolute -top-32 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-cream pointer-events-none" />

      <div className="bg-cream border-t-4 border-orange pt-8 pb-10 px-8 text-center">
        <p className="font-body text-xs font-semibold text-orange uppercase tracking-widest mb-4">
          Members Only
        </p>
        <p className="font-headline text-3xl font-bold text-navy mb-3 leading-tight">
          {articleTitle
            ? `The rest of "${articleTitle}" is for subscribers.`
            : 'The rest of this analysis is for subscribers.'}
        </p>
        <p className="font-body text-base text-navy/60 max-w-md mx-auto mb-6">
          No advertisers. No hospital money. No pharmaceutical sponsors. Independent healthcare
          intelligence, delivered daily.
        </p>
        <Link
          href={subscribeHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block font-body text-base font-semibold bg-orange text-cream px-8 py-3.5 rounded hover:bg-orange/90 transition-colors mb-3"
        >
          Subscribe to unlock
        </Link>
        <p className="font-body text-xs text-navy/40">
          Already a subscriber?{' '}
          <Link
            href={subscribeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-navy/70 transition-colors"
          >
            Sign in here.
          </Link>
        </p>
      </div>
    </div>
  )
}
