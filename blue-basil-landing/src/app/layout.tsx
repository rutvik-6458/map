import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
    title: "Blue Basil – Top Multicuisine Family Restaurant in Vesu, Surat",
    description: "Enjoy premium North Indian and Chinese cuisine at Blue Basil. A top-rated family restaurant in Magdalla-Vesu with 2,100+ reviews. Perfect for family dining and celebrations.",
    openGraph: {
        title: "Blue Basil – Popular Family Restaurant in Surat",
        description: "North Indian, Chinese, and multicuisine meals in a relaxed setting. Best for family dining and group celebrations.",
        type: "website",
        locale: "en_IN",
        url: "https://bluebasil.in", // Placeholder URL
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Blue Basil Restaurant Surat",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "name": "Blue Basil",
        "image": "https://bluebasil.in/logo.png",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "GF/8-12, Aakash Retail, Opp. Safal Square, NM Mavani Rd, Magdalla",
            "addressLocality": "Surat",
            "addressRegion": "Gujarat",
            "postalCode": "395007",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "21.1444", // Needs precise check or placeholder
            "longitude": "72.7744"
        },
        "url": "https://bluebasil.in",
        "telephone": "+917284890007",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "11:00",
                "closes": "15:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "18:00",
                "closes": "23:00"
            }
        ],
        "servesCuisine": ["North Indian", "Chinese"],
        "starRating": {
            "@type": "Rating",
            "ratingValue": "4.2",
            "reviewCount": "2113"
        }
    };

    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={`${inter.variable} ${outfit.variable} font-sans antialiased text-slate-900`}>
                {children}
            </body>
        </html>
    );
}
