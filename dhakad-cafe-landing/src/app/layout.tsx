import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dhakad Cafe (25Tea) - Late-Night Tea Spot in Vesu, Surat | Open Till 2 AM",
  description: "Enjoy unique tea taste, cheese chilli toast, and quick snacks till late night. Perfect stop for late-night tea lovers in Vesu, Surat. Open daily till 2 AM. Rated 5.0★ by 18+ customers.",
  keywords: ["tea cafe vesu", "late night tea surat", "cheese chilli toast", "tea shop vesu", "25tea", "dhakad cafe", "tea cafe near me"],
  openGraph: {
    title: "Dhakad Cafe (25Tea) - Late-Night Tea Spot in Vesu, Surat",
    description: "Enjoy unique tea taste, cheese chilli toast, and quick snacks till late night. Open daily till 2 AM.",
    type: "website",
    locale: "en_IN",
    siteName: "Dhakad Cafe (25Tea)",
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
              "name": "Dhakad Cafe (25Tea)",
              "image": "",
              "@id": "",
              "url": "",
              "telephone": "",
              "priceRange": "$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Udhana - Magdalla Rd, Someshwara Enclave, Vesu",
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
                "closes": "02:00"
              },
              "servesCuisine": "Tea, Snacks",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "18"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}







