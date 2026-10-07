import type { Metadata } from 'next'
import Link from 'next/link'
import ThreatTag from '@/components/ThreatTag'
import StatBar from '@/components/StatBar'
import DataTable from '@/components/DataTable'

export const metadata: Metadata = {
  title: 'Hospital Consolidation — FAH Position | Pillar 02',
  description:
    'FAH is pro-consolidation and has never opposed a hospital merger. KFF finds 97% of metropolitan hospital markets are highly concentrated. FAH joined the AHA’s amicus brief in Ryan LLC v. FTC against the FTC noncompete rule, which the FTC abandoned in September 2025.',
  alternates: { canonical: 'https://fah.rojasreport.com/pillars/consolidation' },
  openGraph: {
    type: 'article',
    title: 'Hospital Consolidation — FAH Position | Pillar 02',
    description:
      'FAH is pro-consolidation and fought the FTC noncompete rule. 97% of metropolitan hospital markets are highly concentrated (KFF).',
    url: 'https://fah.rojasreport.com/pillars/consolidation',
    siteName: 'FAH.RojasReport.com',
  },
}

export default function ConsolidationPage() {
  return (
    <>

      <div className="px-6 py-3 text-xs text-gray-500" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto">
          <Link href="/pillars" className="hover:text-fah-accent transition-colors">Pillars</Link>
          <span className="mx-2">/</span>
          <span style={{ color: '#EB6E2C' }}>Hospital Consolidation</span>
        </div>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#EB6E2C' }}>
            Pillar 02
          </p>
          <h1 className="font-headline text-5xl font-bold mb-2" style={{ color: '#f7f4ef' }}>
            Hospital Consolidation
          </h1>
          <p className="text-xl text-gray-400 mb-4">
            FTC Authority &middot; Merger Defense &middot; Antitrust
          </p>
          <ThreatTag level="Moderate" />
        </div>
      </section>

      <section className="px-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto">
          <StatBar
            stats={[
              { number: '97%', label: 'Metro areas with highly concentrated inpatient markets (KFF, 2024 data)' },
              { number: '47%', label: 'Metro areas where one or two systems control the entire inpatient market' },
              { number: '46', label: 'Hospital deals announced in 2025 — a 15-year low (40 in H1 2026)' },
              { number: '$0', label: 'FAH opposition to any hospital merger (documented)' },
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
            FAH is consistently pro-consolidation. The organization has never publicly opposed a hospital merger — none is documented — and its one documented court filing against the Federal Trade Commission argued that the agency lacked authority over nonprofit hospitals. FAH&rsquo;s stated rationale: consolidation enables scale efficiencies, improves care coordination, and strengthens hospitals&rsquo; ability to negotiate with commercial insurers.
          </p>
        </div>
      </section>

      {/* Section 02 — FTC Opposition */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>02</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">FTC OPPOSITION</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Fighting the FTC</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            In July 2024, FAH joined the American Hospital Association in an amicus brief in <em>Ryan LLC v. FTC</em> (N.D. Tex.), the challenge to the FTC&rsquo;s 2024 rule banning most noncompete agreements. The hospital groups argued the rule was arbitrary and capricious and that the FTC lacks authority over nonprofit hospitals. The AHA filed again in the Fifth Circuit on February 10, 2025. In September 2025 the FTC dropped its appeals, leaving the rule vacated — a win for the hospital lobby. The brief was squarely about healthcare: noncompetes govern hospital labor markets, and the jurisdictional argument, if accepted, would have narrowed the reach of the same agency that reviews hospital mergers.
          </p>
          <DataTable
            headers={['Action', 'Case / Target', 'FAH Role and Outcome']}
            rows={[
              ['Amicus brief (joint with AHA)', 'Ryan LLC v. FTC, N.D. Tex., July 2024 — FTC noncompete rule', 'Argued rule was arbitrary and capricious; FTC lacks authority over nonprofit hospitals'],
              ['Appeal', 'Ryan LLC v. FTC, Fifth Circuit — AHA amicus Feb 10, 2025', 'FTC dropped its appeals September 2025; rule remains vacated'],
              ['Premerger notification', 'AHA letter to FTC/DOJ, May 26, 2026, urging exclusion of hospital mergers from HSR premerger filing', 'No FAH position located'],
            ]}
          />
        </div>
      </section>

      {/* Section 03 — What the Data Shows */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>03</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">WHAT THE DATA SHOWS</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>What the Data Shows</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Independent research consistently finds that hospital consolidation increases prices and harms competition. KFF&rsquo;s analysis of 2024 data found that 97% of metropolitan areas had highly concentrated inpatient hospital markets by the standard antitrust threshold (HHI above 2,500). In 47% of metro areas, one or two health systems controlled the entire inpatient market; in 83%, one or two systems controlled more than three-quarters of it. Concentration rose between 2015 and 2024 (or the market was single-system throughout) in 80% of metro areas.
          </p>
          <div
            className="p-5 rounded-lg text-sm text-gray-300"
            style={{
              background: 'rgba(235,110,44,0.08)',
              border: '1px solid rgba(235,110,44,0.2)',
            }}
          >
            <strong style={{ color: '#EB6E2C' }}>Research consensus:</strong> KFF describes a &ldquo;substantial body of evidence&rdquo; that hospital consolidation raises prices, with the 1990s merger wave alone raising prices by at least five percent and likely significantly more; the effects are largest in already concentrated markets. FAH&rsquo;s pro-consolidation advocacy serves its members&rsquo; market power at patients&rsquo; expense.
          </div>
        </div>
      </section>

      {/* Section 04 — 2025–2026 Deal Landscape */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>04</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">2025&ndash;2026 LANDSCAPE</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Deals and Enforcement</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Hospital M&amp;A fell to 46 announced deals in 2025, a 15-year low, with a record share — roughly 43% — involving a financially distressed party. Activity rebounded sharply to 40 deals in the first half of 2026 (Kaufman Hall). The FTC under Chairman Ferguson has kept scrutinizing hospital transactions, with particular skepticism toward &ldquo;failing firm&rdquo; justifications.
          </p>
          <DataTable
            headers={['Date', 'Development', 'Significance']}
            rows={[
              ['March 2025', 'FTC staff reaffirmed opposition to the Union Health / Terre Haute Regional Hospital COPA (Indiana)', 'FTC continues to oppose state COPA workarounds'],
              ['May 2025', 'Northwell–Nuvance merger completed', 'Large nonprofit combination closed'],
              ['March–May 2026', 'Sutter Health–Allina Health announced (March), definitive agreement (May): 39 hospitals, $2B investment pledge', 'Among the largest cross-regional system deals'],
              ['May 4, 2026', 'UPMC to acquire Trinity Health System (Ohio) from CommonSpirit', 'Regional expansion by a dominant system'],
              ['May 26, 2026', 'AHA urges FTC/DOJ to exclude hospital mergers from premerger notification', 'Hospital lobby seeks to reduce merger scrutiny; FAH position not located'],
              ['September 2026', 'FTC Chairman Ferguson and Commissioner Meador statement on Adena Health’s acquisition of Fairfield Medical Center (Ohio)', 'Financial distress is no free pass without a genuine search for alternative buyers'],
            ]}
          />
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Sources</h2>
          <ul className="source-list">
            <li>AHA and FAH amicus brief, <em>Ryan LLC v. FTC</em>, N.D. Tex., July 29, 2024; AHA amicus brief, Fifth Circuit, February 10, 2025</li>
            <li>FTC withdrawal of appeals in the noncompete-rule litigation, September 2025</li>
            <li>KFF, &ldquo;One or Two Health Systems Controlled the Entire Market for Inpatient Hospital Care in Nearly Half of Metropolitan Areas&rdquo; (October 2024) and KFF Key Facts About Hospitals: market concentration and consolidation</li>
            <li>Kaufman Hall hospital M&amp;A activity reports, 2025 year-end and Q1&ndash;Q2 2026</li>
            <li>FTC staff statement on the Union Health / Terre Haute Regional Hospital COPA, March 2025</li>
            <li>FTC Chairman Ferguson and Commissioner Meador statement on Adena Health / Fairfield Medical Center, September 2026</li>
            <li>AHA letter to FTC and DOJ on premerger notification requirements, May 26, 2026</li>
            <li>FAH lobbying disclosures and comment letters (reviewed October 2026)</li>
            <li>Reviewed October 2026.</li>
          </ul>
        </div>
      </section>

    </>
  )
}
