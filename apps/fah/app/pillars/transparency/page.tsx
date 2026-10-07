import type { Metadata } from 'next'
import Link from 'next/link'
import ThreatTag from '@/components/ThreatTag'
import StatBar from '@/components/StatBar'
import DataTable from '@/components/DataTable'
import PullQuote from '@/components/PullQuote'

export const metadata: Metadata = {
  title: 'Price Transparency — FAH Position | Pillar 08',
  description:
    'FAH was a named plaintiff in the 2019 lawsuit to block hospital price transparency and lost. It urged “regulatory stability” in 2025 as CMS tightened the rules anyway, and in 2026 pivoted to demanding transparency from insurers.',
  alternates: { canonical: 'https://fah.rojasreport.com/pillars/transparency' },
  openGraph: {
    type: 'article',
    title: 'Price Transparency — FAH Position | Pillar 08',
    description:
      'FAH sued to block price transparency in 2019 and lost. It now asks for regulatory stability for hospitals and transparency from insurers.',
    url: 'https://fah.rojasreport.com/pillars/transparency',
    siteName: 'FAH.RojasReport.com',
  },
}

export default function TransparencyPage() {
  return (
    <>

      <div className="px-6 py-3 text-xs text-gray-500" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto">
          <Link href="/pillars" className="hover:text-fah-accent transition-colors">Pillars</Link>
          <span className="mx-2">/</span>
          <span style={{ color: '#EB6E2C' }}>Price Transparency</span>
        </div>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#EB6E2C' }}>
            Pillar 08
          </p>
          <h1 className="font-headline text-5xl font-bold mb-2" style={{ color: '#f7f4ef' }}>
            Price Transparency
          </h1>
          <p className="text-xl text-gray-400 mb-4">
            AHA v. Azar &middot; Compelled Disclosure &middot; Regulatory Stability &middot; Insurer Transparency
          </p>
          <ThreatTag level="Moderate" />
        </div>
      </section>

      <section className="px-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto">
          <StatBar
            stats={[
              { number: '2019', label: 'Year FAH sued to block price transparency' },
              { number: '0', label: "Times FAH's legal arguments prevailed in court" },
              { number: '49.4%', label: 'Hospitals fully compliant (PatientRightsAdvocate.org, Sept 2026), up from 21.1%' },
              { number: '519', label: 'CMS noncompliance letters to hospitals, April–June 2026' },
            ]}
          />
        </div>
      </section>

      {/* Section 01 */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>01</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">THE LAWSUIT</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>The Lawsuit</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            On December 4, 2019, FAH was a named co-plaintiff in a lawsuit to block CMS from requiring hospitals to publish payer-specific negotiated rates.
          </p>
          <DataTable
            headers={['Detail', 'Value']}
            rows={[
              ['Case', 'American Hospital Association v. Azar (No. 1:19-cv-03619, D.D.C.)'],
              ['Filed', 'December 4, 2019'],
              ['Plaintiffs', 'AHA, AAMC, FAH, Children’s Hospital Association, three individual hospitals'],
              ['Challenge', 'CMS November 2019 final rule requiring hospitals to publish payer-specific negotiated rates'],
              [
                'Arguments',
                'CMS exceeded statutory authority under Public Health Service Act Section 2718(e) (added by the ACA); rule violated First Amendment (compelled speech); rule was arbitrary and capricious',
              ],
              [
                'Outcome',
                'Judge Carl J. Nichols ruled against plaintiffs June 23, 2020. D.C. Circuit upheld on appeal. Rule took effect January 1, 2021.',
              ],
            ]}
          />
        </div>
      </section>

      {/* Section 02 — The Shift */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>02</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">THE SHIFT</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>The Shift to &ldquo;Regulatory Stability&rdquo;</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            After losing in court, FAH shifted from opposition to compliance advocacy. In 2025, as the Trump administration moved to tighten the rules, FAH&rsquo;s ask was that CMS stop adding hospital requirements.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            On July 21, 2025, FAH responded to CMS&rsquo;s Hospital Price Transparency Accuracy and Completeness request for information with comments signed by then-President and CEO Charles N. Kahn III. The letter urged &ldquo;regulatory stability&rdquo; — stating that &ldquo;both hospitals and users of hospital price transparency data would benefit from a period of relative regulatory stability during which the already widespread hospital compliance achieved by CMS may be deepened.&rdquo;
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            FAH praised the administration&rsquo;s &ldquo;results-oriented&rdquo; enforcement, supported the CMS validator tool, and urged CMS to prioritize accuracy of payer machine-readable files rather than imposing additional hospital requirements. CMS imposed them anyway (see below).
          </p>
        </div>
      </section>

      {/* Section 03 — Washington Moved Anyway */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>03</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">2025&ndash;2026 ENFORCEMENT</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Washington Moved Anyway</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Executive Order 14221 (February 25, 2025), &ldquo;Making America Healthy Again by Empowering Patients With Clear, Accurate, and Actionable Healthcare Pricing Information,&rdquo; directed agencies to require actual prices rather than estimates, standardize the data, and strengthen enforcement. CMS followed with guidance and requests for information on May 22, 2025, and then wrote the new requirements into the CY2026 OPPS final rule over FAH&rsquo;s objection.
          </p>
          <DataTable
            headers={['Date', 'Action', 'Detail']}
            rows={[
              ['Feb 25, 2025', 'Executive Order 14221', 'Actual prices, not estimates; standardization; stronger enforcement'],
              ['May 22, 2025', 'CMS guidance and RFIs on hospital and insurer price transparency', 'FAH responded July 21, 2025 asking for “regulatory stability”'],
              ['Nov 21, 2025', 'CY2026 OPPS final rule', 'Eliminates the “estimated allowed amount” placeholder; requires actual allowed-amount data drawn from 12–15 months of remittance data; requires a hospital CEO or senior official attestation that the machine-readable file is “true, accurate, and complete”; offers a 35% penalty reduction for hospitals that waive ALJ review'],
              ['2025 (full year)', 'CMS civil monetary penalties', '10 penalties issued, ranging from $32,301 to $309,738 — more than double the prior administration’s annual pace. Health Affairs Forefront found 65% of 3,764 reviewed hospitals had received at least one warning or corrective-action request through mid-2025'],
              ['Apr 1, 2026', 'Enforcement of the new MRF elements and attestation begins', 'Penalty ceiling $5,500 per day (about $2M per year) for hospitals with more than 30 beds'],
              ['Apr–Jun 2026', '519 hospitals receive CMS noncompliance letters', 'Letters reached hospitals in every state but Alaska'],
              ['Sept 2026', 'PatientRightsAdvocate.org eighth compliance report', '49.4% of 2,000 hospitals fully compliant — the highest ever, up from 21.1% in the prior report; only about 18% post real dollar prices broadly'],
            ]}
          />
          <p className="text-gray-300 mt-6 leading-relaxed">
            A related billing-transparency measure landed in the Consolidated Appropriations Act, 2026: beginning in 2028, off-campus hospital outpatient departments must bill under their own location-specific identifier with a current provider-based attestation. See <Link href="/pillars/site-neutral" className="hover:text-fah-accent transition-colors" style={{ color: '#EB6E2C' }}>Pillar 06, Site-Neutral Payments</Link>.
          </p>
        </div>
      </section>

      {/* Section 04 — The 2026 Pivot */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>04</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">THE 2026 PIVOT</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Transparency &mdash; for Insurers</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Under President and CEO Charlene MacDonald, who succeeded Kahn on January 1, 2026, FAH has recast itself as a transparency advocate — with the emphasis on insurers. On June 10, 2026, after the House Energy &amp; Commerce Health Subcommittee hearing &ldquo;Lowering Health Care Costs for All Americans: Examining Policies to Increase Health Care Transparency,&rdquo; MacDonald issued a statement, and FAH followed with a statement on the committee&rsquo;s markup and a blog post highlighting &ldquo;taxpaying hospitals&rsquo;&rdquo; commitment to transparency and calling for &ldquo;meaningful transparency across the health care system.&rdquo;
          </p>
          <PullQuote
            quote="Transparency works when it produces meaningful information for patients."
            attribution="FAH statement on House Energy &amp; Commerce transparency legislation, June 2026"
          />
          <p className="text-gray-300 mb-4 leading-relaxed">
            The organization that sued to keep hospital prices secret now campaigns for disclosure — by the insurers it negotiates against — while asking regulators to leave hospital requirements where they are. The framing is consistent with FAH&rsquo;s 2025 request that CMS prioritize payer machine-readable files over new hospital obligations.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Sources</h2>
          <ul className="source-list">
            <li>Case records, <em>AHA v. Azar</em> (No. 1:19-cv-03619, D.D.C.)</li>
            <li>CMS hospital price transparency final rule (November 2019)</li>
            <li>Executive Order 14221, February 25, 2025</li>
            <li>CMS hospital and insurer price transparency guidance and requests for information, May 22, 2025</li>
            <li>FAH comments on the CMS Hospital Price Transparency Accuracy and Completeness RFI, July 21, 2025 (signed Charles N. Kahn III)</li>
            <li>CMS CY2026 OPPS/ASC final rule, November 21, 2025 (hospital price transparency provisions; enforcement from April 1, 2026)</li>
            <li>CMS hospital price transparency enforcement actions: civil monetary penalties issued in 2025; noncompliance letters, April&ndash;June 2026</li>
            <li>Health Affairs Forefront analysis of CMS enforcement activity through mid-2025</li>
            <li>PatientRightsAdvocate.org, Eighth Hospital Price Transparency Compliance Report, September 2026</li>
            <li>FAH statement following the House Energy &amp; Commerce Health Subcommittee transparency hearing, June 10, 2026; FAH statement on Energy &amp; Commerce markup; FAH blog on taxpaying hospitals&rsquo; commitment to transparency (2026)</li>
            <li>Consolidated Appropriations Act, 2026, Section 6225</li>
            <li>Reviewed October 2026.</li>
          </ul>
        </div>
      </section>

    </>
  )
}
