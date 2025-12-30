import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { businessData } from "../data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: `${businessData.brand.business_name} | ${businessData.brand.short_tagline_options[0]}`,
  description: businessData.content_blocks.about_paragraph,
  keywords: [
    "odd three coffee club",
    "coffee club vesu",
    "specialty coffee surat",
    "cold brew coffee vesu",
    "cafe in vesu surat",
    "coffee shop vesu",
    "specialty cafe surat",
    "coffee bar vesu",
    "crafted coffee surat",
    "barrel tonic vesu",
    "work friendly cafe vesu",
    "coffee enthusiasts surat"
  ],
  openGraph: {
    title: businessData.brand.business_name,
    description: businessData.brand.short_tagline_options[0],
    type: "website",
    locale: "en_IN",
    siteName: businessData.brand.business_name,
  },
  twitter: {
    card: "summary_large_image",
    title: businessData.brand.business_name,
    description: businessData.brand.short_tagline_options[0],
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
    "image": "https://oddthreecoffeeclub.com/hero.jpg", // Placeholder - replace with actual image
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
    "url": "https://oddthreecoffeeclub.com", // Replace with actual URL
    "telephone": businessData.contact.phone || undefined,
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "10:00", // Update with actual opening time when available
      "closes": "00:00"
    },
    "servesCuisine": "Specialty Coffee, Cold Brew, Barrel Tonic, Beverages",
    "priceRange": "₹₹",
    "starRating": {
      "@type": "Rating",
      "ratingValue": businessData.social_proof.rating,
      "reviewCount": businessData.social_proof.review_count
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
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




