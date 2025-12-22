import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { businessData } from "../data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: `${businessData.brand.business_name} | ${businessData.brand.short_tagline_options[0]}`,
  description: businessData.content_blocks.about_paragraph,
  keywords: ["pokket cafe", "cafe in vesu", "best cafe surat", "cheese burst pizza", "budget cafe surat", "cafe atria"],
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
    "image": "https://pokketcafe.com/hero.jpg", // Placeholder - replace with actual image
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
    "url": "https://pokketcafe.com", // Replace with actual URL
    "telephone": businessData.contact.phone,
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "11:00", // Update with actual opening time
      "closes": "23:00"
    },
    "servesCuisine": "Italian, Pizza, Pasta, Snacks, Beverages",
    "priceRange": "$$",
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


