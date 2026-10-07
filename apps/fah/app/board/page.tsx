import type { Metadata } from 'next'
import Link from 'next/link'
import { boardMembers } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Board of Directors — FAH Intelligence',
  description:
    'Nine seats on the FAH board. The for-profit hospital systems behind them booked more than $140 billion in 2025 revenue and carry more than $3.5 billion in federal fraud settlements. Reviewed October 2026.',
  alternates: { canonical: 'https://fah.rojasreport.com/board' },
  openGraph: {
    type: 'website',
    title: 'Board of Directors — FAH Intelligence',
    description:
      'Nine seats. More than $140 billion in 2025 revenue. More than $3.5 billion in federal fraud settlements.',
    url: 'https://fah.rojasreport.com/board',
    siteName: 'FAH.RojasReport.com',
  },
}

export default function BoardIndexPage() {
  return (
    <>

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
            The nine seats that set FAH&rsquo;s legislative agenda and direct its lobbying machine. David Dill of Lifepoint chairs the board for 2026.
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

      {/* What changed in 2025-2026 */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>Update</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">WHAT CHANGED, OCT 2025 &ndash; OCT 2026</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>
            Turnover at the Top
          </h2>
          <ul className="text-gray-300 space-y-3 max-w-3xl leading-relaxed">
            <li><strong style={{ color: '#f7f4ef' }}>FAH itself:</strong> Chip Kahn retired December 31, 2025 after almost 25 years. Charlene MacDonald, formerly FAH&rsquo;s public-affairs chief and a Hoyer whip-office aide, became President &amp; CEO January 1, 2026.</li>
            <li><strong style={{ color: '#f7f4ef' }}>Chair:</strong> David Dill (Lifepoint) was elected 2026 Chair at the October 2025 annual meeting, succeeding Marc Miller (UHS), now Immediate Past Chair.</li>
            <li><strong style={{ color: '#f7f4ef' }}>Ardent:</strong> Martin Bonick, listed as 2026 Chair-Elect, stepped down as Ardent&rsquo;s CEO on June 2, 2026. Dave Caspers succeeded him. Whether Bonick keeps the FAH seat has not been announced.</li>
            <li><strong style={{ color: '#f7f4ef' }}>ScionHealth:</strong> Rob Jay moved to Executive Chairman on June 10, 2026 with Doug Shirley as CEO, one week after Lifepoint closed its purchase of eight ScionHealth hospitals.</li>
            <li><strong style={{ color: '#f7f4ef' }}>Community Health Systems:</strong> Kevin Hammons, the CFO when this site launched, became President &amp; CEO (interim October 1, 2025; permanent December 10, 2025) after Tim Hingtgen retired.</li>
          </ul>
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
            Two of the nine seats trace directly to Apollo Global Management: David Dill (Lifepoint, the 2026 Chair) and Rob Jay (ScionHealth, the Lifepoint spin-off). A third, Ardent, is controlled by Sam Zell&rsquo;s Equity Group Investments with Abu Dhabi&rsquo;s Pure Health holding 21 percent. Four of the companies, HCA, Lifepoint, Ardent and CHS, are run from the Nashville area. The Apollo seats are also where the turnover is: Lifepoint bought eight hospitals from ScionHealth in June 2026, the same month Jay stepped back to Executive Chairman.
          </p>
          <div
            className="p-5 rounded-lg text-sm text-gray-300"
            style={{
              background: 'rgba(235,110,44,0.08)',
              border: '1px solid rgba(235,110,44,0.2)',
            }}
          >
            <strong style={{ color: '#EB6E2C' }}>Note:</strong> The $33 billion 2006 HCA buyout, the largest leveraged buyout at the time, was sponsored by Bain Capital, KKR, Merrill Lynch Global Private Equity and the Frist family. Apollo was not part of it. Apollo&rsquo;s hospital footprint runs instead through Lifepoint, which it took private in 2018 and merged with RCCH in a $5.6 billion transaction, and through ScionHealth, carved out of Lifepoint and Kindred in 2021.
          </div>
        </div>
      </section>

    </>
  )
}
