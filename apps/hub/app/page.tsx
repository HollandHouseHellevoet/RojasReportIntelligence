import type { Metadata } from 'next'
import Link from 'next/link'
import { Container, HandoffCard } from '@rojasreport/ui'

export const metadata: Metadata = {
  title: 'The Rojas Report — Independent Healthcare Intelligence',
  description:
    "The interesting thing about the American healthcare cartel is that it doesn't hide. It files with the FEC. It submits LDA disclosures. It publishes 990s. We read them.",
  alternates: {
    canonical: 'https://rojasreport.com',
  },
  openGraph: {
    title: 'The Rojas Report — Independent Healthcare Intelligence',
    description:
      "The interesting thing about the American healthcare cartel is that it doesn't hide. It files with the FEC. It submits LDA disclosures. It publishes 990s. We read them.",
    url: 'https://rojasreport.com',
  },
  twitter: {
    title: 'The Rojas Report — Independent Healthcare Intelligence',
    description:
      "The interesting thing about the American healthcare cartel is that it doesn't hide. It files with the FEC. It submits LDA disclosures. It publishes 990s. We read them.",
  },
}

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://rojasreport.com/#webpage',
  url: 'https://rojasreport.com',
  name: 'The Rojas Report — Independent Healthcare Intelligence',
  isPartOf: { '@id': 'https://rojasreport.com/#website' },
  about: { '@id': 'https://rojasreport.com/#organization' },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-12 md:py-24 lg:py-32 border-b border-orange/20">
          <div
            className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-[#0d1a26] pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_0%_0%,rgba(235,110,44,0.06)_0%,transparent_100%)] pointer-events-none"
            aria-hidden="true"
          />
          <Container size="md" className="relative z-10">
            <p className="font-body text-xs font-semibold text-orange uppercase tracking-widest mb-6 md:mb-10">
              The Rojas Report
            </p>
            <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl text-cream leading-snug mb-6 md:mb-10">
              The interesting thing about the American healthcare cartel is that it doesn&rsquo;t
              hide. It files with the FEC. It submits LDA disclosures. It publishes 990s. It just
              assumed no one would read them.
            </h1>
            <p className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold text-orange leading-tight">
              We read them.
            </p>
          </Container>
        </section>

        {/* Intelligence Network */}
        <section className="py-10 md:py-20">
          <Container size="xl">
            <p className="font-body text-xs font-semibold text-orange/60 uppercase tracking-widest mb-6 md:mb-10">
              Intelligence Network
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <HandoffCard
                subdomain="poh"
                href="/physician-owned-hospitals"
                description="In 2010, one sentence in the Affordable Care Act banned physician-owned hospitals. This is the complete record of what was built, what was lost, and what remains."
                ctaLabel="Enter POH Intelligence"
                featured
              />
              <HandoffCard
                subdomain="fah"
                href="/federation-of-american-hospitals"
                description="The principal lobbying organization for America's investor-owned hospital industry. Founded 1966. 501(c)(6) Business League."
                ctaLabel="Enter FAH Intelligence"
              />
              <HandoffCard
                subdomain="newsletter"
                href="/newsletter"
                description="Daily intelligence on the policies, monopolies, and market structures that control American medicine."
                ctaLabel="Subscribe to The Rojas Report"
              />
            </div>
          </Container>
        </section>


      </main>
    </>
  )
}
