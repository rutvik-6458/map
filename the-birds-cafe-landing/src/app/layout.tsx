import type { Metadata } from "next";
import { Outfit, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-outfit",
    display: "swap",
});

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    variable: "--font-cormorant",
    weight: ["300", "400", "500", "600", "700"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "The Birds Cafe | Nature-Inspired Cafe in Vesu, Surat",
    description: "The Birds Cafe is a highly rated cafe in Vesu, Surat, known for its nature-inspired ambience, delicious food, and warm service. Open till 1:00 am.",
    keywords: ["Cafe in Vesu", "Best Cafe in Surat", "Late-night Cafe Surat", "Nature themed Cafe", "The Birds Cafe Surat"],
    openGraph: {
        title: "The Birds Cafe | Nature-Inspired Cafe in Vesu, Surat",
        description: "Enjoy great food in a nature-inspired, peaceful setting. Perfect for late-night hangouts and relaxed evenings.",
        type: "website",
        locale: "en_IN",
        siteName: "The Birds Cafe",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CafeOrRestaurant",
        "name": "The Birds Cafe",
        "image": "https://thebirdscafe.com/hero.jpg", // Placeholder
        "@id": "",
        "url": "https://thebirdscafe.com",
        "telephone": "",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Beside Pooja Abhishek Residency, opp. Central Market, Vesu",
            "addressLocality": "Surat",
            "postalCode": "395007",
            "addressRegion": "Gujarat",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 21.139, // Approximate
            "longitude": 72.775
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
            "opens": "11:00",
            "closes": "01:00"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "29"
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
            <body className={`${outfit.variable} ${cormorant.variable} antialiased bg-nature-50 text-nature-950`}>
                {children}
            </body>
        </html>
    );
}
