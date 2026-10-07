import type { Metadata } from 'next'
import Link from 'next/link'
import ThreatTag from '@/components/ThreatTag'
import StatBar from '@/components/StatBar'
import DataTable from '@/components/DataTable'

export const metadata: Metadata = {
  title: 'CON Laws — FAH Position | Pillar 01',
  description:
    'FAH has no public position on Certificate of Need laws even as states repeal them: Tennessee ends hospital CON in 2030, Wyoming repealed its last CON law in 2025, and HCA’s CEO called for repeal before Congress in April 2026. CON laws protect FAH members from competition.',
  alternates: { canonical: 'https://fah.rojasreport.com/pillars/con-laws' },
  openGraph: {
    type: 'article',
    title: 'CON Laws — FAH Position | Pillar 01',
    description:
      'FAH has no public position on CON laws as the state repeal wave accelerates. The structural contradiction: CON laws protect FAH members from competition.',
    url: 'https://fah.rojasreport.com/pillars/con-laws',
    siteName: 'FAH.RojasReport.com',
  },
}

export default function ConLawsPage() {
  return (
    <>

      <div className="px-6 py-3 text-xs text-gray-500" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto">
          <Link href="/pillars" className="hover:text-fah-accent transition-colors">Pillars</Link>
          <span className="mx-2">/</span>
          <span style={{ color: '#EB6E2C' }}>CON Laws</span>
        </div>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#EB6E2C' }}>
            Pillar 01
          </p>
          <h1 className="font-headline text-5xl font-bold mb-2" style={{ color: '#f7f4ef' }}>
            CON Laws
          </h1>
          <p className="text-xl text-gray-400 mb-4">
            Certificate of Need &middot; Market Entry Barriers &middot; State Regulation
          </p>
          <ThreatTag level="Low" />
        </div>
      </section>

      <section className="px-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto">
          <StatBar
            stats={[
              { number: '~35', label: 'States (plus DC) with active CON laws' },
              { number: '0', label: 'FAH public statements on CON laws located' },
              { number: '2030', label: "Year Tennessee's acute-care hospital CON requirement ends" },
              { number: '1987', label: 'Year federal CON mandate was repealed' },
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
            FAH has no documented public position on Certificate of Need laws at the state or federal level. As of this October 2026 review, no FAH statements, letters, or lobbying disclosures on CON law reform were located. FAH&rsquo;s website does not list CON laws as an issue area.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            The silence is notable because FAH&rsquo;s largest member has now spoken. On April 28, 2026, HCA Healthcare CEO Samuel Hazen — an FAH director — testified at the House Ways &amp; Means Committee&rsquo;s hearing with health system CEOs and called for CON repeal, alongside stable coverage and less administrative complexity. FAH itself issued no statement.
          </p>
        </div>
      </section>

      {/* Section 02 */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>02</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">THE STRUCTURAL CONTRADICTION</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>The Structural Contradiction</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            CON laws require state approval before hospitals can add beds, services, or facilities. They were designed to prevent duplication and control costs. In practice, they protect incumbent hospital systems — including FAH members — from competition by physician-owned hospitals, ambulatory surgery centers, and new market entrants. FAH&rsquo;s largest members (HCA, Tenet, Community Health Systems, Lifepoint, Ardent) operate heavily in CON states such as Tennessee, North Carolina, Georgia, Florida, Virginia, Kentucky, and West Virginia.
          </p>
          <DataTable
            headers={['Aspect', 'Detail']}
            rows={[
              ['FAH public position', 'None documented (reviewed October 2026)'],
              ['FTC/DOJ finding', 'CON laws reduce competition and increase costs'],
              ['Who benefits from CON', 'Incumbent hospital systems (FAH members)'],
              ['Who is harmed by CON', 'Physician-owned hospitals, ASCs, new entrants'],
              ['Member positions on 2025–26 repeal bills', 'Not documented through state hospital associations; HCA CEO endorsed repeal before Congress (April 28, 2026)'],
              ['Why FAH is silent', 'Opposition would undermine member protection; support would be politically complex'],
            ]}
          />
          <div
            className="mt-6 p-5 rounded-lg text-sm text-gray-300"
            style={{
              background: 'rgba(235,110,44,0.08)',
              border: '1px solid rgba(235,110,44,0.2)',
            }}
          >
            <strong style={{ color: '#EB6E2C' }}>FTC/DOJ position:</strong> The Federal Trade Commission and Department of Justice have repeatedly stated that CON laws undermine competition, create barriers to entry, and lead to higher prices and reduced quality. Most recently, in April 2026, FTC staff filed a comment with the Tennessee legislature supporting the state&rsquo;s proposed CON repeal (and warning of risks to patients if the Ballad Health COPA expires). FAH&rsquo;s silence serves its members&rsquo; competitive interests by avoiding this debate.
          </div>
        </div>
      </section>

      {/* Section 03 — The Repeal Wave */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>03</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">2025&ndash;2026 STATE ACTIVITY</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>The Repeal Wave</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Approximately 35 states plus the District of Columbia still retain some form of CON review, but the number is eroding. Wyoming repealed its last remaining CON law in 2025 (which may lower the count depending on how it was tallied), and Tennessee — where FAH&rsquo;s largest members operate heavily — enacted a phased repeal that ends CON for acute-care hospitals on July 1, 2030. Tennessee is the live test of whether FAH members will publicly oppose repeal; so far neither FAH nor its members have done so on the record.
          </p>
          <DataTable
            headers={['State', 'Action', 'Status']}
            rows={[
              ['Tennessee', 'SB 1369 / HB 819 signed by Gov. Lee May 5, 2025: phased repeal — satellite EDs and cardiac cath (2028); acute-care hospitals effective July 1, 2030. Legislature continued rewriting the framework in 2026.', 'Enacted'],
              ['Wyoming', 'HB 289 (2025) repealed the last remaining CON law (nursing homes).', 'Enacted'],
              ['District of Columbia', 'D.C. Law 26-7, Certificate of Need Improvement Amendment Act of 2025 (Council passed April 1, 2025): exempts telehealth-only providers, FQHCs, outpatient and residential behavioral health, and primary, dental, and specialty practices.', 'Enacted'],
              ['Mississippi', 'HB 3 signed by Gov. Reeves, February 2026: targeted changes previously vetoed; not full repeal.', 'Enacted'],
              ['Kentucky', 'HB 407 (2026) advanced from House Health Services but was recommitted to Appropriations & Revenue on April 15, 2026 and died.', 'Failed'],
              ['West Virginia', 'Full-repeal HB 2007 killed in House HHR committee 12–13 (February 2025); HB 4917 (repeal effective Jan 1, 2027) introduced in 2026 and repeal again failed in committee.', 'Failed'],
              ['North Carolina', 'S.B. 370 (full repeal; last action April 28, 2025, House Rules) and H.B. 455 (repeal effective Jan 1, 2026) stalled.', 'Stalled'],
              ['Georgia', 'HB 1339 (signed April 19, 2024) added exemptions; a Senate study committee recommended full repeal.', 'Partial'],
            ]}
          />
        </div>
      </section>

      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Sources</h2>
          <ul className="source-list">
            <li>FAH website issue areas and media center (reviewed October 2026)</li>
            <li>FAH lobbying disclosures (reviewed October 2026)</li>
            <li>FTC/DOJ joint statements on certificate of need laws; FTC staff comment to the Tennessee legislature supporting proposed CON repeal, April 2026</li>
            <li>House Ways &amp; Means Committee, Full Committee Hearing with Health System CEOs, April 28, 2026 &mdash; testimony of Samuel N. Hazen, HCA Healthcare</li>
            <li>Tennessee SB 1369 / HB 819, signed May 5, 2025</li>
            <li>Wyoming HB 289 (2025)</li>
            <li>D.C. Law 26-7, Certificate of Need Improvement Amendment Act of 2025</li>
            <li>Mississippi HB 3 (February 2026); Kentucky HB 407 (2026); West Virginia HB 2007 (2025) and HB 4917 (2026); North Carolina S.B. 370 and H.B. 455 (2025); Georgia HB 1339 (2024)</li>
            <li>National Conference of State Legislatures, Certificate of Need State Laws tracker</li>
            <li>Cicero Institute, Certificate of Need Playbook (December 2025)</li>
            <li>Reviewed October 2026.</li>
          </ul>
        </div>
      </section>

    </>
  )
}
