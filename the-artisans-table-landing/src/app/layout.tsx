import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cafeData } from "@/data";

const inter = Inter({ subsets: ["latin"] });

const businessName = cafeData.brand.business_name;
const description = `${businessName} - ${cafeData.content_blocks.hero_subheadline_options[0]} Rated ${cafeData.social_proof.rating}★ by ${cafeData.social_proof.review_count}+ customers.`;

export const metadata: Metadata = {
  title: `${businessName} - ${cafeData.brand.category} in ${cafeData.brand.city_area} | Late-Night Cafe & Specialty Coffee`,
  description,
  keywords: [
    "the artisan's table",
    "artisan's table cafe",
    "cafe in vesu surat",
    "late night cafe surat",
    "specialty coffee vesu",
    "vietnamese coffee surat",
    "iced bombon surat",
    "elegant cafe vesu",
    "modern cafe surat",
    "cafe till 1 am",
    "outdoor seating cafe vesu",
  ],
  openGraph: {
    title: `${businessName} - ${cafeData.brand.category} in ${cafeData.brand.city_area}`,
    description: cafeData.content_blocks.hero_subheadline_options[0],
    type: "website",
    locale: "en_IN",
    siteName: businessName,
  },
  twitter: {
    card: "summary_large_image",
    title: `${businessName} - ${cafeData.brand.category}`,
    description: cafeData.content_blocks.hero_subheadline_options[0],
  },
};

const formatPhoneForTel = (phone: string) => {
  if (!phone) return "";
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: businessName,
    image: "",
    "@id": "",
    url: "",
    ...(phone && { telephone: phone }),
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
      opens: "00:00",
      closes: "01:00",
    },
    servesCuisine: "Cafe, Specialty Coffee, Late-Night Dining",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: cafeData.social_proof.rating,
      reviewCount: cafeData.social_proof.review_count,
    },
    ...(cafeData.contact.google_maps_link && {
      geo: {
        "@type": "GeoCoordinates",
      },
    }),
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}




