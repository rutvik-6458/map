import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cafeData } from "@/data";

const inter = Inter({ subsets: ["latin"] });

const businessName = cafeData.brand.business_name;
const description = `${businessName} - ${cafeData.content_blocks.hero_subheadline_options[0]} Rated ${cafeData.social_proof.rating}★ by ${cafeData.social_proof.review_count}+ customers.`;

export const metadata: Metadata = {
  title: `${businessName} - Cozy Cafe in ${cafeData.brand.city_area} | Mocktails & Cafe Food`,
  description,
  keywords: [
    "meadows the cafe",
    "cafe in vesu",
    "mocktails surat",
    "cafe vesu surat",
    "evening cafe surat",
    "cozy cafe",
    "pina colada surat",
    "noodles cafe vesu",
  ],
  openGraph: {
    title: `${businessName} - Cozy Cafe in ${cafeData.brand.city_area}`,
    description: cafeData.content_blocks.hero_subheadline_options[0],
    type: "website",
    locale: "en_IN",
    siteName: businessName,
  },
};

const formatPhoneForTel = (phone: string) => {
  return phone.replace(/\s+/g, "").replace(/^0/, "+91");
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const phone = formatPhoneForTel(cafeData.contact.phone);
  const addressParts = cafeData.contact.address.split(",");
  const streetAddress = addressParts[0]?.trim() || "";
  const city = addressParts.find((part) => part.includes("Surat"))?.trim() || "Surat";
  const state = addressParts.find((part) => part.includes("Gujarat"))?.trim() || "Gujarat";
  const postalCode = addressParts.find((part) => /^\d{6}$/.test(part.trim()))?.trim() || "395007";

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: businessName,
              image: "",
              "@id": "",
              url: "",
              telephone: phone,
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress,
                addressLocality: city,
                addressRegion: state,
                postalCode,
                addressCountry: "IN",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "15:00",
              },
              servesCuisine: "Cafe, Indian, Chinese",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: cafeData.social_proof.rating,
                reviewCount: cafeData.social_proof.review_count,
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}





