import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Trust from "@/components/sections/Trust";
import Highlights from "@/components/sections/Highlights";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import FAQ from "@/components/sections/FAQ";
import Location from "@/components/sections/Location";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Trust />
      <Highlights />
      <Services />
      <Gallery />
      <FAQ />
      <Location />
      <Footer />

    </main>
  );
}
