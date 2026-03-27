import type { Metadata } from 'next'
import Link from 'next/link'
import ThreatTag from '@/components/ThreatTag'
import StatBar from '@/components/StatBar'
import DataTable from '@/components/DataTable'

export const metadata: Metadata = {
  title: 'Site-Neutral Payments — FAH Position | Pillar 06',
  description:
    'FAH strongly opposes all site-neutral payment proposals. Comprehensive reform would save Medicare $153-471 billion over 10 years.',
  alternates: { canonical: 'https://fah.rojasreport.com/pillars/site-neutral' },
  openGraph: {
    type: 'article',
    title: 'Site-Neutral Payments — FAH Position | Pillar 06',
    description:
      'FAH strongly opposes all site-neutral payment proposals. $153-471B in potential Medicare savings.',
    url: 'https://fah.rojasreport.com/pillars/site-neutral',
    siteName: 'FAH.RojasReport.com',
  },
}

export default function SiteNeutralPage() {
  return (
    <>
      <SiteNav currentPath="/pillars" />

      <div className="px-6 py-3 text-xs text-gray-500" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto">
          <Link href="/pillars" className="hover:text-fah-accent transition-colors">Pillars</Link>
          <span className="mx-2">/</span>
          <span style={{ color: '#EB6E2C' }}>Site-Neutral Payments</span>
        </div>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#EB6E2C' }}>
            Pillar 06
          </p>
          <h1 className="font-headline text-5xl font-bold mb-2" style={{ color: '#f7f4ef' }}>
            Site-Neutral Payments
          </h1>
          <p className="text-xl text-gray-400 mb-4">
            Payment Parity &middot; HOPD vs. Physician Office &middot; Medicare Savings
          </p>
          <ThreatTag level="High" />
        </div>
      </section>

      <section className="px-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto">
          <StatBar
            stats={[
              { number: '$153B', label: 'Medicare savings estimate — CRFB (10-year, comprehensive reform)' },
              { number: '$471B', label: 'Total savings estimate — USC/Brookings' },
              { number: '$290M', label: 'CMS CY2026 site-neutral savings (first year)' },
              { number: '2015', label: 'Year first site-neutral provision was enacted' },
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
            FAH strongly opposes all site-neutral payment proposals, calling them devastating cuts to hospital funding.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            FAH&rsquo;s stated position: &ldquo;Blunt site-neutral payment policies ignore fundamental functional and cost structure differences between hospitals and physician offices.&rdquo;
          </p>
        </div>
      </section>

      {/* Section 02 — Explainer */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>02</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">EXPLAINER</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>What Site-Neutral Means</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Currently, Medicare pays significantly more for the same service when provided at a hospital outpatient department than at a physician&rsquo;s office. Site-neutral proposals would align these payments, paying the same rate regardless of setting.
          </p>
          <div
            className="p-5 rounded-lg text-sm text-gray-300"
            style={{
              background: 'rgba(235,110,44,0.08)',
              border: '1px solid rgba(235,110,44,0.2)',
            }}
          >
            <strong style={{ color: '#EB6E2C' }}>Payment differential examples:</strong> The same cardiac stress test costs Medicare approximately $300 at a physician office and $500 at a hospital outpatient department. The same colonoscopy costs Medicare approximately $450 at an ASC and $1,100 at a hospital outpatient department. Patients pay higher cost-sharing at hospital settings.
          </div>
        </div>
      </section>

      {/* Section 03 — Financial Stakes */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>03</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">FINANCIAL STAKES</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Financial Stakes</h2>
          <DataTable
            headers={['Source', 'Scope', 'Estimate']}
            rows={[
              ['Committee for Responsible Federal Budget', 'Comprehensive', '$153B over 10 years'],
              [
                "FTI Consulting (commissioned by Coalition to Strengthen America's Healthcare, FAH founding member)",
                'Comprehensive',
                '$182B over 10 years ($12B Year 1)',
              ],
              ['USC/Brookings-affiliated analysis', 'Total for Medicare and beneficiaries', '$471B over 10 years'],
              ['CMS CY2026 OPPS Final Rule', 'Drug administration only', '$290M in Year 1'],
            ]}
          />
        </div>
      </section>

      {/* Section 04 — History */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>04</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">HISTORY</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Legislative and Regulatory History</h2>
          <DataTable
            headers={['Date', 'Event']}
            rows={[
              ['2015', 'Bipartisan Budget Act: Site-neutral enacted for new off-campus HOPDs — partial loss for FAH'],
              [
                'CY2019',
                'CMS OPPS Final Rule: Extended site-neutral to E&M visits at all off-campus HOPDs (60% reduction) — FAH opposed',
              ],
              ['2020', 'D.C. Circuit upheld CMS authority to impose site-neutral reductions — major loss for hospital lobby'],
              [
                '2023',
                'Lower Costs, More Transparency Act (H.R. 5378) passed House 320–71. FAH opposition letter December 7, 2023. Died in Senate — FAH victory.',
              ],
              ['November 2024', 'Cassidy-Hassan Senate Framework: FAH issued immediate opposition November 1, 2024'],
              [
                'April 15, 2025',
                'Trump Executive Order 14273: Directed HHS to propose regulations ensuring Medicare payments don\'t encourage drug administration in HOPDs over physician offices',
              ],
              ['September 15, 2025', 'FAH opposition comment letter on CMS CY2026 OPPS proposed rule'],
              [
                'November 21, 2025',
                'CMS CY2026 OPPS Final Rule: Finalized expansion of site-neutral to drug administration in all excepted off-campus HOPDs',
              ],
            ]}
          />
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Sources</h2>
          <ul className="source-list">
            <li>CRFB site-neutral payment analysis</li>
            <li>CMS OPPS rulemaking (CY2019, CY2026)</li>
            <li>FAH letter archive (2023–2025)</li>
            <li>Congress.gov H.R. 5378</li>
            <li>Trump Executive Order 14273 (April 15, 2025)</li>
          </ul>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
