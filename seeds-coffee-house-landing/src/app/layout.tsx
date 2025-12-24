import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Seeds - The Coffee House | Premium Coffee & Rooftop Ambience | Vesu, Surat",
  description: "Enjoy expertly brewed coffee made with premium beans in a calm, aesthetic rooftop setting. Seeds - The Coffee House in Vesu, Surat offers high-quality coffee, expert baristas, and peaceful vibes. Open till midnight.",
  keywords: "Seeds Coffee House, coffee Vesu Surat, premium coffee beans, rooftop cafe, specialty coffee, Hazelnut Latte, Bombon Coffee, barista coffee, Vesu cafe, Surat coffee shop",
  openGraph: {
    title: "Seeds - The Coffee House | Premium Coffee & Rooftop Ambience | Vesu, Surat",
    description: "Enjoy expertly brewed coffee made with premium beans in a calm, aesthetic rooftop setting. High-quality coffee, expert baristas, and peaceful vibes.",
    type: "website",
    locale: "en_IN",
    siteName: "Seeds - The Coffee House",
    url: "https://seedscoffeehouse.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seeds - The Coffee House | Premium Coffee & Rooftop Ambience | Vesu, Surat",
    description: "Enjoy expertly brewed coffee made with premium beans in a calm, aesthetic rooftop setting.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Seeds - The Coffee House",
    "description": "A highly rated coffee spot in Vesu, Surat, known for its premium-quality beans, skilled baristas and peaceful rooftop ambience. Coffee lovers especially appreciate the rich flavours, consistent quality and welcoming service.",
    "url": "https://seedscoffeehouse.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "International Wealth Center, 312, VIP Rd, Vesu",
      "addressLocality": "Surat",
      "addressRegion": "Gujarat",
      "postalCode": "395007",
      "addressCountry": "IN"
    },
    "telephone": "099099 01944",
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
      "closes": "00:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "87"
    },
    "servesCuisine": "Coffee Shop",
    "priceRange": "₹₹",
    "menu": "https://seedscoffeehouse.com/menu"
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

