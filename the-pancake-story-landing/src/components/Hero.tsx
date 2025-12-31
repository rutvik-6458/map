"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, MapPin, Users, MessageCircle } from "lucide-react";
import Image from "next/image";
import heroImage from "@/assets/the pancake story cafe.jpg";
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
                    alt="The Pancake Story Cafe"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                />
                <div className="absolute inset-0 from-orange-900/80 via-pink-800/70 to-amber-950/80"></div>
                <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center py-8 md:py-0">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 bg-orange-700/20 text-orange-100 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-orange-500/30 mb-6 md:mb-8 font-bold text-xs md:text-sm tracking-widest uppercase">
                        <Star size={12} className="fill-orange-300 md:w-[14px] md:h-[14px]" />
                        <span className="text-xs md:text-sm">{rating}★ Rating • {reviewCount} Reviews</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white leading-tight mb-6 md:mb-8 tracking-tighter">
                        {headline.includes("–") ? (
                            <>
                                <span className="block md:inline">{headline.split("–")[0].trim()}</span>{" "}
                                <span className="text-orange-200 block md:inline">{headline.split("–")[1]?.trim()}</span>
                            </>
                        ) : (
                            headline
                        )}
                    </h1>

                    <p className="text-base md:text-xl lg:text-2xl text-gray-100 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed font-medium px-2">
                        {subheadline}
                    </p>

                    {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                        <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black text-lg md:text-xl transition-all shadow-2xl shadow-orange-600/30 flex items-center justify-center gap-3 transform hover:scale-105 active:scale-95 group w-full">
                                <MapPin size={24} />
                                Directions
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </a>

                        {whatsappLink && (
                            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                <button className="bg-green-600 hover:bg-green-700 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black text-lg md:text-xl transition-all shadow-2xl shadow-green-600/30 flex items-center justify-center gap-3 transform hover:scale-105 active:scale-95 w-full">
                                    <MessageCircle size={24} />
                                    WhatsApp
                                </button>
                            </a>
                        )}

                        <a href="#location" className="w-full sm:w-auto">
                            <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black text-lg md:text-xl transition-all flex items-center justify-center gap-3 transform hover:scale-105 active:scale-95 w-full">
                                <Users size={24} />
                                Visit Cafe
                            </button>
                        </a>
                    </div> */}

                    <div className="mt-12 md:mt-20 flex flex-wrap justify-center gap-6 md:gap-10 items-center opacity-80 px-2">
                        <div className="flex items-center gap-2 text-white/70">
                            <div className="w-2 h-2 rounded-full bg-orange-300"></div>
                            <span className="font-bold text-xs md:text-sm uppercase tracking-widest">Fluffy Pancakes</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/70">
                            <div className="w-2 h-2 rounded-full bg-pink-300"></div>
                            <span className="font-bold text-xs md:text-sm uppercase tracking-widest">Chocolate Dreams</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/70">
                            <div className="w-2 h-2 rounded-full bg-amber-300"></div>
                            <span className="font-bold text-xs md:text-sm uppercase tracking-widest">Open Till Midnight</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

