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
  return (
    <main className="min-h-screen bg-white selection:bg-[#D4A373] selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Social Proof / Trust Section */}
      <Trust />

      {/* Highlights / Features Section */}
      <Features />

      {/* Signature Menu Section */}
      <Menu />

      {/* Gallery Section */}
      <Gallery />

      {/* FAQ Section */}
      <FAQ />

      {/* Location Section */}
      <Location />

      <Footer />
    </main>
  );
}
