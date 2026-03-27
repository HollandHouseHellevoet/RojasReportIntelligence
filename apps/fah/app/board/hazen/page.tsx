import type { Metadata } from 'next'
import Link from 'next/link'
import StatBar from '@/components/StatBar'
import DataTable from '@/components/DataTable'

export const metadata: Metadata = {
  title: 'Samuel Hazen — HCA Healthcare | FAH Director',
  description:
    "Samuel Hazen leads HCA Healthcare, the largest for-profit hospital system in the world. $1.7B in federal fraud settlements — the largest in US history. $23.8M compensation. 391:1 pay ratio.",
  alternates: { canonical: 'https://fah.rojasreport.com/board/hazen' },
  openGraph: {
    type: 'article',
    title: 'Samuel Hazen — HCA Healthcare | FAH Director',
    description:
      '$1.7B federal fraud settlement — the largest in US history. $23.8M 2024 compensation. 391:1 pay ratio.',
    url: 'https://fah.rojasreport.com/board/hazen',
    siteName: 'FAH.RojasReport.com',
  },
}

export default function HazenPage() {
  return (
    <>
      <SiteNav currentPath="/board" />

      <div className="px-6 py-3 text-xs text-gray-500" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto">
          <Link href="/board" className="hover:text-fah-accent transition-colors">Board</Link>
          <span className="mx-2">/</span>
          <span style={{ color: '#EB6E2C' }}>Samuel Hazen</span>
        </div>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#EB6E2C' }}>
            Board Member Dossier
          </p>
          <h1 className="font-headline text-5xl font-bold mb-2" style={{ color: '#f7f4ef' }}>
            Samuel Hazen
          </h1>
          <p className="text-xl text-gray-400 mb-1">CEO, HCA Healthcare</p>
          <p className="text-gray-500">FAH Director</p>
        </div>
      </section>

      <section className="px-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto">
          <StatBar
            stats={[
              { number: '$1.7B', label: 'Total federal fraud settlement (largest in US history)' },
              { number: '$23.8M', label: 'Hazen total 2024 compensation' },
              { number: '391:1', label: 'CEO-to-worker pay ratio' },
              { number: '$75.6B', label: 'HCA annual revenue' },
            ]}
          />
        </div>
      </section>

      {/* Section 01 */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>01</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">BACKGROUND</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Background</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Samuel Hazen has served as CEO of HCA Healthcare since 2019. HCA is the largest for-profit hospital operator in the world, with 186 hospitals and approximately 2,000 sites of care across 20 US states and the UK. In 2024, HCA generated $75.6 billion in revenue.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Hazen joined HCA in 1991 and spent nearly three decades rising through operational and financial leadership roles before becoming CEO. He has been with the company through its private equity leveraged buyout, its re-IPO, and its growth into the dominant for-profit hospital system in the country.
          </p>
        </div>
      </section>

      {/* Section 02 — Fraud History */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>02</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">FRAUD SETTLEMENTS</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>The Largest Healthcare Fraud Settlement in US History</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            HCA paid $1.7 billion in federal fraud settlements across two tranches in 2000 and 2003. At the time, this was the largest healthcare fraud settlement in US history. The settlements resolved allegations of systematic Medicare and Medicaid billing fraud across HCA&rsquo;s hospital network, including improper cost reports, kickbacks, and fraudulent billing for laboratory tests.
          </p>
          <DataTable
            headers={['Year', 'Amount', 'Allegation']}
            rows={[
              ['2000', '$840,000,000', 'Medicare cost report fraud, kickbacks to physicians, fraudulent lab billing'],
              ['2003', '$881,000,000', 'Additional billing fraud, improper cost reports'],
              ['Total', '$1,700,000,000 (approx.)', 'Largest healthcare fraud settlement in US history at the time'],
            ]}
          />
        </div>
      </section>

      {/* Section 03 — PE History */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>03</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">PRIVATE EQUITY HISTORY</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>The $33 Billion Leveraged Buyout</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            In 2006, KKR, Bain Capital, and Apollo Global Management took HCA private in a $33 billion leveraged buyout — the largest private equity transaction in history at the time. The PE consortium extracted $4.25 billion in dividend recapitalization payments before HCA re-listed on the NYSE in 2011.
          </p>
          <DataTable
            headers={['Event', 'Year', 'Detail']}
            rows={[
              ['LBO take-private', '2006', '$33 billion, KKR / Bain Capital / Apollo Global Management'],
              ['Dividend recapitalization', '2009–2011', '$4.25 billion extracted to PE sponsors before re-IPO'],
              ['Re-IPO on NYSE', '2011', 'HCA relisted; PE sponsors exited over subsequent years'],
            ]}
          />
        </div>
      </section>

      {/* Section 04 — Compensation */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>04</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">COMPENSATION</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Compensation 2020&ndash;2024</h2>
          <DataTable
            headers={['Year', 'Total Compensation']}
            rows={[
              ['2020', 'Disclosed in proxy'],
              ['2021', 'Disclosed in proxy'],
              ['2022', 'Disclosed in proxy'],
              ['2023', 'Disclosed in proxy'],
              ['2024', '$23,800,000'],
              ['CEO-to-worker ratio', '391:1'],
            ]}
          />
        </div>
      </section>

      {/* Sources */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Sources</h2>
          <ul className="source-list">
            <li>DOJ press releases, HCA settlements (2000, 2003)</li>
            <li>HCA proxy statements and SEC filings (2020–2024)</li>
            <li>KKR / Bain / Apollo HCA LBO documentation</li>
            <li>NYSE HCA listing records</li>
          </ul>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
