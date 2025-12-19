"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star, ShieldCheck, Zap, MessageCircle, MapPin } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero.png"
                    alt="Professional Mobile Repair"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full border border-blue-500/30 mb-8 font-bold text-sm tracking-widest uppercase">
                        <Star size={14} className="fill-blue-400" />
                        <span>Top Rated Mobile Service in Vesu</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black text-white leading-tight mb-8 tracking-tighter">
                        Expert <span className="text-blue-500">Mobile Repairs</span> <br />
                        Done Right In Vesu
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                        Quick, reliable, and professional solutions for all smartphone issues. From water damage to screen replacements, we handle it with precision.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-blue-600/30 flex items-center gap-3 transform hover:scale-105 active:scale-95 group">
                                <MessageCircle size={24} />
                                WhatsApp Us
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </a>

                        <a href="#location">
                            <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all flex items-center gap-3 transform hover:scale-105 active:scale-95">
                                <MapPin size={24} />
                                Visit Store
                            </button>
                        </a>
                    </div>

                    <div className="mt-20 flex flex-wrap justify-center gap-10 items-center opacity-80">
                        <div className="flex items-center gap-2 text-white/70">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span className="font-bold text-sm uppercase tracking-widest">5.0 Star Rating</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/70">
                            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            <span className="font-bold text-sm uppercase tracking-widest">Certified Technician</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/70">
                            <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                            <span className="font-bold text-sm uppercase tracking-widest">Same-Day Service</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Decorative gradient for transitions */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
        </section>
    );
}
