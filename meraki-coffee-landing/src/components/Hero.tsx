"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/hero.png')" }}
            >
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-medium border border-white/20 mb-6 uppercase tracking-widest">
                        Vesu, Surat
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-outfit font-bold text-white mb-6 leading-tight">
                        Discover Craft Coffee <br />
                        <span className="text-orange-200">in Vesu</span>
                    </h1>
                    <p className="text-lg md:text-xl text-stone-200 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                        From hot classics to cold brews, coffee made your way. Pair your coffee with brownies, cheesecake and sweet treats.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="w-full sm:w-auto px-8 py-4 bg-[#D4A373] text-stone-950 font-semibold rounded-full hover:bg-[#c49363] transition-all flex items-center justify-center gap-2 group shadow-xl shadow-stone-900/20">
                            Explore Our Menu
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-all shadow-xl shadow-stone-900/10">
                            Get Directions
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Slope/Cut */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
        </section>
    );
}
