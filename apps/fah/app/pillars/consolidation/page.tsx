import type { Metadata } from 'next'
import Link from 'next/link'
import ThreatTag from '@/components/ThreatTag'
import StatBar from '@/components/StatBar'
import DataTable from '@/components/DataTable'

export const metadata: Metadata = {
  title: 'Hospital Consolidation — FAH Position | Pillar 02',
  description:
    'FAH is pro-consolidation and opposes FTC authority over nonprofit hospital mergers. 80% of US hospital markets are highly concentrated. FAH filed an amicus brief in Ryan LLC v. FTC.',
  alternates: { canonical: 'https://fah.rojasreport.com/pillars/consolidation' },
  openGraph: {
    type: 'article',
    title: 'Hospital Consolidation — FAH Position | Pillar 02',
    description:
      'FAH is pro-consolidation and opposes FTC authority. 80% of US hospital markets are highly concentrated.',
    url: 'https://fah.rojasreport.com/pillars/consolidation',
    siteName: 'FAH.RojasReport.com',
  },
}

export default function ConsolidationPage() {
  return (
    <>
      <SiteNav currentPath="/pillars" />

      <div className="px-6 py-3 text-xs text-gray-500" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto">
          <Link href="/pillars" className="hover:text-fah-accent transition-colors">Pillars</Link>
          <span className="mx-2">/</span>
          <span style={{ color: '#EB6E2C' }}>Hospital Consolidation</span>
        </div>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#EB6E2C' }}>
            Pillar 02
          </p>
          <h1 className="font-headline text-5xl font-bold mb-2" style={{ color: '#f7f4ef' }}>
            Hospital Consolidation
          </h1>
          <p className="text-xl text-gray-400 mb-4">
            FTC Authority &middot; Merger Defense &middot; Antitrust
          </p>
          <ThreatTag level="Moderate" />
        </div>
      </section>

      <section className="px-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto">
          <StatBar
            stats={[
              { number: '80%', label: 'US hospital markets that are highly concentrated' },
              { number: '1', label: 'Amicus brief filed in Ryan LLC v. FTC' },
              { number: '$0', label: 'FAH opposition to any hospital merger (documented)' },
            ]}
          />
        </div>
      </section>

      {/* Section 01 */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>01</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">FAH POSITION</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>FAH Position</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            FAH is consistently pro-consolidation. The organization has never publicly opposed a hospital merger and has actively worked to limit FTC authority over hospital transactions. FAH&rsquo;s stated rationale: consolidation enables scale efficiencies, improves care coordination, and strengthens hospitals&rsquo; ability to negotiate with commercial insurers.
          </p>
        </div>
      </section>

      {/* Section 02 — FTC Opposition */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>02</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">FTC OPPOSITION</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Opposing FTC Authority</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            FAH filed an amicus brief in <em>Ryan LLC v. FTC</em>, the case challenging the FTC&rsquo;s authority to issue rules under the FTC Act. FAH&rsquo;s involvement in a case not directly related to healthcare reflects its strategic interest in weakening the FTC as a regulatory authority — the same FTC that reviews hospital mergers and has blocked several transactions.
          </p>
          <DataTable
            headers={['Action', 'Case / Target', 'FAH Role']}
            rows={[
              ['Amicus brief', 'Ryan LLC v. FTC', 'Challenged FTC rulemaking authority'],
              ['Merger defense letters', 'Multiple Louisiana and other state mergers', 'Advocated for merger approval'],
              ['Congressional testimony', 'Multiple House/Senate hearings on FTC hospital oversight', 'Opposed increased FTC authority'],
            ]}
          />
        </div>
      </section>

      {/* Section 03 — What the Data Shows */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>03</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">WHAT THE DATA SHOWS</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>What the Data Shows</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Independent research consistently finds that hospital consolidation increases prices, reduces quality, and harms competition. KFF Health System Tracker data shows 80% of US hospital markets are highly concentrated by standard antitrust measures (HHI above 2,500).
          </p>
          <div
            className="p-5 rounded-lg text-sm text-gray-300"
            style={{
              background: 'rgba(235,110,44,0.08)',
              border: '1px solid rgba(235,110,44,0.2)',
            }}
          >
            <strong style={{ color: '#EB6E2C' }}>Research consensus:</strong> Hospital mergers in highly concentrated markets increase commercial insurance prices by 20-40% on average, according to multiple peer-reviewed studies. FAH&rsquo;s pro-consolidation advocacy serves its members&rsquo; market power at patients&rsquo; expense.
          </div>
        </div>
      </section>

      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Sources</h2>
          <ul className="source-list">
            <li>FAH amicus brief, <em>Ryan LLC v. FTC</em></li>
            <li>FTC merger review records</li>
            <li>KFF Health System Tracker market concentration data</li>
            <li>FAH lobbying disclosures and comment letters</li>
          </ul>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
