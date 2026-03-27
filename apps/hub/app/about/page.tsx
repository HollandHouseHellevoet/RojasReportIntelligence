import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@rojasreport/ui'

export const metadata: Metadata = {
  title: 'About',
  description:
    'American healthcare is not affordable, not accessible, and not accidental. The people who built these structures did so deliberately. This is the record.',
  alternates: {
    canonical: 'https://rojasreport.com/about',
  },
  openGraph: {
    title: 'About | The Rojas Report',
    description:
      'American healthcare is not affordable, not accessible, and not accidental. The people who built these structures did so deliberately. This is the record.',
    url: 'https://rojasreport.com/about',
  },
  twitter: {
    title: 'About | The Rojas Report',
    description:
      'American healthcare is not affordable, not accessible, and not accidental. The people who built these structures did so deliberately. This is the record.',
  },
}

export default function AboutPage() {
  return (
    <main className="flex-1 py-24 md:py-32">
      <Container size="sm">
        <p className="font-body text-xs font-semibold text-orange uppercase tracking-widest mb-6">
          About
        </p>
        <h1 className="font-headline text-5xl md:text-6xl font-bold text-cream mb-10 leading-tight">
          Not accidental.
        </h1>
        <div className="space-y-6">
          <p className="font-body text-lg text-cream/70 leading-relaxed">
            American healthcare is not affordable, not accessible, and not accidental.
          </p>
          <p className="font-body text-lg text-cream/70 leading-relaxed">
            The people who built these structures did so deliberately. The nonprofit hospitals that
            extract billions in tax exemptions while delivering pennies in charity care. The lobbying
            organizations that write the laws that eliminate their competition. The politicians who
            take the money and vote accordingly.
          </p>
          <p className="font-body text-lg text-cream/70 leading-relaxed">
            They file with the FEC. They submit LDA disclosures. They publish 990s. They just
            assumed no one would read them.
          </p>
          <p className="font-body text-lg text-cream/70 leading-relaxed">
            This is the record.
          </p>
        </div>
        <div className="mt-12">
          <Link
            href="/"
            className="font-body text-sm font-semibold text-orange hover:text-orange/80 transition-colors"
          >
            ← Back to The Rojas Report
          </Link>
        </div>
      </Container>
    </main>
  )
}
