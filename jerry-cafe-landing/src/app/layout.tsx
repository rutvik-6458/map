import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Jerry Cafe - A Cozy Cafe for Couples & Celebrations in Vesu, Surat",
  description: "Celebrate your special moments at Jerry Cafe. Known for beautiful decorations, privacy for couples, and a memorable cafe experience in Vesu, Surat.",
  openGraph: {
    title: "Jerry Cafe - Celebrate Moments That Matter",
    description: "A cozy cafe in Vesu known for celebrations and couple-friendly vibes. Perfect for birthdays, special days, and quality time.",
    type: "website",
    locale: "en_IN",
    siteName: "Jerry Cafe",
  },
  keywords: ["Cafe in Vesu", "Couple friendly cafe Surat", "Birthday celebration cafe Surat", "Best cafe for decorations Surat", "Jerry Cafe Surat"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Cafe",
    "name": "Jerry Cafe",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Near Chai Bike, Ward 2, Vesu",
      "addressLocality": "Surat",
      "addressRegion": "Gujarat",
      "postalCode": "395007",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "21.1415",
      "longitude": "72.7758"
    },
    "url": "https://jerry-cafe-landing.vercel.app", // Placeholder
    "telephone": "",
    "openingHoursSpecification": [
      {
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
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "42"
    },
    "priceRange": "$$"
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
