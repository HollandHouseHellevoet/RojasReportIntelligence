import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { boardMembers } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Board of Directors — FAH Intelligence',
  description:
    'Nine executives. The for-profit hospital systems they run account for more than $140 billion in annual revenue and more than $2 billion in federal fraud settlements.',
  alternates: { canonical: 'https://fah.rojasreport.com/board' },
  openGraph: {
    type: 'website',
    title: 'Board of Directors — FAH Intelligence',
    description:
      'Nine executives. More than $140 billion in annual revenue. More than $2 billion in federal fraud settlements.',
    url: 'https://fah.rojasreport.com/board',
    siteName: 'FAH.RojasReport.com',
  },
}

export default function BoardIndexPage() {
  return (
    <>
      <SiteNav currentPath="/board" />

      {/* Hero */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#EB6E2C' }}>
            Board Intelligence
          </p>
          <h1 className="font-headline text-5xl font-bold mb-4" style={{ color: '#f7f4ef' }}>
            Board of Directors
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            The nine executives who set FAH&rsquo;s legislative agenda and direct its lobbying machine.
          </p>
        </div>
      </section>

      {/* Board Grid */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {boardMembers.map((m) => (
              <Link
                key={m.slug}
                href={`/board/${m.slug}`}
                className="block p-6 rounded-lg transition-all hover:-translate-y-0.5"
                style={{
                  background: '#1a2a3a',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <p className="text-xs uppercase tracking-wider mb-2" style={{ color: '#EB6E2C' }}>
                  {m.role}
                </p>
                <h2 className="font-headline text-2xl font-semibold mb-1" style={{ color: '#f7f4ef' }}>
                  {m.name}
                </h2>
                <p className="text-sm text-gray-400 mb-0.5">{m.title}</p>
                <p className="text-sm text-gray-500 mb-4">{m.company}</p>
                <div className="grid grid-cols-2 gap-3">
                  {m.keyStats.slice(0, 2).map((s, i) => (
                    <div key={i}>
                      <div className="text-lg font-bold font-headline" style={{ color: '#EB6E2C' }}>
                        {s.number}
                      </div>
                      <div className="text-xs text-gray-500 leading-tight">{s.label}</div>
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Apollo / Nashville Power Bloc */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>Analysis</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">POWER CONCENTRATION</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>
            The Apollo / Nashville Power Bloc
          </h2>
          <p className="text-gray-400 mb-6 max-w-2xl">
            Three of the nine FAH board seats trace directly to Apollo Global Management or to the Nashville-based hospital management ecosystem Apollo seeded. David Dill (Lifepoint/Apollo), Rob Jay (ScionHealth/Apollo), and Martin Bonick (Ardent, backed by Apollo-adjacent private equity) represent coordinated private equity influence at the top of FAH leadership.
          </p>
          <div
            className="p-5 rounded-lg text-sm text-gray-300"
            style={{
              background: 'rgba(235,110,44,0.08)',
              border: '1px solid rgba(235,110,44,0.2)',
            }}
          >
            <strong style={{ color: '#EB6E2C' }}>Note:</strong> Apollo Global Management acquired HCA in 2006 (with KKR and Bain Capital) in a $33 billion leveraged buyout — the largest private equity healthcare transaction in history. Apollo&rsquo;s fingerprints remain across the for-profit hospital landscape through spinoffs, secondaries, and executive networks.
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
