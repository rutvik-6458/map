import type { Metadata } from "next";
import { Inter, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "The Old Town Cafe | Budget-Friendly Cafe in Vesu, Surat",
  description: "The Old Town Cafe in Vesu, Surat offers delicious food with cozy vibes at pocket-friendly prices. Known for our signature pink sauce pasta and burgers.",
  keywords: "cafe in Vesu, budget cafe Surat, The Old Town Cafe, pink sauce pasta Surat, cozy cafe Vesu",
  openGraph: {
    title: "The Old Town Cafe - Big Taste on a Small Budget",
    description: "Enjoy tasty food, cozy ambience, and great value in Vesu, Surat.",
    type: "website",
    locale: "en_IN",
    url: "https://theoldtowncafe.vercel.app", // Placeholder
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
    "name": "The Old Town Cafe",
    "image": "https://theoldtowncafe.vercel.app/hero-bg.jpg", // Placeholder
    "@id": "",
    "url": "https://theoldtowncafe.vercel.app",
    "telephone": "084607 07091",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Times Corner, G-19, near Ambrosia, Vesu",
      "addressLocality": "Surat",
      "postalCode": "395007",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.1396, // Approximate for Vesu
      "longitude": 72.7744
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
      "opens": "11:00",
      "closes": "23:00"
    },
    "priceRange": "$"
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable} ${playfair.variable} font-sans antialiased bg-[#FDFCF0] text-slate-900`}>
        {children}
      </body>
    </html>
  );
}
