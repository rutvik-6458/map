import { businessData } from "../data";
import { Button } from "./ui/button";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import heroBg from "../assets/hero.png";

export function Hero() {
    return (
        <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBg.src || heroBg}
                    alt="Delicious Bakery Spread"
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
            </div>

            {/* Content */}
            <div className="container relative z-10 px-4 text-center text-white">
                <div className="animate-fade-in-up space-y-6 max-w-3xl mx-auto">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/90 text-white text-sm font-medium tracking-wide mb-4 animate-bounce-subtle">
                        {businessData.brand.short_tagline}
                    </span>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-tight drop-shadow-lg">
                        {businessData.content_blocks.hero_headline}
                    </h1>

                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                        {businessData.content_blocks.hero_subheadline}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                        <Button size="lg" className="w-full sm:w-auto text-base font-semibold px-8 py-6 rounded-full shadow-xl shadow-primary/20 hover:scale-105 transition-transform" asChild>
                            <a href={`https://wa.me/${businessData.contact.whatsapp}`} target="_blank" rel="noopener noreferrer">
                                Order on WhatsApp <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                        </Button>

                        <Button variant="outline" size="lg" className="w-full sm:w-auto text-base font-semibold px-8 py-6 rounded-full bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm transition-transform hover:scale-105" asChild>
                            <a href={businessData.contact.google_maps_link} target="_blank" rel="noopener noreferrer">
                                <MapPin className="mr-2 h-5 w-5" /> Visit Us
                            </a>
                        </Button>
                    </div>

                    <div className="pt-12 flex items-center justify-center gap-8 opacity-80 text-sm font-medium">
                        <div className="flex items-center gap-2">
                            <div className="p-1 bg-green-500 rounded-full"></div>
                            <span>4.3/5 Rating</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="p-1 bg-green-500 rounded-full"></div>
                            <span>100% Eggless Options</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="p-1 bg-green-500 rounded-full"></div>
                            <span>Fresh Daily</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
