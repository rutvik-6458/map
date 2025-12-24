import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rasta Street Cafe – VIP Road | Casual Cafe in Vesu, Surat | Coffee & Street-Style Bites",
  description: "A casual neighborhood cafe in Vesu, Surat serving coffee, hot chocolate, and street-style comfort food. Located at Ambrosia Business Hub on VIP Road. Rated 4.2★ by 343+ customers. Drive-through available.",
  keywords: ["cafe in vesu", "coffee shop surat", "rasta street cafe", "cafe vip road", "hot chocolate surat", "garlic burnt rice", "cafe near me", "casual cafe surat"],
  openGraph: {
    title: "Rasta Street Cafe – VIP Road | Casual Cafe in Vesu, Surat",
    description: "A casual neighborhood cafe serving coffee, hot chocolate, and street-style comfort food. Located at Ambrosia Business Hub on VIP Road.",
    type: "website",
    locale: "en_IN",
    siteName: "Rasta Street Cafe – VIP Road",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rasta Street Cafe – VIP Road | Casual Cafe in Vesu, Surat",
    description: "A casual neighborhood cafe serving coffee, hot chocolate, and street-style comfort food.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Format phone number for tel: link (remove spaces and ensure +91 prefix)
  const phoneNumber = "09327639226";
  const telLink = `+91${phoneNumber.replace(/\D/g, "")}`;

  // Extract address components for JSON-LD
  const address = {
    streetAddress: "G-47, Ambrosia Business Hub, VIP Rd, Vesu",
    addressLocality: "Surat",
    addressRegion: "Gujarat",
    postalCode: "395007",
    addressCountry: "IN",
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Rasta Street Cafe – VIP Road",
    "image": "",
    "@id": "",
    "url": "",
    "telephone": telLink,
    "priceRange": "$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.streetAddress,
      "addressLocality": address.addressLocality,
      "addressRegion": address.addressRegion,
      "postalCode": address.postalCode,
      "addressCountry": address.addressCountry,
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.1702,
      "longitude": 72.8311,
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
        "Sunday",
      ],
      "opens": "11:30",
    },
    "servesCuisine": "Cafe, Street Food",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.2",
      "reviewCount": "343",
    },
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}




