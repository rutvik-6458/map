"use client";

import React from "react";
import { motion } from "framer-motion";

const images = [
    "https://images.unsplash.com/photo-1555507036-ab1f4038808a",
    "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    "https://images.unsplash.com/photo-1517433670267-08bbd4be890f",
    "https://images.unsplash.com/photo-1551024506-0bccd828d307",
    "https://images.unsplash.com/photo-1509440159596-0249088772ff",
    "https://images.unsplash.com/photo-1513104890138-7c749659a591"
];

export default function Gallery() {
    return (
        <section id="gallery" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">A Glimpse of Happiness</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        Sights from our bakery and cafe that will make you crave for more.
                    </p>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {images.map((src, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative overflow-hidden rounded-3xl group cursor-pointer"
                        >
                            <img
                                src={`${src}?auto=format&fit=crop&q=80&w=800`}
                                alt={`TBS Gallery ${idx + 1}`}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-amber-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white font-bold text-lg border-2 border-white px-6 py-2 rounded-full">Explore</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
