import "./globals.css";
import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from 'next/font/google'
import { Header, Footer } from '@rojasreport/ui'

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '600', '700'], style: ['normal', 'italic'], variable: '--font-headline', display: 'swap' })
const sourceSans = Source_Sans_3({ subsets: ['latin'], weight: ['400', '600', '700'], variable: '--font-body', display: 'swap' })

export const metadata: Metadata = {
  title: "Physician-Owned Hospital Intelligence | The Rojas Report",
  description:
    "The definitive intelligence record on physician-owned hospitals in the United States. 265 built. 104 survive. 85 eliminated. The complete record.",
  twitter: {
    card: "summary_large_image",
    site: "@dutchrojas",
    title: "Physician-Owned Hospital Intelligence | The Rojas Report",
    description:
      "The definitive intelligence record on physician-owned hospitals in the United States. 265 built. 104 survive. 85 eliminated. The complete record.",
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
      </body>
    </html>
  );
}
