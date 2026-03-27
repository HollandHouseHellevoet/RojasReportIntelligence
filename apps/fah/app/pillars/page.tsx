import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import ThreatTag from '@/components/ThreatTag'
import { pillars } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Eight Pillars — FAH Legislative Positions',
  description:
    "The Federation of American Hospitals lobbying positions across eight policy pillars. From the physician-owned hospital ban to site-neutral payments.",
  alternates: { canonical: 'https://fah.rojasreport.com/pillars' },
  openGraph: {
    type: 'website',
    title: 'Eight Pillars — FAH Legislative Positions',
    description:
      "FAH's documented positions on the eight policy areas that shape American healthcare.",
    url: 'https://fah.rojasreport.com/pillars',
    siteName: 'FAH.RojasReport.com',
  },
}

export default function PillarsIndexPage() {
  return (
    <>
      <SiteNav currentPath="/pillars" />

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#EB6E2C' }}>
            Eight Pillars
          </p>
          <h1 className="font-headline text-5xl font-bold mb-4" style={{ color: '#f7f4ef' }}>
            The Eight Pillars
          </h1>
          <p className="text-xl text-gray-400">
            FAH&rsquo;s documented positions on the eight policy areas that shape American healthcare.
          </p>
        </div>
      </section>

      <section className="py-8 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <Link
                key={p.slug}
                href={`/pillars/${p.slug}`}
                className="block p-6 rounded-lg transition-all hover:-translate-y-0.5"
                style={{
                  background: '#1a2a3a',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <ThreatTag level={p.threat} />
                <h2 className="font-headline text-xl font-semibold mt-4 mb-2" style={{ color: '#f7f4ef' }}>
                  {p.number} &mdash; {p.title}
                </h2>
                <p className="text-sm text-gray-400">{p.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
