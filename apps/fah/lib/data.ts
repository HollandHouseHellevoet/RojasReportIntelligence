import type { ThreatLevel } from '@/components/ThreatTag'

// ─── Board Members ────────────────────────────────────────────────────────────

export interface BoardMember {
  slug: string
  name: string
  title: string
  company: string
  role: string
  keyStats: { number: string; label: string }[]
}

export const boardMembers: BoardMember[] = [
  {
    slug: 'dill',
    name: 'David Dill',
    title: 'Chairman & CEO',
    company: 'Lifepoint Health / Apollo Global',
    role: 'FAH Chair (2026)',
    keyStats: [
      { number: '$9.2M', label: 'Annual management fees paid to Apollo' },
      { number: '$25.3M', label: 'Golden parachute value at Lifepoint' },
      { number: '7', label: 'Broken promises to acquired communities' },
      { number: '$5.6B', label: 'RCCH HealthCare acquisition price' },
    ],
  },
  {
    slug: 'bonick',
    name: 'Martin Bonick',
    title: 'Former President & CEO (stepped down Jun 2, 2026)',
    company: 'Ardent Health',
    role: 'FAH Chair-Elect (2026 slate)',
    keyStats: [
      { number: '21%', label: 'Abu Dhabi sovereign wealth stake in Ardent' },
      { number: '$145.9M', label: 'Annual rent paid to related-party landlords' },
      { number: '137:1', label: 'CEO-to-worker pay ratio' },
      { number: '$5.97B', label: 'Ardent annual revenue' },
    ],
  },
  {
    slug: 'miller',
    name: 'Marc Miller',
    title: 'President & CEO',
    company: 'Universal Health Services',
    role: 'FAH Immediate Past Chair (2026)',
    keyStats: [
      { number: '$122M', label: 'False Claims Act settlement' },
      { number: '87.4%', label: 'Miller family voting control of UHS' },
      { number: '309:1', label: 'CEO-to-worker pay ratio' },
      { number: '$15.8B', label: 'UHS annual revenue' },
    ],
  },
  {
    slug: 'tarr',
    name: 'Mark Tarr',
    title: 'President & CEO',
    company: 'Encompass Health',
    role: 'FAH Treasurer (2026 slate)',
    keyStats: [
      { number: '$48M', label: 'DOJ settlement amount' },
      { number: '82%', label: 'Medicare revenue dependency' },
      { number: '$280M', label: 'Site-neutral payment exposure' },
      { number: '204:1', label: 'CEO-to-worker pay ratio' },
    ],
  },
  {
    slug: 'hammons',
    name: 'Kevin Hammons',
    title: 'President & CEO (since Dec 10, 2025)',
    company: 'Community Health Systems',
    role: 'FAH Director',
    keyStats: [
      { number: '19,000+', label: 'Patient debt lawsuits filed by CHS' },
      { number: '$262M', label: 'DOJ settlement (United States v. Carlisle HMA)' },
      { number: '6.1M', label: 'Patient records breached' },
      { number: '$11.5B', label: 'CHS total debt' },
    ],
  },
  {
    slug: 'hazen',
    name: 'Samuel Hazen',
    title: 'CEO',
    company: 'HCA Healthcare',
    role: 'FAH Director',
    keyStats: [
      { number: '$1.7B', label: 'Total federal fraud settlement (largest in US history)' },
      { number: '$23.8M', label: 'Hazen total 2024 compensation' },
      { number: '391:1', label: 'CEO-to-worker pay ratio' },
      { number: '$75.6B', label: 'HCA annual revenue' },
    ],
  },
  {
    slug: 'jay',
    name: 'Rob Jay',
    title: 'Executive Chairman (CEO until Jun 10, 2026)',
    company: 'ScionHealth / Apollo',
    role: 'FAH Director',
    keyStats: [
      { number: 'Caa3', label: "Moody's rating after 2025 downgrade from Caa2" },
      { number: '3', label: 'LTACHs closed Feb 2025 (300+ jobs)' },
      { number: '$189M', label: 'Ventas sale-leaseback of 5 LTACs (Sept 2024)' },
      { number: '$80M', label: 'Initial annual rent, 23-LTAC Ventas master lease (from May 2025)' },
    ],
  },
  {
    slug: 'reddy',
    name: 'Prem Reddy MD',
    title: 'Founder, Chairman, President & CEO',
    company: 'Prime Healthcare',
    role: 'FAH Director',
    keyStats: [
      { number: '$103.75M', label: 'Three False Claims Act settlements (2018, Pennsylvania, 2021)' },
      { number: '$5.03M+', label: 'Paid personally by Reddy in those settlements' },
      { number: '$370M+', label: 'Ascension Illinois acquisition, 8 hospitals (closed Mar 1, 2025)' },
      { number: '3', label: 'Chicago-area hospitals ending obstetrics Oct 1, 2026' },
    ],
  },
  {
    slug: 'sutaria',
    name: 'Saumya Sutaria MD',
    title: 'Chairman & CEO',
    company: 'Tenet Healthcare',
    role: 'FAH Director',
    keyStats: [
      { number: '$43.1M', label: '2025 total compensation (2026 proxy)' },
      { number: '711:1', label: 'CEO-to-median-employee pay ratio (2025)' },
      { number: '$21.31B', label: 'Tenet FY2025 net operating revenues' },
      { number: '533', label: 'USPI ambulatory surgery centers vs. 50 hospitals (Dec 31, 2025)' },
    ],
  },
]

// ─── Eight Pillars ────────────────────────────────────────────────────────────

export interface Pillar {
  slug: string
  number: string
  title: string
  subtitle: string
  threat: ThreatLevel
  summary: string
}

export const pillars: Pillar[] = [
  {
    slug: 'con-laws',
    number: '01',
    title: 'CON Laws',
    subtitle: 'Certificate of Need · Market Entry Barriers · State Regulation',
    threat: 'Low',
    summary: 'No public position.',
  },
  {
    slug: 'consolidation',
    number: '02',
    title: 'Hospital Consolidation',
    subtitle: 'FTC Authority · Merger Defense · Antitrust',
    threat: 'Moderate',
    summary: 'Pro-consolidation; opposes FTC authority.',
  },
  {
    slug: '340b',
    number: '03',
    title: '340B Drug Pricing',
    subtitle: '340B Program · Contract Pharmacy · Drug Manufacturers',
    threat: 'Low',
    summary: 'Members excluded; opposes clawback.',
  },
  {
    slug: 'idr',
    number: '04',
    title: 'No Surprises Act / IDR',
    subtitle: 'Independent Dispute Resolution · QPA · Out-of-Network',
    threat: 'Moderate',
    summary: 'Opposes QPA-centric methodology.',
  },
  {
    slug: 'poh-ban',
    number: '05',
    title: 'Physician-Owned Hospital Ban',
    subtitle: 'Section 6001 ACA · Stark Law · POH Repeal Bills',
    threat: 'Critical',
    summary: 'Authored and defends Section 6001 of the ACA.',
  },
  {
    slug: 'site-neutral',
    number: '06',
    title: 'Site-Neutral Payments',
    subtitle: 'Payment Parity · HOPD vs. Physician Office · Medicare Savings',
    threat: 'High',
    summary: 'Strongly opposes all proposals.',
  },
  {
    slug: 'scope',
    number: '07',
    title: 'Scope of Practice',
    subtitle: 'Nursing · Pharmacy · Allied Health Professionals',
    threat: 'Low',
    summary: 'No public position.',
  },
  {
    slug: 'transparency',
    number: '08',
    title: 'Price Transparency',
    subtitle: 'AHA v. Azar · Compelled Disclosure · Regulatory Stability',
    threat: 'Low',
    summary: 'Originally litigated; now compliance.',
  },
]

// ─── Lobbying Firms ───────────────────────────────────────────────────────────
// Senate LDA registrations for FAH (registrant ID 32635) per Legis1, Sept 2026.
// Per-firm contract values are not included until verified against LD-2 filings.

export interface LobbyingFirm {
  firm: string
  status: string
  note: string
}

export const lobbyingFirms: LobbyingFirm[] = [
  {
    firm: 'BGR Government Affairs LLC',
    status: 'Active — registered effective Jan 1, 2026',
    note: 'Newest addition to the roster',
  },
  {
    firm: 'Avōq LLC',
    status: 'Active (2026)',
    note: 'Policy communications and advocacy',
  },
  {
    firm: 'Marshall & Popp LLC',
    status: 'Active (2026)',
    note: '',
  },
  {
    firm: 'Welsh Rose LLC',
    status: 'Active (2026)',
    note: '',
  },
  {
    firm: 'Capitol Tax Partners LLP',
    status: 'Active (2026)',
    note: 'Tax policy',
  },
  {
    firm: 'Invariant LLC',
    status: 'Terminated effective Jul 1, 2026 (filed Sep 10, 2026)',
    note: 'No named lobbyist on the account from Q2 2025 through Q1 2026',
  },
]

// ─── PAC Stats ────────────────────────────────────────────────────────────────

export const pacStats = {
  fecId: 'C00002261',
  name: 'FEDPAC',
  // 2026 cycle: FEC summary, 2025-2026 two-year period, through the September 2026 Monthly
  asOf2026: 'Aug 31, 2026',
  raised2026: '$742,202',
  contributions2026: '$770,000',
  cashOnHand2026: '$110,929',
  // 2024 cycle
  raised2024: '$696,257',
  contributions2024: '$353,500',
  demShare: '54%',
  cashOnHand2024: '$139,881',
  /** @deprecated use cashOnHand2026 or cashOnHand2024 */
  cashOnHand: '$110,929',
  demContributions: '$190,500',
  repContributions: '$163,000',
  // PAHCF (EIN 83-0939222) reported giving/spending summed across 2018-2024 Form 990s
  pahcfReported: '~$33M',
}

// ─── Global Site Stats ────────────────────────────────────────────────────────

export const globalStats = {
  // Senate LDA totals as reported by Axios Pro (Jan 2025) and Healthcare Dive (May 2026)
  lobbyingSpend2025: '$3.6M',
  lobbyingSpend2024: '~$2.4M',
  // Active outside-firm LDA registrations in 2026 (Invariant terminated Jul 1, 2026)
  retainedFirms: '5',
  boardMembers: '9',
  pillars: '8',
  // PAHCF (EIN 83-0939222) reported giving/spending summed across 2018-2024 Form 990s
  pahcfDarkMoney: '~$33M',
  dataAsOf: 'October 2026',
}
