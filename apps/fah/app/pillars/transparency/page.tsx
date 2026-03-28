import type { Metadata } from 'next'
import Link from 'next/link'
import ThreatTag from '@/components/ThreatTag'
import StatBar from '@/components/StatBar'
import DataTable from '@/components/DataTable'

export const metadata: Metadata = {
  title: 'Price Transparency — FAH Position | Pillar 08',
  description:
    'FAH was a named plaintiff in the 2019 lawsuit to block hospital price transparency. The lawsuit failed. FAH now advocates for regulatory stability.',
  alternates: { canonical: 'https://fah.rojasreport.com/pillars/transparency' },
  openGraph: {
    type: 'article',
    title: 'Price Transparency — FAH Position | Pillar 08',
    description:
      'FAH was a named plaintiff in the 2019 lawsuit to block price transparency. The lawsuit failed.',
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
            AHA v. Azar &middot; Compelled Disclosure &middot; Regulatory Stability
          </p>
          <ThreatTag level="Low" />
        </div>
      </section>

      <section className="px-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto">
          <StatBar
            stats={[
              { number: '2019', label: 'Year FAH sued to block price transparency' },
              { number: '2021', label: 'Year price transparency rule took effect (FAH lost)' },
              { number: '0', label: "Times FAH's legal arguments prevailed in court" },
              { number: '2025', label: 'Year FAH shifted to advocating regulatory stability' },
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
              ['Plaintiffs', 'AHA, AAMC, FAH, National Association of Children\'s Hospitals, three individual hospitals'],
              ['Challenge', 'CMS November 2019 final rule requiring hospitals to publish payer-specific negotiated rates'],
              [
                'Arguments',
                'CMS exceeded statutory authority under ACA Section 2718(e); rule violated First Amendment (compelled speech); rule was arbitrary and capricious',
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
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>The Shift</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            After losing in court, FAH shifted from opposition to compliance advocacy, urging regulatory stability in July 2025 comments to CMS.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            On July 21, 2025, FAH submitted comments to CMS urging &ldquo;regulatory stability&rdquo; — stating that &ldquo;both hospitals and users of hospital price transparency data would benefit from a period of relative regulatory stability during which the already widespread hospital compliance achieved by CMS may be deepened.&rdquo;
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            FAH supported the CMS validator tool and urged CMS to prioritize accuracy of payer machine-readable files rather than imposing additional hospital requirements.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Sources</h2>
          <ul className="source-list">
            <li>Case records, <em>AHA v. Azar</em> (No. 1:19-cv-03619, D.D.C.)</li>
            <li>CMS final rule (November 2019)</li>
            <li>FAH CMS comment, July 21, 2025</li>
          </ul>
        </div>
      </section>

    </>
  )
}
