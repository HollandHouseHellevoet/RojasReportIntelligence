import type { Metadata } from 'next'
import Link from 'next/link'
import ThreatTag from '@/components/ThreatTag'
import StatBar from '@/components/StatBar'
import DataTable from '@/components/DataTable'

export const metadata: Metadata = {
  title: 'Scope of Practice — FAH Position | Pillar 07',
  description:
    'No public FAH position on scope of practice has been located, even as roughly 30 states plus DC grant nurse practitioners full practice authority and the ICAN Act (S. 575 / H.R. 1317) sits before the 119th Congress.',
  alternates: { canonical: 'https://fah.rojasreport.com/pillars/scope' },
  openGraph: {
    type: 'article',
    title: 'Scope of Practice — FAH Position | Pillar 07',
    description:
      'No public FAH position on scope of practice located. About 30 states plus DC now grant NPs full practice authority.',
    url: 'https://fah.rojasreport.com/pillars/scope',
    siteName: 'FAH.RojasReport.com',
  },
}

export default function ScopePage() {
  return (
    <>

      <div className="px-6 py-3 text-xs text-gray-500" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto">
          <Link href="/pillars" className="hover:text-fah-accent transition-colors">Pillars</Link>
          <span className="mx-2">/</span>
          <span style={{ color: '#EB6E2C' }}>Scope of Practice</span>
        </div>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#EB6E2C' }}>
            Pillar 07
          </p>
          <h1 className="font-headline text-5xl font-bold mb-2" style={{ color: '#f7f4ef' }}>
            Scope of Practice
          </h1>
          <p className="text-xl text-gray-400 mb-4">
            Nursing &middot; Pharmacy &middot; Allied Health Professionals
          </p>
          <ThreatTag level="Low" />
        </div>
      </section>

      <section className="px-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto">
          <StatBar
            stats={[
              { number: '0', label: 'FAH public statements on scope of practice located' },
              { number: '~30', label: 'States (plus DC) with NP full practice authority (2026)' },
              { number: 'S. 575', label: 'ICAN Act (119th Congress) — no FAH position located' },
              { number: '2', label: "Directions FAH's silence serves simultaneously" },
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
            No public FAH position on scope of practice expansion for nurses, pharmacists, or allied health professionals has been located.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            As of this October 2026 review, no FAH statements, letters, or lobbying disclosures on nursing, pharmacy, or allied health scope expansion were identified, including on the federal ICAN Act or on state CRNA supervision changes. FAH&rsquo;s website does not list scope of practice as an issue area; its workforce messaging centers on nursing education, graduate medical education, and AI and telehealth rather than practice authority.
          </p>
        </div>
      </section>

      {/* Section 02 — Analysis */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>02</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">ANALYSIS</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Why the Silence</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            FAH&rsquo;s silence on scope of practice reflects mixed incentives — for-profit hospital systems employ both physicians and advanced practice clinicians.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            For-profit hospital systems benefit from both sides of the scope of practice debate. They employ physicians who oppose independent practice expansion and advanced practice clinicians whose expanded scope can reduce labor costs. Taking a public position would alienate one constituency or the other. Silence serves both.
          </p>
          <div
            className="p-5 rounded-lg text-sm text-gray-300"
            style={{
              background: 'rgba(235,110,44,0.08)',
              border: '1px solid rgba(235,110,44,0.2)',
            }}
          >
            <strong style={{ color: '#EB6E2C' }}>Compare:</strong> The AHA supports scope expansion as a workforce solution. The AMA opposes it to protect physician practice scope. No FAH position has been located; the organization benefits from the status quo regardless of outcome.
          </div>
        </div>
      </section>

      {/* Section 03 — The Landscape */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>03</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">2025&ndash;2026 LANDSCAPE</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>What FAH Is Silent About</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            The debate FAH avoids has moved quickly. By mid-2026 roughly 30 states plus the District of Columbia granted nurse practitioners full practice authority (counts range from 27 to 30 depending on definitions), up from 22 in 2020, and more states expanded NP authority in the preceding twelve months than in any comparable period. CRNA supervision rules are loosening in parallel, and a federal bill to remove Medicare and Medicaid barriers for advanced practice nurses is pending in the 119th Congress.
          </p>
          <DataTable
            headers={['Jurisdiction / Bill', 'Development', 'Status']}
            rows={[
              ['New Jersey', 'S2996 signed by Gov. Sherrill March 30, 2026: full practice authority for advanced practice nurses after 5,000 hours; Executive Order 13 extended pandemic-era waivers in the interim.', 'Enacted'],
              ['New York', '2022 full practice authority law’s 3,600-hour provision sunset July 1, 2026 — a “regulatory cliff” for NPs.', 'Sunset July 1, 2026'],
              ['Oklahoma', 'Legislature overrode a veto in 2025 to grant NPs prescriptive independence.', 'Enacted'],
              ['Texas', 'Remains a restricted-practice state: NPs practice under physician delegation for their entire careers.', 'No change'],
              ['Ohio (CRNAs)', 'HB 52 signed March 10, 2026, effective June 8, 2026: replaces physician supervision of CRNAs with “collaboration.”', 'Enacted'],
              ['CRNA national picture', 'One 2026 count puts CRNA full practice at 31 states plus DC; 27 states have opted out of the Medicare physician-supervision requirement.', 'Expanding'],
              ['ICAN Act, S. 575 / H.R. 1317 (119th)', 'Reintroduced February 14, 2025 (House sponsors Joyce, Bonamici, Underwood, Kiggans): removes Medicare and Medicaid barriers to APRN practice without preempting state scope law.', 'Pending — no FAH position located'],
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
            <li>FAH blog, &ldquo;FAH Highlights Its Leadership Strengthening the Health Care Workforce&rdquo; (2026)</li>
            <li>ICAN Act, S. 575 / H.R. 1317, 119th Congress, introduced February 14, 2025; AANP and AANA statements on reintroduction</li>
            <li>New Jersey S2996, signed March 30, 2026; New Jersey Executive Order 13 (2026)</li>
            <li>Ohio HB 52, signed March 10, 2026 (effective June 8, 2026); AANA statement</li>
            <li>2026 state-by-state roundups of NP full practice authority and CRNA supervision laws</li>
            <li>Reviewed October 2026.</li>
          </ul>
        </div>
      </section>

    </>
  )
}
