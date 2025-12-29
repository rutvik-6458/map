"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-[85vh] min-h-[500px] sm:min-h-[600px] md:h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/hero.png')" }}
            >
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-xs sm:text-sm font-medium border border-white/20 mb-4 sm:mb-6 uppercase tracking-widest">
                        Vesu, Surat
                    </span>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-outfit font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
                        Discover Craft Coffee <br className="hidden sm:block" />
                        <span className="text-orange-200">in Vesu</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-stone-200 max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 leading-relaxed font-light px-2">
                        From hot classics to cold brews, coffee made your way. Pair your coffee with brownies, cheesecake and sweet treats.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-2">
                        <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#D4A373] text-stone-950 font-semibold rounded-full hover:bg-[#c49363] transition-all flex items-center justify-center gap-2 group shadow-xl shadow-stone-900/20 text-sm sm:text-base">
                            Explore Our Menu
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-all shadow-xl shadow-stone-900/10 text-sm sm:text-base">
                            Get Directions
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Slope/Cut */}
            {/* <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" /> */}
        </section>
    );
}
