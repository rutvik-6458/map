"use client";

import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2 } from "lucide-react";

const Trust = () => {
    const reviews = [
        { quote: "The best cafe in Surat for budget friendly food with cozy ambience.", author: "Local Guide" },
        { quote: "Loved the creamy pink sauce pasta at Old Town Cafe.", author: "Happy Diner" },
        { quote: "Food was amazing and much more worthy for the price.", author: "Regular Customer" },
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-center lg:text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm font-bold mb-6">
                            <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                            5.0 RATED ON GOOGLE
                        </div>
                        <h2 className="font-playfair text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            A Local Favorite Loved for <span className="text-amber-600">Taste & Value</span>
                        </h2>
                        <p className="text-slate-600 text-base md:text-lg mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                            With a perfect 5-star rating and growing reviews, we've become the go-to spot in Vesu for anyone seeking great food without burning a pocket.
                        </p>

                        <div className="space-y-4 max-w-max mx-auto lg:mx-0">
                            {[
                                "Budget-friendly and value for money",
                                "Tasty food, especially pink sauce pasta",
                                "Pleasant ambience and good service"
                            ].map((theme, i) => (
                                <div key={i} className="flex items-center gap-3 text-slate-800 font-medium">
                                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                                    {theme}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="relative">
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-50" />
                        <div className="space-y-6 relative z-10">
                            {reviews.map((rev, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white p-6 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100"
                                >
                                    <Quote className="w-8 h-8 text-amber-600/20 mb-3" />
                                    <p className="text-slate-700 italic mb-4">"{rev.quote}"</p>
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 bg-slate-100 rounded-full" />
                                        <span className="text-sm font-bold text-slate-900">— {rev.author}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Trust;
