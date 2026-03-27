'use client'

import React, { useState } from 'react'
import Link from 'next/link'

interface NavLink {
  label: string
  href: string
  isExternal?: boolean
}

interface HeaderProps {
  siteName?: string
  siteTagline?: string
  links?: NavLink[]
  currentPath?: string
  subscribeHref?: string
}

const defaultLinks: NavLink[] = [
  { label: 'POH Intelligence', href: 'https://poh.rojasreport.com', isExternal: true },
  { label: 'FAH Intelligence', href: 'https://fah.rojasreport.com', isExternal: true },
  { label: 'Archive', href: 'https://read.rojasreport.com', isExternal: true },
]

export function Header({
  siteName = 'The Rojas Report',
  siteTagline,
  links = defaultLinks,
  currentPath,
  subscribeHref = 'https://read.rojasreport.com',
}: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-navy border-b border-orange/20 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex flex-col group">
            <span className="font-headline text-xl font-bold text-cream group-hover:text-orange transition-colors leading-tight">
              {siteName}
            </span>
            {siteTagline && (
              <span className="font-body text-xs text-cream/50 leading-tight">{siteTagline}</span>
            )}
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.isExternal ? '_blank' : undefined}
                rel={link.isExternal ? 'noopener noreferrer' : undefined}
                className={`font-body text-sm font-semibold transition-colors ${
                  currentPath === link.href ? 'text-orange' : 'text-cream/80 hover:text-orange'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={subscribeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm font-semibold border border-cream/40 bg-transparent text-cream/80 px-4 py-1.5 rounded hover:border-orange hover:text-orange transition-colors"
            >
              Subscribe
            </Link>
          </nav>

          <button
            className="md:hidden text-cream/80 hover:text-orange transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-cream/10 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target={link.isExternal ? '_blank' : undefined}
                rel={link.isExternal ? 'noopener noreferrer' : undefined}
                className="font-body text-sm font-semibold text-cream/80 hover:text-orange transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={subscribeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm font-semibold border border-cream/40 bg-transparent text-cream/80 px-4 py-2 rounded hover:border-orange hover:text-orange transition-colors text-center"
              onClick={() => setMobileOpen(false)}
            >
              Subscribe
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
