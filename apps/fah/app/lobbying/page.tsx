import type { Metadata } from 'next'
import StatBar from '@/components/StatBar'
import DataTable from '@/components/DataTable'
import { lobbyingFirms, globalStats } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Lobbying Infrastructure — FAH Intelligence',
  description:
    'FAH spent $3.6 million on federal lobbying in 2025, its highest since 2019, up from about $2.4 million in 2024. Five outside firms, a new CEO out of the Hoyer whip office, a government-relations chief from Merck, and the PAHCF 501(c)(4).',
  alternates: { canonical: 'https://fah.rojasreport.com/lobbying' },
  openGraph: {
    type: 'website',
    title: 'Lobbying Infrastructure — FAH Intelligence',
    description:
      '$3.6M federal lobbying in 2025, highest since 2019. Five outside firms. New leadership. The PAHCF dark-money vehicle.',
    url: 'https://fah.rojasreport.com/lobbying',
    siteName: 'FAH.RojasReport.com',
  },
}

export default function LobbyingPage() {
  return (
    <>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#EB6E2C' }}>
            Lobbying Infrastructure
          </p>
          <h1 className="font-headline text-5xl font-bold mb-4" style={{ color: '#f7f4ef' }}>
            The Machine
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            FAH&rsquo;s lobbying infrastructure: a 50 percent spending surge in 2025, a rebuilt executive team, five outside firms, the revolving door, and the 501(c)(4) that fought the public option.
          </p>
        </div>
      </section>

      <section className="px-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto">
          <StatBar
            stats={[
              { number: globalStats.lobbyingSpend2025, label: 'Federal lobbying spend, 2025 (highest since 2019)' },
              { number: globalStats.lobbyingSpend2024, label: 'Federal lobbying spend, 2024' },
              { number: globalStats.retainedFirms, label: 'Outside lobbying firms (2026)' },
              { number: '~1,000', label: 'Member hospitals' },
              { number: '$2.37M', label: 'Chip Kahn reportable compensation, 2024 (Form 990)' },
            ]}
          />
        </div>
      </section>

      {/* Section 01 — Expenditures */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>01</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">FEDERAL LOBBYING SPEND</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>The 2025 Surge</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            FAH held federal lobbying flat at roughly $2.4 million a year through 2023 and 2024. Then the budget-reconciliation fight over Medicaid provider taxes arrived. Spending in the first quarter of 2025 alone was $1.0 million, more than half the prior year&rsquo;s total, and the full year closed at $3.6 million, the association&rsquo;s highest since 2019.
          </p>
          <DataTable
            headers={['Period', 'Reported lobbying expense', 'Comparison']}
            rows={[
              ['2023 (full year)', '~$2.4M', 'Flat vs. 2024'],
              ['2024 (full year)', '~$2.4M', 'Q1 $650K; Q2 $480K'],
              ['Q1 2025', '$1.0M', '+54% vs. Q1 2024'],
              ['Q2 2025', '$1.1M', 'More than double Q2 2024'],
              ['2025 (full year)', '$3.6M', 'Highest since 2019; +50% vs. 2024'],
              ['Trailing four quarters to mid-2026', '$6.78M', 'Legis1 total including outside-firm income; not comparable to the LDA registrant line above'],
            ]}
          />
          <p className="text-xs text-gray-500 mt-4">
            Sources: Senate Lobbying Disclosure Act filings as reported by Axios Pro (Jan 22, Apr 22 and Jul 22, 2025), Healthcare Dive (May 2026) and Legis1 (Sept 2026). Third-quarter 2026 reports are due October 20, 2026. Full-year 2026 and the 2010–2022 series will be added from the Senate LDA database.
          </p>
        </div>
      </section>

      {/* Section 02 — Outside Firms */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>02</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">OUTSIDE FIRMS</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Outside Lobbying Firms (2026 Registrations)</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Five firms hold active Lobbying Disclosure Act registrations for FAH in 2026, alongside the in-house government-relations team. BGR Government Affairs joined on January 1, 2026. Invariant, which had represented FAH into 2026 without naming a lobbyist on the account for a year, terminated effective July 1, 2026.
          </p>
          <DataTable
            headers={['Firm', 'Status', 'Note']}
            rows={lobbyingFirms.map((f) => [f.firm, f.status, f.note || '—'])}
          />
          <p className="text-xs text-gray-500 mt-4">
            Source: Senate LDA registrations (FAH registrant ID 32635) as compiled by Legis1, Sept 2026. Per-firm contract values are reported quarterly on Form LD-2 and will be added once verified.
          </p>
        </div>
      </section>

      {/* Section 03 — Revolving Door */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>03</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">THE REVOLVING DOOR</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>The Revolving Door</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            FAH&rsquo;s access runs on personnel who have worked both sides. Its president before Chip Kahn, Thomas Scully, left FAH to run Medicare and Medicaid for President Bush, then left CMS for private equity. Kahn came from the House Ways &amp; Means health staff and the insurance lobby. His successor came from the House Democratic whip&rsquo;s office and a Blue Cross plan. The new head of government relations came from Merck.
          </p>
          <DataTable
            headers={['Individual', 'Government role', 'Industry role']}
            rows={[
              ['Thomas Scully', 'CMS Administrator, 2001–2003', 'FAH President &amp; CEO until 2001; then Alston &amp; Bird and Welsh, Carson, Anderson &amp; Stowe'],
              ['Chip Kahn', 'House Ways &amp; Means Health Subcommittee: minority health counsel 1986–93, staff director 1995–98', 'HIAA (ran &ldquo;Harry and Louise&rdquo;) 1993–94 and 1999–2001; FAH President &amp; CEO June 2001 – Dec 31, 2025'],
              ['Charlene MacDonald', 'About a decade of House and Senate staff roles, incl. senior policy advisor to House Minority Whip Steny Hoyer', 'CareFirst BlueCross BlueShield policy and government affairs; FAH EVP Public Affairs 2023–25; FAH President &amp; CEO from Jan 1, 2026'],
              ['Elizabeth Schwartz', '—', 'Merck, Executive Director of U.S. Policy and Government Relations; FAH SVP &amp; Head of Government Relations from May 2026'],
            ]}
          />
        </div>
      </section>

      {/* Section 04 — Chip Kahn Career */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>04</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">CHIP KAHN CAREER TIMELINE</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Chip Kahn: The Double Revolving Door</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Charles N. &ldquo;Chip&rdquo; Kahn III moved from Capitol Hill to the insurance lobby, back to the Hill, back to the insurers, and then ran the for-profit hospital lobby for almost 25 years. He retired from FAH on December 31, 2025. He serves as Secretary of the Partnership for America&rsquo;s Health Care Future.
          </p>
          <DataTable
            headers={['Period', 'Role', 'Significance']}
            rows={[
              ['1974, 1976', 'Campaign manager, Newt Gingrich House campaigns', 'Early Republican political operation'],
              ['1986–1993', 'Minority health counsel, House Ways &amp; Means Health Subcommittee', 'Medicare payment policy from the committee staff'],
              ['1993–1994', 'Executive Vice President, Health Insurance Association of America', 'Ran the &ldquo;Harry and Louise&rdquo; campaign against the Clinton health plan'],
              ['1995–1998', 'Staff Director, House Ways &amp; Means Health Subcommittee', 'HIPAA (1996) and the Balanced Budget Act (1997)'],
              ['1999–2001', 'President, Health Insurance Association of America', 'Second tour at the insurance lobby'],
              ['June 2001 – Dec 2025', 'President &amp; CEO, Federation of American Hospitals', 'FAH authored and defended the Section 6001 physician-owned hospital ban'],
              ['Jan 1, 2026', 'Retired; succeeded by Charlene MacDonald', 'Remains PAHCF Secretary'],
            ]}
          />
          <p className="text-xs text-gray-500 mt-4">
            Sources: Kahn biographies published by KFF, Tulane School of Public Health and USC Schaeffer Center; Healthcare Dive, Dec 2025.
          </p>
        </div>
      </section>

      {/* Section 05 — New Leadership */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>05</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">NEW LEADERSHIP</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>The 2026 Executive Team</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Charlene K. MacDonald became FAH President and CEO on January 1, 2026, after two years as its Executive Vice President for Public Affairs. Within two weeks she had named a new executive team, and in May 2026 she hired a pharmaceutical-industry lobbyist to run government relations as FAH took a public position in favor of CMS&rsquo;s 340B payment restructuring.
          </p>
          <DataTable
            headers={['Name', 'Role', 'Background', 'Announced']}
            rows={[
              ['Charlene K. MacDonald', 'President &amp; CEO', 'FAH EVP Public Affairs (2023–25); CareFirst BCBS; House and Senate staff incl. Hoyer whip office; Harvard Kennedy School MPP', 'Dec 2025, effective Jan 1, 2026'],
              ['Tilithia McBride', 'Chief Operating Officer', '25+ years at FAH; quality, patient safety and public health lead; oversees finance, HR, administration', 'Jan 14, 2026'],
              ['Adam Broder', 'Chief Strategy Officer', 'FAH', 'Jan 14, 2026'],
              ['Alyssa Keefe', 'SVP &amp; Head of Policy', 'FAH', 'Jan 14, 2026'],
              ['Katie Tenoever', 'SVP &amp; General Counsel', 'FAH', 'Jan 14, 2026'],
              ['Elizabeth Schwartz', 'SVP &amp; Head of Government Relations', 'Merck, Executive Director of U.S. Policy and Government Relations; nearly a decade in biopharma advocacy', 'May 2026'],
            ]}
          />
          <p className="text-xs text-gray-500 mt-4">
            Sources: FAH announcements (Dec 2025, Jan 14, 2026, May 2026); Healthcare Dive; Becker&rsquo;s Hospital Review; Modern Healthcare.
          </p>
        </div>
      </section>

      {/* Section 06 — What FAH lobbied on */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>06</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">THE AGENDA, 2025–2026</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>What the Money Bought</h2>
          <DataTable
            headers={['Date', 'Action', 'Position']}
            rows={[
              ['Jul 4, 2025', 'H.R. 1, One Big Beautiful Bill Act, signed (P.L. 119-21)', 'Opposed. Kahn: the health provisions &ldquo;represent the largest cuts to care our country has ever seen.&rdquo; Law bans new state provider taxes and phases existing ones from 6% to 3.5% of net patient revenue; CBO scored provider-tax limits at $191B and state-directed-payment limits at $149B.'],
              ['Sep 15, 2025', 'CY2026 OPPS comment letter to CMS Administrator Oz', 'Opposed site-neutral drug-administration cut'],
              ['May 11, 2026', 'Rural Health Transformation Fund comments', 'Sought access to the $50B fund for taxpaying hospitals'],
              ['Jun 10, 2026', 'House Energy &amp; Commerce Health Subcommittee transparency hearing and markup', '&ldquo;Transparency works when it produces meaningful information for patients.&rdquo; Redirects the issue toward insurer transparency.'],
              ['Jul 21, 2026', 'State Directed Payments proposed rule comments', 'Opposed further SDP restrictions'],
              ['Jul 31, 2026', 'FY2027 IPPS final rule statement', 'Criticized inpatient update'],
              ['Aug 31, 2026', 'CY2027 OPPS comment letter', 'Supported CMS&rsquo;s proposed 340B payment restructuring (FAH analysis: ~78% of hospitals gain, since cuts to 340B hospitals are redistributed to non-340B hospitals like FAH members). Opposed expanded site-neutral provisions.'],
              ['Sep 14, 2026', 'CY2027 Physician Fee Schedule comments', 'Asked CMS to study PFS practice-expense cuts against OPPS site-neutral policy before further site-of-service changes'],
              ['Sep 22, 2026', 'Statement on CMS Marketplace plan announcement', 'Coverage-loss framing'],
            ]}
          />
          <p className="text-xs text-gray-500 mt-4">
            Sources: FAH comment letters and statements published at fah.org; Advisory Board (Jul 7, 2025); Congressional Research Service R48569.
          </p>
        </div>
      </section>

      {/* Section 07 — Form 990 */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>07</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">FORM 990</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Who Pays for the Machine</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            FAH is a 501(c)(6) business league, EIN 13-6226549, funded by member dues from roughly 1,000 investor-owned hospitals. Nearly half its budget is personnel, and executive compensation alone is close to a third of total spending.
          </p>
          <DataTable
            headers={['Form 990, tax year 2024', 'Amount']}
            rows={[
              ['Total revenue', '$17.6M'],
              ['Total expenses', '$17.6M'],
              ['Officer and key-employee compensation', '$5.49M (31% of expenses)'],
              ['Other salaries and wages', '$3.13M (18% of expenses)'],
              ['Charles N. Kahn III, President — reportable compensation', '$2,368,374'],
              ['Kahn — other and related-organization compensation', '$93,587'],
            ]}
          />
          <p className="text-xs text-gray-500 mt-4">
            Source: IRS Form 990 for tax year 2024 via ProPublica Nonprofit Explorer and Instrumentl. Tax year 2025, the first to reflect the leadership transition, is not yet filed.
          </p>
        </div>
      </section>

      {/* Section 08 — PAHCF */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>08</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">PAHCF</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>PAHCF: The Dark Money Vehicle</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            The Partnership for America&rsquo;s Health Care Future (PAHCF) is a 501(c)(4) founded in June 2018 by FAH, AHIP and PhRMA, later joined by the American Hospital Association and the Blue Cross Blue Shield Association. Its purpose was to kill Medicare for All and the public option. Its Form 990s report roughly $33 million in spending from 2018 through 2024, peaking above $10 million in 2021, with no donor disclosure. Chip Kahn is its Secretary. Its member organizations spent $143 million on their own disclosed federal lobbying in 2018 alone, which is the number sometimes misattributed to PAHCF itself.
          </p>
          <DataTable
            headers={['Item', 'Detail']}
            rows={[
              ['Entity', 'Partnership for America&rsquo;s Health Care Future Inc, 501(c)(4), EIN 83-0939222'],
              ['Affiliated entity', 'Partnership for America&rsquo;s Health Care Future Action Inc, EIN 84-3893369 (separate filer, not included in totals)'],
              ['Founded', 'June 2018 by FAH, AHIP and PhRMA'],
              ['FAH role', 'Co-founder; Chip Kahn serves as Secretary'],
              ['Reported spending, 2018–2024', `${globalStats.pahcfDarkMoney} across seven Form 990s (2021 peak: $10.45M)`],
              ['2024 Form 990', 'Revenue $2,140,851; expenses $2,953,060; grants $1,752,326'],
              ['Donor disclosure', 'None required'],
              ['Primary focus', 'Opposing Medicare for All, the public option and single-payer proposals'],
            ]}
          />
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Sources</h2>
          <ul className="source-list">
            <li>Senate Lobbying Disclosure Act filings, FAH registrant ID 32635, as reported by Axios Pro (2025), Healthcare Dive (May 2026), Becker&rsquo;s Hospital Review (2026) and Legis1 (Sept 2026)</li>
            <li>IRS Form 990, Federation of American Hospitals (EIN 13-6226549), tax year 2024</li>
            <li>IRS Form 990, Partnership for America&rsquo;s Health Care Future Inc (EIN 83-0939222), tax years 2018–2024</li>
            <li>FAH press releases and comment letters, fah.org, Sept 2025 – Sept 2026</li>
            <li>Kahn biographies: KFF (2011), Tulane School of Public Health, USC Schaeffer Center</li>
            <li>Government Executive, Apr 2004 (Scully); Healthcare Dive, Dec 2025 and May 2026; Modern Healthcare, 2026</li>
            <li>Data reviewed October 2026. Third-quarter 2026 LDA reports due October 20, 2026.</li>
          </ul>
        </div>
      </section>

    </>
  )
}
