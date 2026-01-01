import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Baking Stories (TBS) - Premium Bakery Cafe in Vesu, Surat",
  description: "Enjoy artisan bakes, cafe food, and desserts in a relaxing ambience at The Baking Stories, Vesu, Surat. From sourdough to cakes, everything is crafted with care.",
  keywords: ["Bakery Vesu", "Cake Shop Surat", "Cafe Vesu", "TBS Surat", "Artisan Bakery Surat", "Best Cakes Vesu"],
  openGraph: {
    title: "The Baking Stories (TBS) | Artisan Bakery & Cafe",
    description: "Surat's favourite destination for fresh bakes and cozy cafe vibes.",
    images: ["https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=1200"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    "name": "The Baking Stories (TBS)",
    "image": "https://images.unsplash.com/photo-1555507036-ab1f4038808a",
    "@id": "https://thebakingstories.com",
    "url": "https://thebakingstories.com",
    "telephone": "096627 14166",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "40, off VIP 2 Road, beside Kothari Granites, behind Bhagwan Mahavir College, Vesu",
      "addressLocality": "Surat",
      "postalCode": "395007",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.1326,
      "longitude": 72.7758
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "10:00",
      "closes": "23:30"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "465"
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
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
