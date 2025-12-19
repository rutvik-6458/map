import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Livestream Coffee Vesu | Premium Cheesecakes & Coffee in Surat",
  description: "Enjoy the best cheesecakes and specialty coffee at Livestream Coffee Vesu. A lively coffee lounge in Surat with a great ambience, drive-through, and delivery.",
  keywords: "coffee shop Vesu, cheesecake Surat, late night coffee Surat, Livestream Coffee Vesu, coffee lounge Surat",
  openGraph: {
    title: "Livestream Coffee Vesu | Premium Cheesecakes & Coffee",
    description: "Your go-to spot for coffee, cheesecakes and good vibes in Vesu, Surat.",
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
      <body className={`${outfit.variable} ${playfair.variable} font-sans antialiased bg-stone-50 text-stone-900`}>
        {children}
      </body>
    </html>
  );
}
