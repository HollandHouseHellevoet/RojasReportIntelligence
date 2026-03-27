import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import ThreatTag from '@/components/ThreatTag'
import StatBar from '@/components/StatBar'
import DataTable from '@/components/DataTable'
import { pillars, boardMembers, globalStats } from '@/lib/data'

export const metadata: Metadata = {
  title: 'FAH Intelligence — The Rojas Report',
  description:
    'The Federation of American Hospitals spends $3.74 million per year lobbying Congress. This is the public record. Board dossiers, lobbying data, PAC filings, and the eight-pillar policy matrix.',
  alternates: { canonical: 'https://fah.rojasreport.com/' },
  openGraph: {
    type: 'website',
    title: 'FAH Intelligence — The Rojas Report',
    description:
      'The Federation of American Hospitals spends $3.74 million per year lobbying Congress. This is the public record.',
    url: 'https://fah.rojasreport.com/',
    siteName: 'FAH.RojasReport.com',
  },
}

export default function HomePage() {
  return (
    <>
      <SiteNav currentPath="/" />

      {/* Hero */}
      <section className="py-20 px-6" style={{ background: 'linear-gradient(180deg, #0a1520 0%, #0d1a26 100%)' }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#EB6E2C' }}>
            FAH Intelligence
          </p>
          <h1 className="font-headline text-5xl md:text-6xl font-bold mb-6" style={{ color: '#f7f4ef' }}>
            Federation of American Hospitals
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl">
            The for-profit hospital lobby. {globalStats.lobbyingSpend2024} in annual lobbying. {globalStats.pahcfDarkMoney} in undisclosed dark money. Nine board members running the systems at the center of every major healthcare policy fight.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/board"
              className="px-6 py-3 rounded font-semibold text-sm transition-colors"
              style={{ background: '#EB6E2C', color: '#0a1520' }}
            >
              Board Dossiers
            </Link>
            <Link
              href="/pillars"
              className="px-6 py-3 rounded font-semibold text-sm border border-white/20 transition-colors hover:border-fah-accent text-gray-300"
            >
              Eight Pillars
            </Link>
          </div>
        </div>
      </section>

      {/* Stat Bar */}
      <section className="px-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto">
          <StatBar
            stats={[
              { number: globalStats.lobbyingSpend2024, label: 'Annual lobbying spend (2024)' },
              { number: globalStats.retainedFirms, label: 'Retained lobbying firms' },
              { number: globalStats.boardMembers, label: 'Board members profiled' },
              { number: globalStats.pahcfDarkMoney, label: 'PAHCF dark money (undisclosed)' },
              { number: globalStats.pillars, label: 'Policy pillars tracked' },
            ]}
          />
        </div>
      </section>

      {/* Threat Assessment */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>01</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">THREAT ASSESSMENT</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-6" style={{ color: '#f7f4ef' }}>
            Policy Threat Matrix
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl">
            FAH&rsquo;s documented positions on the eight policy areas that determine physician-owned hospital viability, reimbursement integrity, and market competition.
          </p>
          <DataTable
            headers={['Pillar', 'FAH Position', 'Threat Level']}
            rows={pillars.map((p) => [
              <Link key={p.slug} href={`/pillars/${p.slug}`} className="font-semibold hover:underline" style={{ color: '#f7f4ef' }}>
                {p.number} — {p.title}
              </Link>,
              p.summary,
              <ThreatTag key={p.slug} level={p.threat} />,
            ])}
          />
        </div>
      </section>

      {/* Board Grid */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>02</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">BOARD DOSSIERS</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-6" style={{ color: '#f7f4ef' }}>
            Board of Directors
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl">
            Nine executives. The for-profit hospital systems they run account for more than $140 billion in annual revenue and more than $2 billion in federal fraud settlements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {boardMembers.map((m) => (
              <Link
                key={m.slug}
                href={`/board/${m.slug}`}
                className="block p-6 rounded-lg transition-colors hover:border-fah-accent"
                style={{ background: '#1a2a3a', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <p className="text-xs uppercase tracking-wider mb-1" style={{ color: '#EB6E2C' }}>
                  {m.role}
                </p>
                <h3 className="font-headline text-xl font-semibold mb-1" style={{ color: '#f7f4ef' }}>
                  {m.name}
                </h3>
                <p className="text-sm text-gray-400">{m.title}</p>
                <p className="text-sm text-gray-500">{m.company}</p>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/board" className="text-sm font-semibold hover:underline" style={{ color: '#EB6E2C' }}>
              View full board intelligence &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Lobbying Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>03</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">LOBBYING INFRASTRUCTURE</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>
            The Machine
          </h2>
          <p className="text-gray-400 mb-6 max-w-2xl">
            FAH maintains six retained lobbying firms, a revolving door built through Chip Kahn&rsquo;s four-decade career, and a 501(c)(4) dark money vehicle that has deployed more than {globalStats.pahcfDarkMoney} since 2018.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/lobbying"
              className="px-5 py-2.5 rounded font-semibold text-sm border border-white/20 hover:border-fah-accent transition-colors text-gray-300"
            >
              Lobbying Intelligence &rarr;
            </Link>
            <Link
              href="/pac"
              className="px-5 py-2.5 rounded font-semibold text-sm border border-white/20 hover:border-fah-accent transition-colors text-gray-300"
            >
              PAC Intelligence &rarr;
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
