import "./globals.css";
import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from 'next/font/google'
import { Header, Footer } from '@rojasreport/ui'
import { AIAgentWidget } from '../components/AIAgentWidget'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-headline',
  display: 'swap'
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-body',
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Physician-Owned Hospital Intelligence | The Rojas Report",
  description:
    "The definitive intelligence record on physician-owned hospitals in the United States. 265 built. 104 survive. 85 eliminated. The complete record.",
  metadataBase: new URL('https://poh.rojasreport.com'),
  alternates: {
    canonical: 'https://poh.rojasreport.com/',
  },
  openGraph: {
    title: "Physician-Owned Hospital Intelligence | The Rojas Report",
    description:
      "The definitive intelligence record on physician-owned hospitals in the United States. 265 built. 104 survive. 85 eliminated. The complete record.",
    url: 'https://poh.rojasreport.com/',
    siteName: 'POH.RojasReport.com',
    images: [
      {
        url: 'https://poh.rojasreport.com/poh-og-image.png',
        width: 1200,
        height: 630,
        alt: 'Physician-Owned Hospital Intelligence - The Rojas Report',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: "summary_large_image",
    site: "@dutchrojas",
    title: "Physician-Owned Hospital Intelligence | The Rojas Report",
    description:
      "The definitive intelligence record on physician-owned hospitals in the United States. 265 built. 104 survive. 85 eliminated. The complete record.",
    images: ['https://poh.rojasreport.com/poh-og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${sourceSans.variable}`}>
      <body className="bg-bg-body text-text-primary font-body antialiased">
        <Header
          siteName="POH Intelligence"
          siteTagline="Physician-Owned Hospitals"
          ctaLabel="Access Intelligence"
          subscribeHref="https://read.rojasreport.com"
          links={[
            { label: 'States', href: '/states' },
            { label: 'Investigation', href: '/investigation' },
            { label: 'Evidence', href: '/evidence' },
            { label: 'Data Explorer', href: '/data-explorer' },
            { label: 'About', href: '/about' },
          ]}
        />
        <main>{children}</main>
        <Footer />
        <AIAgentWidget />
      </body>
    </html>
  );
}
