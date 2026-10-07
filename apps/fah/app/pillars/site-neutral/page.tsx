import type { Metadata } from 'next'
import Link from 'next/link'
import ThreatTag from '@/components/ThreatTag'
import StatBar from '@/components/StatBar'
import PullQuote from '@/components/PullQuote'
import DataTable from '@/components/DataTable'

export const metadata: Metadata = {
  title: 'Site-Neutral Payments — FAH Position | Pillar 06',
  description:
    'FAH opposes site-neutral payment proposals. Ten-year savings estimates run from $153B (CRFB) to $471B (BCBSA/Phil Ellis). CMS extended site-neutral cuts in CY2026, proposed more for CY2027, and Congress mandated separate NPIs for off-campus HOPDs from 2028.',
  alternates: { canonical: 'https://fah.rojasreport.com/pillars/site-neutral' },
  openGraph: {
    type: 'article',
    title: 'Site-Neutral Payments — FAH Position | Pillar 06',
    description:
      'FAH opposes site-neutral payment proposals. $153B–$471B in estimated 10-year savings. CMS cuts expanded in 2026; more proposed for 2027.',
    url: 'https://fah.rojasreport.com/pillars/site-neutral',
    siteName: 'FAH.RojasReport.com',
  },
}

export default function SiteNeutralPage() {
  return (
    <>

      <div className="px-6 py-3 text-xs text-gray-500" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto">
          <Link href="/pillars" className="hover:text-fah-accent transition-colors">Pillars</Link>
          <span className="mx-2">/</span>
          <span style={{ color: '#EB6E2C' }}>Site-Neutral Payments</span>
        </div>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#EB6E2C' }}>
            Pillar 06
          </p>
          <h1 className="font-headline text-5xl font-bold mb-2" style={{ color: '#f7f4ef' }}>
            Site-Neutral Payments
          </h1>
          <p className="text-xl text-gray-400 mb-4">
            Payment Parity &middot; HOPD vs. Physician Office &middot; Medicare Savings
          </p>
          <ThreatTag level="High" />
        </div>
      </section>

      <section className="px-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto">
          <StatBar
            stats={[
              { number: '$153B', label: 'Medicare savings estimate — CRFB (2021; 10-year, comprehensive reform)' },
              { number: '$471B', label: 'Total savings estimate — BCBSA / Phil Ellis (Feb 2023)' },
              { number: '$290M', label: 'CMS CY2026 site-neutral savings (first year)' },
              { number: '2028', label: 'Year off-campus HOPDs must bill under their own NPI (CAA 2026 §6225)' },
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
            FAH opposes site-neutral payment proposals, calling them devastating cuts to hospital funding.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            FAH&rsquo;s stated position: &ldquo;Blunt site-neutral payment policies ignore fundamental functional and cost structure differences between hospitals and physician offices.&rdquo;
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            The position has held through the leadership change from Chip Kahn, who retired December 31, 2025, to Charlene MacDonald, President and CEO since January 1, 2026. MacDonald&rsquo;s August 31, 2026 comment letter on the CY2027 outpatient payment rule raised site-neutral concerns, and FAH&rsquo;s September 14, 2026 comments on the CY2027 Physician Fee Schedule urged CMS to analyze the interaction between physician-office practice-expense cuts and outpatient site-neutral policies before making further site-of-service changes.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            The rhetoric from FAH&rsquo;s board has softened. At the House Ways &amp; Means Committee&rsquo;s April 28, 2026 hearing with health-system CEOs, HCA Healthcare CEO Samuel Hazen &mdash; an FAH director &mdash; was among the executives who signaled they could accept a &ldquo;rational reworking&rdquo; of site-neutral payments.
          </p>
        </div>
      </section>

      {/* Section 02 — Explainer */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>02</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">EXPLAINER</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>What Site-Neutral Means</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Currently, Medicare pays significantly more for the same service when provided at a hospital outpatient department than at a physician&rsquo;s office. Site-neutral proposals would align these payments, paying the same rate regardless of setting. Where CMS has applied site-neutral policy to excepted off-campus departments, it pays the Physician Fee Schedule&ndash;equivalent rate &mdash; 40% of the outpatient rate, a roughly 60% reduction.
          </p>
          <div
            className="p-5 rounded-lg text-sm text-gray-300"
            style={{
              background: 'rgba(235,110,44,0.08)',
              border: '1px solid rgba(235,110,44,0.2)',
            }}
          >
            <strong style={{ color: '#EB6E2C' }}>Payment differential examples (illustrative):</strong> The same cardiac stress test costs Medicare approximately $300 at a physician office and $500 at a hospital outpatient department. The same colonoscopy costs Medicare approximately $450 at an ASC and $1,100 at a hospital outpatient department. Patients pay higher cost-sharing at hospital settings.
          </div>
        </div>
      </section>

      {/* Section 03 — Financial Stakes */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>03</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">FINANCIAL STAKES</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Financial Stakes</h2>
          <DataTable
            headers={['Source', 'Scope', 'Estimate']}
            rows={[
              ['Committee for a Responsible Federal Budget (2021)', 'Comprehensive Medicare site-neutral reform', '$153B over 10 years'],
              ['Congressional Budget Office (cited 2023)', 'Broad Medicare site-neutral reform', '"More than $150 billion" over 10 years'],
              [
                'Blue Cross Blue Shield Association report by economist Phil Ellis (Feb 2023)',
                'Medicare, beneficiaries and commercial market',
                '$471B total: $202B Medicare savings (2024–2033) + ~$67B Part B premiums + ~$67B beneficiary cost-sharing + commercial-market savings',
              ],
              [
                "FTI Consulting, commissioned by the Coalition to Strengthen America's Healthcare (FAH is a founding member)",
                'Comprehensive',
                '$182B over 10 years ($12B Year 1), as reported by FTI; figures not independently verified',
              ],
              [
                "Coalition to Strengthen America's Health Care / FTI research brief (Feb 5, 2026)",
                'Hospital impact of MedPAC-style site-neutral proposals',
                'Hospital-side impact modeling; dollar totals not captured',
              ],
              ['CMS CY2026 OPPS Final Rule (Nov 21, 2025)', 'Drug administration at excepted off-campus departments; rural sole community hospitals exempt', '$290M reduction in Year 1'],
              ['CMS CY2027 OPPS Proposed Rule (July 2, 2026)', 'Certain noncontrast imaging at excepted off-campus departments', 'Proposed; final rule expected around November 2026'],
            ]}
          />
        </div>
      </section>

      {/* Section 04 — History */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>04</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">HISTORY</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Legislative and Regulatory History</h2>
          <DataTable
            headers={['Date', 'Event']}
            rows={[
              ['2015', 'Bipartisan Budget Act: Site-neutral enacted for new off-campus HOPDs — partial loss for FAH'],
              [
                'CY2019',
                'CMS OPPS Final Rule: Extended site-neutral to E&M visits at all off-campus HOPDs (60% reduction) — FAH opposed',
              ],
              ['2020', 'D.C. Circuit upheld CMS authority to impose site-neutral reductions — major loss for hospital lobby'],
              [
                '2023',
                'Lower Costs, More Transparency Act (H.R. 5378) passed House 320–71. FAH opposition letter December 7, 2023. Died in Senate — FAH victory.',
              ],
              ['November 2024', 'Cassidy-Hassan Senate Framework: FAH issued immediate opposition November 1, 2024'],
              [
                'April 15, 2025',
                'Trump Executive Order 14273: Directed HHS to propose regulations ensuring Medicare payments don\'t encourage drug administration in HOPDs over physician offices',
              ],
              [
                'July 4, 2025',
                'One Big Beautiful Bill Act (H.R. 1, P.L. 119-21) signed — not a site-neutral bill, but the hospital lobby\'s defining 2025 loss: provider-tax freeze and phase-down, caps on state directed payments, $50B Rural Health Transformation Program (see Section 06)',
              ],
              ['September 15, 2025', 'FAH comment letter to CMS Administrator Mehmet Oz on the CY2026 OPPS proposed rule'],
              [
                'November 21, 2025',
                'CMS CY2026 OPPS Final Rule: Finalized expansion of site-neutral to drug administration in all excepted off-campus HOPDs at the PFS-equivalent rate; rural sole community hospitals exempt; kept the 340B-remedy offset at 0.5% (withdrew proposed 2%)',
              ],
              [
                'February 3, 2026',
                'Consolidated Appropriations Act, 2026 signed. Section 6225: from January 1, 2028, no Medicare payment to an off-campus HOPD unless it bills under its own location-specific NPI and the main provider has a current provider-based attestation on file — widely described as the data precursor to broader site-neutral policy',
              ],
              ['February 5, 2026', 'Coalition to Strengthen America\'s Health Care / FTI research brief modeling MedPAC-style site-neutral proposals'],
              ['April 28, 2026', 'House Ways & Means hearing with health-system CEOs: HCA\'s Samuel Hazen and other CEOs signal acceptance of a "rational reworking" of site-neutral payments'],
              [
                'July 2, 2026',
                'CMS CY2027 OPPS/ASC Proposed Rule (CMS-1850-P): proposes extending the PFS-equivalent rate to certain noncontrast imaging at excepted off-campus HOPDs, continues phasing out the inpatient-only list, proposes the implementation framework for Section 6225, and proposes acquisition-cost-based payment for 340B drugs with budget-neutral redistribution to all OPPS hospitals',
              ],
              ['August 31, 2026', 'FAH comment letter on the CY2027 OPPS proposed rule (signed by Charlene MacDonald): raises site-neutral concerns; supports the 340B payment proposal'],
              ['September 14, 2026', 'FAH comments on the CY2027 Physician Fee Schedule: asks CMS to analyze the interaction between PFS practice-expense cuts and OPPS site-neutral policies before further site-of-service changes'],
              ['November 2026 (expected)', 'CY2027 OPPS final rule'],
            ]}
          />
        </div>
      </section>

      {/* Section 05 — The 2026 Regulatory Front */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>05</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">2026 DEVELOPMENTS</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Congress and CMS Advance Site-Neutral by Rider and Rule</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Since FAH helped kill the Lower Costs, More Transparency Act in the Senate, site-neutral policy has advanced through an appropriations-bill provision and CMS rulemaking rather than through enacted stand-alone legislation.
          </p>
          <DataTable
            headers={['Measure', 'What it does', 'Status']}
            rows={[
              [
                'CAA 2026, Section 6225 (signed Feb 3, 2026)',
                'Beginning Jan 1, 2028, off-campus HOPDs must bill under a separate, location-specific NPI and the main provider must have a current provider-based attestation (42 CFR 413.65) to receive Medicare payment. Gives CMS and Congress the claims-level data to target off-campus departments.',
                'Enacted; CMS proposed the implementation framework in the CY2027 OPPS rule',
              ],
              [
                'CY2026 OPPS Final Rule (Nov 21, 2025)',
                'Drug-administration services at excepted off-campus HOPDs paid at the PFS-equivalent rate (40% of OPPS). Rural sole community hospitals exempt.',
                'In effect; $290M first-year reduction',
              ],
              [
                'CY2027 OPPS Proposed Rule (July 2, 2026)',
                'Extends the PFS-equivalent rate to certain noncontrast imaging services at excepted off-campus HOPDs; continues phase-out of the inpatient-only list.',
                'Comments closed Aug 31, 2026; final rule expected around Nov 2026',
              ],
            ]}
          />
          <p className="text-gray-300 mt-6 leading-relaxed">
            FAH&rsquo;s August 31, 2026 letter on the CY2027 rule registered its site-neutral objections while supporting a different budget-neutral cut in the same rule &mdash; the 340B drug payment restructuring that would redistribute money from 340B hospitals to non-340B hospitals, including FAH&rsquo;s members (see <Link href="/pillars/340b" className="hover:text-fah-accent transition-colors" style={{ color: '#EB6E2C' }}>Pillar 03</Link>).
          </p>
        </div>
      </section>

      {/* Section 06 — OBBBA */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>06</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">THE BIGGER LOSS</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>The One Big Beautiful Bill Act</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            While FAH held the line on legislative site-neutral, it lost the larger 2025 fight over hospital financing. The One Big Beautiful Bill Act (H.R. 1, P.L. 119-21), signed July 4, 2025, cuts roughly $1 trillion in federal health spending, at least $940 billion of it from Medicaid, according to KFF; CBO projects roughly 10&ndash;12 million more uninsured by 2034. CBO attributed $326B to Medicaid work requirements, $191B to provider-tax limits and $149B to state-directed-payment restrictions.
          </p>
          <DataTable
            headers={['Provision', 'Effect on hospitals']}
            rows={[
              ['Provider taxes', 'Freezes existing state provider taxes and bars new or increased ones; lowers the hold-harmless safe-harbor threshold for expansion states from 6% to 3.5% of net patient revenue in annual 0.5-point steps starting FY2028'],
              ['State directed payments', 'Capped at 100% of Medicare rates in expansion states and 110% in non-expansion states; existing higher payments phase down'],
              ['Rural Health Transformation Program', '$50B — $10B per year, FY2026–2030 — administered by CMS; half split equally among approved states, half by CMS formula. On Dec 29, 2025 CMS announced awards to all 50 states, averaging about $200M and ranging from $147M to $281M'],
            ]}
          />
          <PullQuote
            quote="It cannot be overstated – the health cuts passed by Congress today represent the largest cuts to care our country has ever seen."
            attribution="Chip Kahn, then-President and CEO, FAH statement on final passage, July 3, 2025"
          />
          <p className="text-gray-300 mb-4 leading-relaxed">
            FAH fought the bill at every stage: Kahn warned the House package would be &ldquo;a death knell to critical hospital services and entire communities&rsquo; access to care&rdquo;; a June 2025 statement (&ldquo;It&rsquo;s not too late&rdquo;) urged senators to reject the Medicaid cuts; after Senate passage on July 1, 2025 FAH said &ldquo;The House can assert their will and better this bad bill.&rdquo; Its final statement cited $1.1 trillion in cuts and 11.8 million more uninsured, figures drawn from the Senate-passed text.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            None of it moved Republican votes. In a July 14, 2025 NPR post-mortem on why the health lobby failed, Kahn credited the Paragon Health Institute and Brian Blase for selling Congress the framing that provider taxes are &ldquo;legalized money laundering.&rdquo; Under MacDonald, FAH has since turned to implementation: comments on the Rural Health Transformation Fund (May 11, 2026) and on the state directed payments proposed rule (July 21, 2026) &mdash; the two provisions that most directly determine how much of the law&rsquo;s Medicaid financing changes reach FAH&rsquo;s member hospitals.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Sources</h2>
          <ul className="source-list">
            <li>Committee for a Responsible Federal Budget, site-neutral payments analysis (2021)</li>
            <li>Blue Cross Blue Shield Association, site-neutral payment cost savings report by economist Phil Ellis (Feb 2023)</li>
            <li>Coalition to Strengthen America&rsquo;s Health Care / FTI Consulting research brief on site-neutral proposals (Feb 5, 2026; via AHA News)</li>
            <li>CMS OPPS rulemaking: CY2019 final rule; CY2026 final rule (Nov 21, 2025); CY2027 proposed rule CMS-1850-P (July 2, 2026)</li>
            <li>Consolidated Appropriations Act, 2026, Section 6225 (signed Feb 3, 2026); Bass Berry &amp; Sims and Davis Wright Tremaine client alerts on off-campus HOPD NPI and attestation requirements (2026)</li>
            <li>FAH comment letter on CY2026 OPPS proposed rule to CMS Administrator Mehmet Oz (Sept 15, 2025)</li>
            <li>FAH comment letter on CY2027 OPPS proposed rule, signed by Charlene MacDonald (Aug 31, 2026)</li>
            <li>FAH comments on CY2027 Physician Fee Schedule proposed rule (Sept 14, 2026)</li>
            <li>House Ways &amp; Means Committee, Full Committee Hearing with Health System CEOs (Apr 28, 2026): Hazen testimony and transcript; Fierce Healthcare report on health-system CEOs agreeing to a &ldquo;rational reworking&rdquo; of site-neutral payments (Apr 2026)</li>
            <li>FAH letter archive (2023–2025); Congress.gov H.R. 5378; Cassidy&ndash;Hassan site-neutral framework (2024)</li>
            <li>Trump Executive Order 14273 (April 15, 2025)</li>
            <li>One Big Beautiful Bill Act, H.R. 1, P.L. 119-21 (July 4, 2025); CRS R48569; KFF; Commonwealth Fund explainer on provider-tax limits (Dec 2025)</li>
            <li>FAH statements on H.R. 1: &ldquo;It&rsquo;s not too late&rdquo; (June 2025); Senate passage (July 1, 2025); final passage (July 3, 2025)</li>
            <li>NPR Shots &ndash; Health News, report on why the hospital lobby failed to stop the Medicaid cuts, quoting Kahn (July 14, 2025)</li>
            <li>HHS/CMS, &ldquo;CMS Announces $50 Billion in Awards to Strengthen Rural Health in All 50 States&rdquo; (Dec 29, 2025); KFF, &ldquo;A Closer Look at the $50 Billion Rural Health Transformation Program&rdquo;</li>
            <li>FAH comments: Rural Health Transformation Fund PRA notice (May 11, 2026); State Directed Payments proposed rule (July 21, 2026)</li>
            <li>Reviewed October 2026.</li>
          </ul>
        </div>
      </section>

    </>
  )
}
