import React from 'react'
import Link from 'next/link'

type SubdomainType = 'poh' | 'fah' | 'newsletter'

interface HandoffCardProps {
  subdomain: SubdomainType
  href: string
  headline?: string
  description?: string
  ctaLabel?: string
  stats?: { value: string; label: string }[]
  featured?: boolean
}

const defaults: Record<
  SubdomainType,
  { headline: string; description: string; ctaLabel: string; accentLabel: string }
> = {
  poh: {
    headline: 'POH Intelligence',
    description:
      'The definitive tracker for physician-owned hospital legislation, state-by-state market data, and the lobbying forces working to eliminate independent competition.',
    ctaLabel: 'Enter POH Intelligence',
    accentLabel: 'Physician-Owned Hospitals',
  },
  fah: {
    headline: 'FAH Intelligence',
    description:
      'Track the Federation of American Hospitals — their lobbying spend, political contributions, policy positions, and the executives steering hospital consolidation.',
    ctaLabel: 'Enter FAH Intelligence',
    accentLabel: 'Federation of American Hospitals',
  },
  newsletter: {
    headline: 'The Rojas Report',
    description:
      'Daily intelligence on the policies, monopolies, and market structures that control American medicine.',
    ctaLabel: 'Subscribe to The Rojas Report',
    accentLabel: 'The Rojas Report',
  },
}

export function HandoffCard({
  subdomain,
  href,
  headline,
  description,
  ctaLabel,
  stats,
  featured = false,
}: HandoffCardProps) {
  const d = defaults[subdomain]

  return (
    <div className="group relative bg-[#0d1a26] border border-cream/10 rounded-sm overflow-hidden transition-all duration-300 flex flex-col">
      <div className={featured ? 'h-[3px] w-full bg-orange' : 'h-1 w-full bg-orange/70'} />

      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-3">
          <p className="font-body text-xs font-semibold text-orange uppercase tracking-widest">
            {d.accentLabel}
          </p>
          {featured && (
            <p className="font-body text-xs font-semibold text-orange/60 uppercase tracking-widest">
              Flagship
            </p>
          )}
        </div>

        <h3 className="font-headline text-3xl font-bold text-cream mb-4 leading-tight">
          {headline ?? d.headline}
        </h3>
        <p className="font-body text-base text-cream/70 leading-relaxed mb-6">
          {description ?? d.description}
        </p>

        {stats && stats.length > 0 && (
          <div className="grid grid-cols-2 gap-4 mb-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-cream/5 p-4 rounded-sm">
                <p className="font-headline text-2xl font-bold text-orange">{stat.value}</p>
                <p className="font-body text-xs text-cream/60 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        )}

        <Link
          href={href}
          className="mt-auto inline-flex items-center gap-2 font-body text-sm font-semibold bg-orange text-cream px-6 py-3 rounded hover:bg-orange/90 transition-colors self-start"
        >
          {ctaLabel ?? d.ctaLabel}
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  )
}
