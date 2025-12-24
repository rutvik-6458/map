import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cafeData } from "@/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KALON – One of the Best Cafes in Vesu, Surat | Great Coffee & Calm Vibes",
  description: "Enjoy amazing coffee, tasty food, and a relaxing ambience at KALON in Vesu, Surat. A local favourite cafe for friends, family, and coffee lovers. Rated 4.9★ by 24+ customers.",
  keywords: ["kalon cafe", "best cafe vesu", "coffee vesu surat", "cafe vesu", "white sauce pasta surat", "family cafe surat"],
  openGraph: {
    title: "KALON – One of the Best Cafes in Vesu, Surat",
    description: "Great Coffee & Calm Atmosphere. A local favourite cafe for friends, family, and coffee lovers.",
    type: "website",
    locale: "en_IN",
    siteName: "KALON",
  },
  twitter: {
    card: "summary_large_image",
    title: "KALON – One of the Best Cafes in Vesu, Surat",
    description: "Great Coffee & Calm Atmosphere. A local favourite cafe for friends, family, and coffee lovers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const formatPhoneForTel = (phone: string) => {
    if (!phone) return "";
    return phone.replace(/\s+/g, "").replace(/^0/, "+91");
  };

  const phone = formatPhoneForTel(cafeData.contact.phone);

  const businessData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": cafeData.brand.business_name,
    "image": "",
    "@id": "",
    "url": "",
    "telephone": phone ? `+91${phone.replace(/\+91/g, "")}` : "",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "F75, Goldmines Shoppers, beside Bela De More",
      "addressLocality": "Surat",
      "addressRegion": "Gujarat",
      "postalCode": "395007",
      "addressCountry": "IN"
    },
    "servesCuisine": "Cafe",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": cafeData.social_proof.rating,
      "reviewCount": cafeData.social_proof.review_count
    },
    "description": cafeData.content_blocks.about_paragraph
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessData)
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

