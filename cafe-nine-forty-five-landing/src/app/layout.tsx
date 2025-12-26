import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cafeData } from "@/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const businessName = cafeData.brand.business_name;
const tagline = cafeData.brand.short_tagline_options[0];
const address = cafeData.contact.address;
const description = cafeData.content_blocks.about_paragraph;
const rating = cafeData.social_proof.rating;
const reviewCount = cafeData.social_proof.review_count;

export const metadata: Metadata = {
  title: `${businessName} | ${tagline} | Vesu, Surat`,
  description: description.substring(0, 160),
  keywords: `cafe Vesu Surat, evening cafe, group hangouts, pickleball cafe, ${cafeData.brand.city_area}, sports cafe, evening hangout spot`,
  openGraph: {
    title: `${businessName} | ${tagline}`,
    description: description.substring(0, 160),
    type: "website",
    locale: "en_IN",
    siteName: businessName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${businessName} | ${tagline}`,
    description: description.substring(0, 160),
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
    "name": businessName,
    "description": description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address,
      "addressLocality": "Vesu",
      "addressRegion": "Surat, Gujarat",
      "postalCode": "395007",
      "addressCountry": "IN"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": rating,
      "reviewCount": reviewCount
    },
    "servesCuisine": "Cafe",
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
      "opens": "18:00"
    }
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

