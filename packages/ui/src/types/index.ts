export type ContentPillar =
  | 'CON Laws'
  | 'Physician-Owned Hospitals'
  | 'IDR / No Surprises Act'
  | '340B'
  | 'Hospital Monopolies'
  | 'Facility Fee Arbitrage'
  | 'Nonprofit Hospital Accountability'
  | 'Physician Independence'

export interface Article {
  title: string
  deck?: string
  date: string
  pillar: ContentPillar
  slug: string
  href: string
  isPaywalled?: boolean
  excerpt?: string
}
