import type { Metadata } from 'next'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import StatBar from '@/components/StatBar'
import PullQuote from '@/components/PullQuote'
import DataTable from '@/components/DataTable'
import { lobbyingFirms } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Lobbying Infrastructure — FAH Intelligence',
  description:
    "FAH spends $3.74 million annually on lobbying. Six retained firms. A revolving door built through Chip Kahn's four-decade career. And a 501(c)(4) dark money vehicle that has deployed $143M+ since 2018.",
  alternates: { canonical: 'https://fah.rojasreport.com/lobbying' },
  openGraph: {
    type: 'website',
    title: 'Lobbying Infrastructure — FAH Intelligence',
    description:
      '$3.74M annual lobbying. 6 retained firms. $143M+ in undisclosed dark money since 2018.',
    url: 'https://fah.rojasreport.com/lobbying',
    siteName: 'FAH.RojasReport.com',
  },
}

export default function LobbyingPage() {
  return (
    <>
      <SiteNav currentPath="/lobbying" />

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#EB6E2C' }}>
            Lobbying Infrastructure
          </p>
          <h1 className="font-headline text-5xl font-bold mb-4" style={{ color: '#f7f4ef' }}>
            The Machine
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            FAH&rsquo;s lobbying infrastructure: annual expenditures, retained firms, the revolving door, and the $143 million dark money vehicle.
          </p>
        </div>
      </section>

      <section className="px-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto">
          <StatBar
            stats={[
              { number: '$3.74M', label: 'FAH lobbying spend (2024)' },
              { number: '6', label: 'Retained lobbying firms (2025)' },
              { number: '$143M+', label: 'PAHCF dark money deployed (2018–present)' },
              { number: '124', label: 'PAHCF member organizations' },
              { number: '40+', label: "Chip Kahn's years in healthcare lobbying" },
            ]}
          />
        </div>
      </section>

      {/* Section 01 — Annual Expenditures */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>01</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">ANNUAL EXPENDITURES</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Annual Lobbying Expenditures (2010&ndash;2025)</h2>
          <DataTable
            headers={['Year', 'Amount']}
            rows={[
              ['2010', '$2,380,000'],
              ['2011', '$2,660,000'],
              ['2012', '$2,830,000'],
              ['2013', '$2,940,000'],
              ['2014', '$3,010,000'],
              ['2015', '$3,120,000'],
              ['2016', '$3,200,000'],
              ['2017', '$3,350,000'],
              ['2018', '$3,410,000'],
              ['2019', '$3,490,000'],
              ['2020', '$3,520,000'],
              ['2021', '$3,580,000'],
              ['2022', '$3,620,000'],
              ['2023', '$3,680,000'],
              ['2024', '$3,740,000'],
              ['2025 (projected)', '$3,800,000+'],
            ]}
          />
        </div>
      </section>

      {/* Section 02 — Retained Firms */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>02</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">RETAINED FIRMS</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Six Retained Lobbying Firms (2025 Contracts)</h2>
          <DataTable
            headers={['Firm', '2025 Contract', 'Focus', 'Notable Personnel']}
            rows={lobbyingFirms.map((f) => [
              f.firm,
              f.contract2025,
              f.focus,
              f.notablePersonnel || '—',
            ])}
          />
        </div>
      </section>

      {/* Section 03 — Revolving Door */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>03</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">THE REVOLVING DOOR</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>The Revolving Door</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            FAH&rsquo;s lobbying power derives in part from its personnel&rsquo;s government service history. Nine key individuals in FAH&rsquo;s lobbying network have significant prior government roles. The most prominent: Thomas Scully, former CMS Administrator under George W. Bush, now at Miller Strategies — FAH&rsquo;s highest-paid retained firm at $540,000 annually.
          </p>
          <DataTable
            headers={['Individual', 'Prior Government Role', 'Current Role']}
            rows={[
              ['Thomas Scully', 'CMS Administrator (2001–2004)', 'Miller Strategies (FAH retained firm)'],
              ['Chip Kahn', 'Staff Director, Senate Finance Committee', 'FAH President &amp; CEO (1995–2025)'],
              ['Chip MacDonald', 'Senate Finance Committee staff', 'FAH President &amp; CEO (Jan 1, 2026–present)'],
              ['Multiple Miller Strategies lobbyists', 'Various Congressional and agency roles', 'Miller Strategies'],
            ]}
          />
        </div>
      </section>

      {/* Section 04 — Chip Kahn Career */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>04</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">CHIP KAHN CAREER TIMELINE</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Chip Kahn: The Double Revolving Door</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Chip Kahn&rsquo;s career represents the textbook revolving door in healthcare lobbying — twice. He moved from Congressional staff to industry lobbying, then back into influence, then back to industry. He served as FAH President from 1995 until January 1, 2026, when he was succeeded by Chip MacDonald.
          </p>
          <DataTable
            headers={['Period', 'Role', 'Significance']}
            rows={[
              ['1970s–1980s', 'Staff Director, Senate Finance Committee Health Subcommittee', 'Built Congressional relationships that defined FAH&rsquo;s Senate access for decades'],
              ['1980s–1990s', 'Health Insurance Association of America (HIAA)', 'Led "Harry and Louise" campaign against Clinton healthcare reform'],
              ['1995–2025', 'President &amp; CEO, Federation of American Hospitals', 'Longest-serving major healthcare association CEO; authored POH ban'],
              ['January 1, 2026', 'Transition to Chip MacDonald', 'Leadership transition; Kahn remained as advisor'],
            ]}
          />
        </div>
      </section>

      {/* Section 05 — PAHCF Dark Money */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>05</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">PAHCF DARK MONEY</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>PAHCF: The $143 Million Dark Money Vehicle</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            The Partnership for America&rsquo;s Health Care Future (PAHCF) is a 501(c)(4) social welfare organization founded in June 2018. It was initiated by Chip Kahn and has grown to 124 member organizations. PAHCF has deployed more than $143 million in undisclosed funds since its founding — funds that are not subject to the disclosure requirements that apply to direct lobbying expenditures.
          </p>
          <PullQuote
            quote="The Partnership for America's Health Care Future represents the full breadth of the healthcare community united in our commitment to build on what is working in American healthcare."
            attribution="PAHCF founding statement, June 2018"
          />
          <DataTable
            headers={['Item', 'Detail']}
            rows={[
              ['Entity type', '501(c)(4) social welfare organization'],
              ['Founded', 'June 2018'],
              ['Initiated by', 'Chip Kahn, FAH President &amp; CEO'],
              ['Members', '124 organizations (hospitals, insurers, pharma)'],
              ['Disclosed expenditures', '$143 million+ (2018–present)'],
              ['Donor disclosure requirement', 'None (501(c)(4) dark money)'],
              ['Primary focus', 'Opposing Medicare for All, public option, single-payer proposals'],
            ]}
          />
        </div>
      </section>

      {/* Section 06 — Leadership Transition */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>06</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">LEADERSHIP TRANSITION</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Leadership Transition</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            On January 1, 2026, Chip MacDonald succeeded Chip Kahn as FAH President and CEO. MacDonald previously served on the Senate Finance Committee staff — continuing FAH&rsquo;s pattern of hiring leaders with deep Congressional relationships. The transition came as FAH faces its most consequential legislative environment in years: simultaneous threats from POH repeal legislation, site-neutral payment expansion, and Medicaid reform.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Sources</h2>
          <ul className="source-list">
            <li>Senate LDA lobbying disclosures (2010–2025)</li>
            <li>IRS Form 990, PAHCF (2018–2024)</li>
            <li>FAH press releases</li>
            <li>Chip Kahn biography and Advisory Board interview (June 2021)</li>
            <li>Thomas Scully CMS records</li>
          </ul>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
