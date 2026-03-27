import type { MetadataRoute } from 'next'
import { BASE_URL } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes = [
    '',
    '/board',
    '/board/dill',
    '/board/bonick',
    '/board/miller',
    '/board/tarr',
    '/board/hammons',
    '/board/hazen',
    '/board/jay',
    '/board/reddy',
    '/board/sutaria',
    '/pillars',
    '/pillars/con-laws',
    '/pillars/consolidation',
    '/pillars/340b',
    '/pillars/idr',
    '/pillars/poh-ban',
    '/pillars/site-neutral',
    '/pillars/scope',
    '/pillars/transparency',
    '/lobbying',
    '/pac',
  ]

  return staticRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : route.split('/').length <= 2 ? 0.8 : 0.6,
  }))
}
