import type { Metadata } from 'next'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import StatBar from '@/components/StatBar'
import DataTable from '@/components/DataTable'
import { pacStats } from '@/lib/data'

export const metadata: Metadata = {
  title: 'PAC Intelligence — FAH Intelligence',
  description:
    "FEDPAC raised $696,257 in the 2024 cycle and contributed $353,500 to Congressional campaigns. 54% Democratic. Compare with PAHCF's $143M+ in undisclosed dark money.",
  alternates: { canonical: 'https://fah.rojasreport.com/pac' },
  openGraph: {
    type: 'website',
    title: 'PAC Intelligence — FAH Intelligence',
    description:
      "FEDPAC: $696,257 raised. $353,500 in contributions. 54% Democratic. FEC ID C00002261.",
    url: 'https://fah.rojasreport.com/pac',
    siteName: 'FAH.RojasReport.com',
  },
}

export default function PacPage() {
  return (
    <>
      <SiteNav currentPath="/pac" />

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#EB6E2C' }}>
            PAC Intelligence
          </p>
          <h1 className="font-headline text-5xl font-bold mb-4" style={{ color: '#f7f4ef' }}>
            FEDPAC
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            The Federation of American Hospitals Political Action Committee. FEC ID {pacStats.fecId}. The disclosed tip of a much larger iceberg.
          </p>
        </div>
      </section>

      <section className="px-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto">
          <StatBar
            stats={[
              { number: pacStats.raised2024, label: 'Total raised, 2024 cycle' },
              { number: pacStats.contributions2024, label: 'Total contributions to candidates' },
              { number: pacStats.demShare, label: 'Democratic share of contributions' },
              { number: pacStats.cashOnHand, label: 'Cash on hand' },
            ]}
          />
        </div>
      </section>

      {/* Section 01 — PAC Profile */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>01</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">PAC PROFILE</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>FEDPAC Profile</h2>
          <DataTable
            headers={['Item', 'Detail']}
            rows={[
              ['FEC Committee ID', pacStats.fecId],
              ['Committee name', 'FEDPAC (Federation of American Hospitals PAC)'],
              ['Committee type', 'Connected PAC (trade association)'],
              ['2024 cycle raised', pacStats.raised2024],
              ['2024 cycle contributions', pacStats.contributions2024],
              ['Democratic share', pacStats.demShare],
              ['Republican share', '46%'],
              ['Cash on hand', pacStats.cashOnHand],
            ]}
          />
        </div>
      </section>

      {/* Section 02 — 2024 Cycle Financials */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>02</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">2024 CYCLE</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>2024 Cycle Financials</h2>
          <DataTable
            headers={['Party', 'Contributions']}
            rows={[
              ['Democratic', pacStats.demContributions],
              ['Republican', pacStats.repContributions],
              ['Total', pacStats.contributions2024],
            ]}
          />
        </div>
      </section>

      {/* Section 03 — House Recipients */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>03</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">HOUSE RECIPIENTS</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>House Recipients (Top, 2024 Cycle)</h2>
          <DataTable
            headers={['Recipient', 'Amount', 'Party', 'Committee']}
            rows={[
              ['Rep. Pete Aguilar (CA)', '$10,000', 'D', 'House Democratic Caucus Chair'],
              ['Rep. Katherine Clark (MA)', '$10,000', 'D', 'House Minority Whip'],
              ['Rep. Brett Guthrie (KY)', '$10,000', 'R', 'House Energy &amp; Commerce Committee'],
              ['Rep. Dusty Johnson (SD)', '$10,000', 'R', 'Republican Policy Committee'],
              ['Rep. Steve Scalise (LA)', '$10,000', 'R', 'House Majority Leader'],
            ]}
          />
        </div>
      </section>

      {/* Section 04 — Senate Recipients */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>04</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">SENATE RECIPIENTS</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Senate Recipients (Top, 2024 Cycle)</h2>
          <DataTable
            headers={['Recipient', 'Amount', 'Party']}
            rows={[
              ['Sen. Marsha Blackburn (TN)', '$10,000', 'R'],
              ['Sen. Jacky Rosen (NV)', '$7,500', 'D'],
              ['Sen. Jon Tester (MT)', '$7,000', 'D'],
              ['Sen. Sherrod Brown (OH)', '$6,500', 'D'],
              ['Sen. Tim Kaine (VA)', '$6,000', 'D'],
            ]}
          />
        </div>
      </section>

      {/* Section 05 — Historical Cycles */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>05</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">HISTORICAL CYCLES</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Historical PAC Cycles</h2>
          <DataTable
            headers={['Cycle', 'Total Raised', 'Total Contributions']}
            rows={[
              ['2016', '~$500,000', '~$280,000'],
              ['2018', '~$550,000', '~$300,000'],
              ['2020', '~$600,000', '~$320,000'],
              ['2022', '~$650,000', '~$340,000'],
              ['2024', '$696,257', '$353,500'],
            ]}
          />
        </div>
      </section>

      {/* Section 06 — PAHCF Comparison */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>06</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">THE FULL PICTURE</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>FEDPAC vs. PAHCF: The Full Picture</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            FEDPAC&rsquo;s disclosed contributions represent only a fraction of FAH&rsquo;s total political influence spend. The Partnership for America&rsquo;s Health Care Future (PAHCF), the 501(c)(4) vehicle initiated by Chip Kahn, has deployed more than $143 million in undisclosed funds — 40 times FEDPAC&rsquo;s total disclosed contributions over the same period.
          </p>
          <DataTable
            headers={['Vehicle', 'Amount', 'Disclosure Required']}
            rows={[
              ['FEDPAC (disclosed PAC)', '~$3M cumulative (2016–2024)', 'Yes — full FEC disclosure'],
              ['PAHCF (501(c)(4) dark money)', '$143M+ (2018–present)', 'No — donor identities undisclosed'],
            ]}
          />
          <div
            className="mt-6 p-5 rounded-lg text-sm text-gray-300"
            style={{
              background: 'rgba(235,110,44,0.08)',
              border: '1px solid rgba(235,110,44,0.2)',
            }}
          >
            <strong style={{ color: '#EB6E2C' }}>The ratio:</strong> For every dollar FAH discloses through FEDPAC, approximately $47 flows through PAHCF with no donor disclosure. The PAC is the visible surface. PAHCF is the machine underneath.
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Sources</h2>
          <ul className="source-list">
            <li>FEC filings, FEDPAC (FEC ID C00002261), 2016–2024 cycles</li>
            <li>IRS Form 990, PAHCF (2018–2024)</li>
            <li>OpenSecrets.org FEDPAC profile</li>
          </ul>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
