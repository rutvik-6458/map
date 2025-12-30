import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Driftt Cafe | Premium Coffee & Cafe Dining in Vesu, Surat",
  description: "Enjoy premium coffee, sandwiches, pizzas and sizzlers in a calm cafe ambience. Driftt Cafe in Vesu, Surat offers quality food with generous portions. Open daily till 11 pm.",
  keywords: "Driftt Cafe, coffee shop Vesu Surat, premium cafe, cappuccino, sandwiches, pizzas, sizzler, cafe dining, Vesu Surat cafe",
  openGraph: {
    title: "Driftt Cafe | Premium Coffee & Cafe Dining in Vesu, Surat",
    description: "Enjoy premium coffee, sandwiches, pizzas and sizzlers in a calm cafe ambience. Quality food with generous portions.",
    type: "website",
    locale: "en_IN",
    siteName: "Driftt Cafe",
    url: "https://drifttcafe.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Driftt Cafe | Premium Coffee & Cafe Dining in Vesu, Surat",
    description: "Enjoy premium coffee, sandwiches, pizzas and sizzlers in a calm cafe ambience.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Driftt Cafe",
    "description": "Premium coffee shop in Vesu, Surat, known for its calm ambience and quality cafe food. Visitors enjoy coffee, shakes, sandwiches and pizzas in a relaxed setting.",
    "url": "https://drifttcafe.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Vesu",
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
      "closes": "23:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.2",
      "reviewCount": "39"
    },
    "servesCuisine": "Cafe",
    "priceRange": "$$$"
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}





