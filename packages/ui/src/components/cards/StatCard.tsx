import React from 'react'

type StatCardVariant = 'dark' | 'light'

interface StatCardProps {
  value: string
  label: string
  source?: string
  context?: string
  variant?: StatCardVariant
}

export function StatCard({
  value,
  label,
  source,
  context,
  variant = 'dark',
}: StatCardProps) {
  const isDark = variant === 'dark'

  return (
    <div
      className={`relative p-8 rounded-sm ${
        isDark ? 'bg-navy text-cream' : 'bg-cream text-navy border border-navy/10'
      }`}
    >
      <div className="absolute top-0 left-0 w-1 h-full bg-orange rounded-l-sm" />

      <div className="pl-4">
        <p className="font-headline text-6xl font-bold text-orange leading-none mb-3">{value}</p>
        <p
          className={`font-body text-base font-semibold leading-snug ${
            isDark ? 'text-cream' : 'text-navy'
          }`}
        >
          {label}
        </p>
        {context && (
          <p
            className={`font-body text-sm mt-2 leading-relaxed ${
              isDark ? 'text-cream/60' : 'text-navy/60'
            }`}
          >
            {context}
          </p>
        )}
        {source && (
          <p
            className={`font-body text-xs mt-3 ${isDark ? 'text-cream/30' : 'text-navy/30'}`}
          >
            Source: {source}
          </p>
        )}
      </div>
    </div>
  )
}
