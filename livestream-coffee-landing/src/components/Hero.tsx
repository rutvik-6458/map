"use client";

import { ChevronRight, ArrowRight } from "lucide-react";

export default function Hero() {
    const mapsLink = "https://www.google.com/maps/search/?api=1&query=Livestream+Coffee+Vesu+Aagam+Viviana+Surat";
    const whatsappLink = "https://wa.me/919376229229";

    return (
        <section id="hero" className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url('/assets/r49a-dishes-Livestream-Coffee-Vesu-2025-09-5.jpg')`
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center text-white space-y-6 sm:space-y-8">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-amber-800/80 backdrop-blur-md border border-amber-700/50 text-xs sm:text-sm font-semibold tracking-wide animate-fade-in">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-400 animate-pulse" />
                    <span className="whitespace-nowrap">Cheesecakes, Coffee & Good Vibes</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-serif font-black tracking-tight leading-tight px-2">
                    Coffee, Cheesecakes <br className="hidden sm:block" />
                    <span className="text-amber-400">& Conversations</span>
                </h1>

                <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-stone-100 font-medium opacity-90 leading-relaxed px-4">
                    Enjoy premium coffee and popular cheesecakes till midnight.
                    A lively cafe with great ambience and delicious food in Vesu, Surat.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4 px-4">
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-amber-800 text-white font-bold text-sm sm:text-base md:text-lg hover:bg-amber-900 transition-all shadow-xl hover:shadow-amber-900/40 active:scale-95 w-full sm:w-auto"
                    >
                        <span>Order on WhatsApp</span>
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                    </a>
                    <a
                        href={mapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-sm sm:text-base md:text-lg hover:bg-white/20 transition-all active:scale-95 w-full sm:w-auto"
                    >
                        <span>Visit Us</span>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 pt-8 sm:pt-10 md:pt-12 text-xs sm:text-sm font-bold tracking-widest uppercase opacity-80 px-4">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                        <span>4.4/5 Rating</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <span>Open till 12 AM</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        <span>Drive-Through</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
