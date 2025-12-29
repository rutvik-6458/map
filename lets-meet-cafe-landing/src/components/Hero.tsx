"use client";

import { businessData } from "./data";
import { Star, ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
            {/* Background Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 z-10" />
                <img
                    src="/assets/images.jfif"
                    alt="Loaded Fries"
                    className="w-full h-full object-cover scale-110 animate-pulse-slow"
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-20 pt-20 sm:pt-24 md:pt-28">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-orange-600/20 border border-orange-500/30 backdrop-blur-md mb-6 sm:mb-8"
                    >
                        <span className="flex items-center text-orange-400 font-bold text-xs sm:text-sm tracking-widest uppercase">
                            <Star size={14} className="sm:w-4 sm:h-4 fill-orange-400 mr-1 sm:mr-2" />
                            <span className="hidden sm:inline">{businessData.social_proof.rating} RATING ({businessData.social_proof.review_count} REVIEWS)</span>
                            <span className="sm:hidden">{businessData.social_proof.rating} ({businessData.social_proof.review_count})</span>
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-black mb-4 sm:mb-6 tracking-tighter leading-tight px-2"
                    >
                        {businessData.content_blocks.hero_headline_options[0].split(' ').map((word, i) => (
                            <span key={i} className={i % 2 === 1 ? "text-orange-500" : ""}>
                                {word}{" "}
                            </span>
                        ))}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto font-medium px-2"
                    >
                        {businessData.content_blocks.hero_subheadline_options[0]}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-2"
                    >
                        <button
                            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                            className="group flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-xl sm:rounded-2xl font-black text-base sm:text-lg transition-all shadow-xl shadow-orange-600/30 hover:shadow-orange-600/50"
                        >
                            <span className="whitespace-nowrap">VIEW OUR MENU</span> <ArrowRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                        </button>

                        {businessData.contact.phone && (
                            <a
                                href={`https://wa.me/${businessData.contact.phone.replace(/\D/g, '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 sm:gap-3 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-green-600/20 hover:bg-green-600/30 text-green-400 border-2 border-green-500/50 rounded-xl sm:rounded-2xl font-black text-base sm:text-lg transition-all backdrop-blur-md"
                            >
                                <MessageCircle size={18} className="sm:w-5 sm:h-5" /> <span className="whitespace-nowrap">WHATSAPP US</span>
                            </a>
                        )}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 border-t border-white/10 pt-8 sm:pt-10"
                    >
                        {businessData.positioning.unique_selling_points.map((usp, i) => (
                            <div key={i} className="text-left sm:text-center lg:text-left space-y-1">
                                <div className="h-1 w-8 bg-orange-500 rounded-full mb-2 sm:mb-3 mx-auto sm:mx-0" />
                                <p className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-widest leading-relaxed">{usp}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
