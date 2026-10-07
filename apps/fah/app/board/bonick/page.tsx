import type { Metadata } from 'next'
import Link from 'next/link'
import StatBar from '@/components/StatBar'
import DataTable from '@/components/DataTable'

export const metadata: Metadata = {
  title: 'Martin Bonick — Ardent Health | FAH Director (Former Ardent CEO)',
  description:
    'Martin Bonick stepped down as Ardent Health CEO on June 2, 2026; COO Dave Caspers replaced him. Ardent: 21.1% Abu Dhabi state-backed Pure Health stake, $152.9M FY2025 rent to Ventas, 107:1 CEO-to-worker pay ratio, $6.32B FY2025 revenue. His FAH status after departure is unconfirmed.',
  alternates: { canonical: 'https://fah.rojasreport.com/board/bonick' },
  openGraph: {
    type: 'article',
    title: 'Martin Bonick — Ardent Health | FAH Director (Former Ardent CEO)',
    description:
      'Martin Bonick left Ardent Health in June 2026. The company he ran carries a 21.1% Abu Dhabi state-backed stake and $152.9M in annual rent to Ventas.',
    url: 'https://fah.rojasreport.com/board/bonick',
    siteName: 'FAH.RojasReport.com',
  },
}

export default function BonickPage() {
  return (
    <>

      <div className="px-6 py-3 text-xs text-gray-500" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto">
          <Link href="/board" className="hover:text-fah-accent transition-colors">Board</Link>
          <span className="mx-2">/</span>
          <span style={{ color: '#EB6E2C' }}>Martin Bonick</span>
        </div>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#EB6E2C' }}>
            Board Member Dossier
          </p>
          <h1 className="font-headline text-5xl font-bold mb-2" style={{ color: '#f7f4ef' }}>
            Martin Bonick
          </h1>
          <p className="text-xl text-gray-400 mb-1">Former President &amp; CEO, Ardent Health (August 2020 &ndash; June 2, 2026)</p>
          <p className="text-gray-500">FAH Director on the 2026 slate &middot; Previously described as Chair-Elect (unconfirmed) &middot; Board status after June 2026 departure unconfirmed</p>
        </div>
      </section>

      <section className="px-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto">
          <StatBar
            stats={[
              { number: '21.1%', label: 'Abu Dhabi state-backed Pure Health voting stake in Ardent (2026 proxy)' },
              { number: '$152.9M', label: 'FY2025 rent paid to Ventas, a 6.5% shareholder' },
              { number: '107:1', label: 'CEO-to-worker pay ratio, FY2025' },
              { number: '$6.32B', label: 'Ardent FY2025 total revenue' },
            ]}
          />
        </div>
      </section>

      {/* Section 01 — Departure */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>01</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">JUNE 2026</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Out at Ardent</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            On June 2, 2026, Ardent Health announced that Martin Bonick had stepped down as President and CEO &ldquo;to pursue other opportunities&rdquo; after roughly six years in the job. Dave Caspers, Ardent&rsquo;s Chief Operating Officer since March 2025, was appointed President and CEO and a director effective immediately, with an employment agreement running through May 31, 2029. Ardent&rsquo;s CFO told Fierce Healthcare that the &ldquo;surprise CEO change&rdquo; reflected the need for margin focus amid industry headwinds.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Bonick&rsquo;s Separation Agreement and General Release, dated June 26, 2026 and filed with an 8-K, provides severance &ldquo;consistent with termination without Cause&rdquo; under his employment agreement &mdash; two times annual salary plus target bonus, in cash &mdash; together with 12-month non-compete and non-solicit covenants. The exact dollar amount is not stated in the filing summary.
          </p>
          <div
            className="p-5 rounded-lg text-sm text-gray-300"
            style={{
              background: 'rgba(235,110,44,0.08)',
              border: '1px solid rgba(235,110,44,0.2)',
            }}
          >
            <strong style={{ color: '#EB6E2C' }}>FAH status:</strong> FAH&rsquo;s October 2025 announcement of its 2026 board lists Bonick as a director, &ldquo;President &amp; CEO, Ardent Health Services.&rdquo; This site previously described him as FAH Chair-Elect; that officer role has not been confirmed from FAH&rsquo;s 2026 release. FAH board seats are held by member-company executives, and whether Bonick remains on the board, resigned, or has been replaced (for example by Caspers) following his departure from Ardent is unknown as of this review.
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
            Martin (Marty) Bonick was appointed President and CEO of Ardent Health Services effective August 17, 2020, succeeding David T. Vandewater, who retired that year. Ardent&rsquo;s public parent is Ardent Health, Inc. (NYSE: ARDT), renamed from Ardent Health Partners, Inc.; the company went public in July 2024. Ardent has described itself as operating 30 hospitals and more than 200 care sites across six states.
          </p>
          <DataTable
            headers={['Career', 'Organization']}
            rows={[
              ['President & CEO', 'Ardent Health Services / Ardent Health, Inc. (August 2020 – June 2026)'],
              ['CEO', 'PhyMed Healthcare Group'],
              ['Division President', 'Community Health Systems (approximately $4.5 billion portfolio)'],
              ['CEO, Jewish Hospital; SVP Operations', 'Jewish Hospital & St. Mary’s HealthCare, Louisville'],
              ['CEO', 'Oklahoma State University Medical Center'],
              ['VP Operations', 'Hillcrest Medical Center (an Ardent hospital)'],
              ['Education', 'MHA and MIM, Washington University in St. Louis; BS Psychology, University of Illinois Urbana-Champaign'],
            ]}
          />
        </div>
      </section>

      {/* Section 03 — Ownership */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>03</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">OWNERSHIP STRUCTURE</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Ownership Structure</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Ardent is NYSE-listed but controlled. Its April 2026 proxy shows Equity Group Investments (EGI-AM, Sam Zell&rsquo;s investment firm) with 54.0% of voting power and Pure Health, the Abu Dhabi state-backed health group (ADQ/IHC), with 21.1%. That is direct sovereign-linked influence over a major American for-profit hospital system &mdash; and, through Ardent&rsquo;s FAH seat, over the for-profit hospital lobby&rsquo;s legislative priorities.
          </p>
          <DataTable
            headers={['Owner', 'Shares', 'Voting Power', 'Notes']}
            rows={[
              ['EGI-AM (Equity Group Investments)', '77,246,499', '54.0%', 'Sam Zell vehicle; majority control'],
              ['Pure Health (Abu Dhabi)', '30,262,664', '21.1%', 'Abu Dhabi state-backed (ADQ/IHC)'],
              ['ALH Holdings LLC (Ventas)', '9,342,501', '6.5%', 'REIT landlord under the Ventas Master Lease; board-nomination right while holding at least 4% voting power'],
            ]}
          />
        </div>
      </section>

      {/* Section 04 — Related Party Rent */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>04</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">RELATED-PARTY RENT</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>The $152.9M Rent</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Ardent paid $152.9 million in rent to Ventas in fiscal 2025, up from $149.2 million in 2024 and $145.9 million in 2023. Ventas is both landlord and shareholder: it holds 6.5% of Ardent&rsquo;s voting power and a right to nominate a director. The arrangement dates to August 4, 2015, when Ardent sold hospital real estate to Ventas for $1.4 billion and leased it back &mdash; a sale-leaseback executed while Ventas co-owned the operating company with EGI.
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            This is a classic private equity value-extraction mechanism: sell the real estate to a related entity, then pay rent back to that same entity, transferring operating cash flow from the hospital to the investor. The rent is deductible against Ardent&rsquo;s taxable income while providing a reliable, secured return to the landlord.
          </p>
          <DataTable
            headers={['Ventas Master Lease', 'Term']}
            rows={[
              ['Origin', 'August 4, 2015 sale-leaseback, $1.4 billion'],
              ['Lease term', '20 years, with a 10-year renewal option'],
              ['Hospitals currently leased', '10'],
              ['Annual escalator', 'Lesser of 4x CPI or 2.5%'],
              ['Rent expense to Ventas', 'FY2025 $152.9M; FY2024 $149.2M; FY2023 $145.9M'],
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
            headers={['Component (FY2025, 2026 proxy)', 'Amount']}
            rows={[
              ['Bonick total compensation (Summary Compensation Table)', '$6,090,004'],
              ['Median employee compensation', '$56,682'],
              ['CEO-to-worker pay ratio', '107:1'],
              ['Severance on departure (June 2026)', '2x annual salary plus target bonus, in cash; dollar amount not disclosed in filing summary'],
            ]}
          />
          <div
            className="mt-6 p-5 rounded-lg text-sm text-gray-300"
            style={{
              background: 'rgba(235,110,44,0.08)',
              border: '1px solid rgba(235,110,44,0.2)',
            }}
          >
            <strong style={{ color: '#EB6E2C' }}>Note:</strong> Ardent has been a public company since its July 2024 IPO and files full proxy compensation disclosures. The figures above are from the April 2026 proxy statement, covering Bonick&rsquo;s final full year as CEO.
          </div>
        </div>
      </section>

      {/* Section 06 — Financials and Litigation */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>06</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">FINANCIALS AND LITIGATION</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Financials and Litigation</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Ardent reported fiscal 2025 total revenue of $6.32 billion, up 6.0%, with adjusted EBITDA of $545 million, and guided to $6.4&ndash;6.7 billion of revenue for 2026. Fourth-quarter 2025 net income fell to $45 million from $114 million a year earlier. Total debt stood at roughly $1.1 billion at December 31, 2025.
          </p>
          <DataTable
            headers={['Matter', 'Status']}
            rows={[
              ['Securities class action', 'Class period July 18, 2024 – November 12, 2025; alleges failure to disclose material information; lead-plaintiff notices issued February 2026'],
              ['November 2023 ransomware incident', 'Consolidated class action covering approximately 38,000 individuals; settlement agreement October 4, 2024; final-approval hearing August 1, 2025; $25 / $75 per class member plus credit monitoring'],
            ]}
          />
        </div>
      </section>

      {/* Sources */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Sources</h2>
          <ul className="source-list">
            <li>Ardent Health press release, &ldquo;Ardent Health Appoints Dave Caspers as CEO,&rdquo; June 2, 2026</li>
            <li>Ardent Health Form 8-K and Exhibit 10.1 (Separation Agreement and General Release), June 26, 2026</li>
            <li>Ardent Health DEF 14A (definitive proxy statement), April 8, 2026</li>
            <li>Ardent Health Form 10-K for fiscal year 2025, February 2026</li>
            <li>Ardent Health Form 10-Q for the quarter ended March 31, 2026</li>
            <li>Ardent Health, &ldquo;Ardent Health Reports Fourth Quarter 2025 Results&rdquo; (Form 8-K Exhibit 99.1), March 4, 2026</li>
            <li>Ventas Form 8-K Exhibit 99.1, Ardent sale-leaseback announcement, August 2015</li>
            <li>Ardent Health Services, announcement of Martin Bonick as President and CEO, 2020 (via InsuranceNewsNet)</li>
            <li>BusinessWire, &ldquo;Ardent Health Services President &amp; CEO Announces Retirement from Company,&rdquo; February 20, 2020</li>
            <li>Fierce Healthcare, &ldquo;Ardent Health&rsquo;s surprise CEO change reflects need for margin focus amid headwinds, CFO says,&rdquo; June 2026</li>
            <li>Becker&rsquo;s Hospital Review, &ldquo;Ardent Health CEO steps down, COO takes helm,&rdquo; June 2026; Becker&rsquo;s, Ardent CEO-to-worker pay ratio in 2025, 2026</li>
            <li>Healthcare Dive, Ardent names operating chief to top job, June 2026</li>
            <li>Kaplan Fox case page and PR Newswire lead-plaintiff notices, Ardent Health securities class action, February 2026</li>
            <li>Health Evolution and Caduceus Capital speaker/team biographies of Marty Bonick</li>
            <li>FAH, &ldquo;FAH Announces 2026 Chairman and Board of Directors at Annual Membership Meeting,&rdquo; October 2025</li>
            <li>Reviewed October 2026.</li>
          </ul>
        </div>
      </section>

    </>
  )
}
