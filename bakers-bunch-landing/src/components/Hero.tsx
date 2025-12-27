import { businessData } from "../data";
import { Button } from "./ui/button";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import heroBg from "../assets/hero.png";

export function Hero() {
    return (
        <section id="hero" className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
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
            <div className="container relative z-10 px-4 sm:px-6 text-center text-white">
                <div className="animate-fade-in-up space-y-4 sm:space-y-6 max-w-3xl mx-auto py-8 sm:py-12">
                    <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-primary/90 text-white text-xs sm:text-sm font-medium tracking-wide mb-2 sm:mb-4 animate-bounce-subtle">
                        {businessData.brand.short_tagline}
                    </span>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight drop-shadow-lg px-4">
                        {businessData.content_blocks.hero_headline}
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow-md px-4">
                        {businessData.content_blocks.hero_subheadline}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-6 sm:pt-8 px-4">
                        <Button size="lg" className="w-full sm:w-auto text-sm sm:text-base font-semibold px-6 sm:px-8 py-5 sm:py-6 rounded-full shadow-xl shadow-primary/20 hover:scale-105 transition-transform" asChild>
                            <a href={`https://wa.me/${businessData.contact.whatsapp}`} target="_blank" rel="noopener noreferrer">
                                <span className="sm:hidden">Order Now</span>
                                <span className="hidden sm:inline">Order on WhatsApp</span>
                                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                            </a>
                        </Button>

                        <Button variant="outline" size="lg" className="w-full sm:w-auto text-sm sm:text-base font-semibold px-6 sm:px-8 py-5 sm:py-6 rounded-full bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm transition-transform hover:scale-105" asChild>
                            <a href={businessData.contact.google_maps_link} target="_blank" rel="noopener noreferrer">
                                <MapPin className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                                <span className="sm:hidden">Directions</span>
                                <span className="hidden sm:inline">Visit Us</span>
                            </a>
                        </Button>
                    </div>

                    <div className="pt-8 sm:pt-10 md:pt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 opacity-80 text-xs sm:text-sm font-medium px-4">
                        <div className="flex items-center gap-2">
                            <div className="p-1 bg-green-500 rounded-full"></div>
                            <span>4.3/5 Rating</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="p-1 bg-green-500 rounded-full"></div>
                            <span className="hidden sm:inline">100% Eggless Options</span>
                            <span className="sm:hidden">Eggless Options</span>
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
