import type { Metadata } from 'next'
import Link from 'next/link'
import ThreatTag from '@/components/ThreatTag'
import StatBar from '@/components/StatBar'
import DataTable from '@/components/DataTable'

export const metadata: Metadata = {
  title: 'No Surprises Act / IDR — FAH Position | Pillar 04',
  description:
    "FAH opposes the QPA-centric IDR methodology. 1.46 million disputes filed in 2024 — 66x the original estimate. 82% physician win rate when disputes go to arbitration.",
  alternates: { canonical: 'https://fah.rojasreport.com/pillars/idr' },
  openGraph: {
    type: 'article',
    title: 'No Surprises Act / IDR — FAH Position | Pillar 04',
    description:
      '1.46M IDR disputes in 2024. 82% physician win rate. FAH opposes QPA-centric methodology.',
    url: 'https://fah.rojasreport.com/pillars/idr',
    siteName: 'FAH.RojasReport.com',
  },
}

export default function IdrPage() {
  return (
    <>

      <div className="px-6 py-3 text-xs text-gray-500" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto">
          <Link href="/pillars" className="hover:text-fah-accent transition-colors">Pillars</Link>
          <span className="mx-2">/</span>
          <span style={{ color: '#EB6E2C' }}>No Surprises Act / IDR</span>
        </div>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#EB6E2C' }}>
            Pillar 04
          </p>
          <h1 className="font-headline text-5xl font-bold mb-2" style={{ color: '#f7f4ef' }}>
            No Surprises Act / IDR
          </h1>
          <p className="text-xl text-gray-400 mb-4">
            Independent Dispute Resolution &middot; QPA &middot; Out-of-Network
          </p>
          <ThreatTag level="Moderate" />
        </div>
      </section>

      <section className="px-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto">
          <StatBar
            stats={[
              { number: '1.46M', label: 'IDR disputes filed in 2024' },
              { number: '22,000', label: 'CBO original annual estimate' },
              { number: '82%', label: 'Physician win rate in arbitration' },
              { number: '450%', label: 'Average arbitration award vs. QPA' },
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
            FAH opposes the Qualifying Payment Amount (QPA) methodology as the primary anchor for IDR arbitration decisions. FAH argues the QPA — which is based on insurer median in-network rates — systematically undervalues hospital services and favors insurers in the dispute resolution process.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            FAH filed an amicus brief in <em>TMA/AMA v. HHS</em> supporting physician and hospital challengers to the QPA-centric IDR rules. FAH also filed an amicus in <em>Guardian Flight v. HCSC</em> supporting air ambulance providers in a related dispute about out-of-network payment.
          </p>
        </div>
      </section>

      {/* Section 02 — The IDR Explosion */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>02</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">THE IDR EXPLOSION</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>The IDR Explosion</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            The No Surprises Act&rsquo;s IDR process was expected to handle approximately 22,000 disputes per year according to CBO estimates. Actual volume in 2024 was 1.46 million disputes — 66 times the estimate. The explosion reflects both the scale of out-of-network billing disputes and the systematic insurer use of low QPAs to underpay claims, forcing disputes to arbitration.
          </p>
          <DataTable
            headers={['Metric', 'Value']}
            rows={[
              ['CBO original annual estimate', '22,000 disputes'],
              ['Actual 2024 disputes', '1,460,000 disputes'],
              ['Ratio actual to estimated', '~66x'],
              ['Physician win rate in arbitration', '82%'],
              ['Average award vs. QPA', '450% of QPA'],
            ]}
          />
        </div>
      </section>

      {/* Section 03 — Amicus Activity */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>03</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">LEGAL ACTIVITY</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>FAH Legal Activity</h2>
          <DataTable
            headers={['Case', 'FAH Role', 'Issue']}
            rows={[
              ['TMA/AMA v. HHS', 'Amicus brief', 'Challenged QPA as mandatory IDR anchor; supported physician challengers'],
              ['Guardian Flight v. HCSC', 'Amicus brief', 'Supported air ambulance providers on out-of-network payment rates'],
            ]}
          />
        </div>
      </section>

      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Sources</h2>
          <ul className="source-list">
            <li>CMS IDR data reports (2023, 2024)</li>
            <li>FAH amicus briefs: <em>TMA/AMA v. HHS</em>, <em>Guardian Flight v. HCSC</em></li>
            <li>CBO cost estimate, No Surprises Act (2020)</li>
            <li>CCIIO IDR dispute data</li>
          </ul>
        </div>
      </section>

    </>
  )
}
