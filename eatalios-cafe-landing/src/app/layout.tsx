import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const businessName = "Eatalio's Cafe";
const businessDescription = "A cozy Italian cafe in Vesu–Althan, Surat, known for its pasta and relaxed ambience. Enjoy pizza, pasta and cafe drinks in a calm setting near Safal Square.";
const businessAddress = "Ground Floor, Prime Shoppers, Opposite Safal Square, Udhna–Magdalla Road, Althan, Surat, Gujarat 395007";
const rating = "4.3";
const reviewCount = "23";

export const metadata: Metadata = {
  title: `${businessName} - Italian Cafe in Vesu, Surat | Pasta & Pizza`,
  description: businessDescription,
  keywords: ["italian cafe surat", "pasta surat", "pizza vesu", "cafe althan", "italian food surat", "eatalios cafe"],
  openGraph: {
    title: `${businessName} - Italian Cafe in Vesu, Surat`,
    description: businessDescription,
    type: "website",
    locale: "en_IN",
    siteName: businessName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${businessName} - Italian Cafe in Vesu, Surat`,
    description: businessDescription,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": businessName,
  "image": "",
  "@id": "",
  "url": "",
  "telephone": "",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ground Floor, Prime Shoppers, Opposite Safal Square, Udhna–Magdalla Road, Althan",
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
    "closes": "23:30"
  },
  "servesCuisine": "Italian, Cafe",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": rating,
    "reviewCount": reviewCount
  }
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
            __html: JSON.stringify(jsonLd)
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}


