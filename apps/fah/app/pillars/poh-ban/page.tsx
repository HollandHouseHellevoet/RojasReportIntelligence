import type { Metadata } from 'next'
import Link from 'next/link'
import ThreatTag from '@/components/ThreatTag'
import StatBar from '@/components/StatBar'
import PullQuote from '@/components/PullQuote'
import DataTable from '@/components/DataTable'

export const metadata: Metadata = {
  title: 'Physician-Owned Hospital Ban — FAH Position | Pillar 05',
  description:
    "FAH authored and defends the 2010 ban on physician-owned hospitals. Chip Kahn admitted publicly: 'The current ban on physician-owned hospitals wouldn't be there if it wasn't for the Federation.'",
  alternates: { canonical: 'https://fah.rojasreport.com/pillars/poh-ban' },
  openGraph: {
    type: 'article',
    title: 'Physician-Owned Hospital Ban — FAH Position | Pillar 05',
    description:
      "FAH authored the POH ban. Chip Kahn on record: 'The ban wouldn't be there if it wasn't for the Federation.'",
    url: 'https://fah.rojasreport.com/pillars/poh-ban',
    siteName: 'FAH.RojasReport.com',
  },
}

export default function PohBanPage() {
  return (
    <>
      <SiteNav currentPath="/pillars" />

      <div className="px-6 py-3 text-xs text-gray-500" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto">
          <Link href="/pillars" className="hover:text-fah-accent transition-colors">Pillars</Link>
          <span className="mx-2">/</span>
          <span style={{ color: '#EB6E2C' }}>Physician-Owned Hospital Ban</span>
        </div>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#EB6E2C' }}>
            Pillar 05
          </p>
          <h1 className="font-headline text-5xl font-bold mb-2" style={{ color: '#f7f4ef' }}>
            Physician-Owned Hospital Ban
          </h1>
          <p className="text-xl text-gray-400 mb-4">
            Section 6001 ACA &middot; Stark Law &middot; POH Repeal Bills
          </p>
          <ThreatTag level="Critical" />
        </div>
      </section>

      <section className="px-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto">
          <StatBar
            stats={[
              { number: '16', label: 'Years the physician-owned hospital ban has been in effect' },
              { number: '7', label: 'Congresses in which FAH has defended the ban' },
              { number: '$0', label: 'Documented Medicare savings from the ban' },
              { number: '2010', label: 'Year FAH authored Section 6001 of the ACA' },
            ]}
          />
        </div>
      </section>

      {/* The Admission — Chip Kahn Quote */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>01</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">THE ADMISSION</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-6" style={{ color: '#f7f4ef' }}>
            The Admission
          </h2>
          <PullQuote
            quote="The current ban on physician-owned hospitals wouldn't be there if it wasn't for the Federation. I don't think I've ever admitted this publicly..."
            attribution="Chip Kahn, President and CEO, Federation of American Hospitals, Advisory Board interview, June 2021"
          />
          <p className="text-gray-300 mt-6 leading-relaxed">
            Kahn&rsquo;s full statement continued: &ldquo;...but I can remember emailing one of the staffers, literally sending in talking points to some of the senators as the process was taking place.&rdquo;
          </p>
          <p className="text-gray-300 mt-4 leading-relaxed">
            This is the most direct public admission by any FAH official that the organization authored the physician-owned hospital ban embedded in the Affordable Care Act. The ban has been in effect since 2010 and has prevented the expansion of more than 265 physician-owned hospitals that existed at passage.
          </p>
        </div>
      </section>

      {/* Section 02 — What Section 6001 Does */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>02</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">SECTION 6001 PROVISIONS</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>What Section 6001 Does</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Section 6001 of the Affordable Care Act amended the Stark Law to prohibit physician self-referral to new physician-owned hospitals and to freeze existing physician-owned hospitals at their 2010 bed and operating room counts. The provisions were inserted into the ACA during conference committee with limited public debate.
          </p>
          <DataTable
            headers={['Provision', 'Effect']}
            rows={[
              ['No new physician-owned hospitals', 'Physicians cannot build new hospitals where they have an ownership interest'],
              ['Capacity freeze', 'Existing POHs cannot expand beds or ORs beyond 2010 levels'],
              ['New ownership prohibited', 'Physicians cannot take new ownership stakes in existing hospitals'],
              ['Grandfather clause', 'Existing POHs as of 2010 may continue operating at frozen capacity'],
              ['Whole-hospital exception eliminated', 'Prior Stark Law exception that permitted POHs effectively nullified for new entities'],
            ]}
          />
        </div>
      </section>

      {/* Section 03 — Legislative History */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>03</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">LEGISLATIVE HISTORY</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Legislative History</h2>
          <DataTable
            headers={['Year', 'Event']}
            rows={[
              ['2003', 'MedPAC first examines physician-owned hospitals; mixed findings on quality and cost'],
              ['2005', 'CMS moratorium on new POH Medicare certifications (temporary)'],
              ['2007', 'Physician self-referral study Act; GAO studies ordered'],
              ['2008–2009', 'FAH lobbying escalates; talking points distributed to Senate Finance Committee staff'],
              ['March 2010', 'ACA passes with Section 6001 inserted in conference; POH ban enacted'],
            ]}
          />
        </div>
      </section>

      {/* Section 04 — Repeal Bills */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>04</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">REPEAL BILLS</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>POH Repeal Bills (114th–119th Congress)</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Physician-owned hospital advocates have introduced repeal legislation in every Congress since 2010. FAH has opposed every bill. None have passed.
          </p>
          <DataTable
            headers={['Congress', 'Bill', 'Status']}
            rows={[
              ['114th', 'Fair Competition in Healthcare Act', 'Died in committee'],
              ['115th', 'Fair Competition in Healthcare Act', 'Died in committee'],
              ['116th', 'Multiple repeal bills introduced', 'Died in committee'],
              ['117th', 'Multiple repeal bills introduced', 'Died in committee'],
              ['118th', 'H.R. 4002, H.R. 2191 / S. 1390', 'Active; FAH opposed'],
              ['119th', 'Repeal legislation anticipated', 'Pending'],
            ]}
          />
        </div>
      </section>

      {/* Section 05 — FAH Opposition Letters */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>05</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">FAH OPPOSITION LETTERS</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>FAH Opposition Letters (2017&ndash;2025)</h2>
          <DataTable
            headers={['Date', 'Target', 'Subject']}
            rows={[
              ['2017', 'House Ways &amp; Means Committee', 'Opposition to POH expansion provisions in tax reform'],
              ['2018', 'Senate Finance Committee', 'Opposition to POH repeal in various health bills'],
              ['2019', 'House Energy &amp; Commerce', 'Opposition to H.R. 2513'],
              ['2020', 'Multiple committees', 'COVID relief bills — oppose POH waiver expansions'],
              ['2021', 'House Ways &amp; Means', 'Opposition to Build Back Better POH provisions'],
              ['2022', 'Senate Finance', 'Opposition to standalone POH repeal bills'],
              ['2023', 'House Energy &amp; Commerce, Senate Finance', 'Opposition to H.R. 4002, H.R. 2191'],
              ['2024', 'Multiple', 'Opposition to 118th Congress repeal efforts'],
              ['2025', 'Multiple', 'Opposition to 119th Congress activity'],
            ]}
          />
        </div>
      </section>

      {/* Section 06 — The Evidence */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>06</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">FAH CLAIMS vs. EVIDENCE</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>FAH Claims vs. Independent Research</h2>
          <DataTable
            headers={['FAH Claim', 'Independent Research Finding']}
            rows={[
              [
                'POHs cherry-pick healthy patients',
                'MedPAC (2005, 2006): POHs treat similar patient mix; some evidence of case-mix selection but not uniform',
              ],
              [
                'POHs increase Medicare costs',
                'GAO (2010): Insufficient evidence; no definitive cost finding',
              ],
              [
                'POHs reduce quality',
                'Multiple peer-reviewed studies: POHs show equivalent or superior quality metrics on surgical outcomes',
              ],
              [
                'POHs harm communities',
                'AAOS / physician association data: POHs often serve as primary orthopedic, cardiac, and surgical access in markets',
              ],
            ]}
          />
        </div>
      </section>

      {/* Section 07 — Current Threat */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>07</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">CURRENT THREAT ASSESSMENT</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Current Threat Assessment</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            The physician-owned hospital ban faces its most serious legislative threat in the 119th Congress. H.R. 4002 (118th Congress) passed out of committee with bipartisan support before dying on the floor. H.R. 2191 and S. 1390 had significant co-sponsorship. The incoming Congress and administration have signaled openness to POH reform as part of broader healthcare deregulation.
          </p>
          <div
            className="p-5 rounded-lg text-sm text-gray-300"
            style={{
              background: 'rgba(239,68,68,0.08)',
              border: '1px solid rgba(239,68,68,0.3)',
            }}
          >
            <strong style={{ color: '#f87171' }}>Critical threat:</strong> If Section 6001 is repealed or substantially modified, the fundamental competitive protection that FAH built into the ACA would be eliminated. New physician-owned hospitals could be built. Existing POHs could expand. The for-profit hospital lobby&rsquo;s most important legislative achievement would be undone.
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Sources</h2>
          <ul className="source-list">
            <li>Chip Kahn, Advisory Board interview, June 2021</li>
            <li>ACA Section 6001 legislative text and conference report</li>
            <li>MedPAC physician-owned hospital reports (2005, 2006)</li>
            <li>GAO physician-owned hospital study (2010)</li>
            <li>Congress.gov: H.R. 4002, H.R. 2191, S. 1390 (118th Congress)</li>
            <li>FAH opposition letter archive (2017–2025)</li>
          </ul>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
