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
  title: "Vesu Mobile | Trusted Mobile Repair Shop in Vesu, Surat",
  description: "Expert mobile phone repairs, water damage fixing, and troubleshooting in Vesu, Surat. Reliable service with quick turnaround. Same-day fixes reported.",
  openGraph: {
    title: "Vesu Mobile | Trusted Mobile Repair Shop in Vesu, Surat",
    description: "Fast and reliable mobile solutions in Someshwar Square, Vesu. Expert technician for all phone issues.",
    type: "website",
    locale: "en_IN",
    siteName: "Vesu Mobile",
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
    "name": "Vesu Mobile",
    "description": "Vesu Mobile is a local cell phone store in Vesu, Surat, known for reliable and knowledgeable mobile repair service.",
    "url": "https://vesumobile.com", // Assuming a domain
    "telephone": "",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "53, Someshwar Square Rd, Someshwar Square, Opp. Someshwar Enclave",
      "addressLocality": "Vesu",
      "addressRegion": "Surat, Gujarat",
      "postalCode": "395007",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.1408,
      "longitude": 72.7853
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
      "opens": "09:00",
      "closes": "21:30"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "2"
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

