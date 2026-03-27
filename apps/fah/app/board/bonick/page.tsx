import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import StatBar from '@/components/StatBar'
import DataTable from '@/components/DataTable'

export const metadata: Metadata = {
  title: 'Martin Bonick — Ardent Health Services | FAH Chair-Elect',
  description:
    'Martin Bonick leads Ardent Health Services with a 21% Abu Dhabi sovereign wealth stake, $145.9M in annual related-party rent, and a 137:1 CEO-to-worker pay ratio.',
  alternates: { canonical: 'https://fah.rojasreport.com/board/bonick' },
  openGraph: {
    type: 'article',
    title: 'Martin Bonick — Ardent Health Services | FAH Chair-Elect',
    description:
      'Martin Bonick leads Ardent Health Services with a 21% Abu Dhabi sovereign wealth stake and $145.9M in annual related-party rent.',
    url: 'https://fah.rojasreport.com/board/bonick',
    siteName: 'FAH.RojasReport.com',
  },
}

export default function BonickPage() {
  return (
    <>
      <SiteNav currentPath="/board" />

      <div className="px-6 py-3 text-xs text-gray-500" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto">
          <Link href="/board" className="hover:text-fah-accent transition-colors">Board</Link>
          <span className="mx-2">/</span>
          <span style={{ color: '#EB6E2C' }}>Martin Bonick</span>
        </div>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#EB6E2C' }}>
            Board Member Dossier
          </p>
          <h1 className="font-headline text-5xl font-bold mb-2" style={{ color: '#f7f4ef' }}>
            Martin Bonick
          </h1>
          <p className="text-xl text-gray-400 mb-1">President &amp; CEO, Ardent Health Services</p>
          <p className="text-gray-500">FAH Chair-Elect</p>
        </div>
      </section>

      <section className="px-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto">
          <StatBar
            stats={[
              { number: '21%', label: 'Abu Dhabi sovereign wealth stake in Ardent' },
              { number: '$145.9M', label: 'Annual rent paid to related-party landlords' },
              { number: '137:1', label: 'CEO-to-worker pay ratio' },
              { number: '$5.97B', label: 'Ardent annual revenue' },
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
            Martin Bonick joined Ardent Health Services as President and CEO in 2021, succeeding David Hadley. Ardent operates 30 hospitals and more than 200 care sites across six states. The company is privately held, majority-owned by EGI (Equity Group Investments, Sam Zell&rsquo;s vehicle) and Pure Health, the Abu Dhabi state-backed healthcare group.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Bonick serves as FAH Chair-Elect, positioning him to assume the chairmanship and lead the for-profit hospital lobby through the next major budget reconciliation cycle.
          </p>
          <DataTable
            headers={['Career', 'Organization']}
            rows={[
              ['CEO', 'Ardent Health Services (2021–present)'],
              ['COO', 'Ascension Health'],
              ['Various leadership roles', 'Vanguard Health Systems'],
              ['Consulting', 'McKinsey & Company'],
            ]}
          />
        </div>
      </section>

      {/* Section 02 — Ownership */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>02</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">OWNERSHIP STRUCTURE</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Ownership Structure</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Ardent&rsquo;s ownership structure includes a 21-26% stake held by Pure Health, the Abu Dhabi state health company. This represents direct sovereign wealth influence over a major American for-profit hospital system — and by extension, over FAH&rsquo;s legislative priorities.
          </p>
          <DataTable
            headers={['Owner', 'Stake', 'Notes']}
            rows={[
              ['EGI (Equity Group Investments)', '58–62%', 'Sam Zell vehicle; majority control'],
              ['Pure Health (Abu Dhabi)', '21–26%', 'Abu Dhabi sovereign wealth-backed'],
              ['Ventas (REIT)', '3–7%', 'Real estate investment trust; owns hospital properties'],
            ]}
          />
        </div>
      </section>

      {/* Section 03 — Related Party Rent */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>03</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">RELATED-PARTY RENT</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>The $145.9M Rent</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Ardent pays $145.9 million annually in rent to related-party landlords — entities connected to its ownership structure. This is a classic private equity value extraction mechanism: sell the real estate to a related entity, then pay rent back to that same entity, transferring operating cash flow from the hospital to the investor.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            The rent flows reduce Ardent&rsquo;s taxable income while providing a reliable, secured return to the real estate holders — who are connected to the same ownership structure that controls the operating company.
          </p>
        </div>
      </section>

      {/* Section 04 — Compensation */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>04</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">COMPENSATION</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Compensation</h2>
          <DataTable
            headers={['Component', 'Amount']}
            rows={[
              ['Base salary', '$1,060,000'],
              ['Total actually paid (most recent)', '$18,700,000'],
              ['CEO-to-worker pay ratio', '137:1'],
            ]}
          />
          <div
            className="mt-6 p-5 rounded-lg text-sm text-gray-300"
            style={{
              background: 'rgba(235,110,44,0.08)',
              border: '1px solid rgba(235,110,44,0.2)',
            }}
          >
            <strong style={{ color: '#EB6E2C' }}>Note:</strong> Ardent is a private company. Compensation disclosures are limited compared to public companies. The $18.7M figure reflects total actually paid as reported in available filings.
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Sources</h2>
          <ul className="source-list">
            <li>Ardent Health Services press releases</li>
            <li>Pure Health investor disclosures</li>
            <li>EGI portfolio documentation</li>
            <li>FAH board filings</li>
            <li>State health department records</li>
          </ul>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
