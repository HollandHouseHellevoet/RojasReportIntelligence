import type { Metadata } from 'next'
import Link from 'next/link'
import StatBar from '@/components/StatBar'
import DataTable from '@/components/DataTable'

export const metadata: Metadata = {
  title: 'Mark Tarr — Encompass Health | FAH Board',
  description:
    'Mark Tarr has run Encompass Health, the largest US inpatient rehabilitation operator, since December 2016. FY2025 revenue $5.94B, 173 hospitals in 39 states and Puerto Rico, ~82% of revenue from Medicare and Medicare Advantage, a $48M 2019 False Claims Act settlement, and a 203:1 CEO-to-worker pay ratio.',
  alternates: { canonical: 'https://fah.rojasreport.com/board/tarr' },
  openGraph: {
    type: 'article',
    title: 'Mark Tarr — Encompass Health | FAH Board',
    description:
      '$5.94B FY2025 revenue. ~82% of revenue from Medicare and Medicare Advantage. $48M 2019 False Claims Act settlement. 203:1 pay ratio.',
    url: 'https://fah.rojasreport.com/board/tarr',
    siteName: 'FAH.RojasReport.com',
  },
}

export default function TarrPage() {
  return (
    <>

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
          <p className="text-gray-500">FAH Director (2026 slate); listed here as Treasurer &mdash; officer role not independently confirmed</p>
        </div>
      </section>

      <section className="px-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto">
          <StatBar
            stats={[
              { number: '$5.94B', label: 'FY2025 net operating revenue' },
              { number: '82%', label: 'Revenue from Medicare + Medicare Advantage (FY2025)' },
              { number: '$48M', label: '2019 False Claims Act settlement (DOJ)' },
              { number: '203:1', label: 'CEO-to-median-worker pay ratio (FY2025)' },
            ]}
          />
        </div>
      </section>

      {/* Section 01 — FY2025 Results */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>01</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">2025&ndash;2026 UPDATE</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>FY2025: Record Revenue, Growing Footprint</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Encompass Health closed 2025 with net operating revenue of $5,935.2 million, up 10.5%, and adjusted EBITDA of $1,267.9 million, up 14.9%. Net income attributable to the company was $566.2 million; adjusted earnings per share were $5.45 and free cash flow was $817.9 million. Fourth-quarter revenue was $1,544.6 million (up 9.9%) on $203.1 million of net income, with discharges up 5.3% and revenue per discharge of $22,273.
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            The company ended the year with roughly $2.49 billion of total debt and 173 hospitals in 39 states and Puerto Rico, up from the 163 hospitals in 37 states previously reported on this page.
          </p>
          <DataTable
            headers={['Metric (FY2025)', 'Value']}
            rows={[
              ['Net operating revenue', '$5,935.2M (+10.5%)'],
              ['Adjusted EBITDA', '$1,267.9M (+14.9%)'],
              ['Net income attributable to Encompass Health', '$566.2M'],
              ['Adjusted EPS', '$5.45'],
              ['Free cash flow', '$817.9M'],
              ['Total debt (Dec 31, 2025)', '~$2.49B ($43.6M current + $2,447.2M long-term)'],
              ['Hospitals (Dec 31, 2025)', '173 in 39 states and Puerto Rico'],
            ]}
          />
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
            Mark Tarr was named President and CEO of Encompass Health in December 2016, succeeding Jay Grinney, who retired at the end of that year. Encompass Health is the largest owner and operator of inpatient rehabilitation facilities (IRFs) in the United States. The company was known as HealthSouth Corporation until it rebranded as Encompass Health on January 1, 2018.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Tarr is a career HealthSouth executive. He joined the company in 1993 after running its Vero Beach rehabilitation hospital (1992&ndash;94), then served as Nashville director of operations (1994&ndash;97), senior vice president of inpatient operations (1997&ndash;2004), president of the inpatient division (2004), executive vice president of operations (2007) and chief operating officer (2011&ndash;16) before becoming CEO.
          </p>
        </div>
      </section>

      {/* Section 03 — HealthSouth Fraud History */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>03</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">HEALTHSOUTH HISTORY</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>HealthSouth Fraud History</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            HealthSouth Corporation, Encompass Health&rsquo;s predecessor, was the subject of a $2.7 billion accounting fraud executed under former CEO Richard Scrushy and exposed in March 2003. Scrushy was acquitted of federal criminal charges in 2005 but later convicted on unrelated bribery charges. The company paid significant settlements related to the fraud era.
          </p>
          <div
            className="p-5 rounded-lg text-sm text-gray-300"
            style={{
              background: 'rgba(235,110,44,0.08)',
              border: '1px solid rgba(235,110,44,0.2)',
            }}
          >
            <strong style={{ color: '#EB6E2C' }}>Correction:</strong> An earlier version of this page said Tarr joined HealthSouth after the fraud was discovered. That was wrong. Tarr joined HealthSouth in 1993 and was its senior vice president of inpatient operations (1997&ndash;2004) when the fraud came to light in 2003. He was a regional operations executive during the fraud era and was not implicated in the fraud. He later led the company&rsquo;s January 2018 rebranding to Encompass Health as part of its effort to move past the HealthSouth name.
          </div>
        </div>
      </section>

      {/* Section 04 — DOJ Settlement */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>04</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">DOJ SETTLEMENT</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>$48 Million False Claims Act Settlement (2019)</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            On June 28, 2019, Encompass Health agreed to pay $48 million to resolve Department of Justice allegations, dating from 2007, that some of its inpatient rehabilitation facilities falsely diagnosed patients with &ldquo;disuse myopathy&rdquo; to keep their IRF status and higher Medicare rates, and admitted patients who were not eligible for inpatient rehabilitation. The settlement resolved three whistleblower (qui tam) suits brought by relators in Sarasota, Florida (Simon), Arlington, Texas (Higgins) and Richmond, Virginia (Clarke); the lead case was <em>U.S. ex rel. Simon v. HealthSouth Corp.</em> in the Middle District of Florida. The whistleblowers shared $12.4 million.
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            The investigation began with HHS Office of Inspector General subpoenas on March 4, 2013 (four hospitals) and April 24, 2014 (seven more). The company denied wrongdoing, admitted no liability and was not placed under a corporate integrity agreement.
          </p>
          <DataTable
            headers={['Case', 'Amount', 'Allegation']}
            rows={[
              ['U.S. ex rel. Simon v. HealthSouth Corp. (M.D. Fla.) and two related qui tam suits', '$48,000,000 (June 28, 2019)', 'Alleged false IRF diagnoses and ineligible admissions; False Claims Act; no admission of liability'],
            ]}
          />
        </div>
      </section>

      {/* Section 05 — Medicare Dependency */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>05</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">MEDICARE DEPENDENCY</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Medicare Dependency</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            In FY2025, traditional Medicare fee-for-service accounted for 65.4% of Encompass Health&rsquo;s revenue; Medicare and Medicare Advantage together accounted for roughly 82%. The mix held in the second quarter of 2026 (Medicare 65.8%, Medicare Advantage 16.2%). This concentration makes the company extraordinarily sensitive to changes in Medicare IRF payment rates, and it explains why Tarr, as an FAH board member, has a direct financial stake in opposing site-neutral payment reforms.
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            An earlier version of this page cited a &ldquo;$280 million&rdquo; CMS estimate of Encompass Health&rsquo;s site-neutral exposure. No company-specific CMS estimate could be located, and that figure has been removed. What does exist is MedPAC&rsquo;s industry-wide analysis, which estimated that site-neutral payment for select IRF conditions would lower total IRF payments by roughly $300 million (about 4%), or about $240 million under a SNF-based alternative. Those figures cover the whole IRF sector, not Encompass Health alone.
          </p>
          <DataTable
            headers={['Metric', 'Value']}
            rows={[
              ['Medicare fee-for-service as % of revenue (FY2025)', '65.4%'],
              ['Medicare + Medicare Advantage as % of revenue (FY2025)', '~82%'],
              ['Medicare / Medicare Advantage (Q2 2026)', '65.8% / 16.2% (82.0% combined)'],
              ['MedPAC estimated sector-wide IRF payment reduction from site-neutral policy', '~$300M (~4%); ~$240M under SNF-based alternative'],
              ['IRF hospitals operated (Dec 31, 2025)', '173 in 39 states and Puerto Rico'],
            ]}
          />
        </div>
      </section>

      {/* Section 06 — Compensation */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>06</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">COMPENSATION</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Compensation (FY2025)</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Encompass Health&rsquo;s April 2026 proxy statement reported total 2025 compensation for Tarr of $10,297,258 against a median employee&rsquo;s $50,647 &mdash; a ratio of 203 to 1. The company noted that roughly 43% of its workforce is part-time.
          </p>
          <DataTable
            headers={['Component (2025)', 'Amount']}
            rows={[
              ['Salary', '$1,100,000'],
              ['Stock awards', '$5,285,381'],
              ['Option awards', '$1,165,376'],
              ['Non-equity incentive plan compensation', '$2,581,525'],
              ['All other compensation', '$164,976'],
              ['Total', '$10,297,258'],
              ['Median employee compensation', '$50,647'],
              ['CEO-to-median-worker pay ratio', '203:1'],
            ]}
          />
        </div>
      </section>

      {/* Sources */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Sources</h2>
          <ul className="source-list">
            <li>Encompass Health Corp., Form 10-K for the fiscal year ended December 31, 2025 (SEC, filed February 2026) &mdash; hospital count, payer mix, debt</li>
            <li>Encompass Health Corp., fourth-quarter and full-year 2025 earnings release and Form 8-K exhibit (February 2026)</li>
            <li>Encompass Health Corp., Definitive Proxy Statement (DEF 14A), filed April 6, 2026 &mdash; 2025 compensation and pay ratio</li>
            <li>Encompass Health Corp., Form 10-Q for the quarter ended June 30, 2026 (SEC, August 2026) &mdash; Q2 2026 payer mix</li>
            <li>Encompass Health Corp., Form 10-K for the fiscal year ended December 31, 2019 &mdash; OIG subpoena history (2013, 2014)</li>
            <li>US Department of Justice, Office of Public Affairs and US Attorney&rsquo;s Office, Middle District of Florida, &ldquo;Encompass Health Agrees to Pay $48 Million to Resolve False Claims Act Allegations Relating to Its Inpatient Rehabilitation Facilities,&rdquo; June 28, 2019; HHS-OIG enforcement notice</li>
            <li>Encompass Health newsroom, &ldquo;Encompass Health Settles DOJ Investigation and Related Qui Tam Lawsuits,&rdquo; June 2019</li>
            <li>MedPAC, Report to the Congress, Chapter 6, &ldquo;Site-neutral payments for select conditions treated in inpatient rehabilitation facilities&rdquo;; MedPAC March report highlight on IRF/SNF site-neutral payment</li>
            <li>Encompass Health, company leadership biography of Mark J. Tarr; HealthSouth news release, &ldquo;HealthSouth Chief Executive Officer Jay Grinney to Retire at Year-End 2016&rdquo; (2016)</li>
            <li>Federation of American Hospitals, &ldquo;FAH Announces 2026 Chairman and Board of Directors at Annual Membership Meeting&rdquo; (October 2025); FAH board of directors page</li>
            <li>Reviewed October 2026.</li>
          </ul>
        </div>
      </section>

    </>
  )
}
