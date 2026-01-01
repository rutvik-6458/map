"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Highlights from "@/components/Highlights";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";

export default function Home() {
  return (
    <main className="relative flex flex-col w-full">
      <Navbar />
      <Hero />
      <Trust />
      <Highlights />
      <Services />
      <Gallery />
      <FAQ />
      <Location />
      <Footer />
      <WhatsAppCTA />
    </main>
  );
}
