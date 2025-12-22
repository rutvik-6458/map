import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BB Social - Poolside Cafe in Vesu, Surat | Great Food & Vibes",
  description: "Enjoy coffee, global food and a calm poolside ambience at BB Social. Perfect for casual outings, games and conversations. Rated 4.4★ by 141+ customers.",
  keywords: ["poolside cafe vesu", "cafe surat", "bb social", "cafe near me", "poolside dining surat", "game zone cafe"],
  openGraph: {
    title: "BB Social - Poolside Cafe in Vesu, Surat",
    description: "Enjoy coffee, global food and a calm poolside ambience. Perfect for casual outings, games and conversations.",
    type: "website",
    locale: "en_IN",
    siteName: "BB Social",
  },
  twitter: {
    card: "summary_large_image",
    title: "BB Social - Poolside Cafe in Vesu, Surat",
    description: "Enjoy coffee, global food and a calm poolside ambience. Perfect for casual outings, games and conversations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BB Social",
    "image": "",
    "@id": "",
    "url": "",
    "telephone": "+91-90811-11371",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ground Floor, BB Club Bhagban, Party Plot Building, VIP Rd, beside Highfield Ascot Mall, opp. Palm Avenue, Vesu",
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
      "closes": "00:00"
    },
    "servesCuisine": "Cafe, Global, Mexican, Thai",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.4",
      "reviewCount": "141"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessData)
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}



