import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { DATA } from '@/lib/data'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-heading' })

export const metadata: Metadata = {
  title: `${DATA.brand.business_name} | ${DATA.brand.short_tagline_options[0]}`,
  description: DATA.content_blocks.hero_subheadline_options[0],
  openGraph: {
    title: DATA.brand.business_name,
    description: DATA.content_blocks.hero_subheadline_options[0],
    type: 'website',
    locale: 'en_IN',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "name": DATA.brand.business_name,
    "description": DATA.content_blocks.about_paragraph,
    "telephone": DATA.contact.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": DATA.contact.address,
      "addressLocality": "Surat",
      "addressRegion": "Gujarat",
      "postalCode": "395007",
      "addressCountry": "IN"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "00:00"
    },
    "servesCuisine": "Cafe, Italian, Fast Food",
    "priceRange": "$$"
  }

  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable,
        outfit.variable
      )}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
