import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { businessData } from "@/components/data";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: `${businessData.brand.business_name} | ${businessData.content_blocks.hero_headline_options[0]}`,
  description: businessData.content_blocks.hero_subheadline_options[0],
  openGraph: {
    title: businessData.brand.business_name,
    description: businessData.content_blocks.hero_subheadline_options[0],
    type: "website",
    locale: "en_IN",
    url: "https://letsmeetcafe.com", // Placeholder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FastFoodRestaurant",
    "name": businessData.brand.business_name,
    "image": "https://letsmeetcafe.com/og-image.jpg", // Placeholder
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
      "latitude": 21.1418, // Estimated
      "longitude": 72.7766
    },
    "url": "https://letsmeetcafe.com",
    "telephone": businessData.contact.phone,
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
        "closes": "23:30"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": businessData.social_proof.rating,
      "reviewCount": businessData.social_proof.review_count
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${outfit.variable} ${inter.variable} font-sans antialiased bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
