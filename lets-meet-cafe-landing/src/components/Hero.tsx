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

            <div className="container mx-auto px-4 relative z-20 pt-20">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-600/20 border border-orange-500/30 backdrop-blur-md mb-8"
                    >
                        <span className="flex items-center text-orange-400 font-bold text-sm tracking-widest uppercase">
                            <Star size={16} className="fill-orange-400 mr-2" />
                            {businessData.social_proof.rating} RATING ({businessData.social_proof.review_count} REVIEWS)
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-tight"
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
                        className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-medium"
                    >
                        {businessData.content_blocks.hero_subheadline_options[0]}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <button
                            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                            className="group flex items-center gap-3 px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-black text-lg transition-all shadow-xl shadow-orange-600/30 hover:shadow-orange-600/50"
                        >
                            VIEW OUR MENU <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>

                        {businessData.contact.phone && (
                            <a
                                href={`https://wa.me/${businessData.contact.phone.replace(/\D/g, '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-8 py-4 bg-green-600/20 hover:bg-green-600/30 text-green-400 border-2 border-green-500/50 rounded-2xl font-black text-lg transition-all backdrop-blur-md"
                            >
                                <MessageCircle /> WHATSAPP US
                            </a>
                        )}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="mt-20 grid grid-cols-2 lg:grid-cols-3 gap-8 border-t border-white/10 pt-10"
                    >
                        {businessData.positioning.unique_selling_points.map((usp, i) => (
                            <div key={i} className="text-left space-y-1">
                                <div className="h-1 w-8 bg-orange-500 rounded-full mb-3" />
                                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{usp}</p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
