"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, MapPin, Users, MessageCircle } from "lucide-react";
import Image from "next/image";
import heroImage from "@/assets/The Flat White Coffee House.jpg";
import { cafeData } from "@/data";

export default function Hero() {
    const headline = cafeData.content_blocks.hero_headline_options[0];
    const subheadline = cafeData.content_blocks.hero_subheadline_options[0];
    const rating = cafeData.social_proof.rating;
    const reviewCount = cafeData.social_proof.review_count;
    const googleMapsLink = cafeData.contact.google_maps_link || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cafeData.contact.address)}`;
    const phoneNumber = cafeData.contact.phone;
    const whatsappNumber = phoneNumber
        ? `91${phoneNumber.replace(/\s+/g, "").replace(/^0/, "")}`
        : null;
    const whatsappLink = whatsappNumber ? `https://wa.me/${whatsappNumber}` : null;

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src={heroImage}
                    alt="The Flat White Coffee House"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                />
                <div className="absolute inset-0  from-amber-900/80 via-amber-800/70 to-amber-950/80"></div>
                <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 bg-amber-700/20 text-amber-200 px-4 py-2 rounded-full border border-amber-600/30 mb-8 font-bold text-sm tracking-widest uppercase">
                        <Star size={14} className="fill-amber-300" />
                        <span>{rating}★ Rating • {reviewCount} Reviews</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black text-white leading-tight mb-8 tracking-tighter">
                        {headline.includes("–") ? (
                            <>
                                {headline.split("–")[0].trim()}{" "}
                                <span className="text-amber-300">{headline.split("–")[1]?.trim()}</span>
                            </>
                        ) : (
                            headline
                        )}
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                        {subheadline}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
                            <button className="bg-amber-800 hover:bg-amber-900 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-amber-800/30 flex items-center gap-3 transform hover:scale-105 active:scale-95 group">
                                <MapPin size={24} />
                                Get Directions
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </a>

                        {whatsappLink && (
                            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                                <button className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-green-600/30 flex items-center gap-3 transform hover:scale-105 active:scale-95">
                                    <MessageCircle size={24} />
                                    WhatsApp Us
                                </button>
                            </a>
                        )}

                        <a href="#location">
                            <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all flex items-center gap-3 transform hover:scale-105 active:scale-95">
                                <Users size={24} />
                                Visit Cafe
                            </button>
                        </a>
                    </div>

                    <div className="mt-20 flex flex-wrap justify-center gap-10 items-center opacity-80">
                        <div className="flex items-center gap-2 text-white/70">
                            <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                            <span className="font-bold text-sm uppercase tracking-widest">Specialty Coffee</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/70">
                            <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                            <span className="font-bold text-sm uppercase tracking-widest">Calm Ambience</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/70">
                            <div className="w-2 h-2 rounded-full bg-amber-600"></div>
                            <span className="font-bold text-sm uppercase tracking-widest">Fresh Food</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

