import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Jerry Cafe – Celebrate Moments That Matter',
  description: 'A cozy cafe in Vesu, Surat known for celebrations, couple-friendly vibes, and lovely decor. Perfect for birthdays and special moments.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://jerrycafe.com',
    siteName: 'Jerry Cafe',
    title: 'Jerry Cafe – Celebrate Moments That Matter',
    description: 'A cozy cafe in Vesu, Surat known for celebrations, couple-friendly vibes, and lovely decor.',
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  "name": "Jerry Cafe",
  "description": "A cozy cafe in Vesu, Surat known for celebrations and couple-friendly vibes.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Near Chai Bike, Ward 2",
    "addressLocality": "Vesu",
    "addressRegion": "Surat",
    "postalCode": "395007",
    "addressCountry": "IN"
  },
  "servesCuisine": "Cafe",
  "priceRange": "$$",
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
    "opens": "11:00",
    "closes": "23:00"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={cn(inter.variable, playfair.variable, "font-sans antialiased bg-background text-foreground")}>
        {children}
      </body>
    </html>
  )
}
