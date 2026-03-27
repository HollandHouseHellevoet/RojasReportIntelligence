import type { Metadata } from 'next'
import Link from 'next/link'
import StatBar from '@/components/StatBar'
import DataTable from '@/components/DataTable'

export const metadata: Metadata = {
  title: 'David Dill — Lifepoint Health / Apollo | FAH Chair',
  description:
    'David Dill serves as FAH Chair while running Lifepoint Health for Apollo Global Management. $9.2M in management fees, $25.3M golden parachute, and a Senate investigation into broken community promises.',
  alternates: { canonical: 'https://fah.rojasreport.com/board/dill' },
  openGraph: {
    type: 'article',
    title: 'David Dill — Lifepoint Health / Apollo | FAH Chair',
    description:
      'David Dill serves as FAH Chair while running Lifepoint Health for Apollo Global Management.',
    url: 'https://fah.rojasreport.com/board/dill',
    siteName: 'FAH.RojasReport.com',
  },
}

export default function DillPage() {
  return (
    <>
      <SiteNav currentPath="/board" />

      {/* Breadcrumb */}
      <div className="px-6 py-3 text-xs text-gray-500" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto">
          <Link href="/board" className="hover:text-fah-accent transition-colors">Board</Link>
          <span className="mx-2">/</span>
          <span style={{ color: '#EB6E2C' }}>David Dill</span>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#EB6E2C' }}>
            Board Member Dossier
          </p>
          <h1 className="font-headline text-5xl font-bold mb-2" style={{ color: '#f7f4ef' }}>
            David Dill
          </h1>
          <p className="text-xl text-gray-400 mb-1">President &amp; CEO, Lifepoint Health</p>
          <p className="text-gray-500">FAH Chair &middot; Apollo Global Management Portfolio</p>
        </div>
      </section>

      {/* Stat Bar */}
      <section className="px-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto">
          <StatBar
            stats={[
              { number: '$9.2M', label: 'Annual management fees paid to Apollo' },
              { number: '$25.3M', label: 'Golden parachute value at Lifepoint' },
              { number: '7', label: 'Broken promises to acquired communities' },
              { number: '$5.6B', label: 'RCCH HealthCare acquisition price' },
            ]}
          />
        </div>
      </section>

      {/* Section 01 — Background */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>01</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">BACKGROUND</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Background</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            David Dill has served as President and CEO of Lifepoint Health since 2016. Lifepoint is an Apollo Global Management portfolio company operating more than 60 hospital campuses across non-urban markets in 29 states. Dill joined Lifepoint as CFO in 2007 and was named CEO after Apollo&rsquo;s 2016 take-private transaction valued Lifepoint at $5.6 billion.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Dill currently chairs the FAH board of directors, placing a private equity-backed hospital operator at the top of the for-profit hospital lobby at the precise moment Congress is debating site-neutral payments, physician-owned hospital repeal, and Medicaid cuts.
          </p>
        </div>
      </section>

      {/* Section 02 — Apollo Structure */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>02</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">APOLLO STRUCTURE</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>The Apollo Structure</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Lifepoint Health is not a public company. Apollo Global Management owns it through a fund structure. Lifepoint pays Apollo $9.2 million annually in management fees — a recurring extraction from hospital operations directly to the private equity sponsor.
          </p>
          <DataTable
            headers={['Item', 'Detail']}
            rows={[
              ['Ownership', 'Apollo Global Management (private equity)'],
              ['Take-private', '2016, valued at approximately $5.6 billion'],
              ['Annual management fee', '$9.2 million paid to Apollo'],
              ['CEO golden parachute', '$25.3 million per SEC filings prior to take-private'],
              ['Hospital campuses', 'More than 60 across 29 states'],
              ['Primary markets', 'Non-urban, rural, and community hospitals'],
            ]}
          />
        </div>
      </section>

      {/* Section 03 — RCCH Acquisition */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>03</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">RCCH ACQUISITION</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>RCCH HealthCare Acquisition</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            In 2018, Lifepoint acquired RCCH HealthCare Partners for $1.6 billion, adding 20 hospitals across 15 states. The combined entity became one of the largest rural hospital operators in the country. The transaction extended Apollo&rsquo;s rural hospital footprint and increased Lifepoint&rsquo;s leverage significantly.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            RCCH was itself a private equity-backed entity. The Lifepoint-RCCH combination merged two leveraged platforms into a single highly indebted system serving communities where patients have limited alternatives.
          </p>
        </div>
      </section>

      {/* Section 04 — Senate Investigation */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>04</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">SENATE INVESTIGATION</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Senate Investigation</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            The Senate HELP Committee investigated private equity hospital acquisitions and identified seven broken promises Lifepoint made to communities at the time of acquisition. These included commitments on staffing levels, service lines, and capital investment that were not honored.
          </p>
          <DataTable
            headers={['Promise', 'Outcome']}
            rows={[
              ['Maintain current service lines', 'Services reduced at multiple facilities'],
              ['Retain existing staff levels', 'Staffing ratios declined post-acquisition'],
              ['Invest in capital improvements', 'Deferred maintenance documented at acquired hospitals'],
              ['Keep emergency departments open', 'ED closures or reduced hours at select facilities'],
              ['Engage local community boards', 'Local governance structures dissolved'],
              ['Maintain charity care programs', 'Charity care as percentage of revenue declined'],
              ['Prioritize rural access', 'Access metrics worsened in several markets'],
            ]}
          />
        </div>
      </section>

      {/* Section 05 — ScionHealth Spinoff */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>05</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">SCIONHEALTH SPINOFF</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>The ScionHealth Spinoff</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            In 2021, Lifepoint spun off its long-term acute care hospital (LTACH) portfolio as ScionHealth, a separate Apollo-backed entity. Rob Jay, also on the FAH board, leads ScionHealth. The spinoff separated Lifepoint&rsquo;s community hospitals from the LTACH business while keeping both under Apollo&rsquo;s control.
          </p>
          <DataTable
            headers={['Entity', 'CEO', 'Ownership', 'Business Type']}
            rows={[
              ['Lifepoint Health', 'David Dill', 'Apollo Global Management', 'Community and regional hospitals'],
              ['ScionHealth', 'Rob Jay', 'Apollo Global Management', 'Long-term acute care hospitals (LTACHs)'],
            ]}
          />
        </div>
      </section>

      {/* Section 06 — Quality Record */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>06</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">QUALITY RECORD</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Quality Decline</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Following Apollo&rsquo;s acquisition, several Lifepoint facilities saw deterioration in CMS quality ratings. The pattern is consistent with private equity cost extraction — reducing operating costs (including staffing) in ways that degrade patient outcomes while maintaining revenue.
          </p>
          <div
            className="p-5 rounded-lg text-sm text-gray-300"
            style={{
              background: 'rgba(235,110,44,0.08)',
              border: '1px solid rgba(235,110,44,0.2)',
            }}
          >
            <strong style={{ color: '#EB6E2C' }}>Key finding:</strong> Research published in the Journal of the American Medical Association found that private equity hospital acquisitions are associated with increased hospital-acquired adverse events, including falls and central line infections. Lifepoint&rsquo;s portfolio is among the largest private equity hospital holdings in the country.
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Sources</h2>
          <ul className="source-list">
            <li>SEC filings, Lifepoint Health (pre-take-private)</li>
            <li>Apollo Global Management investor disclosures</li>
            <li>Senate HELP Committee investigation records</li>
            <li>CMS Hospital Compare quality data</li>
            <li>Lifepoint Health press releases and community benefit reports</li>
          </ul>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
