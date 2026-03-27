import type { Metadata } from 'next'
import Link from 'next/link'
import ThreatTag from '@/components/ThreatTag'
import StatBar from '@/components/StatBar'
import DataTable from '@/components/DataTable'

export const metadata: Metadata = {
  title: '340B Drug Pricing — FAH Position | Pillar 03',
  description:
    "FAH members are excluded from the 340B program — it's a nonprofit hospital benefit. FAH opposes drug manufacturer clawback efforts and the 340B ACCESS Act.",
  alternates: { canonical: 'https://fah.rojasreport.com/pillars/340b' },
  openGraph: {
    type: 'article',
    title: '340B Drug Pricing — FAH Position | Pillar 03',
    description:
      'FAH members excluded from 340B. FAH opposes manufacturer clawback efforts and the 340B ACCESS Act.',
    url: 'https://fah.rojasreport.com/pillars/340b',
    siteName: 'FAH.RojasReport.com',
  },
}

export default function ThreeFourtyBPage() {
  return (
    <>
      <SiteNav currentPath="/pillars" />

      <div className="px-6 py-3 text-xs text-gray-500" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto">
          <Link href="/pillars" className="hover:text-fah-accent transition-colors">Pillars</Link>
          <span className="mx-2">/</span>
          <span style={{ color: '#EB6E2C' }}>340B Drug Pricing</span>
        </div>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#EB6E2C' }}>
            Pillar 03
          </p>
          <h1 className="font-headline text-5xl font-bold mb-2" style={{ color: '#f7f4ef' }}>
            340B Drug Pricing
          </h1>
          <p className="text-xl text-gray-400 mb-4">
            340B Program &middot; Contract Pharmacy &middot; Drug Manufacturers
          </p>
          <ThreatTag level="Low" />
        </div>
      </section>

      <section className="px-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto">
          <StatBar
            stats={[
              { number: '$81.4B', label: '340B program total size (estimated)' },
              { number: '$0', label: 'FAH member benefit from 340B (members are excluded)' },
              { number: '$9B', label: 'CMS remedy opposed by FAH' },
              { number: '1', label: 'Supreme Court case: AHA v. Becerra (596 U.S. 724)' },
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
            FAH members — for-profit hospitals — are not eligible for the 340B drug discount program. The program is limited to qualifying nonprofit and government-owned hospitals, FQHCs, and certain other safety-net providers. FAH&rsquo;s position on 340B is driven by competition: for-profit hospitals compete with 340B-eligible nonprofit hospitals and have an interest in limiting the program&rsquo;s scope.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            In October 2024, FAH President Chip MacDonald issued a statement opposing drug manufacturer restrictions on contract pharmacy arrangements, framing the issue as protecting patient access. In practice, FAH&rsquo;s opposition to manufacturer restrictions maintains the competitive disadvantage that for-profit hospitals face relative to 340B-eligible competitors.
          </p>
        </div>
      </section>

      {/* Section 02 — AHA v. Becerra */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>02</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">AHA V. BECERRA</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>AHA v. Becerra (596 U.S. 724)</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            The Supreme Court ruled in <em>AHA v. Becerra</em> (2022) that CMS had unlawfully reduced 340B drug reimbursement rates without conducting the required hospital survey. The Court ordered CMS to provide a remedy, which CMS estimated at approximately $9 billion in retrospective payments to affected hospitals.
          </p>
          <DataTable
            headers={['Item', 'Detail']}
            rows={[
              ['Case', 'American Hospital Association v. Becerra, 596 U.S. 724 (2022)'],
              ['Issue', 'CMS reduced 340B reimbursement without required survey'],
              ['Outcome', 'Supreme Court ruled for plaintiffs (AHA, not FAH)'],
              ['CMS remedy estimate', '~$9 billion in retrospective payments'],
              ['FAH position on remedy', 'Opposed the full $9B remedy scope'],
            ]}
          />
        </div>
      </section>

      {/* Section 03 — 340B ACCESS Act */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>03</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">340B ACCESS ACT</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>340B ACCESS Act (H.R. 5256)</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            FAH opposed H.R. 5256, the 340B ACCESS Act, which would have imposed new transparency and accountability requirements on 340B covered entities. FAH&rsquo;s opposition reflected concern that any increased regulatory scrutiny of the 340B program — even targeting nonprofit hospital abuses — could lead to expansion of the program to for-profit hospitals with strings attached.
          </p>
        </div>
      </section>

      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Sources</h2>
          <ul className="source-list">
            <li><em>AHA v. Becerra</em>, 596 U.S. 724 (2022)</li>
            <li>CMS 340B program data</li>
            <li>FAH MacDonald statement, October 2024</li>
            <li>H.R. 5256, 340B ACCESS Act, Congress.gov</li>
          </ul>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
