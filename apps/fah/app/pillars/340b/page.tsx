import type { Metadata } from 'next'
import Link from 'next/link'
import ThreatTag from '@/components/ThreatTag'
import StatBar from '@/components/StatBar'
import PullQuote from '@/components/PullQuote'
import DataTable from '@/components/DataTable'

export const metadata: Metadata = {
  title: '340B Drug Pricing — FAH Position | Pillar 03',
  description:
    "FAH members are excluded from the 340B program — it's a nonprofit and public hospital benefit. In 2026 FAH backed CMS's proposal to cut 340B hospitals' Medicare drug payments and redistribute the money to all outpatient hospitals, including its own members.",
  alternates: { canonical: 'https://fah.rojasreport.com/pillars/340b' },
  openGraph: {
    type: 'article',
    title: '340B Drug Pricing — FAH Position | Pillar 03',
    description:
      'FAH members excluded from 340B. FAH supports CMS cuts to 340B hospital drug payments that redistribute dollars to its members (Aug 2026).',
    url: 'https://fah.rojasreport.com/pillars/340b',
    siteName: 'FAH.RojasReport.com',
  },
}

export default function ThreeFourtyBPage() {
  return (
    <>

      <div className="px-6 py-3 text-xs text-gray-500" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto">
          <Link href="/pillars" className="hover:text-fah-accent transition-colors">Pillars</Link>
          <span className="mx-2">/</span>
          <span style={{ color: '#EB6E2C' }}>340B Drug Pricing</span>
        </div>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#EB6E2C' }}>
            Pillar 03
          </p>
          <h1 className="font-headline text-5xl font-bold mb-2" style={{ color: '#f7f4ef' }}>
            340B Drug Pricing
          </h1>
          <p className="text-xl text-gray-400 mb-4">
            340B Program &middot; Contract Pharmacy &middot; Drug Manufacturers
          </p>
          <ThreatTag level="Low" />
        </div>
      </section>

      <section className="px-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto">
          <StatBar
            stats={[
              { number: '>$100B', label: '340B purchases in 2025 (HRSA data) — up from $81.4B in 2024' },
              { number: '$0', label: 'FAH member benefit from 340B (members are excluded)' },
              { number: '78%', label: 'Share of hospitals FAH says would gain from CMS’s proposed 340B payment cut (Aug 2026)' },
              { number: 'Jan 1, 2027', label: 'Launch of HRSA’s revived 340B rebate pilot' },
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
            FAH members — for-profit hospitals — are not eligible for the 340B drug discount program. The program is limited to qualifying nonprofit and government-owned hospitals, FQHCs, and certain other safety-net providers. FAH&rsquo;s position on 340B is driven by competition: for-profit hospitals compete with 340B-eligible nonprofit hospitals and have an interest in limiting the program&rsquo;s scope.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            For years FAH was a bystander in 340B fights between hospitals and drug manufacturers. That changed in 2026. In its August 31, 2026 comment letter on the CY2027 Medicare outpatient payment rule, signed by President and CEO Charlene MacDonald, FAH <strong style={{ color: '#f7f4ef' }}>supported</strong> CMS&rsquo;s proposal to pay 340B hospitals for drugs at acquisition cost and redistribute the savings, budget-neutrally, to every hospital paid under the outpatient system. Because FAH&rsquo;s members cannot participate in 340B, every dollar cut from a 340B hospital under that design flows to a non-340B hospital &mdash; which is to say, to FAH&rsquo;s members.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            The program FAH now wants trimmed has never been larger: HRSA data released in 2026 show covered entities purchased more than $100 billion in 340B drugs in 2025, up 23% from $81.4 billion in 2024. Disproportionate-share hospitals accounted for $79.2 billion, about 80% of the total.
          </p>
        </div>
      </section>

      {/* Section 02 — CY2027 OPPS and the FAH letter */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>02</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">THE 2026 PIVOT</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>FAH Backs the CMS 340B Cut</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            CMS&rsquo;s CY2027 OPPS/ASC proposed rule (CMS-1850-P), released July 2, 2026, proposes acquisition-cost-based payment for drugs acquired through 340B, with the resulting savings redistributed to all OPPS hospitals in a budget-neutral manner. Comments closed August 31, 2026; a final rule is expected around November 2026.
          </p>
          <PullQuote
            quote="[The proposal] follows Congress's direction, reduces beneficiary cost-sharing and directs Medicare dollars to smaller and rural hospitals... without increasing Medicare spending."
            attribution="FAH comment letter on the CY2027 OPPS proposed rule, signed by Charlene MacDonald, August 31, 2026"
          />
          <DataTable
            headers={['FAH claim (Aug 31, 2026 letter)', 'Detail']}
            rows={[
              ['Hospitals that would gain', '~78% of all hospitals would see increased payments, by FAH’s own analysis'],
              ['340B hospitals that would gain', '54% of 340B hospitals, per the same analysis — meaning the other 46% of 340B hospitals absorb the cut'],
              ['Characterization', 'The proposal would "appropriately right-size OPPS payments"'],
              ['Who pays', 'High-volume 340B hospitals, which cannot include any FAH member'],
            ]}
          />
          <p className="text-gray-300 mt-6 leading-relaxed">
            The same letter raised objections to the site-neutral provisions of the rule (see <Link href="/pillars/site-neutral" className="hover:text-fah-accent transition-colors" style={{ color: '#EB6E2C' }}>Pillar 06</Link>). FAH opposes budget-neutral cuts when its members bear them and supports them when its members receive them.
          </p>
        </div>
      </section>

      {/* Section 03 — AHA v. Becerra */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>03</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">AHA V. BECERRA</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>AHA v. Becerra (596 U.S. 724)</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            The Supreme Court ruled in <em>AHA v. Becerra</em> (2022) that CMS had unlawfully reduced 340B drug reimbursement rates without conducting the required hospital survey. The Court ordered CMS to provide a remedy, which CMS estimated at approximately $9 billion in retrospective payments to affected hospitals. The remedy is funded by an offset to all hospitals&rsquo; outpatient payments; in the CY2026 OPPS final rule (November 21, 2025) CMS kept that offset at 0.5%, withdrawing a proposed increase to 2%.
          </p>
          <DataTable
            headers={['Item', 'Detail']}
            rows={[
              ['Case', 'American Hospital Association v. Becerra, 596 U.S. 724 (2022)'],
              ['Issue', 'CMS reduced 340B reimbursement without required survey'],
              ['Outcome', 'Supreme Court ruled for plaintiffs (AHA, not FAH)'],
              ['CMS remedy estimate', '~$9 billion in retrospective payments'],
              ['FAH position on remedy', 'Opposed the full $9B remedy scope'],
              ['Remedy offset', 'CY2026 OPPS final rule kept the offset at 0.5% (proposed 2% withdrawn)'],
            ]}
          />
        </div>
      </section>

      {/* Section 04 — HRSA Rebate Pilot */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>04</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">HRSA REBATE PILOT</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>The 340B Rebate Model: Blocked, Then Revived</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            HRSA&rsquo;s rebate pilot lets approved manufacturers replace up-front 340B discounts with after-the-fact rebates &mdash; the structural change manufacturers have sought for years and 340B hospitals have fought. The first version was enjoined before it took effect; a narrower version launches January 1, 2027.
          </p>
          <DataTable
            headers={['Date', 'Event']}
            rows={[
              ['Jan 1, 2026 (planned)', 'Original rebate model pilot, with approved manufacturer plans, scheduled to take effect'],
              ['Dec 29, 2025', 'Chief Judge Lance E. Walker (D. Me.) preliminarily enjoins the pilot for likely violations of the Administrative Procedure Act'],
              ['Jan 7, 2026', 'First Circuit denies the government’s request for a stay of the injunction'],
              ['Jan 12, 2026', 'DOJ signals it will dismiss the appeal and reconsider the model'],
              ['~Feb 2026', 'Original pilot vacated'],
              ['July 31, 2026', 'HRSA issues revised pilot notice (Federal Register Aug 3, 2026, doc. 2026-15633), limited to drugs with a Medicare Maximum Fair Price for 2026–2027, with added notice, dispute and resubmission safeguards; AHA statement same day'],
              ['Aug 24, 2026', 'Manufacturer plans due'],
              ['Sept 24, 2026', 'HRSA approvals due; HRSA has approved manufacturer proposals'],
              ['Jan 1, 2027', 'Revised pilot launches for at least one year, after at least 90 days’ notice to covered entities'],
            ]}
          />
        </div>
      </section>

      {/* Section 05 — Legislation */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>05</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">119TH CONGRESS</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>340B Legislation in the 119th Congress</h2>
          <DataTable
            headers={['Bill', 'Sponsor', 'Introduced', 'What it does']}
            rows={[
              ['H.R. 44 — Rural 340B Access Act of 2025', '—', 'Jan 3, 2025', '—'],
              ['H.R. 5256 — 340B ACCESS Act', 'Reps. Buddy Carter (R-GA) and Diana Harshbarger (R-TN)', 'Sept 10, 2025 (reintroduced)', 'Transparency and accountability requirements on 340B covered entities; generally opposed by 340B Health and the AHA, supported by manufacturers'],
              ['H.R. 9599 — SECURE 340B Act', 'Rep. Scott Peters', 'July 6, 2026', '—'],
              ['S. 5244 — SUSTAIN 340B Act', 'Sen. Jerry Moran', 'Aug 5, 2026', 'Statutory clarity plus transparency and integrity provisions; referred to the Senate HELP Committee'],
            ]}
          />
          <p className="text-gray-300 mt-6 leading-relaxed">
            This site previously reported that FAH opposed H.R. 5256, the 340B ACCESS Act, which would impose new transparency and accountability requirements on 340B covered entities, on the theory that scrutiny of the program could lead to its expansion to for-profit hospitals with strings attached. That position could not be re-verified in the October 2026 review and sits awkwardly beside FAH&rsquo;s August 2026 support for cutting 340B hospital payments; treat it as unconfirmed. The bill, reintroduced September 10, 2025, is pending. Health-policy analysts quoted by 340B Report in 2026 considered major congressional 340B action unlikely this year; the action has been at CMS and HRSA.
          </p>
        </div>
      </section>

      {/* Section 06 — Contract pharmacy */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>06</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">CONTRACT PHARMACY</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>State Contract-Pharmacy Laws and Litigation</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            The manufacturer&ndash;hospital war over contract pharmacies has moved to the states. The Congressional Research Service (LSB11163) listed eight states with laws barring manufacturers from restricting 340B contract-pharmacy arrangements &mdash; Arkansas, Kansas, Louisiana, Maryland, Mississippi, Missouri, Minnesota and West Virginia &mdash; and more have enacted them since. The Eighth Circuit upheld Arkansas&rsquo;s law and the Supreme Court denied review on December 9, 2024; the Fifth Circuit upheld the Louisiana and Mississippi laws; a further appellate ruling upholding a state law came February 10, 2026. Manufacturer and PhRMA suits remain pending against the Kansas, Minnesota and Missouri laws. FAH&rsquo;s members, excluded from 340B, have no contract-pharmacy arrangements at stake in any of them.
          </p>
        </div>
      </section>

      {/* Section 07 — OBBBA context */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>07</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">CONTEXT</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>The Safety Net After the One Big Beautiful Bill Act</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            The hospitals that account for roughly 80% of 340B purchases &mdash; disproportionate-share hospitals &mdash; are the same safety-net institutions most exposed to the One Big Beautiful Bill Act (H.R. 1, P.L. 119-21), signed July 4, 2025. KFF puts the law&rsquo;s federal health cuts at roughly $1 trillion, at least $940 billion of it from Medicaid; CBO projects roughly 10&ndash;12 million more uninsured by 2034. The law freezes state provider taxes and phases the hold-harmless threshold down from 6% to 3.5% starting FY2028, caps state directed payments at 100% of Medicare in expansion states and 110% in non-expansion states, and created a $50 billion Rural Health Transformation Program ($10 billion a year, FY2026&ndash;2030) whose first awards went to all 50 states on December 29, 2025.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            FAH opposed the law. Then-CEO Chip Kahn&rsquo;s July 3, 2025 statement called the cuts &ldquo;the largest cuts to care our country has ever seen.&rdquo; Thirteen months later, FAH asked CMS to cut Medicare drug payments to the 340B hospitals absorbing those Medicaid losses and route the money to its own members.
          </p>
        </div>
      </section>

      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Sources</h2>
          <ul className="source-list">
            <li><em>AHA v. Becerra</em>, 596 U.S. 724 (2022)</li>
            <li>HRSA 340B purchase data, as reported by Drug Channels (Dec 2025: $81.4B in 2024; July 2026: more than $100B in 2025) and Johnson &amp; Johnson Policy Research</li>
            <li>FAH comment letter on the CY2027 OPPS proposed rule, signed by Charlene MacDonald (Aug 31, 2026)</li>
            <li>CMS CY2027 OPPS/ASC proposed rule, CMS-1850-P (July 2, 2026); AHA News, HFMA and K&amp;L Gates summaries of the 340B and site-neutral proposals (July&ndash;Aug 2026)</li>
            <li>CMS CY2026 OPPS final rule (Nov 21, 2025), via America&rsquo;s Essential Hospitals summary</li>
            <li>340B rebate model pilot: Ropes &amp; Gray alert on the Dec 29, 2025 injunction; 340B Health on the Jan 7, 2026 First Circuit stay denial; HRSA revised pilot notice, Federal Register doc. 2026-15633 (Aug 3, 2026); Mintz, Epstein Becker Green and Covington alerts (Aug 2026); AHA statement (July 31, 2026); RWC-340B on HRSA manufacturer approvals</li>
            <li>Congress.gov: H.R. 44, H.R. 5256, H.R. 9599, S. 5244 (119th Congress); AHA News on S. 5244 introduction (Aug 5, 2026)</li>
            <li>340B Report, &ldquo;Major congressional 340B action unlikely in 2026&rdquo; (2026)</li>
            <li>Congressional Research Service, LSB11163 (state 340B contract-pharmacy laws); Spencer Fane on the Dec 9, 2024 certiorari denial; ASHP statement on Feb 10, 2026 appellate decision; Law360, 340B appellate cases to watch (2026)</li>
            <li>One Big Beautiful Bill Act, H.R. 1, P.L. 119-21 (July 4, 2025); CRS R48569; KFF; HHS/CMS announcement of Rural Health Transformation Program awards (Dec 29, 2025)</li>
            <li>FAH statement on final passage of H.R. 1 (July 3, 2025)</li>
            <li>Reviewed October 2026.</li>
          </ul>
        </div>
      </section>

    </>
  )
}
