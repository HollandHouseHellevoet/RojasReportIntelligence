import type { Metadata } from 'next'
import Link from 'next/link'
import StatBar from '@/components/StatBar'
import DataTable from '@/components/DataTable'
import PullQuote from '@/components/PullQuote'

export const metadata: Metadata = {
  title: 'David Dill — Lifepoint Health / Apollo | FAH Chair',
  description:
    'David Dill, Chairman & CEO of Apollo-owned Lifepoint Health, is the 2026 FAH Chair. $9.2M annual Apollo management fee, a $25.3M potential golden parachute, a Senate Budget Committee finding of seven unfulfilled promises at Ottumwa, and a June 2026 eight-hospital deal with sister company ScionHealth.',
  alternates: { canonical: 'https://fah.rojasreport.com/board/dill' },
  openGraph: {
    type: 'article',
    title: 'David Dill — Lifepoint Health / Apollo | FAH Chair',
    description:
      'David Dill chairs FAH for 2026 while running Lifepoint Health for Apollo Global Management.',
    url: 'https://fah.rojasreport.com/board/dill',
    siteName: 'FAH.RojasReport.com',
  },
}

export default function DillPage() {
  return (
    <>

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
          <p className="text-xl text-gray-400 mb-1">Chairman &amp; CEO, Lifepoint Health</p>
          <p className="text-gray-500">FAH Chair (2026) &middot; Apollo Global Management Portfolio</p>
        </div>
      </section>

      {/* Stat Bar */}
      <section className="px-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto">
          <StatBar
            stats={[
              { number: '$9.2M', label: 'Annual management fee Lifepoint pays Apollo' },
              { number: '$25.3M', label: 'Potential golden parachute disclosed in 2018 merger proxy' },
              { number: '7', label: 'Promises to Ottumwa Regional Health Center found unfulfilled (Senate Budget Committee)' },
              { number: '$5.6B', label: 'Apollo take-private / RCCH merger enterprise value (2018)' },
            ]}
          />
        </div>
      </section>

      {/* Section 01 — 2026 */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>01</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">2026</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>FAH Chair and a Sister-Company Deal</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            In October 2025, at FAH&rsquo;s Annual Membership and Business Meeting in Washington, DC, David M. Dill was elected Chair of the FAH Board of Directors for the 2026 calendar year. FAH&rsquo;s announcement styles him &ldquo;Chairman and CEO of Lifepoint Health.&rdquo; He succeeds Marc Miller of Universal Health Services, who chaired the board in 2025.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Dill&rsquo;s chairmanship places a private equity-owned hospital operator at the top of the for-profit hospital lobby while Congress debates site-neutral payments, physician-owned hospital repeal, and Medicaid cuts.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Months into his term, Lifepoint completed a transaction with its Apollo sister company. On March 6, 2026, Lifepoint agreed to acquire eight acute-care hospitals from ScionHealth; the deal closed June 2, 2026. The hospitals are in Mississippi, Texas, Tennessee, West Virginia, Idaho, and Wisconsin, and the transaction reunites assets that were separated when ScionHealth was carved out in 2021. Following the closing, Lifepoint described itself as operating 68 community hospital campuses, more than 70 rehabilitation and behavioral health hospitals, and more than 300 additional sites of care.
          </p>
          <div
            className="p-5 rounded-lg text-sm text-gray-300"
            style={{
              background: 'rgba(235,110,44,0.08)',
              border: '1px solid rgba(235,110,44,0.2)',
            }}
          >
            <strong style={{ color: '#EB6E2C' }}>Why it matters:</strong> The Senate Budget Committee&rsquo;s January 2025 report states that, in addition to its $9.2 million annual management fee, Apollo collects a 1% transaction fee on each Lifepoint acquisition. Whether that fee applied to the ScionHealth transaction &mdash; an Apollo company buying hospitals from another Apollo company &mdash; has not been publicly disclosed.
          </div>
        </div>
      </section>

      {/* Section 02 — Background */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>02</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">BACKGROUND</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Background</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            David Dill joined Lifepoint as Chief Financial Officer in 2007. In September 2018, Lifepoint announced that Dill would succeed William F. Carpenter III as CEO upon completion of the Apollo transaction, and he took the role when the deal closed in November 2018. He now holds the title Chairman and CEO; the date of his appointment as chairman has not been independently confirmed.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Lifepoint is an Apollo Global Management portfolio company focused on non-urban, rural, and community hospital markets. It is not a public company, and its financial statements are not publicly filed.
          </p>
        </div>
      </section>

      {/* Section 03 — Apollo Structure */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>03</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">APOLLO STRUCTURE</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>The Apollo Structure</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Apollo Global Management announced its acquisition of LifePoint Health on July 23, 2018, at an enterprise value of approximately $5.6 billion, and closed the deal in November 2018 by merging LifePoint with RCCH HealthCare Partners, which Apollo already owned. According to the bipartisan Senate Budget Committee report released in January 2025, Lifepoint pays Apollo a $9.2 million annual management fee plus a 1% transaction fee on each acquisition &mdash; a recurring transfer from hospital operations to the private equity sponsor.
          </p>
          <DataTable
            headers={['Item', 'Detail']}
            rows={[
              ['Ownership', 'Apollo Global Management (private equity)'],
              ['Take-private', 'Announced July 23, 2018; closed November 2018; approximately $5.6 billion enterprise value, via merger with Apollo-owned RCCH HealthCare Partners'],
              ['Annual management fee', '$9.2 million paid to Apollo (Senate Budget Committee, January 2025)'],
              ['Transaction fee', '1% of each Lifepoint acquisition, paid to Apollo (Senate Budget Committee, January 2025)'],
              ['CEO golden parachute', 'More than $25.3 million potential payout to Dill disclosed in the September 2018 merger proxy (double-trigger: change in control plus termination); shareholders voted against the advisory golden-parachute proposal'],
              ['Credit rating', 'Moody’s B3 corporate rating; outlook revised to positive July 26, 2024 (latest rating action found)'],
              ['Footprint (June 2026)', '68 community hospital campuses; 70+ rehabilitation and behavioral health hospitals; 300+ additional sites of care'],
              ['Primary markets', 'Non-urban, rural, and community hospitals'],
            ]}
          />
          <p className="text-gray-300 mt-6 leading-relaxed">
            The $25.3 million figure describes potential, not received, compensation. The 2018 proxy listed Dill at more than $25.3 million and then-CEO Carpenter at more than $69.7 million, with four executives in line for roughly $120 million in total. Dill was not terminated in the transaction &mdash; he became CEO.
          </p>
        </div>
      </section>

      {/* Section 04 — RCCH Merger */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>04</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">RCCH MERGER</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>The RCCH Merger</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            The 2018 transaction is sometimes described as Lifepoint buying RCCH. It was the reverse: Apollo acquired the publicly traded LifePoint Health and merged it into RCCH HealthCare Partners, an Apollo-owned operator formed from RegionalCare and Capella. The combined company kept the Lifepoint name and became one of the largest rural hospital operators in the country.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            The combination merged two leveraged platforms into a single highly indebted system serving communities where patients have limited alternatives. Moody&rsquo;s rates Lifepoint&rsquo;s corporate credit at B3, deep in speculative-grade territory.
          </p>
        </div>
      </section>

      {/* Section 05 — Senate Investigation */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>05</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">SENATE INVESTIGATION</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Senate Budget Committee: Ottumwa</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            In January 2025, the Senate Budget Committee released a bipartisan report led by Senators Whitehouse and Grassley, &ldquo;Profits Over Patients: The Harmful Effects of Private Equity on the U.S. Health Care System.&rdquo; Lifepoint and Apollo were among its subjects. The report&rsquo;s most specific Lifepoint finding concerns a single hospital: Ottumwa Regional Health Center in Iowa.
          </p>
          <PullQuote
            quote="Lifepoint and ORHC&rsquo;s operating companies failed to fulfill at least seven promises, including legally binding ones &hellip; related to capital commitments, patient satisfaction, and provision of charity care."
            attribution="Senate Budget Committee, &ldquo;Profits Over Patients,&rdquo; January 2025"
          />
          <p className="text-gray-300 mb-4 leading-relaxed">
            The same report documents the $9.2 million annual management fee and 1% transaction fee that Lifepoint pays Apollo. The committee&rsquo;s itemized list of the seven Ottumwa promises is in the report itself; this page quotes only the categories the committee named.
          </p>
        </div>
      </section>

      {/* Section 06 — ScionHealth */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>06</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">SCIONHEALTH</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>The ScionHealth Carve-Out &mdash; and Reversal</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            ScionHealth was created in December 2021 out of the Lifepoint&ndash;Kindred Healthcare transaction: Kindred&rsquo;s long-term acute care hospitals (LTACHs) and a group of Lifepoint community hospitals were placed in a new Apollo-backed company. Rob Jay, who also sits on the FAH board, was ScionHealth&rsquo;s CEO from 2021 until June 2026, when he became Executive Chairman and CFO Doug Shirley was named CEO. That same month, Lifepoint bought eight of ScionHealth&rsquo;s acute-care hospitals back. Both companies remain under Apollo&rsquo;s control.
          </p>
          <DataTable
            headers={['Entity', 'Leadership', 'Ownership', 'Business Type']}
            rows={[
              ['Lifepoint Health', 'David Dill, Chairman & CEO', 'Apollo Global Management', 'Community and regional hospitals; rehabilitation and behavioral health'],
              ['ScionHealth', 'Doug Shirley, CEO (June 2026); Rob Jay, Executive Chairman', 'Apollo Global Management', 'Long-term acute care hospitals (LTACHs) and community hospitals'],
            ]}
          />
        </div>
      </section>

      {/* Section 07 — Quality Record */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>07</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">QUALITY RECORD</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Private Equity and Patient Harm</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            The Senate Budget Committee&rsquo;s bipartisan conclusion was that private equity ownership in health care has harmed patients, degraded care, and driven hospital closures. Lifepoint&rsquo;s portfolio is among the largest private equity hospital holdings in the country.
          </p>
          <div
            className="p-5 rounded-lg text-sm text-gray-300"
            style={{
              background: 'rgba(235,110,44,0.08)',
              border: '1px solid rgba(235,110,44,0.2)',
            }}
          >
            <strong style={{ color: '#EB6E2C' }}>Key finding:</strong> Research published in the Journal of the American Medical Association (Kannan et al., December 2023) found that private equity hospital acquisitions are associated with increased hospital-acquired adverse events, including falls and central line infections.
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Sources</h2>
          <ul className="source-list">
            <li>FAH, &ldquo;FAH Announces 2026 Chairman and Board of Directors at Annual Membership Meeting,&rdquo; October 2025</li>
            <li>Senate Budget Committee (Whitehouse/Grassley), &ldquo;Profits Over Patients: The Harmful Effects of Private Equity on the U.S. Health Care System,&rdquo; January 2025</li>
            <li>LifePoint Health DEFA14A (merger proxy materials), SEC, September 2018</li>
            <li>CNBC, &ldquo;LifePoint Health executives set to score $120 million in payout,&rdquo; September 28, 2018</li>
            <li>Healthcare Dive, Apollo acquisition of LifePoint for $5.6B, July 2018</li>
            <li>Modern Healthcare, &ldquo;LifePoint Health CEO Carpenter to be replaced by Dill,&rdquo; September 26, 2018</li>
            <li>Fierce Healthcare, LifePoint Health and RCCH HealthCare Partners announce completion of merger, November 2018</li>
            <li>Lifepoint Health press release, &ldquo;Lifepoint Health Acquires Eight Hospitals from ScionHealth,&rdquo; June 2, 2026</li>
            <li>Becker&rsquo;s Hospital Review and Modern Healthcare, Lifepoint&ndash;ScionHealth hospital sale, June 2026</li>
            <li>ScionHealth, executive leadership transition announcement, June 2026; Becker&rsquo;s Hospital Review, June 2026</li>
            <li>ScionHealth / Lifepoint Health and Kindred Healthcare, launch of new company, December 2021</li>
            <li>Moody&rsquo;s rating action on Lifepoint Health (via Cbonds), July 26, 2024</li>
            <li>Kannan et al., JAMA, December 2023 (private equity hospital acquisitions and adverse events)</li>
            <li>Reviewed October 2026.</li>
          </ul>
        </div>
      </section>

    </>
  )
}
