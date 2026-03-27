import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@rojasreport/ui'

export const metadata: Metadata = {
  title: 'The Rojas Report Newsletter',
  description:
    'Daily intelligence on the policies, monopolies, and market structures that control American medicine.',
  alternates: {
    canonical: 'https://rojasreport.com/newsletter',
  },
  openGraph: {
    title: 'The Rojas Report Newsletter',
    description:
      'Daily intelligence on the policies, monopolies, and market structures that control American medicine.',
    url: 'https://rojasreport.com/newsletter',
  },
  twitter: {
    title: 'The Rojas Report Newsletter',
    description:
      'Daily intelligence on the policies, monopolies, and market structures that control American medicine.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  url: 'https://rojasreport.com/newsletter',
  name: 'The Rojas Report Newsletter',
  description:
    'Daily intelligence on the policies, monopolies, and market structures that control American medicine.',
  isPartOf: { '@id': 'https://rojasreport.com/#website' },
}

export default function NewsletterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex-1 py-24 md:py-32">
        <Container size="sm">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-body text-sm text-cream/40 hover:text-orange transition-colors mb-12"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            The Rojas Report
          </Link>
          <p className="font-body text-xs font-semibold text-orange uppercase tracking-widest mb-6">
            The Rojas Report
          </p>
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl text-cream leading-snug mb-12">
            Daily intelligence on the policies, monopolies, and market structures that control
            American medicine.
          </h1>
          <Link
            href="https://read.rojasreport.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 font-body text-base font-semibold bg-orange text-cream px-8 py-4 rounded hover:bg-orange/90 transition-colors"
          >
            Subscribe to The Rojas Report
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </Container>
      </main>
    </>
  )
}
