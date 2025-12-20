import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Features from "@/components/Features";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Location from "@/components/Location";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Trust />
      <Features />
      <Menu />
      <Gallery />
      <FAQ />
      <Location />
    </main>
  );
}
