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
  title: "Blue Vanilla Patisserie & Cafe | Exquisite Desserts in Vesu, Surat",
  description: "Indulge in premium cheesecakes, brownies, and handcrafted cafe drinks at Blue Vanilla Patisserie & Cafe. Elegant ambience perfect for celebrations, coffee dates, and sweet cravings in Vesu, Surat.",
  keywords: "Blue Vanilla, patisserie Vesu Surat, cheesecakes, brownies, dessert cafe, birthday celebrations, coffee and desserts, elegant cafe, Vesu Canal Road",
  openGraph: {
    title: "Blue Vanilla Patisserie & Cafe | Exquisite Desserts in Vesu, Surat",
    description: "Indulge in premium cheesecakes, brownies, and handcrafted cafe drinks. Elegant ambience perfect for celebrations and coffee dates.",
    type: "website",
    locale: "en_IN",
    siteName: "Blue Vanilla Patisserie & Cafe",
    url: "https://bluevanilla.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Vanilla Patisserie & Cafe | Exquisite Desserts in Vesu, Surat",
    description: "Indulge in premium cheesecakes, brownies, and handcrafted cafe drinks. Elegant ambience perfect for celebrations and coffee dates.",
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
    "name": "Blue Vanilla Patisserie & Cafe",
    "description": "Popular dessert-focused cafe in Vesu, Surat, known for its elegant interiors and premium baked treats. Customers especially love the cheesecakes, brownies and frappes, making it a favourite spot for celebrations and relaxed cafe visits.",
    "url": "https://bluevanilla.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "F3, DMD Paccific, Vesu Canal Rd, near Cellestial Dreams",
      "addressLocality": "Vesu",
      "addressRegion": "Surat",
      "postalCode": "395007",
      "addressCountry": "IN"
    },
    "telephone": "091047 26042",
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
      "opens": "12:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "133"
    },
    "servesCuisine": "Patisserie & Cafe",
    "priceRange": "$$"
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


