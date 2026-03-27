import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import StatBar from '@/components/StatBar'
import DataTable from '@/components/DataTable'

export const metadata: Metadata = {
  title: 'Prem Reddy MD — Prime Healthcare | FAH Director',
  description:
    'Prem Reddy MD founded Prime Healthcare. Medical license revoked CA 2003. Combined DOJ settlements totaling $66.25M. 2025 acquisition of 8 Ascension hospitals in Illinois for $375M.',
  alternates: { canonical: 'https://fah.rojasreport.com/board/reddy' },
  openGraph: {
    type: 'article',
    title: 'Prem Reddy MD — Prime Healthcare | FAH Director',
    description:
      'Medical license revoked CA 2003. $66.25M in DOJ settlements. $375M Ascension IL acquisition.',
    url: 'https://fah.rojasreport.com/board/reddy',
    siteName: 'FAH.RojasReport.com',
  },
}

export default function ReddyPage() {
  return (
    <>
      <SiteNav currentPath="/board" />

      <div className="px-6 py-3 text-xs text-gray-500" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto">
          <Link href="/board" className="hover:text-fah-accent transition-colors">Board</Link>
          <span className="mx-2">/</span>
          <span style={{ color: '#EB6E2C' }}>Prem Reddy MD</span>
        </div>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#EB6E2C' }}>
            Board Member Dossier
          </p>
          <h1 className="font-headline text-5xl font-bold mb-2" style={{ color: '#f7f4ef' }}>
            Prem Reddy MD
          </h1>
          <p className="text-xl text-gray-400 mb-1">Founder &amp; Executive Chairman, Prime Healthcare</p>
          <p className="text-gray-500">FAH Director</p>
        </div>
      </section>

      <section className="px-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto">
          <StatBar
            stats={[
              { number: '2003', label: 'Year CA medical license revoked' },
              { number: '$66.25M', label: 'Combined DOJ settlements (2018 + 2019)' },
              { number: '$375M', label: '2025 acquisition of 8 Ascension hospitals in IL' },
              { number: '$544K+', label: 'Prime PAC contributions, 2024 cycle' },
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
            Prem Reddy MD is the founder and Executive Chairman of Prime Healthcare, a privately held for-profit hospital system operating 45 hospitals across 14 states. Reddy founded Prime in 2001 after his California medical license was revoked in 2003 for patient care violations. He subsequently built Prime into one of the country&rsquo;s larger for-profit hospital operators, focusing on acquiring financially distressed community hospitals.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            Reddy&rsquo;s presence on the FAH board is notable: he represents a privately held, founder-controlled hospital system at an organization dominated by publicly traded or PE-backed companies. Prime operates hospitals in underserved markets where it has faced scrutiny for billing practices and quality.
          </p>
        </div>
      </section>

      {/* Section 02 — License Revocation */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>02</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">LICENSE REVOCATION</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Medical License Revoked</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            The California Medical Board revoked Prem Reddy&rsquo;s medical license in 2003 following disciplinary proceedings related to patient care violations. Reddy subsequently shifted to hospital administration and ownership rather than clinical practice.
          </p>
          <DataTable
            headers={['Event', 'Year', 'Detail']}
            rows={[
              ['CA medical license revocation', '2003', 'California Medical Board action for patient care violations'],
            ]}
          />
        </div>
      </section>

      {/* Section 03 — DOJ Settlements */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>03</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">DOJ SETTLEMENTS</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>DOJ Settlements</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Prime Healthcare paid $66.25 million across two DOJ False Claims Act settlements. Reddy personally paid $3.25 million as part of the settlement terms.
          </p>
          <DataTable
            headers={['Year', 'Amount', 'Reddy Personal Payment', 'Allegation']}
            rows={[
              ['2018', '$65,000,000', '$3,000,000', 'Medicare billing fraud, upcoding, sepsis billing'],
              ['2019', '$1,250,000', '$250,000', 'Additional related False Claims Act matter'],
              ['Total', '$66,250,000', '$3,250,000', 'Combined DOJ resolutions'],
            ]}
          />
        </div>
      </section>

      {/* Section 04 — Illinois Acquisitions */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>04</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">2025 ILLINOIS ACQUISITIONS</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>$375M Illinois Acquisition from Ascension</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            In 2025, Prime Healthcare acquired 8 Ascension Health hospitals in Illinois for $375 million. The acquisition drew immediate scrutiny from Senators Dick Durbin and Tammy Duckworth, who wrote to Prime on May 20, 2025, requesting information about planned service reductions. Community advocates documented anticipated reductions to services including maternity care, behavioral health, and pediatrics.
          </p>
          <DataTable
            headers={['Service', 'Status Post-Acquisition']}
            rows={[
              ['Maternity care', 'Reduction anticipated / announced'],
              ['Behavioral health', 'Reduction anticipated / announced'],
              ['Pediatric services', 'Reduction anticipated / announced'],
            ]}
          />
          <div
            className="mt-6 p-5 rounded-lg text-sm text-gray-300"
            style={{
              background: 'rgba(235,110,44,0.08)',
              border: '1px solid rgba(235,110,44,0.2)',
            }}
          >
            <strong style={{ color: '#EB6E2C' }}>Senate scrutiny:</strong> Senators Durbin and Duckworth sent a formal inquiry letter to Prime Healthcare on May 20, 2025, raising concerns about Prime&rsquo;s track record and the planned service reductions at the acquired Illinois hospitals.
          </div>
        </div>
      </section>

      {/* Section 05 — PAC Activity */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>05</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">PAC ACTIVITY</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>PAC Activity</h2>
          <DataTable
            headers={['Entity', '2024 Cycle', 'Notes']}
            rows={[
              ['Prime Healthcare PAC', '$544,000+', 'FEC filings, 2024 cycle'],
            ]}
          />
        </div>
      </section>

      {/* Sources */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Sources</h2>
          <ul className="source-list">
            <li>California Medical Board disciplinary records (2003)</li>
            <li>DOJ False Claims Act settlement press releases (2018, 2019)</li>
            <li>Senators Durbin and Duckworth letter to Prime Healthcare (May 20, 2025)</li>
            <li>FEC PAC filings, Prime Healthcare</li>
            <li>Illinois Attorney General hospital acquisition review records</li>
          </ul>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
