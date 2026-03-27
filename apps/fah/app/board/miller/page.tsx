import type { Metadata } from 'next'
import Link from 'next/link'
import StatBar from '@/components/StatBar'
import DataTable from '@/components/DataTable'

export const metadata: Metadata = {
  title: 'Marc Miller — Universal Health Services | FAH Immediate Past Chair',
  description:
    'Marc Miller leads UHS, a family-controlled for-profit hospital giant. $122M False Claims Act settlement, 87.4% family voting control, 309:1 pay ratio, Senate "Warehouses of Neglect" finding.',
  alternates: { canonical: 'https://fah.rojasreport.com/board/miller' },
  openGraph: {
    type: 'article',
    title: 'Marc Miller — Universal Health Services | FAH Immediate Past Chair',
    description:
      '$122M False Claims Act settlement. 87.4% family voting control. Senate "Warehouses of Neglect" finding.',
    url: 'https://fah.rojasreport.com/board/miller',
    siteName: 'FAH.RojasReport.com',
  },
}

export default function MillerPage() {
  return (
    <>
      <SiteNav currentPath="/board" />

      <div className="px-6 py-3 text-xs text-gray-500" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto">
          <Link href="/board" className="hover:text-fah-accent transition-colors">Board</Link>
          <span className="mx-2">/</span>
          <span style={{ color: '#EB6E2C' }}>Marc Miller</span>
        </div>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#EB6E2C' }}>
            Board Member Dossier
          </p>
          <h1 className="font-headline text-5xl font-bold mb-2" style={{ color: '#f7f4ef' }}>
            Marc Miller
          </h1>
          <p className="text-xl text-gray-400 mb-1">President &amp; CEO, Universal Health Services</p>
          <p className="text-gray-500">FAH Immediate Past Chair</p>
        </div>
      </section>

      <section className="px-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto">
          <StatBar
            stats={[
              { number: '$122M', label: 'False Claims Act settlement' },
              { number: '87.4%', label: 'Miller family voting control of UHS' },
              { number: '309:1', label: 'CEO-to-worker pay ratio' },
              { number: '$15.8B', label: 'UHS annual revenue' },
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
            Marc Miller has served as President and CEO of Universal Health Services (UHS) since 2021, succeeding his father Alan Miller who founded the company. UHS operates 400+ hospitals and behavioral health facilities across the US and UK. The Miller family controls 87.4% of UHS voting shares through a dual-class stock structure, making it effectively a family-controlled company despite public listing.
          </p>
        </div>
      </section>

      {/* Section 02 — Governance */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>02</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">GOVERNANCE</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Governance Structure</h2>
          <DataTable
            headers={['Class', 'Votes Per Share', 'Who Holds It']}
            rows={[
              ['Class A (public)', '1 vote per share', 'Public shareholders'],
              ['Class B (controlled)', '10 votes per share', 'Miller family'],
              ['Effective family voting control', '87.4%', 'Alan Miller estate / family'],
            ]}
          />
          <p className="text-gray-300 mt-6 leading-relaxed">
            The dual-class structure means UHS shareholders cannot meaningfully challenge Miller family decisions. The company is nominally public but functions as a family business with public minority shareholders.
          </p>
        </div>
      </section>

      {/* Section 03 — Fraud Settlement */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>03</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">FRAUD SETTLEMENT</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>False Claims Act Settlement</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            In 2020, UHS paid $117 million to resolve False Claims Act allegations and an additional $5 million in related state settlements, totaling $122 million. The settlement resolved allegations that UHS behavioral health facilities admitted patients who did not require inpatient care, billed for services not rendered, and held patients involuntarily to maximize insurance reimbursement.
          </p>
          <DataTable
            headers={['Component', 'Amount', 'Jurisdiction']}
            rows={[
              ['Federal FCA resolution', '$117,000,000', 'DOJ / Federal'],
              ['State settlements', '$5,000,000', 'Multiple states'],
              ['Total', '$122,000,000', 'Combined'],
            ]}
          />
        </div>
      </section>

      {/* Section 04 — Senate Finding */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>04</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">SENATE INVESTIGATION</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>&ldquo;Warehouses of Neglect&rdquo;</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            The Senate Finance Committee investigation into UHS behavioral health practices characterized certain UHS facilities as &ldquo;warehouses of neglect.&rdquo; The investigation documented patient deaths, inadequate staffing, and systematic failures in behavioral health facilities operated by UHS.
          </p>
          <div
            className="p-5 rounded-lg text-sm text-gray-300"
            style={{
              background: 'rgba(235,110,44,0.08)',
              border: '1px solid rgba(235,110,44,0.2)',
            }}
          >
            <strong style={{ color: '#EB6E2C' }}>Senate Finance Committee finding:</strong> The investigation identified a pattern of inadequate care, understaffing, and patient harm at UHS behavioral health facilities. The phrase &ldquo;warehouses of neglect&rdquo; appeared in committee documentation.
          </div>
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
            headers={['Year', 'Total Compensation']}
            rows={[
              ['2023', '$14,400,000'],
              ['CEO-to-worker pay ratio', '309:1'],
            ]}
          />
        </div>
      </section>

      {/* Sources */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Sources</h2>
          <ul className="source-list">
            <li>DOJ press release, UHS False Claims Act settlement (2020)</li>
            <li>Senate Finance Committee investigation records</li>
            <li>UHS proxy statement, SEC filings</li>
            <li>FAH board records</li>
          </ul>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
