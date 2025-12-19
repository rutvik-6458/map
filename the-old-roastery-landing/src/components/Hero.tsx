import { BUSINESS_DATA } from "@/data";
import { Coffee, MapPin, Send, Star, Zap, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import heroImg from "@/assets/roastery-lucknow5806-1024x683.webp";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={heroImg}
                    alt="The Old Roastery Interior"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="container mx-auto px-4 text-center relative z-10 text-white">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-widest mb-8 border border-white/20">
                    {BUSINESS_DATA.brand.category} & Aesthetic Space
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tight max-w-5xl mx-auto drop-shadow-2xl">
                    {BUSINESS_DATA.content_blocks.hero_headline}
                </h1>

                <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto font-medium drop-shadow-lg leading-relaxed">
                    {BUSINESS_DATA.content_blocks.hero_subheadline}
                </p>

                <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
                    <Button size="lg" className="rounded-full px-10 py-7 text-lg font-bold bg-primary hover:bg-primary/90 text-white shadow-2xl group transition-all" asChild>
                        <a href={`https://wa.me/${BUSINESS_DATA.contact.whatsapp}`} target="_blank" rel="noopener noreferrer">
                            Order on WhatsApp
                            <Send size={20} className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                    </Button>
                    <Button variant="outline" size="lg" className="rounded-full px-10 py-7 text-lg font-bold bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 backdrop-blur-sm transition-all" asChild>
                        <a href="#location">
                            <MapPin size={20} className="mr-3" />
                            Visit Us
                        </a>
                    </Button>
                </div>

                {/* Hero Footer Indicators */}
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-bold uppercase tracking-widest">
                    <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
                        {BUSINESS_DATA.social_proof.rating}/5 Rating
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
                        Cozy Retro Vibes
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
                        Open till 1 AM
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 hidden sm:block">
                <div className="w-6 h-10 rounded-full border-2 border-white flex justify-center pt-2">
                    <div className="w-1 h-2 bg-white rounded-full" />
                </div>
            </div>
        </section>
    );
}
