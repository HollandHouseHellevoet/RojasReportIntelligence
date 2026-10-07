import type { Metadata } from 'next'
import Link from 'next/link'
import StatBar from '@/components/StatBar'
import DataTable from '@/components/DataTable'

export const metadata: Metadata = {
  title: 'Saumya Sutaria MD — Tenet Healthcare | FAH Director',
  description:
    'Saumya Sutaria MD, Chairman and CEO of Tenet Healthcare, was paid $43.1 million in 2025 — a 711:1 ratio to the median Tenet employee and, per Fortune, the highest pay of any hospital CEO. Tenet: 50 hospitals, 533 USPI surgery centers, $21.31B FY2025 revenue, and a long record of federal fraud settlements.',
  alternates: { canonical: 'https://fah.rojasreport.com/board/sutaria' },
  openGraph: {
    type: 'article',
    title: 'Saumya Sutaria MD — Tenet Healthcare | FAH Director',
    description:
      '$43.1M 2025 compensation. 711:1 pay ratio. 533 USPI surgery centers vs. 50 hospitals. $21.31B FY2025 revenue.',
    url: 'https://fah.rojasreport.com/board/sutaria',
    siteName: 'FAH.RojasReport.com',
  },
}

export default function SutariaPage() {
  return (
    <>

      <div className="px-6 py-3 text-xs text-gray-500" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto">
          <Link href="/board" className="hover:text-fah-accent transition-colors">Board</Link>
          <span className="mx-2">/</span>
          <span style={{ color: '#EB6E2C' }}>Saumya Sutaria MD</span>
        </div>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#EB6E2C' }}>
            Board Member Dossier
          </p>
          <h1 className="font-headline text-5xl font-bold mb-2" style={{ color: '#f7f4ef' }}>
            Saumya Sutaria MD
          </h1>
          <p className="text-xl text-gray-400 mb-1">Chairman &amp; CEO, Tenet Healthcare</p>
          <p className="text-gray-500">FAH Director &middot; FAH Immediate Past Chair (2025)</p>
        </div>
      </section>

      <section className="px-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto">
          <StatBar
            stats={[
              { number: '$43.1M', label: '2025 total compensation (2026 proxy)' },
              { number: '711:1', label: 'CEO-to-median-employee pay ratio (2025)' },
              { number: '$21.31B', label: 'Tenet FY2025 net operating revenues' },
              { number: '533', label: 'USPI ambulatory surgery centers vs. 50 hospitals (Dec 31, 2025)' },
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
            Saumya (Saum) Sutaria MD has been CEO of Tenet Healthcare since September 2021, when he succeeded Ron Rittenmeyer, and Chairman since 2023. He joined Tenet in 2019 as President and COO after nearly two decades at McKinsey &amp; Company, where he led work in the firm&rsquo;s healthcare and private equity practices. He holds an MD from the University of California, San Diego, where he was a Howard Hughes Scholar, and dual bachelor&rsquo;s degrees in molecular and cell biology and economics from UC Berkeley; he was formerly associate clinical faculty at UCSF. His career has been in consulting and healthcare administration rather than clinical practice. He served as Immediate Past Chair on FAH&rsquo;s 2025 board.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            At December 31, 2025, Tenet&rsquo;s Hospital Operations segment ran 50 acute care and specialty hospitals in eight states, while its USPI (United Surgical Partners International) subsidiary held interests in 533 ambulatory surgery centers and 26 surgical hospitals in 37 states &mdash; making Tenet the nation&rsquo;s largest ASC operator. Tenet reported FY2025 net operating revenues of $21.31 billion (up from $20.675 billion in 2024), net income available to common shareholders of $1.407 billion ($15.49 per diluted share, down from $3.2 billion in 2024, which included large divestiture gains), and roughly $13.17 billion of long-term debt. The USPI business is central to a structural paradox: Tenet&rsquo;s ambulatory surgery arm competes directly with the hospital outpatient departments that the FAH lobby protects from site-neutral payment reform.
          </p>
        </div>
      </section>

      {/* Section 02 — Settlement History */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>02</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">SETTLEMENT HISTORY</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>~$1.54 Billion in Cumulative Settlements</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Tenet Healthcare has accumulated approximately $1.54 billion in federal fraud settlements over more than two decades. The record predates Sutaria&rsquo;s tenure, but the pattern establishes the institutional context in which he operates. The most recent: on June 1, 2023, Tenet, Vanguard Health Systems and Detroit Medical Center paid $29.7 million to resolve allegations that DMC&rsquo;s Sinai-Grace and Harper University hospitals provided free or below-market mid-level practitioners to 13 physicians in exchange for referrals between 2014 and 2017. Separately, Tenet and Desert Regional Medical Center (Palm Springs) paid $1.41 million to settle False Claims Act allegations over medically unnecessary implanted cardiac monitors billed to Medicare from 2014 to 2017; that amount is not included in the total below.
          </p>
          <DataTable
            headers={['Year', 'Amount', 'Allegation']}
            rows={[
              ['2003 (Aug 4)', '$54,000,000', 'Settlement with the United States and California over medically unnecessary invasive cardiac procedures at Redding Medical Center'],
              ['2006', '$900,000,000', 'Needless cardiac surgery (Redding Medical Center); Medicare billing fraud'],
              ['2012', '$43,000,000', 'Kickbacks, Stark Law violations'],
              ['2016 (Oct)', '$513,000,000+', 'Illegal payments for patient referrals: Medicaid kickbacks to prenatal clinics by Georgia and South Carolina Tenet hospitals; civil False Claims Act / Georgia False Medicaid Claims Act and criminal charges'],
              ['2023 (Jun 1)', '$29,700,000', 'Kickbacks / Stark Law: Detroit Medical Center (Sinai-Grace, Harper University Hospital) provided free or below-market mid-level practitioners to 13 referring physicians, 2014–2017'],
              ['Cumulative', '~$1,540,000,000', 'Approximate total of the rows above'],
            ]}
          />
        </div>
      </section>

      {/* Section 03 — USPI Paradox */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>03</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">THE USPI PARADOX</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>The USPI Paradox</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Tenet owns USPI &mdash; United Surgical Partners International &mdash; the largest ambulatory surgery center (ASC) operator in the country, with interests in 533 ASCs and 26 surgical hospitals across 37 states at the end of 2025. ASCs are the direct competitors to the hospital outpatient departments (HOPDs) that FAH lobbies to protect from site-neutral payment reform.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Site-neutral payments would reduce HOPD reimbursement to ASC levels &mdash; which would benefit USPI while harming Tenet&rsquo;s hospital HOPD revenues. Sutaria sits on the FAH board, which opposes site-neutral reform, while running a business whose larger facility count would benefit from it. The industry line has begun to shift: at an April 28, 2026 House Ways and Means hearing, hospital CEOs including HCA&rsquo;s Sam Hazen signaled openness to a &ldquo;rational reworking&rdquo; of site-neutral payments. Sutaria did not testify.
          </p>
          <div
            className="p-5 rounded-lg text-sm text-gray-300"
            style={{
              background: 'rgba(235,110,44,0.08)',
              border: '1px solid rgba(235,110,44,0.2)',
            }}
          >
            <strong style={{ color: '#EB6E2C' }}>The paradox:</strong> Sutaria serves on an FAH board that opposes site-neutral payments while his company holds interests in 533 ASCs &mdash; more than ten times its 50 hospitals &mdash; that would directly benefit from those same payments. FAH&rsquo;s official position protects the hospital side of Tenet&rsquo;s portfolio at the expense of the ambulatory side.
          </div>
        </div>
      </section>

      {/* Section 04 — Compensation */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>04</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">COMPENSATION</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Compensation 2021&ndash;2025</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Tenet&rsquo;s 2026 proxy statement reports Sutaria&rsquo;s 2025 total compensation at $43,108,969, including more than $31.7 million in stock awards and $9 million in non-equity incentive pay, with no cash bonus. The ratio to the median Tenet employee ($60,657) was roughly 711:1, up from 406:1 in 2024. In June 2026, Fortune identified Sutaria as the highest-paid hospital CEO in the country at about $43 million. His proxy-reported totals for 2021 through 2024 sum to approximately $75.4 million; adding 2025 brings the five-year total to roughly $118.5 million.
          </p>
          <DataTable
            headers={['Year', 'Total Compensation', 'CEO-to-Median-Employee Ratio']}
            rows={[
              ['2021', '~$21,140,000', '—'],
              ['2022', '$11,047,128', '—'],
              ['2023', '$18,518,109', '—'],
              ['2024', '$24,661,553', '406:1'],
              ['2025', '$43,108,969', '~711:1 (median employee $60,657)'],
              ['Cumulative 2021–2024', '~$75,400,000', ''],
              ['Cumulative 2021–2025', '~$118,500,000', ''],
            ]}
          />
        </div>
      </section>

      {/* Section 05 — Conifer Layoffs */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>05</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">LAYOFFS</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Conifer Cuts 1,037 Jobs</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Conifer Health Solutions, Tenet&rsquo;s revenue-cycle management unit, will permanently lay off 1,037 employees beginning November 2, 2026, following the end of its relationship with CommonSpirit Health. The cuts come in a year in which Tenet raised its 2026 financial outlook on strong second-quarter results (July 2026) and its CEO collected $43.1 million for 2025.
          </p>
          <DataTable
            headers={['Unit', 'Employees Affected', 'Effective', 'Context']}
            rows={[
              ['Conifer Health Solutions (revenue cycle)', '1,037 (permanent)', 'From Nov 2, 2026', 'Breakup with CommonSpirit Health'],
            ]}
          />
        </div>
      </section>

      {/* Sources */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Sources</h2>
          <ul className="source-list">
            <li>Tenet Healthcare, board of directors biography of Saumya Sutaria MD (investor.tenethealth.com); Becker&rsquo;s Hospital Review and Fierce Healthcare on Sutaria&rsquo;s appointment as CEO, 2021</li>
            <li>FAH, Board of Directors page (2025 slate, Sutaria as Immediate Past Chair) and &ldquo;FAH Announces 2026 Chairman and Board of Directors,&rdquo; October 2025</li>
            <li>Tenet Healthcare Corporation, Form 10-K for fiscal year 2025, filed February 2026 (hospital and USPI facility counts; long-term debt)</li>
            <li>Tenet Healthcare, &ldquo;Tenet Reports Strong Fourth Quarter and FY 2025 Results; Provides 2026 Financial Outlook,&rdquo; February 2026, and Form 8-K Exhibit 99.1; &ldquo;Tenet Reports Strong Second Quarter 2026 Results, Raises 2026 Financial Outlook,&rdquo; July 2026</li>
            <li>Tenet Healthcare, Definitive Proxy Statements (DEF 14A) filed 2022&ndash;2026, including the 2026 proxy (2025 compensation and pay ratio) and 2025 proxy (2024 compensation and 406:1 ratio); Becker&rsquo;s Hospital Review and Fierce Healthcare on 2021 compensation</li>
            <li>Fortune, &ldquo;Who is the highest-paid hospital CEO?,&rdquo; June 19, 2026</li>
            <li>Tenet Healthcare, Form 8-K Exhibit 99.1 (August 2003) and Form 10-K for 2003 on the $54 million Redding Medical Center settlement, August 4, 2003</li>
            <li>U.S. Department of Justice, &ldquo;Hospital Chain Will Pay Over $513 Million for Defrauding the United States and Making Illegal Payments in Exchange for Patient Referrals,&rdquo; October 2016</li>
            <li>U.S. Department of Justice, &ldquo;Detroit Medical Center, Vanguard Health Systems and Tenet Healthcare Corporation Agree to Pay $29.7 Million,&rdquo; June 1, 2023; Fierce Healthcare and Healthcare Dive coverage</li>
            <li>U.S. Department of Justice, &ldquo;Tenet Healthcare and Affiliated California Hospital Pay $1.41 Million to Settle False Claims Act Allegations&rdquo; (Desert Regional Medical Center)</li>
            <li>Becker&rsquo;s ASC Review, &ldquo;How Tenet turned a hospital company into the nation&rsquo;s largest ASC operator,&rdquo; and ASC News, February 2026</li>
            <li>Fierce Healthcare, &ldquo;Capitol Hill: health system CEOs agree to &lsquo;rational reworking&rsquo; of site-neutral payments,&rdquo; April 2026</li>
            <li>Fierce Healthcare, 2026 layoff tracker (Conifer Health Solutions WARN filing, 1,037 employees, effective November 2, 2026)</li>
            <li>Reviewed October 2026.</li>
          </ul>
        </div>
      </section>

    </>
  )
}
