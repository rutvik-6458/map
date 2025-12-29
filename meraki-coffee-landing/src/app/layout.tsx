import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meraki The Coffee House | Best Coffee Shop in Vesu, Surat",
  description: "Discover craft coffee and sweet treats at Meraki Speciality Coffee. Located in Vesu, Surat. Wide range of cold brews, cappuccinos, and desserts. Relaxed ambience for casual meetings.",
  openGraph: {
    title: "Meraki The Coffee House | Craft Coffee & Sweet Treats",
    description: "Your everyday coffee escape in Vesu, Surat. Speciality coffee, desserts, and a modern vibe.",
    type: "website",
    locale: "en_IN",
    siteName: "Meraki The Coffee House",
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
    "name": "Meraki The Coffee House",
    "image": "https://meraki-coffee.com/hero.png", // Replace with real URL later
    "description": "Meraki The Coffee House is a popular coffee shop in Vesu, Surat, known for its wide range of hot and cold coffee creations.",
    "url": "https://meraki-coffee.com",
    "telephone": "097377 94366",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "SNS Platina, 108, Vesu Main Road, near Reliance Market, Someshwara Enclave, Vesu",
      "addressLocality": "Surat",
      "addressRegion": "Gujarat",
      "postalCode": "395007",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.1415, // Approximate for Vesu SNS Platina
      "longitude": 72.7840
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
      "opens": "07:00", // Estimating based on "daily"
      "closes": "22:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "2169"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${outfit.variable} ${inter.variable} antialiased font-inter`}>
        {children}
      </body>
    </html>
  );
}
