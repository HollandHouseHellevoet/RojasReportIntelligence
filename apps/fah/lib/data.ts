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
    title: 'President & CEO',
    company: 'Lifepoint Health / Apollo Global',
    role: 'FAH Chair',
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
    title: 'President & CEO',
    company: 'Ardent Health Services',
    role: 'FAH Chair-Elect',
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
    role: 'FAH Immediate Past Chair',
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
    role: 'FAH Treasurer',
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
    title: 'EVP & CFO',
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
    title: 'President & CEO',
    company: 'ScionHealth / Apollo',
    role: 'FAH Director',
    keyStats: [
      { number: 'Caa2', label: "Moody's credit rating (deep junk)" },
      { number: '3', label: 'Hospitals closed under ScionHealth' },
      { number: '$189M', label: 'Ventas sale-leaseback proceeds' },
      { number: '$80M', label: 'Annual rent from sale-leaseback' },
    ],
  },
  {
    slug: 'reddy',
    name: 'Prem Reddy MD',
    title: 'Founder & Executive Chairman',
    company: 'Prime Healthcare',
    role: 'FAH Director',
    keyStats: [
      { number: '2003', label: 'Year CA medical license revoked' },
      { number: '$66.25M', label: 'Combined DOJ settlements (2018 + 2019)' },
      { number: '$375M', label: '2025 acquisition of 8 Ascension hospitals in IL' },
      { number: '$544K+', label: 'Prime PAC contributions, 2024 cycle' },
    ],
  },
  {
    slug: 'sutaria',
    name: 'Saumya Sutaria MD',
    title: 'Chairman & CEO',
    company: 'Tenet Healthcare',
    role: 'FAH Director',
    keyStats: [
      { number: '~$1.54B', label: 'Cumulative Tenet federal fraud settlements' },
      { number: '$84.15M', label: 'Sutaria cumulative compensation 2021–2024' },
      { number: '406:1', label: 'CEO-to-worker pay ratio (2024)' },
      { number: '18', label: 'Years at McKinsey before Tenet' },
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

export interface LobbyingFirm {
  firm: string
  contract2025: string
  focus: string
  notablePersonnel: string
}

export const lobbyingFirms: LobbyingFirm[] = [
  {
    firm: 'Miller Strategies',
    contract2025: '$540,000',
    focus: 'Medicare reimbursement, budget reconciliation',
    notablePersonnel: 'Thomas Scully (former CMS Administrator)',
  },
  {
    firm: 'Avoq (formerly GMMB)',
    contract2025: '$240,000',
    focus: 'Policy communications, message strategy',
    notablePersonnel: '',
  },
  {
    firm: 'Marshall & Popp',
    contract2025: '$240,000',
    focus: 'Congressional relations',
    notablePersonnel: '',
  },
  {
    firm: 'Welsh Rose',
    contract2025: '$200,000',
    focus: 'Senate relations',
    notablePersonnel: '',
  },
  {
    firm: 'Cozen O\'Connor',
    contract2025: '$160,000',
    focus: 'Regulatory and legal advocacy',
    notablePersonnel: '',
  },
  {
    firm: 'Capitol Tax Partners',
    contract2025: '$40,000',
    focus: 'Tax and 340B policy',
    notablePersonnel: '',
  },
]

// ─── PAC Stats ────────────────────────────────────────────────────────────────

export const pacStats = {
  fecId: 'C00002261',
  name: 'FEDPAC',
  raised2024: '$696,257',
  contributions2024: '$353,500',
  demShare: '54%',
  cashOnHand: '$139,881',
  demContributions: '$190,500',
  repContributions: '$163,000',
}

// ─── Global Site Stats ────────────────────────────────────────────────────────

export const globalStats = {
  lobbyingSpend2024: '$3.74M',
  retainedFirms: '6',
  boardMembers: '9',
  pillars: '8',
  pahcfDarkMoney: '$143M+',
}
