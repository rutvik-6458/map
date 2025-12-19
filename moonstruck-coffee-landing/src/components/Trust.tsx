"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    "A peaceful brunch spot with stunning ambiance.",
    "An absolute gem for coffee lovers!",
    "A perfect place to keep calm and get work done."
];

const themes = [
    "Peaceful and cozy ambience",
    "Good quality coffee and desserts",
    "Polite and friendly staff"
];

export default function Trust() {
    return (
        <section id="trust" className="section-padding bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Loved by the Community</h2>
                    <div className="flex items-center justify-center gap-1 mb-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} className={i <= 4 ? "w-6 h-6 fill-orange-400 text-orange-400" : "w-6 h-6 text-gray-300 fill-gray-300"} />
                        ))}
                        <span className="ml-2 text-xl font-bold">4.3/5</span>
                    </div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        With over 539 reviews, Moonstruck Coffee is known for its serene environment and exceptional service.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((quote, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between"
                        >
                            <div>
                                <Quote className="w-10 h-10 text-orange-100 mb-4" />
                                <p className="text-gray-700 italic text-lg leading-relaxed mb-6">"{quote}"</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center">
                                    <span className="text-orange-600 font-bold">G</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900 text-sm">Guest Review</p>
                                    <p className="text-gray-500 text-xs">Verified Local Guide</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 flex flex-wrap justify-center gap-4">
                    {themes.map((theme, i) => (
                        <div key={i} className="px-6 py-3 bg-white border border-orange-100 rounded-full text-orange-900 font-medium shadow-sm">
                            ✨ {theme}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
