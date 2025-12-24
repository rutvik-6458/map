"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, MessageCircle, MapPin } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    const phoneNumber = "099041 81348";
    const whatsappNumber = phoneNumber.replace(/\s/g, "");

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero.jpg"
                    alt="Teaspresso Bubble Cafe"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                    unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 via-purple-600/15 to-pink-500/20"></div>
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 bg-pink-600/20 text-pink-200 px-4 py-2 rounded-full border border-pink-400/30 mb-8 font-bold text-sm tracking-widest uppercase">
                        <Star size={14} className="fill-pink-200" />
                        <span>4.3★ Rating • 779 Reviews</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black text-white leading-tight mb-8 tracking-tighter">
                        Vesu's Favourite <span className="text-pink-200">Bubble Tea Cafe</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                        Enjoy customisable bubble tea, waffles and cafe treats till late night.
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
                            <div className="w-2 h-2 rounded-full bg-pink-300"></div>
                            <span className="font-bold text-sm uppercase tracking-widest">Bubble Tea</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/70">
                            <div className="w-2 h-2 rounded-full bg-purple-300"></div>
                            <span className="font-bold text-sm uppercase tracking-widest">Waffles</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/70">
                            <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                            <span className="font-bold text-sm uppercase tracking-widest">Open Till 12:30 AM</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

