import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import StatBar from '@/components/StatBar'
import DataTable from '@/components/DataTable'

export const metadata: Metadata = {
  title: 'Mark Tarr — Encompass Health | FAH Treasurer',
  description:
    'Mark Tarr leads Encompass Health, the largest inpatient rehabilitation operator in the US. $48M DOJ settlement, 82% Medicare dependency, $280M site-neutral exposure.',
  alternates: { canonical: 'https://fah.rojasreport.com/board/tarr' },
  openGraph: {
    type: 'article',
    title: 'Mark Tarr — Encompass Health | FAH Treasurer',
    description:
      '$48M DOJ settlement. 82% Medicare revenue dependency. $280M site-neutral payment exposure.',
    url: 'https://fah.rojasreport.com/board/tarr',
    siteName: 'FAH.RojasReport.com',
  },
}

export default function TarrPage() {
  return (
    <>
      <SiteNav currentPath="/board" />

      <div className="px-6 py-3 text-xs text-gray-500" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto">
          <Link href="/board" className="hover:text-fah-accent transition-colors">Board</Link>
          <span className="mx-2">/</span>
          <span style={{ color: '#EB6E2C' }}>Mark Tarr</span>
        </div>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#EB6E2C' }}>
            Board Member Dossier
          </p>
          <h1 className="font-headline text-5xl font-bold mb-2" style={{ color: '#f7f4ef' }}>
            Mark Tarr
          </h1>
          <p className="text-xl text-gray-400 mb-1">President &amp; CEO, Encompass Health</p>
          <p className="text-gray-500">FAH Treasurer</p>
        </div>
      </section>

      <section className="px-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto">
          <StatBar
            stats={[
              { number: '$48M', label: 'DOJ settlement amount' },
              { number: '82%', label: 'Medicare revenue dependency' },
              { number: '$280M', label: 'Site-neutral payment exposure' },
              { number: '204:1', label: 'CEO-to-worker pay ratio' },
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
            Mark Tarr has served as President and CEO of Encompass Health since 2017. Encompass Health is the largest owner and operator of inpatient rehabilitation facilities (IRFs) in the United States, operating 163 hospitals across 37 states and Puerto Rico. The company was formerly known as HealthSouth Corporation before rebranding in 2018.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            The rebranding was significant: HealthSouth was the subject of one of the largest accounting frauds in US history under its prior CEO Richard Scrushy. Tarr joined HealthSouth after the fraud and led the company through its rebranding and recovery.
          </p>
        </div>
      </section>

      {/* Section 02 — HealthSouth Fraud History */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>02</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">HEALTHSOUTH HISTORY</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>HealthSouth Fraud History</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            HealthSouth Corporation, Encompass Health&rsquo;s predecessor, was the subject of a $2.7 billion accounting fraud executed by former CEO Richard Scrushy. Scrushy was acquitted of federal criminal charges in 2005 but later convicted on unrelated bribery charges. The company paid significant settlements related to the fraud era.
          </p>
          <div
            className="p-5 rounded-lg text-sm text-gray-300"
            style={{
              background: 'rgba(235,110,44,0.08)',
              border: '1px solid rgba(235,110,44,0.2)',
            }}
          >
            <strong style={{ color: '#EB6E2C' }}>Note:</strong> Mark Tarr was not involved in the HealthSouth fraud and joined the company after the fraud was discovered. He led the rebranding to Encompass Health in 2018 as part of the company&rsquo;s effort to move past the HealthSouth name and legacy.
          </div>
        </div>
      </section>

      {/* Section 03 — DOJ Settlement */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>03</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">DOJ SETTLEMENT</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>DOJ Settlement</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Encompass Health paid a $48 million settlement to resolve DOJ allegations related to Medicare billing practices. The settlement resolved claims under the False Claims Act involving case numbers including 8:12-cv-236.
          </p>
          <DataTable
            headers={['Case', 'Amount', 'Allegation']}
            rows={[
              ['DOJ settlement (incl. 8:12-cv-236)', '$48,000,000', 'Medicare billing fraud / False Claims Act'],
            ]}
          />
        </div>
      </section>

      {/* Section 04 — Medicare Dependency */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>04</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">MEDICARE DEPENDENCY</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Medicare Dependency</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Encompass Health derives 82% of its revenue from Medicare. This concentration makes the company extraordinarily sensitive to any changes in Medicare inpatient rehabilitation facility (IRF) payment rates. It also explains why Tarr, as FAH Treasurer, has a direct financial stake in opposing site-neutral payment reforms.
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            CMS estimates that comprehensive site-neutral payment reform would reduce Encompass Health&rsquo;s Medicare revenues by approximately $280 million. At an 82% Medicare revenue base, even modest payment reductions translate to significant earnings impact.
          </p>
          <DataTable
            headers={['Metric', 'Value']}
            rows={[
              ['Medicare as % of revenue', '82%'],
              ['Estimated site-neutral exposure', '$280,000,000'],
              ['IRF facilities operated', '163 across 37 states'],
            ]}
          />
        </div>
      </section>

      {/* Section 05 — Compensation */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>05</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">COMPENSATION</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Compensation</h2>
          <DataTable
            headers={['Metric', 'Value']}
            rows={[
              ['CEO-to-worker pay ratio', '204:1'],
              ['Source', 'Encompass Health proxy statement'],
            ]}
          />
        </div>
      </section>

      {/* Sources */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Sources</h2>
          <ul className="source-list">
            <li>DOJ settlement records (Case No. 8:12-cv-236 and related)</li>
            <li>Encompass Health proxy statements, SEC filings</li>
            <li>CMS IRF payment data</li>
            <li>FAH board records</li>
          </ul>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
