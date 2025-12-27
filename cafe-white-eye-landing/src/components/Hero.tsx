"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section id="hero" className="relative h-screen min-h-[500px] sm:min-h-[600px] flex items-center justify-center bg-zinc-900 text-white overflow-hidden">
            {/* Background Image Placeholder */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0 opacity-60"
                style={{
                    // Use the uploaded image if applicable, or a placeholder
                    backgroundImage: "url('/hero-bg-new.jpg')",
                    backgroundColor: "#1a1a1a"
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 z-10" />

            <div className="relative z-20 container mx-auto px-4 sm:px-6 text-center max-w-4xl pt-24 sm:pt-28 md:pt-32 lg:pt-20">
                <span className="inline-block py-1.5 px-3 sm:px-4 rounded-full bg-primary/20 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6 backdrop-blur-sm border border-primary/30">
                    📍 Vesu, Surat
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold mb-4 sm:mb-6 leading-tight text-balance px-2">
                    A Calm & Classy <br className="hidden sm:block" /> Café in Vesu
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-zinc-200 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
                    Enjoy great food, warm service and a peaceful vibe till 1 am.
                    Perfect for brunch, coffee breaks and evening hangouts.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-2">
                    <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full w-full sm:w-auto" asChild>
                        {/* WhatsApp Link - assuming phone number is WA enabled or standard WA link */}
                        <a href="https://wa.me/916356353531" target="_blank" rel="noopener noreferrer">
                            Order on WhatsApp
                        </a>
                    </Button>
                    <Button size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-full bg-white/10 border-white/20 hover:bg-white/20 text-white backdrop-blur-sm w-full sm:w-auto" asChild>
                        <a href="#menu" onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
                        }}>
                            View Menu <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 inline" />
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
