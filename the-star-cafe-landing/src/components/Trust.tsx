"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Trust() {
    const reviews = [
        { text: "Tasty food and beautiful environment.", author: "Verified Customer", initial: "T" },
        { text: "The place is cozy & small, good for gatherings & small celebrations.", author: "Local Customer", initial: "C" },
        { text: "The staff is very polite and served very well.", author: "Happy Guest", initial: "H" },
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-gray-50/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 sm:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Community Trust</h2>
                        <div className="flex flex-col items-center justify-center gap-4">
                            <div className="flex items-center gap-2">
                                <div className="flex text-amber-400">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <Star
                                            key={i}
                                            size={28}
                                            className={i <= 4.5 ? "fill-current" : "fill-gray-300"}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="text-lg font-semibold text-gray-700">
                                <span className="text-3xl text-gray-900 mr-2">4.5</span>
                                Rating based on 92 Google Reviews
                            </div>
                            <p className="text-gray-600 font-medium max-w-2xl mx-auto mt-4">
                                Tasty food, beautiful and cozy ambience, good service and hygiene
                            </p>
                        </div>
                    </motion.div>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                    {reviews.map((review, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className="bg-white p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] shadow-xl shadow-gray-200/40 border border-gray-100 flex flex-col group hover:shadow-2xl hover:shadow-amber-100/50 transition-all duration-500"
                        >
                            <div className="mb-8 p-3 bg-amber-600 text-white w-fit rounded-2xl shadow-lg shadow-amber-200/50 transition-all duration-500">
                                <Quote size={24} />
                            </div>

                            <p className="text-lg text-gray-700 font-medium leading-[1.6] italic mb-10 flex-grow">
                                "{review.text}"
                            </p>

                            <div className="flex items-center gap-4 pt-6 border-t border-gray-50">
                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white font-bold shadow-lg shadow-amber-200">
                                    {review.initial}
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">{review.author}</p>
                                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Google Review</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}





