"use client";

import { ChevronRight, ArrowRight } from "lucide-react";

export default function Hero() {
    const mapsLink = "https://www.google.com/maps/search/?api=1&query=Livestream+Coffee+Vesu+Aagam+Viviana+Surat";
    const whatsappLink = "https://wa.me/919376229229";

    return (
        <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
                style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url('/assets/r49a-dishes-Livestream-Coffee-Vesu-2025-09-5.jpg')`
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center text-white space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-800/80 backdrop-blur-md border border-amber-700/50 text-sm font-semibold tracking-wide animate-fade-in">
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                    Cheesecakes, Coffee & Good Vibes
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black tracking-tight leading-tight">
                    Coffee, Cheesecakes <br />
                    <span className="text-amber-400">& Conversations</span>
                </h1>

                <p className="max-w-2xl mx-auto text-lg md:text-xl text-stone-100 font-medium opacity-90 leading-relaxed">
                    Enjoy premium coffee and popular cheesecakes till midnight.
                    A lively cafe with great ambience and delicious food in Vesu, Surat.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 px-8 py-4 rounded-2xl bg-amber-800 text-white font-bold text-lg hover:bg-amber-900 transition-all shadow-xl hover:shadow-amber-900/40 active:scale-95"
                    >
                        Order on WhatsApp
                        <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </a>
                    <a
                        href={mapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-lg hover:bg-white/20 transition-all active:scale-95"
                    >
                        Visit Us
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </div>

                <div className="flex items-center justify-center gap-8 pt-12 text-sm font-bold tracking-widest uppercase opacity-80">
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                        4.4/5 Rating
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        Open till 12 AM
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        Drive-Through
                    </div>
                </div>
            </div>
        </section>
    );
}
