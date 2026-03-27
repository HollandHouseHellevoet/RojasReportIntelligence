import React from 'react'
import Link from 'next/link'

interface FooterLink {
  label: string
  href: string
  isExternal?: boolean
}

interface FooterColumn {
  heading: string
  links: FooterLink[]
}

interface FooterProps {
  columns?: FooterColumn[]
  tagline?: string
  copyrightEntity?: string
}

const defaultColumns: FooterColumn[] = [
  {
    heading: 'Network',
    links: [
      { label: 'POH Intelligence', href: 'https://poh.rojasreport.com', isExternal: true },
      { label: 'FAH Intelligence', href: 'https://fah.rojasreport.com', isExternal: true },
      { label: 'The Rojas Report', href: 'https://read.rojasreport.com', isExternal: true },
    ],
  },
  {
    heading: 'Ecosystem',
    links: [
      { label: 'MedMerge', href: 'https://medmerge.co', isExternal: true },
      { label: 'PhyCap Fund', href: 'https://phycapfund.com', isExternal: true },
      { label: 'Physician Led', href: 'https://physiciansled.com', isExternal: true },
    ],
  },
  {
    heading: 'Access',
    links: [
      { label: 'X', href: 'https://x.com/dutchrojas', isExternal: true },
      { label: 'YouTube', href: 'https://youtube.com/@DutchRojas', isExternal: true },
      { label: 'Substack', href: 'https://dutchrojas.substack.com', isExternal: true },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/dutchrojas', isExternal: true },
    ],
  },
]

export function Footer({
  columns = defaultColumns,
  tagline = 'Built for physicians, lawmakers, and every American who pays the bill.',
  copyrightEntity = 'The Rojas Report',
}: FooterProps) {
  return (
    <footer className="bg-navy border-t border-orange/20 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {columns.map((col) => (
            <div key={col.heading}>
              <p className="font-body text-xs font-semibold text-orange uppercase tracking-widest mb-4">
                {col.heading}
              </p>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={link.isExternal ? '_blank' : undefined}
                      rel={link.isExternal ? 'noopener noreferrer' : undefined}
                      className="font-body text-sm text-cream/60 hover:text-cream/90 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-cream/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-body text-xs text-cream/40 max-w-md">{tagline}</p>
          <p className="font-body text-xs text-cream/30">
            {`© ${new Date().getFullYear()} ${copyrightEntity}. Independent healthcare intelligence.`}
          </p>
        </div>
      </div>
    </footer>
  )
}
