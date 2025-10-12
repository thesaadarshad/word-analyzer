import type { Metadata } from 'next'
import './globals.css'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: siteConfig.social.openGraph.type as 'website',
    locale: siteConfig.social.openGraph.locale,
    url: siteConfig.url,
  },
  twitter: {
    card: siteConfig.social.twitter.card as 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={siteConfig.branding.favicon} />
        <link rel="canonical" href={siteConfig.url} />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {children}
      </body>
    </html>
  )
}
