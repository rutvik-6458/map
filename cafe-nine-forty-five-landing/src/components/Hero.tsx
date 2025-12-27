"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, MapPin, Users } from "lucide-react";
import Image from "next/image";
import heroImage from "@/assets/Cafe Nine Forty Five.jpg";
import { cafeData } from "@/data";

export default function Hero() {
    const headline = cafeData.content_blocks.hero_headline_options[0];
    const subheadline = cafeData.content_blocks.hero_subheadline_options[0];
    const rating = cafeData.social_proof.rating;
    const reviewCount = cafeData.social_proof.review_count;
    const googleMapsLink = cafeData.contact.google_maps_link || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cafeData.contact.address)}`;

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src={heroImage}
                    alt="Cafe Nine Forty Five Exterior"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                />
                <div className="absolute inset-0 from-amber-900/80 via-amber-800/70 to-amber-700/80"></div>
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 bg-amber-600/20 text-amber-300 px-3 sm:px-4 py-2 rounded-full border border-amber-500/30 mb-6 sm:mb-8 font-bold text-xs sm:text-sm tracking-widest uppercase">
                        <Star size={12} className="sm:w-3.5 sm:h-3.5 fill-amber-300" />
                        <span>{rating}★ Rating • {reviewCount} Reviews</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight mb-6 md:mb-8 tracking-tighter px-2">
                        {headline.includes("–") ? (
                            <>
                                {headline.split("–")[0].trim()}{" "}
                                <span className="text-amber-400">{headline.split("–")[1]?.trim()}</span>
                            </>
                        ) : (
                            headline
                        )}
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed font-medium px-4">
                        {subheadline}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
                        <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 md:px-10 py-4 sm:py-4 md:py-5 rounded-2xl font-black text-base sm:text-lg md:text-xl transition-all shadow-2xl shadow-amber-600/30 flex items-center justify-center gap-3 transform hover:scale-105 active:scale-95 group">
                                <MapPin size={20} className="sm:w-6 sm:h-6" />
                                Get Directions
                                <ArrowRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </a>

                        <a href="#location" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-6 sm:px-8 md:px-10 py-4 sm:py-4 md:py-5 rounded-2xl font-black text-base sm:text-lg md:text-xl transition-all flex items-center justify-center gap-3 transform hover:scale-105 active:scale-95">
                                <Users size={20} className="sm:w-6 sm:h-6" />
                                Visit Cafe
                            </button>
                        </a>
                    </div>

                    <div className="mt-12 sm:mt-16 md:mt-20 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 items-center opacity-80 px-4">
                        <div className="flex items-center gap-2 text-white/70">
                            <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                            <span className="font-bold text-xs sm:text-sm uppercase tracking-widest">Evening Cafe</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/70">
                            <div className="w-2 h-2 rounded-full bg-green-400"></div>
                            <span className="font-bold text-xs sm:text-sm uppercase tracking-widest">Group Hangouts</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/70">
                            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                            <span className="font-bold text-xs sm:text-sm uppercase tracking-widest">Sports Friendly</span>
                        </div>
                    </div>
                </motion.div>
            </div>


        </section>
    );
}

