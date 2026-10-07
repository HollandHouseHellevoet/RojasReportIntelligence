import type { Metadata } from 'next'
import Link from 'next/link'
import StatBar from '@/components/StatBar'
import DataTable from '@/components/DataTable'

export const metadata: Metadata = {
  title: 'Kevin Hammons — Community Health Systems | FAH Director',
  description:
    'Kevin Hammons became President and CEO of Community Health Systems in 2025 after 28 years at the company. CHS carries ~$10.4B in debt, is selling off hospitals to pay it down, paid a $262M DOJ resolution in 2018, sued 19,000+ patients during the pandemic, and suffered a 6.1M-record breach.',
  alternates: { canonical: 'https://fah.rojasreport.com/board/hammons' },
  openGraph: {
    type: 'article',
    title: 'Kevin Hammons — Community Health Systems | FAH Director',
    description:
      'New CHS CEO (Dec 2025). ~$10.4B in debt. $262M 2018 DOJ resolution. 19,000+ patients sued during the pandemic. 6.1M patient records breached.',
    url: 'https://fah.rojasreport.com/board/hammons',
    siteName: 'FAH.RojasReport.com',
  },
}

export default function HammonsPage() {
  return (
    <>

      <div className="px-6 py-3 text-xs text-gray-500" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto">
          <Link href="/board" className="hover:text-fah-accent transition-colors">Board</Link>
          <span className="mx-2">/</span>
          <span style={{ color: '#EB6E2C' }}>Kevin Hammons</span>
        </div>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#EB6E2C' }}>
            Board Member Dossier
          </p>
          <h1 className="font-headline text-5xl font-bold mb-2" style={{ color: '#f7f4ef' }}>
            Kevin Hammons
          </h1>
          <p className="text-xl text-gray-400 mb-1">President &amp; CEO, Community Health Systems</p>
          <p className="text-gray-500">FAH Director</p>
        </div>
      </section>

      <section className="px-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto">
          <StatBar
            stats={[
              { number: '$10.4B', label: 'CHS total debt (Dec 31, 2025)' },
              { number: '$262M', label: '2018 DOJ global resolution (HMA / United States v. Carlisle HMA)' },
              { number: '19,000+', label: 'Patients sued by CHS hospitals during the pandemic (CNN / KFF Health News)' },
              { number: '6.1M', label: 'Patient records breached (2014); $5M settlement with 28 states' },
            ]}
          />
        </div>
      </section>

      {/* Section 01 — Leadership change */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>01</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">2025&ndash;2026 UPDATE</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>From CFO to CEO</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Kevin Hammons is now President and Chief Executive Officer of Community Health Systems (CHS) and a member of its board. CHS announced on July 23, 2025 that CEO Tim Hingtgen would retire; Hingtgen stepped down as CEO and director on September 30, 2025, and Hammons &mdash; CHS&rsquo;s chief financial officer since January 2020 and an employee since 1997 &mdash; became President and Interim CEO on October 1, 2025. The board made the appointment permanent and gave him a board seat on December 10, 2025. Jason Johnson, interim CFO from October 1, was named CFO the same day.
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Hingtgen did not leave empty-handed: CHS disclosed a consulting agreement running from October 1, 2025 to September 30, 2026 at $33,333 a month, or $400,000. FAH&rsquo;s October 2025 announcement of its 2026 board listed Hammons as a director under his then-title, &ldquo;President and Interim Chief Executive Officer.&rdquo;
          </p>
          <DataTable
            headers={['Date', 'Event']}
            rows={[
              ['July 23, 2025', 'CHS announces Hingtgen will retire as CEO'],
              ['September 30, 2025', 'Hingtgen retires as CEO and director; consulting agreement begins Oct 1 ($33,333/month through Sept 30, 2026)'],
              ['October 1, 2025', 'Hammons becomes President and Interim CEO; base salary raised to $1,250,000; Jason Johnson interim CFO'],
              ['December 10, 2025', 'Hammons named permanent President and CEO and elected to the CHS board; Johnson named CFO'],
            ]}
          />
        </div>
      </section>

      {/* Section 02 — Background and balance sheet */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>02</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">BACKGROUND</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>A Shrinking Company Built on Debt</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            CHS is one of the largest for-profit hospital operators in the United States. In January 2014 it acquired Health Management Associates (HMA) for roughly $7.6 billion including debt, a highly leveraged deal that left the company carrying a debt load it has spent the decade since trying to work down. CHS operated roughly 70 hospitals in 16 states before the 2025&ndash;26 divestiture program described below; the count is now lower.
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            At December 31, 2025, CHS reported total debt of about $10.4 billion ($10,380 million long-term plus $16 million of current maturities), down from the $11.5 billion previously reported on this page, with further reduction expected from roughly $1.2 billion of 2026 divestiture proceeds. Hammons, who ran that balance sheet as CFO for nearly six years, now runs the company.
          </p>
        </div>
      </section>

      {/* Section 03 — FY2025 results and divestitures */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>03</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">FINANCIALS &amp; DIVESTITURES</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>FY2025 Results and the 2025&ndash;26 Sell-Off</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            CHS reported FY2025 net operating revenues of $12.485 billion, down 1.2% as hospital sales outweighed 4.6% same-store growth, and net income attributable to CHS of $509 million, reversing a $516 million net loss in 2024. Fourth-quarter revenue was $3.106 billion with net income of $110 million ($0.81 per share). The company swung back to a net loss in the first quarter of 2026, which it attributed to high debt costs.
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            The divestiture program is the central fact of Hammons&rsquo;s first year. CHS sold seven hospitals in 2025 and another eight hospitals plus an 80% interest in a ninth in the first half of 2026. Together those facilities represented roughly $1.6 billion of 2025 revenue and generated about $1.2 billion in net proceeds, earmarked for debt reduction.
          </p>
          <DataTable
            headers={['Period', 'Hospitals divested', 'Buyer / price']}
            rows={[
              ['2025', 'Seven hospitals, incl. Merit Health Biloxi (Feb 1, 2025) and ShorePoint Health Port Charlotte and Punta Gorda (Mar 1, 2025)', 'Various'],
              ['H1 2026', 'Four Arkansas hospitals', 'Freeman Health System, $110M'],
              ['H1 2026', 'Regional Hospital of Scranton, Moses Taylor Hospital and Wilkes-Barre General Hospital (PA)', 'Tenor Health Foundation, $33M cash + $15M note'],
              ['H1 2026', 'Crestwood Medical Center (Huntsville, AL)', 'Huntsville Hospital Health System, $459M'],
              ['H1 2026', '80% interest in one Tennessee hospital', 'Not disclosed in filing summary'],
              ['Total', '~$1.6B of 2025 revenue divested', '~$1.2B net proceeds'],
            ]}
          />
        </div>
      </section>

      {/* Section 04 — DOJ Settlement */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>04</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">DOJ SETTLEMENT</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>$262M DOJ Global Resolution (2018)</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            On September 25, 2018, CHS and its HMA subsidiary reached a global resolution with the Department of Justice worth more than $260 million ($262 million in total). HMA entered a non-prosecution agreement; Carlisle HMA, LLC, the former operator of Carlisle Regional Medical Center in Pennsylvania, pleaded guilty to one count of conspiracy to commit health care fraud in <em>United States v. Carlisle HMA, LLC</em>, No. 1:18-cr-00288 (D.D.C., Judge Reggie B. Walton); and a civil False Claims Act settlement resolved allegations that from 2008 to 2012 HMA hospitals pressured emergency-department physicians to admit patients as inpatients who should have been treated as outpatients or in observation, and paid kickbacks to physicians. The conduct predates CHS&rsquo;s ownership &mdash; CHS bought HMA in January 2014 and inherited the liability.
          </p>
          <DataTable
            headers={['Case', 'Amount', 'Entity']}
            rows={[
              ['United States v. Carlisle HMA, LLC (D.D.C. 1:18-cr-00288); HMA non-prosecution agreement; civil FCA settlement (Sept 25, 2018)', '$262,000,000', 'Community Health Systems / HMA legacy facilities (2008–2012 conduct)'],
            ]}
          />
        </div>
      </section>

      {/* Section 05 — Patient Debt Lawsuits */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>05</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">PATIENT DEBT LAWSUITS</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>19,000+ Patient Debt Lawsuits</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            A CNN investigation, published with KFF Health News, found that CHS hospitals sued at least 19,000 patients over unpaid medical bills during the pandemic &mdash; a figure the reporters described as likely an undercount. The investigation found CHS stepped up its use of the courts against patients beginning in 2015, and that it kept suing patients even as it received more than $700 million in federal COVID relief funds.
          </p>
          <div
            className="p-5 rounded-lg text-sm text-gray-300"
            style={{
              background: 'rgba(235,110,44,0.08)',
              border: '1px solid rgba(235,110,44,0.2)',
            }}
          >
            <strong style={{ color: '#EB6E2C' }}>Pattern:</strong> CHS pursued patients in court through the same period in which it collected more than $700 million in COVID relief and was selling hospitals to service its debt. Hammons was CFO throughout the pandemic period.
          </div>
        </div>
      </section>

      {/* Section 06 — Data Breaches */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>06</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">DATA BREACHES</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>6.1 Million Patient Records, Then 1.2 Million More</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            In 2014, CHS suffered a data breach affecting 6.1 million patients, exposing names, dates of birth, Social Security numbers, phone numbers and addresses. On October 8, 2020, CHS and its CHSPSC LLC subsidiary agreed to a $5 million settlement with 28 state attorneys general over the breach.
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            In 2023, CHS disclosed a second breach through Fortra&rsquo;s GoAnywhere file-transfer software affecting roughly 1.2 million individuals, which drew class actions in the Middle District of Tennessee. The outcome of that litigation has not been verified for this page.
          </p>
          <DataTable
            headers={['Breach', 'Individuals affected', 'Resolution']}
            rows={[
              ['2014 breach (CHS / CHSPSC LLC)', '6.1 million', '$5M settlement with 28 state attorneys general, Oct 8, 2020'],
              ['2023 Fortra GoAnywhere breach', '~1.2 million', 'Class actions in M.D. Tenn.; outcome not verified'],
            ]}
          />
        </div>
      </section>

      {/* Section 07 — Compensation */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>07</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">COMPENSATION</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Compensation (2025)</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            CHS&rsquo;s March 31, 2026 proxy statement reported total 2025 compensation of $4,772,869 for Hammons, who served as CFO for nine months and CEO for three. His base salary was raised to $1,250,000 on his appointment as President and Interim CEO. The company&rsquo;s median employee earned $79,925, for a CEO pay ratio of 60 to 1, down from 79 to 1 in 2024 under Hingtgen, whose own 2025 total was $7,854,699.
          </p>
          <DataTable
            headers={['Item', 'Detail']}
            rows={[
              ['Hammons total compensation, 2025', '$4,772,869'],
              ['Base salary (from Oct 1, 2025)', '$1,250,000'],
              ['Median CHS employee compensation, 2025', '$79,925'],
              ['CEO-to-median-worker pay ratio, 2025', '60:1 (79:1 in 2024 under Hingtgen)'],
              ['Hingtgen total compensation, 2025', '$7,854,699'],
              ['Hingtgen consulting agreement, Oct 2025–Sept 2026', '$400,000 ($33,333/month)'],
            ]}
          />
        </div>
      </section>

      {/* Sources */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Sources</h2>
          <ul className="source-list">
            <li>Community Health Systems, Inc., Form 8-K, July 23, 2025 (Hingtgen retirement); BusinessWire, &ldquo;Tim Hingtgen to Retire as Chief Executive Officer of Community Health Systems,&rdquo; July 23, 2025</li>
            <li>Community Health Systems, Inc., Form 8-K, February 11, 2026 (CEO appointment and Hingtgen consulting agreement)</li>
            <li>Community Health Systems, Inc., Definitive Proxy Statement (DEF 14A), March 31, 2026 &mdash; 2025 compensation, pay ratio, base salary</li>
            <li>Community Health Systems, Inc., Form 10-K for the fiscal year ended December 31, 2025 (SEC, February 2026) &mdash; debt</li>
            <li>Community Health Systems, Inc., &ldquo;Announces Fourth Quarter and Year Ended December 31, 2025 Results,&rdquo; February 18, 2026 (BusinessWire; Form 8-K Exhibit 99.1)</li>
            <li>Community Health Systems, Inc., Form 10-Q for the quarter ended June 30, 2026 (SEC, August 2026) &mdash; 2025&ndash;26 divestitures; Form 10-Q for the quarter ended March 31, 2026</li>
            <li>Healthcare Dive, Fierce Healthcare and CHS news releases on the Arkansas, Pennsylvania and Crestwood hospital sales (2026); Modern Healthcare, Healthcare Dive and Becker&rsquo;s Hospital Review on the CEO transition (2025)</li>
            <li>US Department of Justice, &ldquo;Hospital Chain Will Pay Over $260 Million to Resolve False Billing and Kickback Allegations; One Subsidiary Agrees to Plead Guilty,&rdquo; September 25, 2018; DOJ Criminal Division Victim Notification page, <em>United States v. Carlisle HMA, LLC</em> (D.D.C. 1:18-cr-00288); CHS news release and Form 8-K Exhibit 99.1, September 2018</li>
            <li>CNN with KFF Health News, &ldquo;Health care corporate giant sold off dozens of hospitals but continued suing patients&rdquo;</li>
            <li>North Carolina Department of Justice and Tennessee Attorney General news releases, October 8, 2020 ($5 million, 28-state breach settlement); HIPAA Journal</li>
            <li>Community Health Systems, Inc., Form 8-K (February 2023) and Form 10-Q for the quarter ended June 30, 2023 &mdash; Fortra GoAnywhere breach</li>
            <li>Becker&rsquo;s Hospital Review, &ldquo;CHS CEO-to-worker pay ratio in 2025&rdquo; (2026)</li>
            <li>Federation of American Hospitals, &ldquo;FAH Announces 2026 Chairman and Board of Directors at Annual Membership Meeting&rdquo; (October 2025)</li>
            <li>Reviewed October 2026.</li>
          </ul>
        </div>
      </section>

    </>
  )
}
