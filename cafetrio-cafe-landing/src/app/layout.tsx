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
  title: "Cafetrio | Pocket-Friendly Cafe in Vesu, Surat",
  description: "Enjoy delicious food and relaxed ambience without spending much. A cozy neighbourhood cafe in Vesu, Surat known for hospitality, taste and value. Perfect for casual meals, coffee and conversations.",
  keywords: "Cafetrio, cafe Vesu Surat, pocket-friendly cafe, burnt garlic rice, Oreo shake, budget cafe, neighbourhood cafe, casual dining Vesu",
  openGraph: {
    title: "Cafetrio | Pocket-Friendly Cafe in Vesu, Surat",
    description: "Enjoy delicious food and relaxed ambience without spending much. A cozy cafe known for hospitality, taste and value.",
    type: "website",
    locale: "en_IN",
    siteName: "Cafetrio",
    url: "https://cafetrio.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cafetrio | Pocket-Friendly Cafe in Vesu, Surat",
    description: "Enjoy delicious food and relaxed ambience without spending much. A cozy cafe known for hospitality, taste and value.",
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
    "name": "Cafetrio",
    "description": "Pocket-friendly neighbourhood cafe in Vesu, Surat, known for its delicious food, warm hospitality and inviting ambience. Popular for burnt garlic rice, Oreo shake and cafe-style comfort food.",
    "url": "https://cafetrio.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "CAFETRIO, 15, Vesu, Surat, Gujarat 395007 (Located in Digital Asset Academy)",
      "addressLocality": "Vesu",
      "addressRegion": "Surat",
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
      "opens": "11:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "47"
    },
    "servesCuisine": "Cafe",
    "priceRange": "$"
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





