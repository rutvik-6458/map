import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SaladO Cafe - Healthy Bites Made Delicious | Vesu, Surat",
  description: "Enjoy wholesome salads, wraps and healthy bowls made fresh. Perfect place for clean eating and balanced meals. Rated 4.8★ by 62+ customers in Vesu, Surat.",
  keywords: ["healthy cafe surat", "salad cafe vesu", "healthy food surat", "nutritious meals", "fresh salads", "healthy wraps", "cafe near me"],
  openGraph: {
    title: "SaladO Cafe - Healthy Bites Made Delicious",
    description: "Enjoy wholesome salads, wraps and healthy bowls made fresh. Perfect place for clean eating and balanced meals.",
    type: "website",
    locale: "en_IN",
    siteName: "SaladO Cafe",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const phoneNumber = "08347552200";
  const formattedPhone = `+91${phoneNumber.replace(/\s/g, "")}`;

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "SaladO Cafe",
              "image": "",
              "@id": "",
              "url": "",
              "telephone": formattedPhone,
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "G5, Ground Floor, Cannon Street, opposite Aagam Shopping Center, near Jolly Residency",
                "addressLocality": "Vesu, Surat",
                "addressRegion": "Gujarat",
                "postalCode": "395007",
                "addressCountry": "IN"
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
                "closes": "00:00"
              },
              "servesCuisine": "Healthy Cafe, Salads, Wraps",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "62"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}



