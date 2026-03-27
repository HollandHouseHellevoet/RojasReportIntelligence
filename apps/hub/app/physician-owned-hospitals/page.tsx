import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@rojasreport/ui'

export const metadata: Metadata = {
  title: 'Physician-Owned Hospitals',
  description:
    'In 2010, one sentence in the Affordable Care Act banned physician-owned hospitals. This is the complete record of what was built, what was lost, and what remains.',
  alternates: {
    canonical: 'https://rojasreport.com/physician-owned-hospitals',
  },
  openGraph: {
    title: 'Physician-Owned Hospitals | The Rojas Report',
    description:
      'In 2010, one sentence in the Affordable Care Act banned physician-owned hospitals. This is the complete record of what was built, what was lost, and what remains.',
    url: 'https://rojasreport.com/physician-owned-hospitals',
  },
  twitter: {
    title: 'Physician-Owned Hospitals | The Rojas Report',
    description:
      'In 2010, one sentence in the Affordable Care Act banned physician-owned hospitals. This is the complete record of what was built, what was lost, and what remains.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  url: 'https://rojasreport.com/physician-owned-hospitals',
  name: 'Physician-Owned Hospitals | The Rojas Report',
  description:
    'In 2010, one sentence in the Affordable Care Act banned physician-owned hospitals. This is the complete record of what was built, what was lost, and what remains.',
  isPartOf: { '@id': 'https://rojasreport.com/#website' },
}

export default function POHPage() {
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
            Physician-Owned Hospitals
          </p>
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl text-cream leading-snug mb-12">
            In 2010, one sentence in the Affordable Care Act banned physician-owned hospitals. This
            is the complete record of what was built, what was lost, and what remains.
          </h1>
          <Link
            href="https://poh.rojasreport.com"
            className="inline-flex items-center gap-3 font-body text-base font-semibold bg-orange text-cream px-8 py-4 rounded hover:bg-orange/90 transition-colors"
          >
            Enter POH Intelligence
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </Container>
      </main>
    </>
  )
}
