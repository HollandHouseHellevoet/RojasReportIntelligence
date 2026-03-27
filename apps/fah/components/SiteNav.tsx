'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/board', label: 'Board' },
  { href: '/pillars', label: 'Pillars' },
  { href: '/lobbying', label: 'Lobbying' },
  { href: '/pac', label: 'PAC' },
]

interface SiteNavProps {
  currentPath?: string
}

export default function SiteNav({ currentPath }: SiteNavProps) {
  const [open, setOpen] = useState(false)

  return (
    <nav
      className="sticky top-0 z-50"
      aria-label="Primary"
      style={{
        background: 'rgba(10, 21, 32, 0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div
        className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto"
      >
        <Link href="/" className="flex flex-col leading-none">
          <span
            className="font-headline font-semibold text-lg"
            style={{ color: '#f7f4ef' }}
          >
            The Rojas Report
          </span>
          <span className="text-xs uppercase tracking-widest" style={{ color: '#EB6E2C' }}>
            FAH Intelligence
          </span>
        </Link>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <span className="block w-5 h-0.5 bg-current" />
          <span className="block w-5 h-0.5 bg-current" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>

        <ul
          id="nav-menu"
          role="list"
          className={`flex gap-6 text-sm font-medium md:flex ${
            open ? 'flex' : 'hidden md:flex'
          } flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto p-6 md:p-0`}
          style={{
            background: open ? 'rgba(10, 21, 32, 0.98)' : undefined,
          }}
        >
          {navLinks.map(({ href, label }) => {
            const isCurrent =
              currentPath === href ||
              (href !== '/' && currentPath?.startsWith(href))
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isCurrent ? 'page' : undefined}
                  className="transition-colors"
                  style={{ color: isCurrent ? '#EB6E2C' : '#8899aa' }}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
