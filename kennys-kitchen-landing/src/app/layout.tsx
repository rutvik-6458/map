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
  title: "Kenny's Kitchen | Comfort Food with a Creative Twist | Vesu, Surat",
  description: "Enjoy unique fusion dishes like Pavbhaji Pie, Irish Coffee, and Peri Peri Fries in a relaxed cafe setting. Kenny's Kitchen in Vesu, Surat offers great taste, friendly service, and affordable prices. Open daily till midnight.",
  keywords: "Kenny's Kitchen, cafe Vesu Surat, Pavbhaji Pie, Irish Coffee, Peri Peri Fries, comfort food, fusion cafe, affordable cafe, VIP Road Surat, cafe dining",
  openGraph: {
    title: "Kenny's Kitchen | Comfort Food with a Creative Twist | Vesu, Surat",
    description: "Enjoy unique fusion dishes like Pavbhaji Pie, Irish Coffee, and Peri Peri Fries in a relaxed cafe setting. Great taste, friendly service, and affordable prices.",
    type: "website",
    locale: "en_IN",
    siteName: "Kenny's Kitchen",
    url: "https://kennyskitchen.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenny's Kitchen | Comfort Food with a Creative Twist | Vesu, Surat",
    description: "Enjoy unique fusion dishes like Pavbhaji Pie, Irish Coffee, and Peri Peri Fries in a relaxed cafe setting.",
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
    "name": "Kenny's Kitchen",
    "description": "A well-loved cafe in Vesu, Surat, known for its relaxed ambience, friendly service and creative comfort food. From unique fusion dishes like Pavbhaji Pie to classic cafe favourites and coffee.",
    "url": "https://kennyskitchen.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "New VIP Rd, Vesu",
      "addressLocality": "Surat",
      "addressRegion": "Gujarat",
      "postalCode": "395007",
      "addressCountry": "IN"
    },
    "telephone": "0261 356 4038",
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
      "ratingValue": "4.6",
      "reviewCount": "157"
    },
    "servesCuisine": "Cafe",
    "priceRange": "₹200-400",
    "menu": "https://kennyskitchen.com/menu"
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

