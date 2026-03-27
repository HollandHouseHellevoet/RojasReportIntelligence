import type { Metadata } from 'next'

const BASE_URL = 'https://fah.rojasreport.com'
const SITE_NAME = 'FAH.RojasReport.com'
const DEFAULT_DESCRIPTION =
  'The definitive public intelligence record on the Federation of American Hospitals — board dossiers, lobbying infrastructure, PAC data, and eight-pillar policy analysis.'

export function buildMetadata({
  title,
  description,
  path,
}: {
  title: string
  description?: string
  path: string
}): Metadata {
  const url = `${BASE_URL}${path}`
  const desc = description ?? DEFAULT_DESCRIPTION

  return {
    title,
    description: desc,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      title,
      description: desc,
      url,
      siteName: SITE_NAME,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: desc,
    },
  }
}

export function buildArticleMetadata({
  title,
  description,
  path,
}: {
  title: string
  description?: string
  path: string
}): Metadata {
  const base = buildMetadata({ title, description, path })
  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: 'article',
    },
  }
}

export { BASE_URL, SITE_NAME }
