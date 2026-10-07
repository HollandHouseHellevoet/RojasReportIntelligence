import type { Metadata } from 'next'
import StatBar from '@/components/StatBar'
import DataTable from '@/components/DataTable'
import { pacStats } from '@/lib/data'

export const metadata: Metadata = {
  title: 'PAC Intelligence — FAH Intelligence',
  description:
    'FEDPAC has given $770,000 to federal committees in the 2026 cycle through August 2026, more than double its 2024-cycle total. FEC ID C00002261. Compare with PAHCF, the 501(c)(4) vehicle FAH helped create.',
  alternates: { canonical: 'https://fah.rojasreport.com/pac' },
  openGraph: {
    type: 'website',
    title: 'PAC Intelligence — FAH Intelligence',
    description:
      'FEDPAC: $742,202 raised and $770,000 contributed in the 2026 cycle through Aug 31, 2026. FEC ID C00002261.',
    url: 'https://fah.rojasreport.com/pac',
    siteName: 'FAH.RojasReport.com',
  },
}

export default function PacPage() {
  return (
    <>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#EB6E2C' }}>
            PAC Intelligence
          </p>
          <h1 className="font-headline text-5xl font-bold mb-4" style={{ color: '#f7f4ef' }}>
            FEDPAC
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            The Federation of American Hospitals Political Action Committee. FEC ID {pacStats.fecId}. Twenty months into the 2026 cycle it has already given more than it gave in all of 2024.
          </p>
        </div>
      </section>

      <section className="px-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto">
          <StatBar
            stats={[
              { number: pacStats.raised2026, label: `Raised, 2026 cycle (through ${pacStats.asOf2026})` },
              { number: pacStats.contributions2026, label: 'Contributions to federal committees, 2026 cycle' },
              { number: pacStats.contributions2024, label: 'Contributions, full 2024 cycle' },
              { number: pacStats.cashOnHand2026, label: `Cash on hand, ${pacStats.asOf2026}` },
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
              ['Committee name', 'Federation of American Hospitals PAC (FEDPAC), formerly American Health Systems PAC'],
              ['Committee type', 'Trade association PAC; qualified lobbyist/registrant PAC; monthly filer'],
              ['Registered', 'April 5, 1976'],
              ['Connected organization', 'Federation of American Hospitals (EIN 13-6226549), which pays the PAC’s administrative costs'],
              ['Address', '750 9th Street NW, Washington, DC 20001'],
              ['Latest report in this analysis', `September 2026 Monthly, covering through ${pacStats.asOf2026}`],
            ]}
          />
        </div>
      </section>

      {/* Section 02 — 2026 Cycle Financials */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>02</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">2026 CYCLE</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>2026 Cycle Financials (Jan 1, 2025 – Aug 31, 2026)</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            FEDPAC is spending down into the midterm. Contributions to other committees reached $638,000 through June 30, 2026 and $770,000 two months later, so $132,000 went out the door in July and August alone. Of $771,154 in total disbursements, all but $1,154 was a political contribution.
          </p>
          <DataTable
            headers={['FEC summary line', 'Amount']}
            rows={[
              ['Total receipts', '$742,202'],
              ['Individual contributions', '$695,452'],
              ['Itemized individual contributions ($200+)', '$666,870'],
              ['Contributions from other PACs', '$41,750'],
              ['Total disbursements', '$771,154'],
              ['Contributions to other committees (candidates, leadership PACs, party committees)', '$770,000'],
              ['Cash on hand, Jan 1, 2025', '$139,881'],
              ['Cash on hand, Aug 31, 2026', pacStats.cashOnHand2026],
            ]}
          />
          <p className="text-xs text-gray-500 mt-4">
            Source: FEC committee summary for C00002261, 2025–2026 two-year period. The October 2026 Monthly (covering September) was due October 20, 2026 and is not reflected here.
          </p>
        </div>
      </section>

      {/* Section 03 — 2024 Cycle */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>03</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">2024 CYCLE</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>2024 Cycle Financials</h2>
          <DataTable
            headers={['Item', 'Amount']}
            rows={[
              ['Total raised', pacStats.raised2024],
              ['Contributions to candidates and committees', pacStats.contributions2024],
              ['Democratic recipients', `${pacStats.demContributions} (${pacStats.demShare})`],
              ['Republican recipients', `${pacStats.repContributions} (46%)`],
              ['Cash on hand, Dec 31, 2024', pacStats.cashOnHand2024],
            ]}
          />
        </div>
      </section>

      {/* Section 04 — House Recipients */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>04</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">HOUSE RECIPIENTS</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>House Recipients (Top, 2024 Cycle)</h2>
          <DataTable
            headers={['Recipient', 'Amount', 'Party', 'Role (119th Congress)']}
            rows={[
              ['Rep. Pete Aguilar (CA)', '$10,000', 'D', 'House Democratic Caucus Chair'],
              ['Rep. Katherine Clark (MA)', '$10,000', 'D', 'House Minority Whip'],
              ['Rep. Brett Guthrie (KY)', '$10,000', 'R', 'Chair, House Energy &amp; Commerce Committee'],
              ['Rep. Steve Scalise (LA)', '$10,000', 'R', 'House Majority Leader'],
              ['Rep. Jason Smith (MO)', '$5,000', 'R', 'Chair, House Ways &amp; Means Committee'],
              ['Rep. Frank Pallone (NJ)', '$1,500', 'D', 'Ranking Member, House Energy &amp; Commerce Committee'],
            ]}
          />
          <p className="text-xs text-gray-500 mt-4">
            Ways &amp; Means and Energy &amp; Commerce hold jurisdiction over Medicare payment policy, site-neutral reform, and the physician-owned hospital ban. Both chairs and the Energy &amp; Commerce ranking member took FEDPAC money in 2024.
          </p>
        </div>
      </section>

      {/* Section 05 — Senate Recipients */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>05</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">SENATE RECIPIENTS</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Senate Recipients (Top, 2024 Cycle)</h2>
          <DataTable
            headers={['Recipient', 'Amount', 'Party', 'Status']}
            rows={[
              ['Sen. Marsha Blackburn (TN)', '$10,000', 'R', 'Serving'],
              ['Sen. Jacky Rosen (NV)', '$7,500', 'D', 'Serving'],
              ['Sen. Jon Tester (MT)', '$7,000', 'D', 'Lost Nov 2024'],
              ['Sen. Sherrod Brown (OH)', '$6,500', 'D', 'Lost Nov 2024; running in 2026 Ohio special'],
              ['Sen. Tim Kaine (VA)', '$6,000', 'D', 'Serving'],
            ]}
          />
        </div>
      </section>

      {/* Section 06 — Member company PACs */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>06</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">THE MONEY LOOP</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Board Companies Fund the Trade Group&rsquo;s PAC</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            The corporate PACs of FAH board-member companies contribute directly to FEDPAC, which then contributes to lawmakers. Each company&rsquo;s CEO or CFO sits on the FAH board. In the 2026 cycle, $41,750 of FEDPAC&rsquo;s receipts came from other PACs.
          </p>
          <DataTable
            headers={['Contributing PAC', 'FAH board seat', 'Amount', 'Date']}
            rows={[
              ['Community Health Systems PAC', 'Kevin Hammons, CHS CFO', '$5,000', 'Dec 17, 2024'],
              ['Tenet Healthcare Corporation PAC', 'Saum Sutaria, Tenet CEO', '$5,000', 'Aug 16, 2024'],
              ['HCA Healthcare Good Government Fund', 'Sam Hazen, HCA CEO', '$5,000', 'Jan 22, 2024'],
              ['Ardent Legacy Holdings PAC', 'Marty Bonick, Ardent CEO', '$5,000', 'Feb 28, 2024'],
            ]}
          />
        </div>
      </section>

      {/* Section 07 — Historical Cycles */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>07</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">HISTORICAL CYCLES</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Historical PAC Cycles</h2>
          <DataTable
            headers={['Cycle', 'Total Receipts', 'Total Disbursements']}
            rows={[
              ['2016', '$772,938', '$749,277'],
              ['2018', '$705,235', '$774,996'],
              ['2020', '$514,933', '$551,837'],
              ['2022', '$818,087', 'n/a'],
              ['2024', pacStats.raised2024, 'n/a'],
              ['2026 (through Aug 31, 2026)', pacStats.raised2026, '$771,154'],
            ]}
          />
          <p className="text-xs text-gray-500 mt-4">
            Receipts and disbursements as reported in FEC year-end and monthly filings via FEC.gov and ProPublica Itemizer. Disbursement totals for 2022 and 2024 are omitted where the two-year figure could not be confirmed.
          </p>
        </div>
      </section>

      {/* Section 08 — PAHCF Comparison */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>08</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">THE FULL PICTURE</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>FEDPAC vs. PAHCF: The Full Picture</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            FEDPAC&rsquo;s disclosed contributions are only part of FAH&rsquo;s political footprint. The Partnership for America&rsquo;s Health Care Future (PAHCF), the 501(c)(4) coalition FAH helped found under Chip Kahn to fight Medicare for All and the public option, reports roughly $33 million in spending across its 2018 through 2024 Form 990s. None of its donors are disclosed. A sister entity, PAHCF Action (EIN 84-3893369), files separately and is not included in that total.
          </p>
          <DataTable
            headers={['Vehicle', 'Amount', 'Disclosure Required']}
            rows={[
              ['FEDPAC (disclosed PAC)', '~$4.2M in receipts, 2016–2026 to date', 'Yes — every donor and recipient filed with the FEC'],
              ['PAHCF (501(c)(4))', `${pacStats.pahcfReported} reported spending, 2018–2024`, 'No — donor identities undisclosed'],
            ]}
          />
          <DataTable
            headers={['PAHCF tax year', 'Reported giving / spending']}
            rows={[
              ['2018', '$519,685'],
              ['2019', '$1,184,000'],
              ['2020', '$8,542,000'],
              ['2021', '$10,450,000'],
              ['2022', '$7,199,715'],
              ['2023', '$3,753,000'],
              ['2024', '$1,752,326 (expenses $2,953,060 on revenue $2,140,851)'],
            ]}
          />
          <div
            className="mt-6 p-5 rounded-lg text-sm text-gray-300"
            style={{
              background: 'rgba(235,110,44,0.08)',
              border: '1px solid rgba(235,110,44,0.2)',
            }}
          >
            <strong style={{ color: '#EB6E2C' }}>The ratio:</strong> PAHCF&rsquo;s undisclosed spending runs roughly an order of magnitude above everything FEDPAC has ever disclosed. PAHCF peaked at more than $10 million in 2021, the year the public option died in Congress, and has wound down since. The PAC is the visible surface. PAHCF was the machine underneath.
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Sources</h2>
          <ul className="source-list">
            <li>FEC committee summary and filings, FEDPAC (C00002261), 2016–2026: fec.gov/data/committee/C00002261</li>
            <li>FEC Form 1 (amended Statement of Organization), filed Jan 8, 2026</li>
            <li>ProPublica FEC Itemizer, C00002261, cycles 2016–2026</li>
            <li>IRS Form 990, Partnership for America&rsquo;s Health Care Future Inc (EIN 83-0939222), tax years 2018–2024, via ProPublica Nonprofit Explorer</li>
            <li>FEC 2026 monthly filer reporting calendar</li>
            <li>Data current through the September 2026 Monthly (Aug 31, 2026). Reviewed October 2026.</li>
          </ul>
        </div>
      </section>

    </>
  )
}
