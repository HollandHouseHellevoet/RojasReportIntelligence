import type { Metadata } from 'next'
import Link from 'next/link'
import ThreatTag from '@/components/ThreatTag'
import StatBar from '@/components/StatBar'
import PullQuote from '@/components/PullQuote'
import DataTable from '@/components/DataTable'

export const metadata: Metadata = {
  title: 'Physician-Owned Hospital Ban — FAH Position | Pillar 05',
  description:
    "FAH authored and defends the 2010 ban on physician-owned hospitals. Former CEO Chip Kahn admitted in 2021: 'The current ban on physician-owned hospitals wouldn't be there if it wasn't for the Federation.' Three repeal bills are live in the 119th Congress.",
  alternates: { canonical: 'https://fah.rojasreport.com/pillars/poh-ban' },
  openGraph: {
    type: 'article',
    title: 'Physician-Owned Hospital Ban — FAH Position | Pillar 05',
    description:
      "FAH authored the POH ban. Chip Kahn on record: 'The ban wouldn't be there if it wasn't for the Federation.' H.R. 4002, S. 1390 and H.R. 2191 pending in the 119th Congress.",
    url: 'https://fah.rojasreport.com/pillars/poh-ban',
    siteName: 'FAH.RojasReport.com',
  },
}

export default function PohBanPage() {
  return (
    <>

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
              { number: '8', label: 'Congresses (112th–119th) with repeal bills introduced; FAH has defended the ban in each' },
              { number: '3', label: 'Repeal bills pending in the 119th Congress (H.R. 4002, S. 1390, H.R. 2191)' },
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
            attribution="Chip Kahn, then-President and CEO, Federation of American Hospitals, Advisory Board interview, June 2021"
          />
          <p className="text-gray-300 mt-6 leading-relaxed">
            Kahn&rsquo;s full statement continued: &ldquo;...but I can remember emailing one of the staffers, literally sending in talking points to some of the senators as the process was taking place.&rdquo;
          </p>
          <p className="text-gray-300 mt-4 leading-relaxed">
            The interview, published by Advisory Board in June 2021 under the headline &ldquo;&lsquo;If we hadn&rsquo;t been there, history might have been different&rsquo;: Chip Kahn on two decades helming the Federation of American Hospitals,&rdquo; was reposted by FAH itself. It is the most direct public admission by any FAH official that the organization authored the physician-owned hospital ban embedded in the Affordable Care Act. The ban has been in effect since 2010 and has prevented the expansion of more than 265 physician-owned hospitals that existed at passage.
          </p>
          <p className="text-gray-300 mt-4 leading-relaxed">
            Kahn retired on December 31, 2025 after 24 years as FAH&rsquo;s president and CEO. Charlene MacDonald, who had run FAH&rsquo;s lobbying and public affairs since 2023, became President and CEO on January 1, 2026. The defense of Section 6001 is now hers.
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
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>POH Repeal Bills (112th&ndash;119th Congress)</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Physician-owned hospital advocates have introduced repeal legislation in every Congress since the ban was enacted. FAH, usually in joint letters with the American Hospital Association, has opposed each effort. None has become law.
          </p>
          <DataTable
            headers={['Congress', 'Bill', 'Status']}
            rows={[
              ['112th–113th', 'Repeal legislation introduced', 'Died in committee'],
              ['114th', 'Repeal legislation introduced', 'Died in committee'],
              ['115th', 'H.R. 1156 — Patient Access to Higher Quality Health Care Act of 2017', 'Died in committee'],
              ['116th', 'S. 2860 (Lankford) — Patient Access to Higher Quality Health Care Act of 2019', 'Died in committee; AHA/FAH opposition letters Jan. 11 and Nov. 19, 2019'],
              ['117th', 'Repeal legislation introduced', 'Died in committee'],
              ['118th', 'H.R. 977 / S. 470 — Patient Access to Higher Quality Health Care Act of 2023; H.R. 9001 — Physician Led and Rural Access to Quality Care Act', 'Died in committee; AHA/FAH joint opposition letter March 29, 2023'],
              ['119th', 'H.R. 4002 (Van Duyne, June 12, 2025); S. 1390 (Lankford, April 9, 2025); H.R. 2191 (House companion to S. 1390)', 'Pending; referred to committee'],
            ]}
          />
        </div>
      </section>

      {/* Section 05 — The 119th-Congress Bills */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>05</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">LIVE LEGISLATION</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>The 119th-Congress Bills</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Three repeal bills are pending in the current Congress. The American Medical Association has formally endorsed ending the restrictions, arguing that physician-owned hospitals can meet rural health needs, and the American College of Radiology also supports repeal.
          </p>
          <DataTable
            headers={['Bill', 'Sponsor', 'Introduced', 'What it does']}
            rows={[
              [
                'H.R. 4002 — Patient Access to Higher Quality Health Care Act of 2025',
                'Rep. Beth Van Duyne (R-TX)',
                'June 12, 2025',
                'Full repeal of ACA Sections 6001 and 10601 and HCERA Section 1106. Referred to Energy & Commerce and Ways & Means. Bipartisan cosponsors include Rep. Henry Cuellar (D-TX), Hern, Miller-Meeks, Biggs, Yakym, Harris (MD), Dunn (FL) and Pfluger.',
              ],
              [
                'S. 1390 — Physician Led and Rural Access to Quality Care Act',
                'Sen. James Lankford (R-OK)',
                'April 9, 2025',
                'Rural-access exception to the ban (see House companion H.R. 2191). Referred to committee. Cosponsors: Marshall, Cassidy, Tillis, Cornyn, Mullin, Boozman, Barrasso, Budd.',
              ],
              [
                'H.R. 2191 — Physician Led and Rural Access to Quality Care Act',
                'House companion to S. 1390',
                '119th Congress',
                'Rural exception for hospitals more than 35 miles from another hospital. Referred to Ways & Means and Energy & Commerce.',
              ],
            ]}
          />
        </div>
      </section>

      {/* Section 06 — FAH Opposition Letters */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>06</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">FAH OPPOSITION LETTERS</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>FAH Opposition Letters (2017&ndash;2025)</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            FAH&rsquo;s most consequential letters on the ban have been joint letters with the AHA. Three are confirmed from the AHA&rsquo;s own archive: January 11, 2019; November 19, 2019; and March 29, 2023.
          </p>
          <DataTable
            headers={['Date', 'Target', 'Subject']}
            rows={[
              ['2017', 'House Ways & Means Committee', 'Opposition to POH expansion provisions in tax reform'],
              ['2018', 'Senate Finance Committee', 'Opposition to POH repeal in various health bills'],
              ['January 11, 2019', 'Congress (joint AHA/FAH letter)', 'Urged Congress to keep the ban on self-referral to physician-owned hospitals'],
              ['2019', 'House Energy & Commerce', 'Opposition to H.R. 2513'],
              ['November 19, 2019', 'Congress (joint AHA/FAH letter)', 'Opposition to legislation (S. 2860) to repeal the ban on self-referral to physician-owned hospitals'],
              ['2020', 'Multiple committees', 'COVID relief bills — oppose POH waiver expansions'],
              ['2021', 'House Ways & Means', 'Opposition to Build Back Better POH provisions'],
              ['2022', 'Senate Finance', 'Opposition to standalone POH repeal bills'],
              ['March 29, 2023', 'Congress (joint AHA/FAH letter)', 'Opposition to H.R. 977 / S. 470, which would allow "unfettered growth" of self-referral to physician-owned hospitals'],
              ['2024', 'Multiple', 'Opposition to 118th Congress repeal efforts'],
              ['2025', 'Multiple', 'Opposition to 119th Congress activity'],
            ]}
          />
        </div>
      </section>

      {/* Section 07 — The Evidence */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>07</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">FAH CLAIMS vs. EVIDENCE</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>FAH Claims vs. Independent Research</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            The AHA/FAH talking points, as set out in their March 29, 2023 letter: physician-owned hospitals avoid Medicaid and uninsured patients, treat fewer complex cases, provide fewer emergency services, earn &ldquo;patient care margins 15 times&rdquo; those of community hospitals, and are penalized for readmissions &ldquo;at five times the rate.&rdquo;
          </p>
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
                'AAOS / physician association data: POHs often serve as primary orthopedic, cardiac, and surgical access in markets; the AMA argues POHs can meet rural health needs',
              ],
            ]}
          />
        </div>
      </section>

      {/* Section 08 — Current Threat */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>08</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">CURRENT THREAT ASSESSMENT</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Current Threat Assessment</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            The physician-owned hospital ban faces three live repeal bills in the 119th Congress: H.R. 4002 (introduced June 12, 2025, with bipartisan cosponsors), S. 1390 (April 9, 2025, with eight Republican cosponsors) and its House companion H.R. 2191. All three have been referred to committee; no POH repeal bill has been reported out of committee in either the 118th or 119th Congress. The AMA&rsquo;s formal endorsement of lifting the restrictions gives the repeal effort organized-medicine backing it previously lacked.
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

      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Sources</h2>
          <ul className="source-list">
            <li>Advisory Board, &ldquo;&lsquo;If we hadn&rsquo;t been there, history might have been different&rsquo;: Chip Kahn on two decades helming the Federation of American Hospitals,&rdquo; June 2021 (reposted by FAH)</li>
            <li>Medscape report on lawmakers weighing lifting national restrictions on physician-owned hospitals (2024), quoting Kahn&rsquo;s admission</li>
            <li>FAH, &ldquo;Chip Kahn Announces Retirement&rdquo; and &ldquo;Charlene MacDonald Named President &amp; Chief Executive Officer,&rdquo; 2025 (effective January 1, 2026)</li>
            <li>ACA Section 6001 legislative text and conference report</li>
            <li>MedPAC physician-owned hospital reports (2005, 2006)</li>
            <li>GAO physician-owned hospital study (2010)</li>
            <li>Congress.gov: H.R. 4002 (119th Congress, introduced June 12, 2025); Rep. Van Duyne press release, June 2025</li>
            <li>Govinfo bill status: S. 1390 (119th Congress, introduced April 9, 2025); H.R. 2191 (119th Congress); Sen. Lankford press release</li>
            <li>Congress.gov: H.R. 977 and S. 470 (118th Congress); Govinfo: H.R. 9001 (118th Congress)</li>
            <li>Govinfo bill summaries: H.R. 1156 (115th Congress); S. 2860 (116th Congress)</li>
            <li>AHA/FAH joint letters to Congress on physician-owned hospitals: January 11, 2019; November 19, 2019; March 29, 2023 (AHA letter archive)</li>
            <li>American Medical Association leadership statements endorsing an end to restrictions on physician-owned hospitals; American College of Radiology, physician-owned hospitals advocacy page</li>
            <li>FAH opposition letter archive (2017–2025)</li>
            <li>Reviewed October 2026.</li>
          </ul>
        </div>
      </section>

    </>
  )
}
