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
  title: "Teaspresso Bubble Cafe | Bubble Tea, Waffles & Late-Night Vibes in Vesu, Surat",
  description: "Vesu's favourite bubble tea cafe. Enjoy customisable bubble tea, waffles and cafe treats till late night. Open till 12:30 am. 4.3★ rating with 779 reviews.",
  keywords: "bubble tea Vesu Surat, bubble tea cafe, waffles cafe, late night cafe, customisable bubble tea, milkshakes frappes, Aagam Emporio cafe",
  openGraph: {
    title: "Teaspresso Bubble Cafe | Bubble Tea, Waffles & Late-Night Vibes",
    description: "Vesu's favourite bubble tea cafe. Enjoy customisable bubble tea, waffles and cafe treats till late night. Open till 12:30 am.",
    type: "website",
    locale: "en_IN",
    siteName: "Teaspresso Bubble Cafe",
    url: "https://teaspressobubblecafe.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teaspresso Bubble Cafe | Bubble Tea, Waffles & Late-Night Vibes",
    description: "Vesu's favourite bubble tea cafe. Enjoy customisable bubble tea, waffles and cafe treats till late night.",
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
    "name": "Teaspresso Bubble Cafe",
    "description": "A popular bubble tea and waffle cafe in Vesu, Surat, loved by locals for its wide variety of bubble tea flavours and customisable options. With hundreds of reviews, friendly staff and late-night hours, it has become a go-to spot for quick bites, dessert cravings and casual hangouts with friends.",
    "url": "https://teaspressobubblecafe.com",
    "telephone": "09904181348",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "9, Aagam Emporio, University Rd, near Vatsalya Bungalows, opposite Balaji Hero",
      "addressLocality": "Vesu",
      "addressRegion": "Surat, Gujarat",
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
      "opens": "00:00",
      "closes": "00:30"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.3",
      "reviewCount": "779"
    },
    "servesCuisine": "Bubble Tea, Waffles, Cafe",
    "priceRange": "$$"
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




