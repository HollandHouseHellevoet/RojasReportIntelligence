import type { Metadata } from 'next'
import Link from 'next/link'
import StatBar from '@/components/StatBar'
import DataTable from '@/components/DataTable'

export const metadata: Metadata = {
  title: 'Samuel Hazen — HCA Healthcare | FAH Director',
  description:
    'Samuel Hazen leads HCA Healthcare, the largest for-profit hospital system in the world: $75.6B FY2025 revenue, $46.5B in debt, $26.5M 2025 compensation and a 420:1 pay ratio. HCA paid ~$1.7B in federal fraud settlements in 2000–2003, the largest in US health care at the time.',
  alternates: { canonical: 'https://fah.rojasreport.com/board/hazen' },
  openGraph: {
    type: 'article',
    title: 'Samuel Hazen — HCA Healthcare | FAH Director',
    description:
      '$75.6B FY2025 revenue. $26.5M 2025 compensation. 420:1 pay ratio. ~$1.7B federal fraud settlements (2000–2003), the largest in US health care at the time.',
    url: 'https://fah.rojasreport.com/board/hazen',
    siteName: 'FAH.RojasReport.com',
  },
}

export default function HazenPage() {
  return (
    <>

      <div className="px-6 py-3 text-xs text-gray-500" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto">
          <Link href="/board" className="hover:text-fah-accent transition-colors">Board</Link>
          <span className="mx-2">/</span>
          <span style={{ color: '#EB6E2C' }}>Samuel Hazen</span>
        </div>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#EB6E2C' }}>
            Board Member Dossier
          </p>
          <h1 className="font-headline text-5xl font-bold mb-2" style={{ color: '#f7f4ef' }}>
            Samuel Hazen
          </h1>
          <p className="text-xl text-gray-400 mb-1">CEO, HCA Healthcare</p>
          <p className="text-gray-500">FAH Director</p>
        </div>
      </section>

      <section className="px-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto">
          <StatBar
            stats={[
              { number: '$75.6B', label: 'HCA FY2025 revenue' },
              { number: '$26.5M', label: 'Hazen total 2025 compensation' },
              { number: '420:1', label: 'CEO-to-median-worker pay ratio (2025)' },
              { number: '$1.7B', label: 'Federal fraud settlements, 2000–2003 (largest in US health care at the time)' },
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
            Samuel Hazen became CEO of HCA Healthcare on January 1, 2019, after serving as President and Chief Operating Officer since 2016. HCA is the largest for-profit hospital operator in the world. At December 31, 2025 it ran 190 hospitals (179 general acute-care, 7 behavioral and 4 rehabilitation), about 2,500 ambulatory sites of care including 121 freestanding surgery centers and 31 freestanding endoscopy centers, in 19 US states and England.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Hazen&rsquo;s career began in 1983 in Humana&rsquo;s Financial Management Specialist Program; Humana&rsquo;s hospital business later became part of Columbia/HCA. Testifying before Congress on April 28, 2026, he said he had been with the company for 43 years &mdash; a span covering the fraud settlements of 2000 and 2003, the 2006 leveraged buyout, the 2011 re-IPO and HCA&rsquo;s growth into the dominant for-profit hospital system in the country.
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            HCA reported FY2025 revenue of $75.6 billion, up 7.1% from $70.6 billion in 2024, and net income attributable to HCA of $6.8 billion, up 17.8%. Fourth-quarter 2025 net income was $1.878 billion ($8.14 per diluted share) against $1.438 billion a year earlier. Total debt stood at $46.5 billion at year-end 2025.
          </p>
          <DataTable
            headers={['Metric (FY2025)', 'Value']}
            rows={[
              ['Revenue', '$75.6B (+7.1%; FY2024: $70.6B)'],
              ['Net income attributable to HCA', '$6.8B (+17.8%)'],
              ['Q4 2025 net income', '$1.878B ($8.14/diluted share) vs $1.438B in Q4 2024'],
              ['Total debt (Dec 31, 2025)', '$46.5B'],
              ['Hospitals (Dec 31, 2025)', '190 in 19 states and England'],
              ['Ambulatory sites of care', '~2,500, incl. 121 freestanding ASCs and 31 endoscopy centers'],
            ]}
          />
        </div>
      </section>

      {/* Section 02 — Congressional testimony */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>02</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">2026 TESTIMONY</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Before Ways &amp; Means, April 2026</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            On April 28, 2026, Hazen testified at the House Ways and Means Committee&rsquo;s &ldquo;Full Committee Hearing with Health System CEOs&rdquo; in 1100 Longworth, alongside Wright Lassiter III of CommonSpirit Health, Dr. Brian Donley of NewYork-Presbyterian, Dr. Michael Waldrum of ECU Health and Brad Woodhouse of Protect Our Care. He told the committee HCA had provided $4.5 billion in uncompensated and charity care in the prior year, and called for stable insurance coverage, repeal of certificate-of-need laws and less administrative complexity.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Trade press coverage of the hearing reported that the hospital CEOs signaled agreement on a &ldquo;rational&rdquo; reworking of site-neutral payments &mdash; the policy FAH has lobbied against for years, and one that bears directly on HCA&rsquo;s hospital-based outpatient revenue.
          </p>
        </div>
      </section>

      {/* Section 03 — Fraud History */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>03</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">FRAUD SETTLEMENTS</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>The Largest Health Care Fraud Settlement of Its Time</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            HCA paid roughly $1.7 billion in federal fraud settlements in two tranches: $840 million in December 2000 and $881 million in June 2003. It was the largest health care fraud settlement in US history at the time; later settlements, notably in the pharmaceutical industry, have since exceeded it. The settlements resolved allegations of systematic Medicare and Medicaid billing fraud across HCA&rsquo;s hospital network, including improper cost reports, kickbacks to physicians and fraudulent billing for laboratory tests.
          </p>
          <DataTable
            headers={['Year', 'Amount', 'Allegation']}
            rows={[
              ['December 2000', '$840,000,000', 'Medicare cost report fraud, kickbacks to physicians, fraudulent lab billing'],
              ['June 2003', '$881,000,000', 'Additional billing fraud, improper cost reports'],
              ['Total', '~$1,700,000,000', 'Largest health care fraud settlement in US history at the time'],
            ]}
          />
        </div>
      </section>

      {/* Section 04 — PE History */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>04</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">PRIVATE EQUITY HISTORY</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>The $33 Billion Leveraged Buyout</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            In 2006, a consortium of Bain Capital, KKR and Merrill Lynch Global Private Equity, together with Dr. Thomas F. Frist Jr. and company management, took HCA private in a $33 billion leveraged buyout including debt &mdash; the largest LBO in history at the time. The agreement was reached in July 2006 and closed on November 17, 2006. In 2010 alone, while still private, HCA paid its sponsors $4.25 billion in dividend recapitalizations. The company returned to the New York Stock Exchange in March 2011, pricing 126.2 million shares at $30 to raise about $3.79 billion, then the largest private-equity-backed IPO in US history.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            An earlier version of this page named Apollo Global Management as a sponsor of the 2006 buyout. Apollo was not a sponsor; that reference has been removed.
          </p>
          <DataTable
            headers={['Event', 'Date', 'Detail']}
            rows={[
              ['LBO take-private', 'Agreed July 2006; closed Nov 17, 2006', '$33 billion incl. debt; Bain Capital, KKR, Merrill Lynch Global Private Equity, Dr. Thomas F. Frist Jr. and management'],
              ['Dividend recapitalizations', '2010', '$4.25 billion to sponsors: $1.75B (January), $500M (May), $2.0B (November)'],
              ['Re-IPO on NYSE', 'March 2011', '126.2M shares at $30, ~$3.79B raised; trading began March 10, 2011'],
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
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Compensation 2024&ndash;2025</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            HCA&rsquo;s 2026 proxy statement reported total 2025 compensation for Hazen of $26,456,606, up from $23.8 million in 2024. The company&rsquo;s median employee earned $62,955 across 316,971 active employees, putting the CEO pay ratio at 420 to 1, up from 391 to 1 the year before.
          </p>
          <DataTable
            headers={['Item', 'Value']}
            rows={[
              ['2024 total compensation', '$23,800,000'],
              ['2024 median employee / pay ratio', '$60,820 / 391:1'],
              ['2025 salary', '$1,600,000'],
              ['2025 stock awards', '$8,500,000'],
              ['2025 option awards', '$8,500,000'],
              ['2025 non-equity incentive plan compensation', '$5,400,000'],
              ['2025 change in pension value / deferred compensation', '$1,900,000'],
              ['2025 all other compensation', '$539,026'],
              ['2025 total compensation', '$26,456,606'],
              ['2025 median employee / pay ratio', '$62,955 / 420:1 (316,971 active employees)'],
            ]}
          />
        </div>
      </section>

      {/* Section 06 — Legal and regulatory 2025 */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>06</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">LEGAL &amp; REGULATORY</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>2025 Settlements: Data Breach and Nurse &ldquo;Stay-or-Pay&rdquo; Contracts</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            As reported in November 2025, the court gave final approval to HCA&rsquo;s settlement of the class action over its 2023 data breach, which affected roughly 11 million patients. Class members may claim up to $5,000 in documented losses plus a year of credit monitoring; the total settlement fund has not been verified for this page.
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Also in 2025, HCA settled with three state attorneys general over training-repayment agreement provisions (&ldquo;TRAPs&rdquo;) that required nurses to repay training costs if they left before a set period. California Attorney General Rob Bonta announced a $1.53 million settlement with HCA Healthcare Inc. and its HealthTrust Workforce Solutions unit, of which $1,162,900 went to the state. Colorado Attorney General Phil Weiser announced on July 24, 2025 that HCA would pay nearly $1.4 million, including more than $400,000 in restitution, and end its TRAP policies. In Nevada, HCA paid roughly $75,776 in restitution and a $786,500 penalty.
          </p>
          <DataTable
            headers={['Matter', 'Date', 'Outcome']}
            rows={[
              ['2023 data breach class action (~11M patients)', 'Final approval Nov 2025', 'Up to $5,000 documented losses per claimant plus one year credit monitoring; fund size not verified'],
              ['California AG — nurse TRAP settlement', '2025', '$1.53M (HCA Healthcare Inc. and HealthTrust Workforce Solutions); $1,162,900 to the state'],
              ['Colorado AG — nurse TRAP settlement', 'July 24, 2025', 'Nearly $1.4M incl. >$400K restitution; HCA to end TRAP policies'],
              ['Nevada — nurse TRAP settlement', '2025', '~$75,776 restitution + $786,500 penalty'],
            ]}
          />
        </div>
      </section>

      {/* Sources */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Sources</h2>
          <ul className="source-list">
            <li>HCA Healthcare, Inc., Form 10-K for the fiscal year ended December 31, 2025 (SEC, February 2026) &mdash; facilities, revenue, debt</li>
            <li>HCA Healthcare, &ldquo;HCA Healthcare Reports Fourth Quarter 2025 Results and Provides 2026 Guidance,&rdquo; January 2026; Becker&rsquo;s Hospital Review, &ldquo;HCA net income up nearly 18% in 2025&rdquo;</li>
            <li>HCA Healthcare, Inc., Definitive Proxy Statement (DEF 14A), April 2026 &mdash; 2025 compensation and pay ratio; Becker&rsquo;s Hospital Review, &ldquo;HCA&rsquo;s CEO-to-worker pay ratio widens in 2025&rdquo;</li>
            <li>US House Committee on Ways and Means, &ldquo;Full Committee Hearing with Health System CEOs,&rdquo; April 28, 2026 &mdash; Hazen written testimony, witness biography and hearing transcript; Fierce Healthcare and Healthcare Finance News coverage, April 2026</li>
            <li>Sen. Charles Grassley, news release on the $840 million HCA settlement, December 2000; Phillips &amp; Cohen case summary of the 2000 and 2003 HCA settlements</li>
            <li>HCA Inc., Definitive Merger Proxy (DEFM14A), 2006 (SEC) &mdash; buyout sponsors and terms; PitchBook, &ldquo;This day in buyout history: KKR, Bain Capital complete the biggest LBO ever&rdquo;; Venture Capital Journal, &ldquo;$33 billion HCA buyout closes&rdquo;</li>
            <li>HCA Inc., Form 10-Q and Form S-1 filings, 2010 (SEC) &mdash; 2010 dividend recapitalizations</li>
            <li>HCA, &ldquo;HCA Announces Pricing of Its Initial Public Offering,&rdquo; March 2011; HealthLeaders Media, &ldquo;HCA raises $3.79B in IPO&rdquo;</li>
            <li>Bloomberg Law, &ldquo;HCA Healthcare&rsquo;s Settlement of Data Breach Suit Gets Final Nod&rdquo;; DistilINFO, November 10, 2025; Top Class Actions settlement notice</li>
            <li>California Department of Justice, Attorney General Bonta news release on the $1.53 million HCA / HealthTrust Workforce Solutions settlement (2025); Colorado Attorney General Phil Weiser news release, July 24, 2025</li>
            <li>HCA Healthcare newsroom, &ldquo;Meet HCA Healthcare&rsquo;s New CEO&rdquo; (2019)</li>
            <li>Federation of American Hospitals, &ldquo;FAH Announces 2026 Chairman and Board of Directors at Annual Membership Meeting&rdquo; (October 2025)</li>
            <li>Reviewed October 2026.</li>
          </ul>
        </div>
      </section>

    </>
  )
}
