import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sky Altitude Cafe & Restro Lounge - Rooftop Dining in Vesu, Surat | Good Food, Great Views",
  description: "Enjoy delicious food with stunning rooftop views at Sky Altitude Cafe & Restro Lounge in Vesu, Surat. A popular venue for family parties, celebrations, and friends hangouts. Rated 4.4★ by 762+ customers.",
  keywords: ["rooftop cafe vesu", "sky altitude cafe", "rooftop restaurant surat", "family party venue vesu", "cafe vesu surat", "rooftop dining surat"],
  openGraph: {
    title: "Sky Altitude Cafe & Restro Lounge - Rooftop Dining in Vesu, Surat",
    description: "Dine under the sky with great food and stunning rooftop views. Perfect for family dinners, celebrations, and friends hangouts.",
    type: "website",
    locale: "en_IN",
    siteName: "Sky Altitude Cafe & Restro Lounge",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sky Altitude Cafe & Restro Lounge - Rooftop Dining in Vesu, Surat",
    description: "Dine under the sky with great food and stunning rooftop views. Perfect for family dinners, celebrations, and friends hangouts.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Sky Altitude Cafe & Restro Lounge",
    "image": "",
    "@id": "",
    "url": "",
    "telephone": "+91-84693-49116",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "6th Floor, Cannon Street 1, opposite Agam Arcade, Vesu",
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
      "closes": "23:30"
    },
    "servesCuisine": "Restaurant / Cafe & Lounge",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.4",
      "reviewCount": "762"
    },
    "description": "A well-known rooftop restaurant in Vesu, Surat, offering a spacious open-sky dining experience. Popular among families, friends, and party groups, the cafe is praised for its ambience, food quality, and service."
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessData)
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

