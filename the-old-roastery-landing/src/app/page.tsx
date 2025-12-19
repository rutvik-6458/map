import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Trust } from "@/components/Trust";
import { Features } from "@/components/Features";
import { Menu } from "@/components/Menu";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";
import { WhatsApp } from "@/components/WhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Trust />
      <Features />
      <Menu />
      <Reviews />
      <FAQ />
      <Location />
      <Footer />
      <WhatsApp />
    </main>
  );
}
