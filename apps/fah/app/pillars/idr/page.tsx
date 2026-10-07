import type { Metadata } from 'next'
import Link from 'next/link'
import ThreatTag from '@/components/ThreatTag'
import StatBar from '@/components/StatBar'
import DataTable from '@/components/DataTable'

export const metadata: Metadata = {
  title: 'No Surprises Act / IDR — FAH Position | Pillar 04',
  description:
    "FAH opposes the QPA-centric IDR methodology. About 2.6 million disputes were filed in 2025 (4.8 million cumulative), and providers won 85–88% of determinations. FAH's side lost Guardian Flight v. HCSC at the Fifth Circuit on June 12, 2025.",
  alternates: { canonical: 'https://fah.rojasreport.com/pillars/idr' },
  openGraph: {
    type: 'article',
    title: 'No Surprises Act / IDR — FAH Position | Pillar 04',
    description:
      '~2.6M IDR disputes in 2025. Providers win 85–88%. FAH opposes QPA-centric methodology; lost Guardian Flight at the Fifth Circuit.',
    url: 'https://fah.rojasreport.com/pillars/idr',
    siteName: 'FAH.RojasReport.com',
  },
}

export default function IdrPage() {
  return (
    <>

      <div className="px-6 py-3 text-xs text-gray-500" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto">
          <Link href="/pillars" className="hover:text-fah-accent transition-colors">Pillars</Link>
          <span className="mx-2">/</span>
          <span style={{ color: '#EB6E2C' }}>No Surprises Act / IDR</span>
        </div>
      </div>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: '#EB6E2C' }}>
            Pillar 04
          </p>
          <h1 className="font-headline text-5xl font-bold mb-2" style={{ color: '#f7f4ef' }}>
            No Surprises Act / IDR
          </h1>
          <p className="text-xl text-gray-400 mb-4">
            Independent Dispute Resolution &middot; QPA &middot; Out-of-Network
          </p>
          <ThreatTag level="Moderate" />
        </div>
      </section>

      <section className="px-6 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="max-w-7xl mx-auto">
          <StatBar
            stats={[
              { number: '~2.6M', label: 'IDR disputes filed in 2025 (1.46M in 2024)' },
              { number: '4.8M', label: 'Cumulative disputes through December 2025' },
              { number: '85–88%', label: 'Provider win rate in 2025 determinations (88% H1, 85% H2)' },
              { number: '87%', label: 'Share of 2025 awards above the QPA' },
            ]}
          />
        </div>
      </section>

      {/* Section 01 */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>01</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">FAH POSITION</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>FAH Position</h2>
          <p className="text-gray-300 mb-4 leading-relaxed">
            FAH opposes the Qualifying Payment Amount (QPA) methodology as the primary anchor for IDR arbitration decisions. FAH argues the QPA — which is based on insurer median in-network rates — systematically undervalues hospital services and favors insurers in the dispute resolution process.
          </p>
          <p className="text-gray-300 mb-4 leading-relaxed">
            FAH filed an amicus brief in <em>TMA/AMA v. HHS</em> supporting physician and hospital challengers to the QPA-centric IDR rules. FAH also joined the AHA, AMA and Texas Medical Association as amici in <em>Guardian Flight v. HCSC</em>, supporting air ambulance providers seeking to enforce IDR awards in court. That effort failed: on June 12, 2025 the Fifth Circuit (No. 24-10561) held that the No Surprises Act creates no private right of action to enforce IDR awards, leaving providers to complain to HHS when insurers do not pay. Other federal courts have split on the question.
          </p>
        </div>
      </section>

      {/* Section 02 — The IDR Explosion */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>02</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">THE IDR EXPLOSION</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>The IDR Explosion</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            When the Departments of HHS, Labor and the Treasury wrote the IDR rules, their regulatory impact analysis anticipated roughly 17,000 to 22,000 disputes a year. Actual volume reached about 1.46 million in 2024 and roughly 2.6 million in 2025 &mdash; more than 100 times the estimate &mdash; for a cumulative total of about 4.8 million disputes through December 2025. Providers initiate almost all of them (99.9% in the first half of 2025), and win most: 85% of determinations in 2023 and 2024, 88% in the first half of 2025 and 85% in the second half. Awards exceeded the QPA in 87% of 2025 determinations, while insurers&rsquo; offers were at or below the QPA in roughly 47% of 2024 disputes.
          </p>
          <DataTable
            headers={['Metric', 'Value']}
            rows={[
              ['Departments’ regulatory impact estimate (annual)', '~17,000–22,000 disputes'],
              ['Actual 2024 disputes', '~1.46 million (CRS: ~1.42M emergency/non-emergency plus 44,238 air ambulance)'],
              ['Actual 2025 disputes', '~2.6 million (~1.2M in H1, up from ~590,000 in H1 2024; ~1.4M in H2)'],
              ['Cumulative through Dec 2025', '~4.8 million'],
              ['Ratio, 2025 actual to estimate', 'More than 100x'],
              ['Provider win rate', '~85% (2023 and 2024, non-default determinations); 88% (H1 2025); 85% of 1.15M determinations (H2 2025)'],
              ['Awards above the QPA', '87% of determinations in both halves of 2025'],
              ['Insurer offers at or below the QPA', '~47% of 2024 disputes'],
            ]}
          />
        </div>
      </section>

      {/* Section 03 — Amicus Activity */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>03</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">LEGAL ACTIVITY</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>FAH Legal Activity</h2>
          <DataTable
            headers={['Case', 'FAH Role', 'Issue', 'Outcome']}
            rows={[
              ['TMA/AMA v. HHS', 'Amicus brief', 'Challenged QPA as mandatory IDR anchor; supported physician challengers', 'See TMA III timeline below'],
              ['Guardian Flight v. HCSC (5th Cir. No. 24-10561)', 'Joint amicus brief with AHA, AMA and TMA', 'Whether providers can sue to enforce IDR awards', 'Lost. June 12, 2025: no private right of action under the No Surprises Act; enforcement complaints go to HHS'],
            ]}
          />
          <h3 className="font-headline text-xl font-bold mt-8 mb-3" style={{ color: '#f7f4ef' }}>TMA III: the QPA rules in the Fifth Circuit</h3>
          <DataTable
            headers={['Date', 'Event']}
            rows={[
              ['October 2024', 'Fifth Circuit panel largely upholds the QPA-calculation rules but sides with providers on payment deadlines'],
              ['May 30, 2025', 'Court grants rehearing en banc and vacates the panel opinion; HHS issues FAQs in June 2025'],
              ['2026', 'En banc court invalidates part of the QPA rules — the "ghost rate" methodology — in a win for providers'],
            ]}
          />
        </div>
      </section>

      {/* Section 04 — 2026 Operations Rule */}
      <section className="py-16 px-6" style={{ background: '#0a1520' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#EB6E2C' }}>04</span>
            <span className="text-xs uppercase tracking-wider text-gray-500">2026 RULEMAKING</span>
          </div>
          <h2 className="font-headline text-3xl font-bold mb-4" style={{ color: '#f7f4ef' }}>The IDR Operations Final Rule (May 28, 2026)</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            On May 28, 2026, HHS, Labor, Treasury and OPM finalized the Federal IDR Operations rule, which lowers the cost of filing and widens the door to arbitration. Filing more cheaply and in larger batches favors the party that initiates disputes &mdash; and providers initiate 99.9% of them.
          </p>
          <DataTable
            headers={['Change', 'Detail']}
            rows={[
              ['Administrative fee', 'Per-party fee cut from $115 to $15 for disputes initiated on or after June 11, 2026'],
              ['Batching', 'Expanded to all items and services for a single patient in a single encounter'],
              ['Payer disclosures', 'Payers must use specified CARC/RARC codes and disclose their legal name and IDR registration number on remittances'],
              ['Implementation', 'CMS issued implementation-timeline guidance in August 2026'],
            ]}
          />
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-2xl font-bold mb-4" style={{ color: '#f7f4ef' }}>Sources</h2>
          <ul className="source-list">
            <li>Congressional Research Service, R48738, federal IDR process data (2025)</li>
            <li>CMS Federal IDR public use files and supplemental background reports (2023, 2024, 2025 Q1&ndash;Q2 and Q3&ndash;Q4)</li>
            <li>Georgetown CHIR and Health Affairs Forefront, &ldquo;The No Surprises Act IDR Process: An Early Look at 2025 Data&rdquo; (2026); Healthcare Dive, ACR and HFMA reporting on 2025 IDR volumes and provider win rates (2026)</li>
            <li>Departments&rsquo; regulatory impact analysis, federal IDR rules</li>
            <li>FAH, &ldquo;FAH Files Joint Amicus Brief to Enforce Surprise Billing IDR Awards&rdquo;; <em>Guardian Flight v. Health Care Service Corp.</em>, 5th Cir. No. 24-10561 (June 12, 2025); Hall Render (July 25, 2025) and ABA Health Law Section (Aug 2025) analyses; McCarter &amp; English on the circuit split</li>
            <li>FAH amicus brief, <em>TMA/AMA v. HHS</em></li>
            <li>TMA III: Proskauer on the October 2024 panel decision; Reed Smith on the May 30, 2025 en banc grant; McDermott+ on the June 2025 HHS FAQs; Healthcare Dive, Law360 and AMA on the en banc decision (2026)</li>
            <li>Federal IDR Operations Final Rule (May 28, 2026): Baker Donelson, HFMA, Jones Day and Bass Berry &amp; Sims summaries; CMS implementation-timeline guidance (Aug 2026)</li>
            <li>Niskanen Center, &ldquo;New data shows No Surprises Act arbitration is growing healthcare waste&rdquo;; Peterson-KFF Health System Tracker, performance of the federal IDR process through mid-2024</li>
            <li>Reviewed October 2026.</li>
          </ul>
        </div>
      </section>

    </>
  )
}
