import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Features from "@/components/Features";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CoffeeShop",
    "name": "Livestream Coffee Vesu",
    "image": "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800",
    "@id": "https://livestream-coffee-vesu.com",
    "url": "https://livestream-coffee-vesu.com",
    "telephone": "093762 29229",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "C-203, Aagam Viviana, Opp. Florence, Vesu",
      "addressLocality": "Surat",
      "postalCode": "395007",
      "addressRegion": "Gujarat",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.1466,
      "longitude": 72.7686
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
      "closes": "00:00"
    },
    "priceRange": "₹₹",
    "servesCuisine": "Coffee, Desserts, Cheesecakes"
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />
      <Hero />
      <Trust />
      <Features />
      <Menu />
      <Gallery />
      <FAQ />
      <Location />
      <Footer />
    </main>
  );
}
