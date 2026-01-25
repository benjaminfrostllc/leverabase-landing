import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Leverabase | Business Credit & Funding Platform',
  description: 'Build business credit and access funding for your company. Get approved for business credit cards, lines of credit, and loans with Leverabase.',
  keywords: 'business credit, business funding, business loans, credit building, business credit cards, line of credit',
  openGraph: {
    title: 'Leverabase | Business Credit & Funding Platform',
    description: 'Build business credit and access funding for your company.',
    url: 'https://leverabase.com',
    siteName: 'Leverabase',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
