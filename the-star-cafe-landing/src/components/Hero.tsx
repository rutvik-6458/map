"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, Coffee, Users, MessageCircle, MapPin } from "lucide-react";
import Image from "next/image";
import heroImage from "@/assets/The Star Cafe.jpg";

export default function Hero() {
    const phoneNumber = "063562 61212";
    const whatsappNumber = phoneNumber.replace(/\s/g, "");

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src={heroImage}
                    alt="The Star Cafe Interior"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900/60 via-amber-800/50 to-amber-700/60"></div>
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 bg-amber-600/20 text-amber-300 px-4 py-2 rounded-full border border-amber-500/30 mb-8 font-bold text-sm tracking-widest uppercase">
                        <Star size={14} className="fill-amber-300" />
                        <span>4.5★ Rating • 92 Reviews</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black text-white leading-tight mb-8 tracking-tighter">
                        A Cozy Cafe for <span className="text-amber-400">Meaningful Moments</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                        Perfect for small gatherings, coffee breaks and evening snacks. Enjoy good food in a safe and welcoming cafe.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        {whatsappNumber && (
                            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                                <button className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-green-600/30 flex items-center gap-3 transform hover:scale-105 active:scale-95 group">
                                    <MessageCircle size={24} />
                                    WhatsApp Us
                                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </a>
                        )}

                        <a href="#location">
                            <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all flex items-center gap-3 transform hover:scale-105 active:scale-95">
                                <MapPin size={24} />
                                Visit Cafe
                            </button>
                        </a>
                    </div>

                    <div className="mt-20 flex flex-wrap justify-center gap-10 items-center opacity-80">
                        <div className="flex items-center gap-2 text-white/70">
                            <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                            <span className="font-bold text-sm uppercase tracking-widest">Cozy Ambience</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/70">
                            <div className="w-2 h-2 rounded-full bg-green-400"></div>
                            <span className="font-bold text-sm uppercase tracking-widest">Small Gatherings</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/70">
                            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                            <span className="font-bold text-sm uppercase tracking-widest">Student Friendly</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
        </section>
    );
}

