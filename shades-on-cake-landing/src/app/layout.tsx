import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shades On Cake | Designer Cakes with Perfect Taste - Vesu, Surat",
  description: "Order beautifully designed, custom-flavoured cakes from Shades On Cake, a top-rated bakery in Vesu, Surat. Specializing in birthdays, anniversaries, and designer cakes.",
  openGraph: {
    title: "Shades On Cake | Premium Designer Cakes in Surat",
    description: "Beautiful cake designs at reasonable prices. 4.9-star rated bakery in Vesu, Surat.",
    type: "website",
    locale: "en_IN",
    siteName: "Shades On Cake",
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
    "name": "Shades On Cake",
    "description": "Shades On Cake is a highly rated bakery in Vesu, Surat, known for its beautiful designer cakes and delicious flavours.",
    "image": "/logo.png", // Placeholder
    "telephone": "084695 20030",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Vastugram Apartment, VIP Road, NM Mavani Rd, Vesu",
      "addressLocality": "Surat",
      "addressRegion": "Gujarat",
      "postalCode": "395007",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "21.1416",
      "longitude": "72.7744"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "10:00",
      "closes": "22:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "83"
    },
    "priceRange": "₹₹"
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
        className={`${inter.variable} ${playfair.variable} antialiased bg-[#FFFAF5] text-[#2D241E]`}
      >
        {children}
      </body>
    </html>
  );
}

