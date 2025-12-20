import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "Cafe White Eye | Calm & Classy Cafe in Vesu, Surat",
  description: "Visit Cafe White Eye in Vesu, Surat for a calm ambience, signature Spanish Latte, and late-night vibes. Open till 1 am.",
  openGraph: {
    title: "Cafe White Eye | Calm & Classy Cafe in Vesu",
    description: "Your go-to spot for brunch, coffee, and late-night hangouts in Vesu. Enjoy our beautiful ambience and tasty food.",
    type: "website",
    locale: "en_IN",
  },
  other: {
    "application-ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CafeOrCoffeeShop",
      "name": "Cafe White Eye",
      "image": "",
      "@id": "",
      "url": "https://cafewhiteeye.com",
      "telephone": "063563 53531",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "International Finance Center, 206, VIP Rd, Vesu",
        "addressLocality": "Surat",
        "addressRegion": "Gujarat",
        "postalCode": "395007",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 21.1418,
        "longitude": 72.7709
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
      "servesCuisine": "Cafe, Comfort Food",
      "priceRange": "$$"
    })
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className={`${outfit.variable} ${playfair.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
