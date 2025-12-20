import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apetito - Aesthetic Café in Vesu, Surat | Coffee & Comfort Food",
  description: "Enjoy coffee, pasta and comfort food in a calm, stylish setting. One of Surat's most loved modern cafés in Vesu-Bharthana area. Rated 4.6★ by 292+ customers.",
  keywords: ["cafe in vesu", "coffee shop surat", "aesthetic cafe", "pasta surat", "cafe near me"],
  openGraph: {
    title: "Apetito - Aesthetic Café in Vesu, Surat",
    description: "Enjoy coffee, pasta and comfort food in a calm, stylish setting.",
    type: "website",
    locale: "en_IN",
    siteName: "Apetito Café",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Apetito",
              "image": "",
              "@id": "",
              "url": "",
              "telephone": "+91-78020-01555",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "G/5, DMD Pacific, Vesu Canal Rd, Opp. L. P. Savani School, Bharthana",
                "addressLocality": "Surat",
                "addressRegion": "Gujarat",
                "postalCode": "395007",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 21.1702,
                "longitude": 72.8311
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
                "closes": "23:00"
              },
              "servesCuisine": "Cafe, Italian",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.6",
                "reviewCount": "292"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
