import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { BUSINESS_DATA } from "@/data";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${BUSINESS_DATA.brand.business_name} | Aesthetic Cafe in Vesu, Surat`,
  description: BUSINESS_DATA.content_blocks.hero_subheadline,
  openGraph: {
    title: BUSINESS_DATA.brand.business_name,
    description: BUSINESS_DATA.content_blocks.hero_subheadline,
    type: "website",
    locale: "en_IN",
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
    "name": BUSINESS_DATA.brand.business_name,
    "image": "https://images.unsplash.com/photo-1541167760496-16295558ad5c",
    "@id": "",
    "url": "https://theoldroastery.com",
    "telephone": BUSINESS_DATA.contact.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_DATA.contact.address,
      "addressLocality": "Surat",
      "postalCode": "395007",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.135,
      "longitude": 72.766
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
      "opens": "10:00",
      "closes": "01:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": BUSINESS_DATA.social_proof.rating,
      "reviewCount": BUSINESS_DATA.social_proof.review_count
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
      <body className={`${outfit.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
