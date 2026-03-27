import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import ThreatTag from '@/components/ThreatTag'
import StatBar from '@/components/StatBar'
import DataTable from '@/components/DataTable'

export const metadata: Metadata = {
  title: 'CON Laws — FAH Position | Pillar 01',
  description:
    'FAH has no public position on Certificate of Need laws despite the structural contradiction: CON laws protect FAH members from competition while FAH publicly opposes market barriers.',
  alternates: { canonical: 'https://fah.rojasreport.com/pillars/con-laws' },
  openGraph: {
    type: 'article',
    title: 'CON Laws — FAH Position | Pillar 01',
    description:
      'FAH has no public position on CON laws. The structural contradiction: CON laws protect FAH members from competition.',
    url: 'https://fah.rojasreport.com/pillars/con-laws',
    siteName: 'FAH.RojasReport.com',
  },
}

export default function ConLawsPage() {
  return (
    <>
      <SiteNav currentPath="/pillars" />

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
              { number: '35', label: 'States with active CON laws' },
              { number: '0', label: 'FAH public statements on CON laws' },
              { number: '1', label: 'Federal equivalent FAH does oppose (POH ban)' },
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
            FAH has no documented public position on Certificate of Need laws at the state or federal level. No FAH statements, letters, or lobbying disclosures on CON law reform were identified. FAH&rsquo;s website does not list CON laws as an issue area.
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
            CON laws require state approval before hospitals can add beds, services, or facilities. They were designed to prevent duplication and control costs. In practice, they protect incumbent hospital systems — including FAH members — from competition by physician-owned hospitals, ambulatory surgery centers, and new market entrants.
          </p>
          <DataTable
            headers={['Aspect', 'Detail']}
            rows={[
              ['FAH public position', 'None documented'],
              ['FTC/DOJ finding', 'CON laws reduce competition and increase costs'],
              ['Who benefits from CON', 'Incumbent hospital systems (FAH members)'],
              ['Who is harmed by CON', 'Physician-owned hospitals, ASCs, new entrants'],
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
            <strong style={{ color: '#EB6E2C' }}>FTC/DOJ joint statement:</strong> The Federal Trade Commission and Department of Justice have repeatedly stated that CON laws undermine competition, create barriers to entry, and lead to higher prices and reduced quality. FAH&rsquo;s silence serves its members&rsquo; competitive interests by avoiding this debate.
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Sources</h2>
          <ul className="source-list">
            <li>FAH website issue areas (reviewed March 2026)</li>
            <li>FAH lobbying disclosures (reviewed March 2026)</li>
            <li>FTC/DOJ joint statement on certificate of need laws</li>
            <li>State health department CON program records</li>
          </ul>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
