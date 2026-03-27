import React from 'react'
import Link from 'next/link'
import type { Article } from '../../types'

type ArticleCardVariant = 'default' | 'featured' | 'compact'

interface ArticleCardProps {
  article: Article
  variant?: ArticleCardVariant
}

export function ArticleCard({ article, variant = 'default' }: ArticleCardProps) {
  const { title, deck, date, pillar, href, isPaywalled } = article

  if (variant === 'compact') {
    return (
      <Link
        href={href}
        className="group flex gap-4 items-start py-4 border-b border-navy/10 last:border-0 hover:opacity-80 transition-opacity"
      >
        <div className="flex-1 min-w-0">
          <p className="font-body text-xs font-semibold text-orange uppercase tracking-wider mb-1">
            {pillar}
          </p>
          <h3 className="font-headline text-lg font-bold text-navy group-hover:text-orange transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="font-body text-xs text-navy/50 mt-1">{date}</p>
        </div>
        {isPaywalled && (
          <span className="flex-shrink-0 text-xs font-body font-semibold bg-navy text-cream px-2 py-0.5 rounded">
            Members
          </span>
        )}
      </Link>
    )
  }

  if (variant === 'featured') {
    return (
      <Link
        href={href}
        className="group block bg-navy p-8 rounded-sm hover:bg-navy/95 transition-colors"
      >
        <p className="font-body text-xs font-semibold text-orange uppercase tracking-wider mb-3">
          {pillar}
        </p>
        <h2 className="font-headline text-4xl font-bold text-cream group-hover:text-orange/90 transition-colors leading-tight mb-4">
          {title}
        </h2>
        {deck && (
          <p className="font-body text-base text-cream/70 leading-relaxed mb-6">{deck}</p>
        )}
        <div className="flex items-center justify-between">
          <p className="font-body text-sm text-cream/40">{date}</p>
          {isPaywalled && (
            <span className="text-xs font-body font-semibold bg-orange text-cream px-3 py-1 rounded">
              Members Only
            </span>
          )}
        </div>
      </Link>
    )
  }

  return (
    <Link
      href={href}
      className="group block border border-navy/10 bg-cream p-6 rounded-sm hover:border-orange/40 transition-colors"
    >
      <p className="font-body text-xs font-semibold text-orange uppercase tracking-wider mb-2">
        {pillar}
      </p>
      <h3 className="font-headline text-2xl font-bold text-navy group-hover:text-orange transition-colors leading-tight mb-2">
        {title}
      </h3>
      {deck && (
        <p className="font-body text-sm text-navy/70 leading-relaxed mb-4 line-clamp-3">{deck}</p>
      )}
      <div className="flex items-center justify-between">
        <p className="font-body text-xs text-navy/40">{date}</p>
        {isPaywalled && (
          <span className="text-xs font-body font-semibold bg-navy text-cream px-2 py-0.5 rounded">
            Members
          </span>
        )}
      </div>
    </Link>
  )
}
