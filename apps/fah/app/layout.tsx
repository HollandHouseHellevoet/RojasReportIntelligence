import type { Metadata } from 'next'
import { Cormorant_Garamond, Source_Sans_3 } from 'next/font/google'
import './globals.css'
import { AIAgentWidget } from '../components/AIAgentWidget'

const headline = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-headline',
  display: 'swap',
})

const body = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'FAH Intelligence | The Rojas Report',
    template: '%s | FAH.RojasReport.com',
  },
  description:
    'The definitive public intelligence record on the Federation of American Hospitals -- board dossiers, lobbying infrastructure, PAC data, and eight-pillar policy analysis.',
  metadataBase: new URL('https://fah.rojasreport.com'),
  alternates: {
    canonical: 'https://fah.rojasreport.com/',
  },
  openGraph: {
    siteName: 'FAH.RojasReport.com',
    title: 'FAH Intelligence | The Rojas Report',
    description:
      'The definitive public intelligence record on the Federation of American Hospitals -- board dossiers, lobbying infrastructure, PAC data, and eight-pillar policy analysis.',
    url: 'https://fah.rojasreport.com/',
    images: [
      {
        url: 'https://fah.rojasreport.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FAH Intelligence - The Rojas Report',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAH Intelligence | The Rojas Report',
    description:
      'The definitive public intelligence record on the Federation of American Hospitals -- board dossiers, lobbying infrastructure, PAC data, and eight-pillar policy analysis.',
    images: ['https://fah.rojasreport.com/og-image.png'],
    site: '@RojasReport',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${headline.variable} ${body.variable}`}>
      <body className="font-body antialiased">
        {children}
        <AIAgentWidget />
      </body>
    </html>
  )
}
