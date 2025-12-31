import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Trust from "@/components/Trust";
import Features from "@/components/Features";
import MenuHighlights from "@/components/MenuHighlights";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <Trust />
            <Features />
            <MenuHighlights />
            <Gallery />
            <FAQ />
            <Location />
            <Footer />
        </main>
    );
}
