import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bakers Bunch | Fresh Cakes & Pastries in Vesu, Surat",
  description: "Bakers Bunch is your neighbourhood bakery in Vesu, Surat offering fresh cakes, pastries, breads, and celebration treats. Order online or visit today!",
  openGraph: {
    title: "Bakers Bunch - Best Bakery in Vesu",
    description: "Delicious cakes, pastries and bakery items made for every occasion.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(outfit.className, "min-h-screen bg-background antialiased")}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Bakery",
              "name": "Bakers Bunch",
              "image": [],
              "@id": "",
              "url": "",
              "telephone": "098251 07722",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Floor G, Aagam Arcade, Vesu Main Road",
                "addressLocality": "Surat",
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
                "opens": "10:00",
                "closes": "23:00"
              },
              "priceRange": "$$"
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
