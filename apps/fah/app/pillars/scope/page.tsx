import type { Metadata } from 'next'
import Link from 'next/link'
import ThreatTag from '@/components/ThreatTag'
import StatBar from '@/components/StatBar'

export const metadata: Metadata = {
  title: 'Scope of Practice — FAH Position | Pillar 07',
  description:
    'FAH has no documented public position on scope of practice expansion for nurses, pharmacists, or allied health professionals.',
  alternates: { canonical: 'https://fah.rojasreport.com/pillars/scope' },
  openGraph: {
    type: 'article',
    title: 'Scope of Practice — FAH Position | Pillar 07',
    description:
      'FAH has no documented public position on scope of practice expansion for nurses, pharmacists, or allied health professionals.',
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
              { number: '0', label: 'FAH public statements on scope of practice' },
              { number: '0', label: 'FAH lobbying disclosures on scope of practice' },
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
            FAH has no documented public position on scope of practice expansion for nurses, pharmacists, or allied health professionals.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            No FAH statements, letters, or lobbying disclosures on nursing, pharmacy, or allied health scope expansion were identified. FAH&rsquo;s website does not list scope of practice as an issue area.
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
            <strong style={{ color: '#EB6E2C' }}>Compare:</strong> The AHA supports scope expansion as a workforce solution. The AMA opposes it to protect physician practice scope. FAH takes no position and benefits from the status quo regardless of outcome.
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Sources</h2>
          <ul className="source-list">
            <li>FAH website issue areas (reviewed March 2026)</li>
            <li>FAH lobbying disclosures (reviewed March 2026)</li>
          </ul>
        </div>
      </section>

    </>
  )
}
