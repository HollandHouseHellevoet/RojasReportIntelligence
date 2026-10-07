import type { Metadata } from 'next'
import Link from 'next/link'
import StatBar from '@/components/StatBar'
import DataTable from '@/components/DataTable'

export const metadata: Metadata = {
  title: 'Rob Jay — ScionHealth / Apollo | FAH Director',
  description:
    "Rob Jay, founding CEO of Apollo-backed ScionHealth, became Executive Chairman June 10, 2026. Moody's cut the LTACH operator to Caa3 in 2025; three hospitals closed in February 2025; $189M Ventas sale-leaseback plus an $80M-a-year master lease; eight hospitals sold to sister company Lifepoint in June 2026.",
  alternates: { canonical: 'https://fah.rojasreport.com/board/jay' },
  openGraph: {
    type: 'article',
    title: 'Rob Jay — ScionHealth / Apollo | FAH Director',
    description:
      "Caa3 Moody's rating. 3 hospital closures. $189M Ventas sale-leaseback; $80M annual master-lease rent. 8 hospitals sold to Lifepoint, June 2026.",
    url: 'https://fah.rojasreport.com/board/jay',
    siteName: 'FAH.RojasReport.com',
  },
}

export default function JayPage() {
  return (
    <>

      <div className="px-6 py-3 text-xs text-gray-500" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto">
          <Link href="/board" className="hover:text-fah-accent transition-colors">Board</Link>
          <span className="mx-2">/</span>
          <span style={{ color: '#EB6E2C' }}>Rob Jay</span>
        </div>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#EB6E2C' }}>
            Board Member Dossier
          </p>
          <h1 className="font-headline text-5xl font-bold mb-2" style={{ color: '#f7f4ef' }}>
            Rob Jay
          </h1>
          <p className="text-xl text-gray-400 mb-1">Executive Chairman, ScionHealth (CEO 2021 &ndash; June 2026)</p>
          <p className="text-gray-500">FAH Director (2026 slate) &middot; Apollo Global Management Portfolio</p>
          <div
            className="mt-6 p-5 rounded-lg text-sm text-gray-300"
            style={{
              background: 'rgba(235,110,44,0.08)',
              border: '1px solid rgba(235,110,44,0.2)',
            }}
          >
            <strong style={{ color: '#EB6E2C' }}>Leadership change:</strong> On June 10, 2026, ScionHealth named CFO Doug Shirley as CEO and moved Jay, its founding CEO, to Executive Chairman. FAH&rsquo;s 2026 board announcement (October 2025) listed Jay as a Director in his capacity as ScionHealth&rsquo;s Chief Executive Officer. Whether he retains his FAH seat after ceding the CEO title has not been confirmed.
          </div>
        </div>
      </section>

      <section className="px-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto">
          <StatBar
            stats={[
              { number: 'Caa3', label: "Moody's rating after 2025 downgrade from Caa2" },
              { number: '3', label: 'LTACHs closed Feb 2025 (300+ jobs)' },
              { number: '$189M', label: 'Ventas sale-leaseback of 5 LTACs (Sept 2024)' },
              { number: '$80M', label: 'Initial annual rent, 23-LTAC Ventas master lease (from May 2025)' },
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
            Rob Jay was the founding CEO of ScionHealth, the long-term acute care hospital (LTACH) company Apollo Global Management created in December 2021 by combining Kindred Healthcare&rsquo;s LTACHs with a group of Lifepoint Health community hospitals. ScionHealth launched with 79 hospitals across 25 states. After closures and the 2026 sale of eight community hospitals back to Lifepoint, it operates 62 long-term acute care hospitals and 6 short-term acute care community hospital campuses in 23 states. Jay and David Dill (Lifepoint) represent Apollo&rsquo;s dual presence on the FAH board.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            ScionHealth carries a Caa3 credit rating from Moody&rsquo;s, which downgraded the company from Caa2 in 2025 citing weak liquidity that elevates the probability of default and lowers expected recovery. Jay was named to Becker&rsquo;s 2026 &ldquo;Great Leaders in Healthcare&rdquo; list in April 2026, with the company describing 2025 as its &ldquo;strongest year yet in quality accolades and business performance.&rdquo;
          </p>
        </div>
      </section>

      {/* Section 02 — Leadership Transition */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>02</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">LEADERSHIP TRANSITION</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>From CEO to Executive Chairman</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            ScionHealth announced an executive leadership transition on June 10, 2026. Doug Shirley, the company&rsquo;s CFO since April 2025 and formerly CFO of Surgery Partners and PathGroup, became CEO. Jay, CEO since the company&rsquo;s 2021 launch, became Executive Chairman. The FAH board is composed of the chief executives of member companies, and FAH listed Jay on its 2026 slate as ScionHealth&rsquo;s CEO; his status following the change is unconfirmed.
          </p>
          <DataTable
            headers={['Role', 'Before June 10, 2026', 'After June 10, 2026']}
            rows={[
              ['Chief Executive Officer', 'Rob Jay (founding CEO, 2021)', 'Doug Shirley (CFO since Apr 2025; ex-CFO Surgery Partners, PathGroup)'],
              ['Executive Chairman', '—', 'Rob Jay'],
              ['FAH board seat', 'Director (as ScionHealth CEO, 2026 slate)', 'Unconfirmed'],
            ]}
          />
        </div>
      </section>

      {/* Section 03 — Financial Distress */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>03</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">FINANCIAL DISTRESS</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Financial Distress and the Ventas Deals</h2>
          <div
            className="p-5 rounded-lg text-sm text-gray-300 mb-6"
            style={{
              background: 'rgba(235,110,44,0.08)',
              border: '1px solid rgba(235,110,44,0.2)',
            }}
          >
            <strong style={{ color: '#EB6E2C' }}>Moody&rsquo;s on ScionHealth:</strong> The 2025 downgrade to Caa3 cited weak liquidity that elevates the probability of default and lowers expected recovery, with elevated financial expenses expected to keep pressuring cash flow and liquidity. Caa3 obligations are judged to be of poor standing and subject to very high credit risk.
          </div>
          <p className="text-gray-300 mb-6 leading-relaxed">
            In September 2024, ScionHealth subsidiary Kindred sold five LTACs to the REIT Ventas for $189 million and leased them back. That sale-leaseback carries initial annual cash rent of $16 million, escalating 2.75 percent a year over a 10-year initial term, and was folded into the existing Kindred Master Lease. Separately, the master lease covering 23 LTACs was reset at an initial annualized base rent of $80 million effective May 1, 2025, escalating 2.75 percent a year through April 30, 2030, plus revenue-sharing rent. As part of the agreements, ScionHealth granted Ventas warrants for 9.9 percent of its common equity.
          </p>
          <DataTable
            headers={['Metric', 'Detail']}
            rows={[
              ["Moody's credit rating", 'Caa3 (downgraded from Caa2, 2025)'],
              ['Ventas sale-leaseback (Sept 2024)', '5 LTACs sold for $189,000,000; initial rent $16,000,000/yr, +2.75%/yr, 10-year initial term'],
              ['Kindred Master Lease (23 LTACs)', 'Initial base rent $80,000,000/yr from May 1, 2025; +2.75%/yr through Apr 30, 2030; plus revenue-sharing rent'],
              ['Equity granted to Ventas', 'Warrants for 9.9% of ScionHealth common equity'],
              ['Business type', 'Long-term acute care hospitals (LTACHs); 6 community hospital campuses'],
            ]}
          />
        </div>
      </section>

      {/* Section 04 — Hospital Closures */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>04</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">HOSPITAL CLOSURES</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Three Closures, 300+ Jobs</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            In February 2025, ScionHealth announced the permanent closure of three Kindred LTACHs: Kindred Hospital Sycamore (DeKalb County, Illinois), Kindred Hospital Lakeshore (Chicago) and Kindred Hospital Bay Area (Tampa). More than 300 workers were laid off; the Sycamore WARN notice covered 83 employees and the Tampa hospital employed 143. The former Sycamore building went to auction in December 2024 and was the subject of a $10.7 million redevelopment proposal in May 2026.
          </p>
          <DataTable
            headers={['Hospital', 'Location', 'Status']}
            rows={[
              ['Kindred Hospital Sycamore', 'DeKalb County, IL', 'Closed, Feb 2025 (WARN notice: 83 employees)'],
              ['Kindred Hospital Lakeshore', 'Chicago, IL', 'Closed, Feb 2025'],
              ['Kindred Hospital Bay Area', 'Tampa, FL', 'Closed, Feb 2025 (143 employees)'],
            ]}
          />
        </div>
      </section>

      {/* Section 05 — Lifepoint Re-Acquisitions */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>05</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">LIFEPOINT RE-ACQUISITIONS</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>8 Hospitals Sold Back to Lifepoint</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Apollo partly reversed the 2021 ScionHealth/Lifepoint split. Under an agreement signed March 6, 2026 and closed June 2, 2026, Lifepoint Health acquired eight ScionHealth community hospitals in Mississippi, Texas, Tennessee, West Virginia, Idaho and Wisconsin, bringing Lifepoint to 68 community hospital campuses. The consideration was not disclosed. The intra-Apollo transaction shifted assets from the weaker ScionHealth balance sheet to the better-capitalized Lifepoint platform &mdash; private equity managing portfolio companies as fungible assets rather than community institutions.
          </p>
          <DataTable
            headers={['Hospital', 'Location']}
            rows={[
              ['Bolivar Medical Center', 'Cleveland, MS'],
              ['Ennis Regional', 'Ennis, TX'],
              ['Livingston Regional', 'Livingston, TN'],
              ['Logan Regional', 'Logan, WV'],
              ['Palestine Regional', 'Palestine, TX'],
              ['Parkview Regional', 'Mexia, TX'],
              ['St. Joseph Regional', 'Lewiston, ID'],
              ['Watertown Regional', 'Watertown, WI'],
            ]}
          />
        </div>
      </section>

      {/* Sources */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Sources</h2>
          <ul className="source-list">
            <li>ScionHealth, &ldquo;ScionHealth Announces Executive Leadership Transition,&rdquo; June 10, 2026; Becker&rsquo;s Hospital Review, &ldquo;CFOs taking the helm at 3 large health systems,&rdquo; June 2026</li>
            <li>FAH, &ldquo;FAH Announces 2026 Chairman and Board of Directors at Annual Membership Meeting,&rdquo; October 2025</li>
            <li>ScionHealth press releases on the Lifepoint&ndash;Kindred combination and the company&rsquo;s launch, December 2021; scionhealth.com footprint statement, 2026</li>
            <li>Becker&rsquo;s Hospital Review, health system rating downgrades roundup citing Moody&rsquo;s downgrade of ScionHealth to Caa3 from Caa2, 2025</li>
            <li>Ventas, Inc., &ldquo;Ventas Reaches Agreements with Kindred and ScionHealth,&rdquo; September 18, 2024; GlobeSt, &ldquo;Ventas Buys 5 Long-Term Acute Care Hospitals for $189M,&rdquo; September 18, 2024</li>
            <li>Private Equity Stakeholder Project, &ldquo;Apollo-owned ScionHealth quietly sells and leases back 5 hospitals&rdquo; (2024) and &ldquo;Apollo-owned hospitals close amid declining financial condition&rdquo; (2025)</li>
            <li>Chief Healthcare Executive and Shaw Local / Daily Chronicle (February 26, 2025) on the Sycamore, Lakeshore and Bay Area closures and WARN notice; Daily Chronicle, May 23, 2026, on the Sycamore redevelopment proposal</li>
            <li>Lifepoint Health, &ldquo;Lifepoint Health Acquires Eight Hospitals from ScionHealth,&rdquo; June 2, 2026; ScionHealth, &ldquo;Completion of Hospital Transaction with Lifepoint Health,&rdquo; June 2026; Becker&rsquo;s, Modern Healthcare and Fierce Healthcare coverage, March&ndash;June 2026</li>
            <li>ScionHealth, &ldquo;Rob Jay named to Becker&rsquo;s Great Leaders in Healthcare 2026,&rdquo; April 2026</li>
            <li>Reviewed October 2026.</li>
          </ul>
        </div>
      </section>

    </>
  )
}
