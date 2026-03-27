import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import StatBar from '@/components/StatBar'
import DataTable from '@/components/DataTable'

export const metadata: Metadata = {
  title: 'Saumya Sutaria MD — Tenet Healthcare | FAH Director',
  description:
    'Saumya Sutaria MD leads Tenet Healthcare, which has accumulated ~$1.54B in cumulative federal fraud settlements. $84.15M personal compensation 2021–2024. 406:1 pay ratio.',
  alternates: { canonical: 'https://fah.rojasreport.com/board/sutaria' },
  openGraph: {
    type: 'article',
    title: 'Saumya Sutaria MD — Tenet Healthcare | FAH Director',
    description:
      '~$1.54B in cumulative federal fraud settlements. $84.15M compensation 2021–2024. 406:1 pay ratio.',
    url: 'https://fah.rojasreport.com/board/sutaria',
    siteName: 'FAH.RojasReport.com',
  },
}

export default function SutariaPage() {
  return (
    <>
      <SiteNav currentPath="/board" />

      <div className="px-6 py-3 text-xs text-gray-500" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto">
          <Link href="/board" className="hover:text-fah-accent transition-colors">Board</Link>
          <span className="mx-2">/</span>
          <span style={{ color: '#EB6E2C' }}>Saumya Sutaria MD</span>
        </div>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#EB6E2C' }}>
            Board Member Dossier
          </p>
          <h1 className="font-headline text-5xl font-bold mb-2" style={{ color: '#f7f4ef' }}>
            Saumya Sutaria MD
          </h1>
          <p className="text-xl text-gray-400 mb-1">Chairman &amp; CEO, Tenet Healthcare</p>
          <p className="text-gray-500">FAH Director</p>
        </div>
      </section>

      <section className="px-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto">
          <StatBar
            stats={[
              { number: '~$1.54B', label: 'Cumulative Tenet federal fraud settlements' },
              { number: '$84.15M', label: 'Sutaria cumulative compensation 2021–2024' },
              { number: '406:1', label: 'CEO-to-worker pay ratio (2024)' },
              { number: '18', label: 'Years at McKinsey before Tenet' },
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
            Saumya Sutaria MD has served as Chairman and CEO of Tenet Healthcare since 2021. Sutaria spent 18 years at McKinsey &amp; Company before joining Tenet, where he served as COO before becoming CEO. He holds an MD from Yale School of Medicine but has spent his career in consulting and healthcare administration rather than clinical practice.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Tenet operates 49 hospitals and approximately 130 ambulatory surgical centers through its USPI (United Surgical Partners International) subsidiary. The USPI subsidiary is central to a structural paradox: Tenet&rsquo;s ambulatory surgery arm competes directly with the hospital outpatient departments that the FAH lobby protects from site-neutral payment reform.
          </p>
        </div>
      </section>

      {/* Section 02 — Settlement History */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>02</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">SETTLEMENT HISTORY</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>~$1.54 Billion in Cumulative Settlements</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Tenet Healthcare has accumulated approximately $1.54 billion in federal fraud settlements across five decades of operations. The company&rsquo;s settlement history predates Sutaria&rsquo;s tenure but the pattern establishes the institutional context in which he operates.
          </p>
          <DataTable
            headers={['Year', 'Amount', 'Allegation']}
            rows={[
              ['2002', '$54,000,000', 'Medicare overbilling'],
              ['2006', '$900,000,000', 'Needless cardiac surgery (Redding Medical Center); Medicare billing fraud'],
              ['2012', '$43,000,000', 'Kickbacks, Stark Law violations'],
              ['2016', '$513,000,000', 'False Claims Act, Medicare billing at 5 hospitals'],
              ['2023', '$29,700,000', 'Additional False Claims Act resolution'],
              ['Cumulative', '~$1,540,000,000', 'Approximate total across all settlements'],
            ]}
          />
        </div>
      </section>

      {/* Section 03 — USPI Paradox */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>03</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">THE USPI PARADOX</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>The USPI Paradox</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Tenet owns USPI — United Surgical Partners International — one of the largest ambulatory surgery center (ASC) operators in the country with approximately 130 facilities. ASCs are the direct competitors to hospital outpatient departments (HOPDs) that FAH lobbies to protect from site-neutral payment reform.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Site-neutral payments would reduce HOPD reimbursement to ASC levels — which would benefit USPI while harming Tenet&rsquo;s hospital HOPD revenues. Sutaria sits on the FAH board opposing site-neutral while simultaneously running a business that would benefit from it. This structural conflict is unacknowledged in FAH&rsquo;s public advocacy.
          </p>
          <div
            className="p-5 rounded-lg text-sm text-gray-300"
            style={{
              background: 'rgba(235,110,44,0.08)',
              border: '1px solid rgba(235,110,44,0.2)',
            }}
          >
            <strong style={{ color: '#EB6E2C' }}>The paradox:</strong> Sutaria leads FAH advocacy opposing site-neutral payments while owning 130 ASCs that would directly benefit from those same site-neutral payments. FAH&rsquo;s official position protects the hospital side of Tenet&rsquo;s portfolio at the expense of the ambulatory side.
          </div>
        </div>
      </section>

      {/* Section 04 — Compensation */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>04</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">COMPENSATION</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Compensation 2021&ndash;2024</h2>
          <DataTable
            headers={['Year', 'Total Compensation']}
            rows={[
              ['2021', 'Disclosed in proxy'],
              ['2022', 'Disclosed in proxy'],
              ['2023', 'Disclosed in proxy'],
              ['2024', 'Disclosed in proxy'],
              ['Cumulative 2021–2024', '~$84,150,000'],
              ['CEO-to-worker ratio (2024)', '406:1'],
            ]}
          />
        </div>
      </section>

      {/* Sources */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Sources</h2>
          <ul className="source-list">
            <li>DOJ False Claims Act settlement press releases (2002, 2006, 2012, 2016, 2023)</li>
            <li>Tenet Healthcare proxy statements and SEC filings (2021–2024)</li>
            <li>USPI corporate filings</li>
            <li>FAH lobbying disclosures</li>
          </ul>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
