"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Navigation } from "lucide-react";

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-10000 hover:scale-110"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80')" }} // Warm Cafe Wallpaper
            >
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
            </div>

            <div className="container relative z-10 px-4 mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-amber-400 uppercase bg-amber-400/10 border border-amber-400/20 rounded-full">
                        Surat's Finest Budget Cafe
                    </span>

                    <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
                        The Old Town Cafe – <span className="text-amber-500 underline decoration-amber-500/30 underline-offset-8 text-nowrap">Big Taste</span> on a Small Budget
                    </h1>

                    <p className="font-outfit text-base sm:text-lg md:text-xl text-white/80 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
                        Enjoy tasty food, cozy ambience, and great value in Vesu. From pink sauce pasta to burgers, everything feels worth it.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button size="lg" className="h-14 px-8 bg-amber-600 hover:bg-amber-700 text-white rounded-full text-lg shadow-xl shadow-amber-600/20 w-full sm:w-auto group" asChild>
                            <a href="https://wa.me/918460707091" target="_blank">
                                <span className="flex items-center">
                                    WhatsApp Us
                                    <motion.span
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ repeat: Infinity, duration: 1.5 }}
                                        className="ml-2"
                                    >
                                        →
                                    </motion.span>
                                </span>
                            </a>
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-8 border-white/20 bg-white/10 text-white backdrop-blur-md rounded-full text-lg hover:bg-white/20 w-full sm:w-auto" asChild>
                            <a href="#location">
                                <Navigation className="w-5 h-5 mr-2" />
                                Get Directions
                            </a>
                        </Button>
                    </div>

                    <div className="mt-12 flex items-center justify-center gap-6 text-white/60">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-amber-600 flex items-center justify-center text-[10px] font-bold">
                                    {i}
                                </div>
                            ))}
                        </div>
                        <p className="text-sm font-medium italic">"The best cafe in Surat for budget friendly food"</p>
                    </div>
                </motion.div>
            </div>

            {/* Decorative gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FDFCF0] to-transparent z-0" />
        </section>
    );
};

export default Hero;
