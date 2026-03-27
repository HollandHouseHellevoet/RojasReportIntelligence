import type { Metadata } from 'next'
import Link from 'next/link'
import StatBar from '@/components/StatBar'
import DataTable from '@/components/DataTable'

export const metadata: Metadata = {
  title: 'Rob Jay — ScionHealth / Apollo | FAH Director',
  description:
    "Rob Jay leads ScionHealth, an Apollo-backed LTACH operator with a Caa2 Moody's rating, 3 hospital closures, and $189M in sale-leaseback transactions generating $80M in annual rent.",
  alternates: { canonical: 'https://fah.rojasreport.com/board/jay' },
  openGraph: {
    type: 'article',
    title: 'Rob Jay — ScionHealth / Apollo | FAH Director',
    description:
      "Caa2 Moody's rating. 3 hospital closures. $189M Ventas sale-leaseback. $80M annual rent.",
    url: 'https://fah.rojasreport.com/board/jay',
    siteName: 'FAH.RojasReport.com',
  },
}

export default function JayPage() {
  return (
    <>
      <SiteNav currentPath="/board" />

      <div className="px-6 py-3 text-xs text-gray-500" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto">
          <Link href="/board" className="hover:text-fah-accent transition-colors">Board</Link>
          <span className="mx-2">/</span>
          <span style={{ color: '#EB6E2C' }}>Rob Jay</span>
        </div>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#EB6E2C' }}>
            Board Member Dossier
          </p>
          <h1 className="font-headline text-5xl font-bold mb-2" style={{ color: '#f7f4ef' }}>
            Rob Jay
          </h1>
          <p className="text-xl text-gray-400 mb-1">President &amp; CEO, ScionHealth</p>
          <p className="text-gray-500">FAH Director &middot; Apollo Global Management Portfolio</p>
        </div>
      </section>

      <section className="px-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto">
          <StatBar
            stats={[
              { number: 'Caa2', label: "Moody's credit rating (deep junk)" },
              { number: '3', label: 'Hospitals closed under ScionHealth' },
              { number: '$189M', label: 'Ventas sale-leaseback proceeds' },
              { number: '$80M', label: 'Annual rent from sale-leaseback' },
            ]}
          />
        </div>
      </section>

      {/* Section 01 */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>01</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">BACKGROUND</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Background</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Rob Jay serves as President and CEO of ScionHealth, the long-term acute care hospital (LTACH) company spun off from Lifepoint Health by Apollo Global Management in 2021. ScionHealth operates approximately 79 LTACHs across 26 states. Both Jay and David Dill (Lifepoint) represent Apollo&rsquo;s dual presence on the FAH board.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            ScionHealth carries a Caa2 credit rating from Moody&rsquo;s — deep junk territory — reflecting the company&rsquo;s significant debt load and challenging operating environment. The Caa2 rating indicates Moody&rsquo;s assessment that ScionHealth obligations are of poor standing and subject to very high credit risk.
          </p>
        </div>
      </section>

      {/* Section 02 — Financial Distress */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>02</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">FINANCIAL DISTRESS</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Financial Distress</h2>
          <div
            className="p-5 rounded-lg text-sm text-gray-300 mb-6"
            style={{
              background: 'rgba(235,110,44,0.08)',
              border: '1px solid rgba(235,110,44,0.2)',
            }}
          >
            <strong style={{ color: '#EB6E2C' }}>Moody&rsquo;s on ScionHealth:</strong> The Caa2 rating reflects ScionHealth&rsquo;s high financial leverage, significant interest expense, and the challenges of its post-spin capital structure. The rating indicates obligations of poor standing subject to very high credit risk.
          </div>
          <DataTable
            headers={['Metric', 'Detail']}
            rows={[
              ["Moody's credit rating", 'Caa2 (deep junk)'],
              ['Sale-leaseback proceeds (Ventas)', '$189,000,000'],
              ['Annual rent obligation', '$80,000,000'],
              ['Business type', 'Long-term acute care hospitals (LTACHs)'],
            ]}
          />
        </div>
      </section>

      {/* Section 03 — Hospital Closures */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>03</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">HOSPITAL CLOSURES</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Hospital Closures</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Since the ScionHealth spinoff, three hospitals have closed. Closures include Kindred Sycamore, Lakeshore, and Bay Area.
          </p>
          <DataTable
            headers={['Hospital', 'Status']}
            rows={[
              ['Kindred Sycamore', 'Closed'],
              ['Lakeshore', 'Closed'],
              ['Bay Area', 'Closed'],
            ]}
          />
        </div>
      </section>

      {/* Section 04 — Lifepoint Re-Acquisitions */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>04</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">LIFEPOINT RE-ACQUISITIONS</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>8 Hospitals Re-Acquired by Lifepoint</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Apollo restructured the ScionHealth/Lifepoint split by having Lifepoint re-acquire 8 ScionHealth hospitals, reducing ScionHealth&rsquo;s footprint and consolidating assets under the better-capitalized Lifepoint platform. This intra-Apollo transaction illustrates how private equity manages portfolio companies as fungible assets rather than community institutions.
          </p>
        </div>
      </section>

      {/* Sources */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Sources</h2>
          <ul className="source-list">
            <li>Moody&rsquo;s credit rating reports, ScionHealth</li>
            <li>Ventas REIT investor disclosures</li>
            <li>Apollo Global Management portfolio documentation</li>
            <li>ScionHealth press releases</li>
          </ul>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
