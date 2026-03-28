import type { Metadata } from 'next'
import Link from 'next/link'
import StatBar from '@/components/StatBar'
import DataTable from '@/components/DataTable'

export const metadata: Metadata = {
  title: 'Kevin Hammons — Community Health Systems | FAH Director',
  description:
    'Kevin Hammons is CFO of Community Health Systems, which has filed 19,000+ patient debt lawsuits, paid a $262M DOJ settlement, suffered a 6.1M-record data breach, and carries $11.5B in debt.',
  alternates: { canonical: 'https://fah.rojasreport.com/board/hammons' },
  openGraph: {
    type: 'article',
    title: 'Kevin Hammons — Community Health Systems | FAH Director',
    description:
      '19,000+ patient debt lawsuits. $262M DOJ settlement. 6.1M patient records breached. $11.5B in debt.',
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
          <p className="text-xl text-gray-400 mb-1">EVP &amp; CFO, Community Health Systems</p>
          <p className="text-gray-500">FAH Director</p>
        </div>
      </section>

      <section className="px-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto">
          <StatBar
            stats={[
              { number: '19,000+', label: 'Patient debt lawsuits filed by CHS' },
              { number: '$262M', label: 'DOJ settlement (United States v. Carlisle HMA)' },
              { number: '6.1M', label: 'Patient records breached' },
              { number: '$11.5B', label: 'CHS total debt' },
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
            Kevin Hammons serves as Executive Vice President and CFO of Community Health Systems (CHS), one of the largest for-profit hospital operators in the United States with approximately 70 hospitals across 16 states. CHS acquired Health Management Associates (HMA) in 2014 for $7.6 billion, creating a company that has been plagued by financial distress, legal exposure, and operational problems ever since.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            CHS carries $11.5 billion in long-term debt, a direct consequence of the highly leveraged HMA acquisition. Hammons manages a balance sheet under sustained pressure from debt service, declining patient volumes, and ongoing legal liabilities.
          </p>
        </div>
      </section>

      {/* Section 02 — DOJ Settlement */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>02</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">DOJ SETTLEMENT</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>$262M DOJ Settlement</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            CHS paid $262 million to resolve DOJ allegations arising from the Health Management Associates acquisition. The case, <em>United States v. Carlisle HMA</em> (Case No. 1:18-cr-00288), involved allegations that HMA&rsquo;s hospitals systematically admitted patients to inpatient status who should have been treated on an outpatient basis, in order to collect higher Medicare reimbursements.
          </p>
          <DataTable
            headers={['Case', 'Amount', 'Entity']}
            rows={[
              ['United States v. Carlisle HMA (1:18-cr-00288)', '$262,000,000', 'Community Health Systems / HMA legacy facilities'],
            ]}
          />
        </div>
      </section>

      {/* Section 03 — Patient Debt Lawsuits */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>03</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">PATIENT DEBT LAWSUITS</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>19,000+ Patient Debt Lawsuits</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            CHS hospitals have filed more than 19,000 lawsuits against patients for unpaid medical bills. The practice has been documented by KFF Health News and other investigators, who found that CHS was among the most aggressive hospital systems in the country in pursuing patients — including low-income patients who likely qualified for charity care — through the courts.
          </p>
          <div
            className="p-5 rounded-lg text-sm text-gray-300"
            style={{
              background: 'rgba(235,110,44,0.08)',
              border: '1px solid rgba(235,110,44,0.2)',
            }}
          >
            <strong style={{ color: '#EB6E2C' }}>Pattern:</strong> CHS pursued patients in states where the company has already received significant Medicaid funding and where those same patients may have qualified for financial assistance under CHS&rsquo;s own charity care policies.
          </div>
        </div>
      </section>

      {/* Section 04 — Data Breach */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>04</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">DATA BREACH</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>6.1 Million Patient Records</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            CHS suffered a data breach affecting 6.1 million patient records. The breach exposed protected health information (PHI) including Social Security numbers, dates of birth, and contact information. CHS paid settlements with multiple state attorneys general related to the breach.
          </p>
        </div>
      </section>

      {/* Section 05 — Compensation */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>05</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">COMPENSATION &amp; PAC</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Compensation &amp; PAC Activity</h2>
          <DataTable
            headers={['Item', 'Detail']}
            rows={[
              ['Base salary', '$1,250,000'],
              ['CHS PAC contributions (2024 cycle)', '$500,000+'],
            ]}
          />
        </div>
      </section>

      {/* Sources */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Sources</h2>
          <ul className="source-list">
            <li>DOJ, <em>United States v. Carlisle HMA</em> (1:18-cr-00288)</li>
            <li>CHS proxy statements and SEC filings</li>
            <li>KFF Health News patient debt investigation</li>
            <li>HHS Office for Civil Rights breach database</li>
            <li>FEC CHS PAC filings</li>
          </ul>
        </div>
      </section>

    </>
  )
}
