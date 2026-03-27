import type { Metadata } from 'next'
import { Cormorant_Garamond, Source_Sans_3 } from 'next/font/google'
import { Header, Footer } from '@rojasreport/ui'
import { AIAgentWidget } from '../components/AIAgentWidget'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-headline',
  display: 'swap',
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://rojasreport.com'),
  title: {
    default: 'The Rojas Report',
    template: '%s | The Rojas Report',
  },
  description:
    "The interesting thing about the American healthcare cartel is that it doesn't hide. It files with the FEC. It submits LDA disclosures. It publishes 990s. We read them.",
  openGraph: {
    type: 'website',
    siteName: 'The Rojas Report',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@DutchRojas',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://rojasreport.com/#organization',
      name: 'The Rojas Report',
      url: 'https://rojasreport.com',
      description:
        'Independent healthcare media. No advertisers. No hospital money. No pharmaceutical sponsors.',
      founder: {
        '@type': 'Person',
        name: 'Dutch Rojas',
      },
      sameAs: ['https://x.com/DutchRojas'],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://rojasreport.com/#website',
      url: 'https://rojasreport.com',
      name: 'The Rojas Report',
      publisher: { '@id': 'https://rojasreport.com/#organization' },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${sourceSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-navy min-h-screen flex flex-col">
        <Header
          links={[
            { label: 'POH Intelligence', href: 'https://poh.rojasreport.com', isExternal: true },
            { label: 'FAH Intelligence', href: 'https://fah.rojasreport.com', isExternal: true },
            { label: 'About', href: '/about' },
          ]}
        />
        {children}
        <Footer />
        <AIAgentWidget />
      </body>
    </html>
  )
}
