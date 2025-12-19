import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Features from "@/components/Features";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Moonstruck Coffee | Cozy Cafe & Brunch in Vesu, Surat",
  description: "Enjoy quality coffee, desserts, and a peaceful work-friendly environment at Moonstruck Coffee, Vesu. Known for Cold Brew, Cheesecakes, and welcoming vibes.",
  openGraph: {
    title: "Moonstruck Coffee - A Peaceful Coffee Escape",
    description: "Your cozy cafe for coffee, brunch & work in Surat.",
    siteName: "Moonstruck Coffee",
    locale: "en_IN",
    type: "website",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CoffeeShop",
    "name": "Moonstruck Coffee",
    "image": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800",
    "description": "Moonstruck Coffee is a well-loved café in Vesu, Surat, known for its calm ambience, quality coffee and welcoming vibe.",
    "telephone": "096647 21479",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "SNS Atria, Besides Happy Excelencia, Opp. Jolly Party Plot, Vesu",
      "addressLocality": "Surat",
      "addressRegion": "Gujarat",
      "postalCode": "395007",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.141,
      "longitude": 72.766
    },
    "openingHours": "Mo-Su 10:00-23:00",
    "priceRange": "₹₹",
    "servesCuisine": "Coffee, Brunch, Desserts"
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <Trust />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="menu">
        <Menu />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="location">
        <Location />
      </div>
      <Footer />
    </main>
  );
}
