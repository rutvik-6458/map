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
  title: "The Street Cafe by Ab's Kitchen | Pocket-Friendly Street Food | Vesu, Surat",
  description: "Enjoy budget-friendly street food like momos, peri peri fries, sandwiches and pasta at The Street Cafe by Ab's Kitchen in Vesu, Surat. Fast service, friendly staff, and affordable prices. Perfect for quick snacks, takeaway and delivery.",
  keywords: "The Street Cafe, street food Vesu Surat, budget cafe, momos, peri peri fries, sandwiches, pasta, affordable food, quick bites, takeaway, delivery, VIP Road Surat",
  openGraph: {
    title: "The Street Cafe by Ab's Kitchen | Pocket-Friendly Street Food | Vesu, Surat",
    description: "Enjoy budget-friendly street food like momos, peri peri fries, sandwiches and pasta. Fast service, friendly staff, and affordable prices.",
    type: "website",
    locale: "en_IN",
    siteName: "The Street Cafe by Ab's Kitchen",
    url: "https://thestreetcafe.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Street Cafe by Ab's Kitchen | Pocket-Friendly Street Food | Vesu, Surat",
    description: "Enjoy budget-friendly street food like momos, peri peri fries, sandwiches and pasta. Fast service, friendly staff, and affordable prices.",
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
    "name": "The Street Cafe by Ab's Kitchen",
    "description": "A budget-friendly street cafe in Vesu, Surat, offering everyday street food favourites like momos, peri peri fries, sandwiches and pasta. Customers appreciate the warm welcome from the owner and staff, fast packing for takeaway, and affordable pricing.",
    "url": "https://thestreetcafe.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "B-11, VIP Rd, Vesu",
      "addressLocality": "Surat",
      "addressRegion": "Gujarat",
      "postalCode": "395007",
      "addressCountry": "IN"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "15"
    },
    "servesCuisine": "Street Food",
    "priceRange": "₹"
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

