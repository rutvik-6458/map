import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { businessData } from "../data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: `${businessData.brand.business_name} | ${businessData.brand.short_tagline_options[0]}`,
  description: businessData.content_blocks.about_paragraph,
  keywords: ["cafe in vesu", "best cafe surat", "aesthetic cafe", "pink sauce pasta surat", "koe the kafe"],
  openGraph: {
    title: businessData.brand.business_name,
    description: businessData.brand.short_tagline_options[1],
    type: "website",
    locale: "en_IN",
    siteName: businessData.brand.business_name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "name": businessData.brand.business_name,
    "image": "https://koethekafe.com/hero.jpg", // Placeholder
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessData.contact.address,
      "addressLocality": "Surat",
      "addressRegion": "Gujarat",
      "postalCode": "395007",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.1415, // Approximate for Vesu
      "longitude": 72.7712
    },
    "url": "https://koethekafe.com",
    "telephone": businessData.contact.phone,
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "11:00",
      "closes": "23:30"
    },
    "servesCuisine": "Italian, Quick Bites, Coffee",
    "starRating": {
      "@type": "Rating",
      "ratingValue": businessData.social_proof.rating,
      "reviewCount": businessData.social_proof.review_count
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}


