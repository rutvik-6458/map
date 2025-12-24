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
  title: "The Star Cafe | Cozy Cafe in Vesu, Surat | Small Gatherings & Celebrations",
  description: "A cozy neighborhood cafe in Vesu, Surat. Perfect for small gatherings, celebrations, and casual meetups. Enjoy tasty food, mojitos, peri peri fries, and great coffee in a warm, safe environment.",
  keywords: "cafe Vesu Surat, small gatherings cafe, cozy cafe, student cafe, mojito, peri peri fries, tea coffee, VIP Road cafe",
  openGraph: {
    title: "The Star Cafe | Cozy Cafe in Vesu, Surat",
    description: "A cozy neighborhood cafe perfect for small gatherings, celebrations, and casual meetups. Tasty food in a warm, safe space.",
    type: "website",
    locale: "en_IN",
    siteName: "The Star Cafe",
    url: "https://thestarcafe.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Star Cafe | Cozy Cafe in Vesu, Surat",
    description: "A cozy neighborhood cafe perfect for small gatherings and celebrations.",
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
    "name": "The Star Cafe",
    "description": "A cozy neighborhood cafe in Vesu, Surat, known for its warm ambience, tasty food and polite service. Perfect for small gatherings, students, and casual celebrations.",
    "url": "https://thestarcafe.com",
    "telephone": "06356261212",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "G-47, J9 High Street, Near L. P. Savani School, Canal Road, VIP Rd",
      "addressLocality": "Vesu",
      "addressRegion": "Surat, Gujarat",
      "postalCode": "395007",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.1408,
      "longitude": 72.7853
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
      "opens": "09:00",
      "closes": "22:45"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "92"
    },
    "servesCuisine": "Cafe",
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


