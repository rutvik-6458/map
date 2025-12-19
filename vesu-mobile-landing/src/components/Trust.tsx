"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Trust() {
    const reviews = [
        { text: "Great knowledgeable person.", author: "Local Customer", initial: "L" },
        { text: "My S24 Ultra which was dipped into water was fixed within a couple of hours.", author: "Verified Customer", initial: "V" },
        { text: "Reliable place.", author: "Local Resident", initial: "R" },
    ];

    return (
        <section className="py-24 bg-gray-50/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Community Trust</h2>
                        <div className="flex flex-col items-center justify-center gap-4">
                            <div className="flex items-center gap-2">
                                <div className="flex text-amber-400">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={28} className="fill-current" />)}
                                </div>
                            </div>
                            <div className="text-lg font-semibold text-gray-700">
                                <span className="text-3xl text-gray-900 mr-2">5.0</span>
                                Rating based on 2 Google Reviews
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-gray-200/40 border border-gray-100 flex flex-col group hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500"
                        >
                            <div className="mb-8 p-3 bg-blue-50 w-fit rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                                <Quote size={24} />
                            </div>

                            <p className="text-lg text-gray-700 font-medium leading-[1.6] italic mb-10 flex-grow">
                                "{review.text}"
                            </p>

                            <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-200">
                                    {review.initial}
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">{review.author}</p>
                                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Google Local Guide</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
