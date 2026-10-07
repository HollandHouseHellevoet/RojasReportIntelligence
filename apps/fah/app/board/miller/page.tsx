import type { Metadata } from 'next'
import Link from 'next/link'
import StatBar from '@/components/StatBar'
import DataTable from '@/components/DataTable'

export const metadata: Metadata = {
  title: 'Marc Miller — Universal Health Services | FAH Immediate Past Chair',
  description:
    'Marc Miller leads UHS, a family-controlled for-profit hospital giant: $17.4B FY2025 revenue, roughly 91% Miller family voting power, 283:1 pay ratio, $122M False Claims Act settlement, Senate "Warehouses of Neglect" report, and jury verdicts of $500M-plus against UHS subsidiaries.',
  alternates: { canonical: 'https://fah.rojasreport.com/board/miller' },
  openGraph: {
    type: 'article',
    title: 'Marc Miller — Universal Health Services | FAH Immediate Past Chair',
    description:
      '$122M False Claims Act settlement. Roughly 91% family voting power. Senate "Warehouses of Neglect" report. $500M-plus jury verdicts.',
    url: 'https://fah.rojasreport.com/board/miller',
    siteName: 'FAH.RojasReport.com',
  },
}

export default function MillerPage() {
  return (
    <>

      <div className="px-6 py-3 text-xs text-gray-500" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto">
          <Link href="/board" className="hover:text-fah-accent transition-colors">Board</Link>
          <span className="mx-2">/</span>
          <span style={{ color: '#EB6E2C' }}>Marc Miller</span>
        </div>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#EB6E2C' }}>
            Board Member Dossier
          </p>
          <h1 className="font-headline text-5xl font-bold mb-2" style={{ color: '#f7f4ef' }}>
            Marc Miller
          </h1>
          <p className="text-xl text-gray-400 mb-1">President &amp; CEO, Universal Health Services</p>
          <p className="text-gray-500">FAH Immediate Past Chair (2025 Chair)</p>
        </div>
      </section>

      <section className="px-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto">
          <StatBar
            stats={[
              { number: '$122M', label: 'False Claims Act and kickback settlements, July 2020' },
              { number: '$16.1M', label: 'Miller 2025 total compensation (2026 proxy)' },
              { number: '283:1', label: 'CEO-to-worker pay ratio, FY2025' },
              { number: '$17.4B', label: 'UHS FY2025 net revenues' },
            ]}
          />
        </div>
      </section>

      {/* Section 01 — 2025-2026 */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>01</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">2025&ndash;2026</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Record Year, Extended Contract</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Marc Miller chaired the FAH board in 2025 and rotated to Immediate Past Chair for 2026, when David Dill of Lifepoint Health took the chair. The year he ran the for-profit hospital lobby was a strong one for UHS: fiscal 2025 net revenues of $17.365 billion, up 9.7%, and net income attributable to UHS of $1.489 billion ($23.10 per diluted share), up from $1.142 billion in 2024, on an operating margin of 11.5%.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            On December 30, 2025, UHS filed an 8-K extending Miller&rsquo;s employment agreement through 2029, with a 2026 base salary of $1,575,000 (a 5% increase) and a target bonus of 150% of salary.
          </p>
          <DataTable
            headers={['UHS FY2025', 'Figure']}
            rows={[
              ['Net revenues', '$17.365 billion (+9.7%)'],
              ['Net income attributable to UHS', '$1.489 billion ($23.10 per diluted share); adjusted $1.401 billion'],
              ['Operating margin', '11.5%'],
              ['Total debt (carrying value, December 31, 2025)', 'Approximately $4.8 billion ($748.2 million current maturities plus roughly $4.0 billion long-term)'],
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
            Marc Miller has served as President and CEO of Universal Health Services (UHS) since January 2021, succeeding his father Alan B. Miller, who founded the company. UHS operates 400+ hospitals and behavioral health facilities across the US and UK. According to the company&rsquo;s April 2026 proxy statement, the Miller family holds roughly 91% of UHS&rsquo;s general voting power through its Class A and Class C shares, making UHS effectively a family-controlled company despite its public listing.
          </p>
        </div>
      </section>

      {/* Section 03 — Governance */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>03</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">GOVERNANCE</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Governance Structure</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            UHS does not use super-voting shares. Each of its four share classes carries one vote per share. Control comes instead from class-based director elections: Class A and Class C &mdash; held overwhelmingly by the Miller family &mdash; vote together to elect the large majority of the board, while Class B (the NYSE-listed public float) and Class D elect the remainder. In the 2026 proxy, one director stood for election by the Class A and C holders and one by the Class B and D holders.
          </p>
          <DataTable
            headers={['Class', 'Votes Per Share', 'Who Holds It', 'Elects']}
            rows={[
              ['Class A', '1', 'Miller family (Alan B. Miller holds 77.8% of Class A; 921,016 shares held by three 2002 Trusts of which Marc Miller is a trustee)', 'With Class C, the large majority of directors'],
              ['Class B (NYSE: UHS)', '1', 'Public shareholders', 'With Class D, the remaining directors'],
              ['Class C', '1', 'Alan B. Miller (100%)', 'With Class A, the large majority of directors'],
              ['Class D', '1', 'Public shareholders', 'With Class B, the remaining directors'],
              ['Miller family general voting power', 'Approximately 91% (2026 proxy; exact figure to be confirmed against the filing text)', '', ''],
            ]}
          />
          <p className="text-gray-300 mt-6 leading-relaxed">
            The result is that public shareholders cannot meaningfully challenge Miller family decisions. The company is nominally public but functions as a family business with public minority shareholders.
          </p>
        </div>
      </section>

      {/* Section 04 — Fraud Settlement */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>04</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">FRAUD SETTLEMENT</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>False Claims Act Settlement</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            On July 10, 2020, UHS and related entities agreed to pay $122 million to resolve False Claims Act and Anti-Kickback Statute allegations. UHS paid $117 million (covering federal and state Medicaid shares) to resolve allegations that its behavioral health facilities admitted patients who were not eligible for inpatient care, failed to properly discharge patients when they no longer needed inpatient treatment, billed for medically unnecessary services, had inadequate staffing and training, and improperly used restraint and seclusion. A UHS facility, Turning Point Care Center in Moultrie, Georgia, paid a further $5 million to the United States and Georgia to resolve allegations that it offered free or discounted transportation as an inducement to patients. The settlement resolved 18 qui tam cases in the Eastern District of Pennsylvania, Western and Eastern Districts of Michigan, and Northern District of Georgia; the whistleblowers received $16.7 million.
          </p>
          <DataTable
            headers={['Component', 'Amount', 'Scope']}
            rows={[
              ['UHS behavioral health FCA resolution', '$117,000,000', 'Federal and participating state Medicaid shares'],
              ['Turning Point Care Center (Moultrie, GA) kickback resolution', '$5,000,000', 'United States and State of Georgia'],
              ['Total', '$122,000,000', 'Combined; 18 qui tam cases'],
            ]}
          />
        </div>
      </section>

      {/* Section 05 — Senate Finding */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>05</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">SENATE INVESTIGATION</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>&ldquo;Warehouses of Neglect&rdquo;</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            On June 12, 2024, the Senate Finance Committee under Chairman Wyden, working with the HELP Committee, released &ldquo;Warehouses of Neglect: How Taxpayers Are Funding Systemic Abuse in Youth Residential Treatment Facilities.&rdquo; The two-year investigation examined UHS alongside Acadia, Devereux, and Vivant, drawing on more than 25,000 pages of documents. Its scope was youth residential treatment facilities, a segment of UHS&rsquo;s behavioral health business.
          </p>
          <div
            className="p-5 rounded-lg text-sm text-gray-300"
            style={{
              background: 'rgba(235,110,44,0.08)',
              border: '1px solid rgba(235,110,44,0.2)',
            }}
          >
            <strong style={{ color: '#EB6E2C' }}>Senate Finance Committee finding:</strong> The report documented abuse, unsanitary conditions, and over-medication at youth residential treatment facilities operated by the four companies, funded by taxpayers.
          </div>
        </div>
      </section>

      {/* Section 06 — Jury Verdicts */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>06</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">JURY VERDICTS</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Nine-Figure Verdicts</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Since 2024, juries have returned a series of nine-figure verdicts against UHS subsidiaries. On March 28, 2024, a jury awarded $60 million in compensatory and $475 million in punitive damages against Pavilion Behavioral Health System in Champaign, Illinois, over a 2020 minor-on-minor sexual assault; on October 10, 2024, the trial court reduced the punitive award to $120 million. A jury subsequently awarded $360 million to three plaintiffs over abuse by a physician at Cumberland Hospital for Children and Adolescents in Virginia, with roughly 40 additional plaintiffs&rsquo; claims pending. And in a case brought by Saint Mary&rsquo;s Health Network of Reno, Nevada &mdash; an affiliate of Prime Healthcare, whose chairman Prem Reddy sits with Miller on the FAH board &mdash; a jury returned a verdict of more than $510 million against UHS subsidiaries, including $500 million in punitive damages and roughly $4.7 million in compensatory damages, on physician-poaching and fraud claims.
          </p>
          <DataTable
            headers={['Case', 'Verdict', 'Status']}
            rows={[
              ['Pavilion Behavioral Health System (Champaign, IL)', '$60M compensatory + $475M punitive (March 28, 2024)', 'Punitive damages reduced to $120M by trial court, October 10, 2024'],
              ['Cumberland Hospital for Children and Adolescents (VA)', '$360M to three plaintiffs', 'Approximately 40 additional plaintiffs pending; appeal status not confirmed'],
              ['Saint Mary’s Health Network (Prime Healthcare affiliate, Reno, NV) v. UHS subsidiaries', 'More than $510M, including $500M punitive and approximately $4.7M compensatory', 'Appeal status not confirmed'],
            ]}
          />
        </div>
      </section>

      {/* Section 07 — Compensation */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>07</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">COMPENSATION</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Compensation</h2>
          <DataTable
            headers={['Component (2026 proxy and December 2025 8-K)', 'Amount']}
            rows={[
              ['Miller 2025 total compensation', '$16,148,937'],
              ['Median UHS employee compensation, 2025', '$57,048'],
              ['CEO-to-worker pay ratio, 2025', '283:1'],
              ['2026 base salary', '$1,575,000 (+5%)'],
              ['Target annual bonus', '150% of base salary'],
              ['Employment agreement', 'Extended through 2029 (8-K, December 30, 2025)'],
            ]}
          />
        </div>
      </section>

      {/* Sources */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Sources</h2>
          <ul className="source-list">
            <li>U.S. Department of Justice / Oversight.gov, &ldquo;Universal Health Services, Inc. and Related Entities to Pay $122 Million to Settle False Claims Act Allegations,&rdquo; July 10, 2020</li>
            <li>Fierce Healthcare, UHS finalizes $122M settlement with DOJ, July 2020; American Health Law Association, Health Law Weekly, July 2020</li>
            <li>Senate Finance Committee (Chairman Wyden), &ldquo;Warehouses of Neglect: How Taxpayers Are Funding Systemic Abuse in Youth Residential Treatment Facilities,&rdquo; June 12, 2024</li>
            <li>North Carolina Health News, UHS under scrutiny from U.S. Senate, June 27, 2024</li>
            <li>Universal Health Services DEF 14A (definitive proxy statement), April 3, 2026</li>
            <li>Universal Health Services Form 10-K for fiscal year 2025, February 2026</li>
            <li>Universal Health Services Form 8-K (Miller employment agreement extension), December 30, 2025</li>
            <li>Universal Health Services Form 8-K (Pavilion verdict), September 27, 2024</li>
            <li>Universal Health Services, financial results for the three and twelve months ended December 31, 2025 and 2026 forecast (PR Newswire), February 2026</li>
            <li>Becker&rsquo;s Hospital Review, UHS CEO-to-worker pay ratio in 2025, 2026; Becker&rsquo;s Behavioral Health, UHS posts 11.5% operating margin in 2025, 2026</li>
            <li>Healthcare Dive, Pavilion $535M negligence verdict, 2024; Healthcare Dive, Cumberland child sexual abuse damages</li>
            <li>Becker&rsquo;s Behavioral Health, judge reduces verdict by $355M in UHS subsidiary&rsquo;s negligence case, October 2024</li>
            <li>Becker&rsquo;s Hospital Review and Fierce Healthcare, $500M-plus jury verdict for Saint Mary&rsquo;s Health Network / Prime Healthcare against UHS subsidiaries</li>
            <li>Fierce Healthcare, UHS first-year CEO Marc Miller 2021 compensation, 2022</li>
            <li>FAH, &ldquo;FAH Announces 2026 Chairman and Board of Directors at Annual Membership Meeting,&rdquo; October 2025; FAH Board of Directors page</li>
            <li>Reviewed October 2026.</li>
          </ul>
        </div>
      </section>

    </>
  )
}
