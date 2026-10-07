import type { Metadata } from 'next'
import Link from 'next/link'
import StatBar from '@/components/StatBar'
import DataTable from '@/components/DataTable'

export const metadata: Metadata = {
  title: 'Prem Reddy MD — Prime Healthcare | FAH Director',
  description:
    'Prem Reddy MD is founder, Chairman, President & CEO of Prime Healthcare. Three False Claims Act settlements (2018, Pennsylvania, 2021) totaling $103.75M, with more than $5M paid by Reddy personally. $370M+ Ascension Illinois acquisition closed March 1, 2025; obstetrics ended at three Chicago-area hospitals October 1, 2026.',
  alternates: { canonical: 'https://fah.rojasreport.com/board/reddy' },
  openGraph: {
    type: 'article',
    title: 'Prem Reddy MD — Prime Healthcare | FAH Director',
    description:
      '$103.75M in three False Claims Act settlements. $370M+ Ascension Illinois acquisition. Obstetrics ended at 3 Chicago-area hospitals, Oct 2026.',
    url: 'https://fah.rojasreport.com/board/reddy',
    siteName: 'FAH.RojasReport.com',
  },
}

export default function ReddyPage() {
  return (
    <>

      <div className="px-6 py-3 text-xs text-gray-500" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto">
          <Link href="/board" className="hover:text-fah-accent transition-colors">Board</Link>
          <span className="mx-2">/</span>
          <span style={{ color: '#EB6E2C' }}>Prem Reddy MD</span>
        </div>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#EB6E2C' }}>
            Board Member Dossier
          </p>
          <h1 className="font-headline text-5xl font-bold mb-2" style={{ color: '#f7f4ef' }}>
            Prem Reddy MD
          </h1>
          <p className="text-xl text-gray-400 mb-1">Chairman, President &amp; CEO, Prime Healthcare</p>
          <p className="text-gray-500">FAH Director (2026 board)</p>
        </div>
      </section>

      <section className="px-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto">
          <StatBar
            stats={[
              { number: '$103.75M', label: 'Three False Claims Act settlements (2018, Pennsylvania, 2021)' },
              { number: '$5.03M+', label: 'Paid personally by Reddy in those settlements' },
              { number: '$370M+', label: 'Ascension Illinois acquisition, 8 hospitals (closed Mar 1, 2025)' },
              { number: '3', label: 'Chicago-area hospitals ending obstetrics Oct 1, 2026' },
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
            Prem Reddy MD is the founder, Chairman, President and CEO of Prime Healthcare Services, Inc., a privately held for-profit hospital system. Reddy opened Desert Valley Hospital in 1994 and established Prime in 2001. As of 2026 Prime operates 54&ndash;55 hospitals across 15 states (published counts differ by one), 21 of them held through its nonprofit arm, the Prime Healthcare Foundation. The company&rsquo;s model is acquiring financially distressed community hospitals.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Reddy&rsquo;s presence on the FAH board is notable: he represents a founder-controlled hospital system at an organization dominated by publicly traded or private-equity-backed companies. Prime Healthcare Services is a private company that issues public bonds; on August 12, 2025 Fitch upgraded its senior secured notes to B+, Moody&rsquo;s upgraded its corporate rating to B2, and S&amp;P affirmed its rating with a positive outlook, citing improved margins and the integration of the Illinois hospitals.
          </p>
        </div>
      </section>

      {/* Section 02 — False Claims Act Settlements */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>02</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">FALSE CLAIMS ACT SETTLEMENTS</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>$103.75 Million in Three Settlements</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Prime Healthcare and Reddy have resolved three federal False Claims Act matters. In August 2018, Prime paid $65 million to settle allegations that 14 California hospitals admitted patients who needed only outpatient care and up-coded Medicare claims; Reddy personally paid $3.25 million of that amount. A separate $1.25 million settlement in the Eastern District of Pennsylvania resolved allegations of unnecessary inpatient admissions and up-coding at Roxborough Memorial (Philadelphia) and Lower Bucks (Bristol) hospitals. In July 2021, Prime, Reddy and Dr. Siva Arunasalam agreed to pay $37.5 million to the Department of Justice and the California Attorney General to resolve kickback and Stark Law allegations: Prime allegedly overpaid for Arunasalam&rsquo;s practice and surgery center to induce referrals to Desert Valley Hospital, billed for services of a suspended physician, and submitted false claims for implantable hardware. Reddy&rsquo;s personal share of the 2021 settlement was $1,775,000. Prime Healthcare Services and Reddy are also subject to an HHS-OIG Corporate Integrity Agreement.
          </p>
          <DataTable
            headers={['Year', 'Amount', 'Reddy Personal Payment', 'Allegation']}
            rows={[
              ['2018 (Aug)', '$65,000,000', '$3,250,000', 'Medically unnecessary inpatient admissions and up-coding at 14 California hospitals (C.D. Cal.)'],
              ['2019', '$1,250,000', 'Jointly liable; individual share not confirmed', 'Unnecessary inpatient admissions and up-coding, Roxborough Memorial and Lower Bucks (E.D. Pa.)'],
              ['2021 (Jul)', '$37,500,000', '$1,775,000', 'Kickbacks / Stark Law: referrals to Desert Valley Hospital; billing for suspended doctor; implantable hardware (DOJ C.D. Cal. and California AG). Prime $33,725,000; Dr. Arunasalam $2,000,000'],
              ['Total', '$103,750,000', '$5,025,000+', 'Three resolutions (Prime, Reddy and co-defendant)'],
            ]}
          />
        </div>
      </section>

      {/* Section 03 — Illinois Acquisition */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>03</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">2025 ILLINOIS ACQUISITION</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>$370M+ Illinois Acquisition from Ascension</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            On March 1, 2025, Prime closed its acquisition of eight Ascension Illinois acute-care hospitals, plus four senior living and post-acute facilities and physician practices, in a deal reported at more than $370 million &mdash; the largest in Prime&rsquo;s history. The original agreement covered nine hospitals, one of which was slated for closure. The hospitals: Holy Family (Des Plaines), Mercy (Aurora), Resurrection (Chicago), Saint Francis (Evanston), Saint Joseph (Joliet), Saint Joseph (Elgin), St. Mary&rsquo;s (Kankakee) and Saint Mary of Nazareth (Chicago).
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Service reductions followed. Obstetrics ended at St. Mary&rsquo;s Kankakee in May 2025. On October 1, 2026, Prime ended obstetrics at Resurrection (Chicago), Saint Joseph (Joliet) and Mercy (Aurora), consolidating deliveries at Saint Mary of Nazareth and Olympia Fields. Pediatric services were suspended at Saint Joseph Joliet, and Mercy Aurora dropped its Level II trauma designation (CBS Chicago also reported the loss of the designation at Saint Joseph Elgin).
          </p>
          <DataTable
            headers={['Service', 'Hospital(s)', 'Status']}
            rows={[
              ['Obstetrics', 'St. Mary’s, Kankakee', 'Ended May 2025'],
              ['Obstetrics', 'Resurrection (Chicago), Saint Joseph (Joliet), Mercy (Aurora)', 'Ended Oct 1, 2026; consolidated at Saint Mary of Nazareth and Olympia Fields'],
              ['Pediatric services', 'Saint Joseph, Joliet', 'Suspended'],
              ['Level II trauma designation', 'Mercy, Aurora (and Saint Joseph, Elgin per CBS Chicago)', 'Dropped'],
            ]}
          />
          <div
            className="mt-6 p-5 rounded-lg text-sm text-gray-300"
            style={{
              background: 'rgba(235,110,44,0.08)',
              border: '1px solid rgba(235,110,44,0.2)',
            }}
          >
            <strong style={{ color: '#EB6E2C' }}>Senate scrutiny:</strong> On May 20, 2025, Senators Dick Durbin and Tammy Duckworth wrote to Reddy as CEO, citing the suspension of pediatric services at St. Joseph Medical Center (Joliet), the loss of Level II trauma designation at Mercy Medical Center (Aurora) and the termination of obstetric care at St. Mary&rsquo;s (Kankakee). The letter noted Prime&rsquo;s commitment to the Illinois Health Facilities &amp; Services Review Board that there would be no material service reductions and &ldquo;no changes&hellip; within 24 months.&rdquo;
          </div>
        </div>
      </section>

      {/* Section 04 — Central Maine Healthcare */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>04</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">2026 MAINE ACQUISITION</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Central Maine Healthcare Joins Prime Foundation</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            On February 16, 2026, the Prime Healthcare Foundation acquired Central Maine Healthcare (Lewiston, Maine), including Central Maine Medical Center, Bridgton Hospital, Rumford Hospital, Rumford Community Home, Bolster Heights, the Maine College of Health Professions, the CMH Cancer Care Center and more than 40 practices. Prime pledged $150 million of investment over five years. The deal brought the Foundation to 21 hospitals.
          </p>
          <DataTable
            headers={['Facility', 'Type']}
            rows={[
              ['Central Maine Medical Center', 'Hospital (Lewiston)'],
              ['Bridgton Hospital', 'Hospital'],
              ['Rumford Hospital', 'Hospital'],
              ['Rumford Community Home / Bolster Heights', 'Post-acute / senior care'],
              ['Maine College of Health Professions; CMH Cancer Care Center; 40+ practices', 'Education, oncology, physician practices'],
            ]}
          />
        </div>
      </section>

      {/* Section 05 — Litigation Against Nurses' Unions */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>05</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">LABOR LITIGATION</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Prime Sues the Nurses&rsquo; Unions</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            In the fall of 2026, Prime Healthcare, the Prime Healthcare Foundation, Reddy and other executives filed two lawsuits against National Nurses United and the California Nurses Association. The first complaint was filed September 14, 2026 in Los Angeles County Superior Court; the second on October 5, 2026 in San Bernardino County Superior Court. The complaints allege harassment, defamation, invasion of privacy, interference and civil conspiracy, citing fliers bearing photographs of executives&rsquo; homes, the posting of personal phone numbers, and what Prime calls false statements about the Foundation&rsquo;s charity care.
          </p>
          <DataTable
            headers={['Filed', 'Court', 'Defendants', 'Claims']}
            rows={[
              ['Sept 14, 2026', 'Los Angeles County Superior Court', 'National Nurses United; California Nurses Association', 'Harassment, defamation, invasion of privacy, interference, civil conspiracy'],
              ['Oct 5, 2026', 'San Bernardino County Superior Court', 'National Nurses United; California Nurses Association', 'Same causes of action; second complaint'],
            ]}
          />
        </div>
      </section>

      {/* Sources */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Sources</h2>
          <ul className="source-list">
            <li>FAH, &ldquo;FAH Announces 2026 Chairman and Board of Directors at Annual Membership Meeting,&rdquo; October 2025 (Reddy listed as Chairman, President and CEO, Prime Healthcare Services, Inc.)</li>
            <li>Prime Healthcare, executive biography of Prem Reddy MD FACC FCCP (primehealthcare.com)</li>
            <li>U.S. Department of Justice, &ldquo;Prime Healthcare Services and CEO Pay $65 Million to Settle False Claims Act Allegations,&rdquo; August 2018</li>
            <li>U.S. Attorney&rsquo;s Office, E.D. Pa., and HHS-OIG, &ldquo;Prime Healthcare Services and CEO Dr. Prem Reddy Pay $1.25 Million to Settle False Claims Act Allegations&rdquo;</li>
            <li>U.S. Attorney&rsquo;s Office, C.D. Cal., and California Attorney General Rob Bonta, $37.5 million settlement announcements, July 2021</li>
            <li>HHS-OIG, Corporate Integrity Agreement, Prime Healthcare Services, Inc. and Prem Reddy MD</li>
            <li>Prime Healthcare press release, &ldquo;Prime Healthcare Completes Historic Acquisition of Ascension Hospitals and Care Sites in Illinois,&rdquo; March 2025; Fierce Healthcare coverage, March 2025</li>
            <li>Senators Richard Durbin and Tammy Duckworth, letter to Prime Healthcare CEO Prem Reddy MD, May 20, 2025, and accompanying press release</li>
            <li>CBS Chicago, Chicago Sun-Times (Sept 2, 2026), Daily Herald (Sept 1, 2026) and Becker&rsquo;s Hospital Review on Prime ending obstetrics at three Illinois hospitals</li>
            <li>Business Wire, &ldquo;Prime Healthcare Services, Inc. Receives Universal Credit Rating Upgrades from Fitch, Moody&rsquo;s and S&amp;P,&rdquo; August 12, 2025</li>
            <li>Prime Healthcare Foundation press release (Business Wire), Healthcare Dive and Modern Healthcare on the Central Maine Healthcare acquisition, February 16, 2026</li>
            <li>Becker&rsquo;s Hospital Review and Business Wire on Prime&rsquo;s complaints against National Nurses United and the California Nurses Association, September 14 and October 5, 2026</li>
            <li>Reviewed October 2026.</li>
          </ul>
        </div>
      </section>

    </>
  )
}
