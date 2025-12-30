"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Gallery() {
    const galleryItems = [
        { id: 1, image: "/gallrery1.jpg", alt: "Bubble tea cups close-up" },
        { id: 2, image: "/gallrery2.jpg", alt: "Waffles with ice cream" },
        { id: 3, image: "/gallrery3.jpg", alt: "Cafe interior and seating" },
        { id: 4, image: "/gallrery4.jpg", alt: "Friends enjoying drinks" },
        { id: 5, image: "/gallrery5.jpg", alt: "Exterior view at Aagam Emporio" },
        { id: 6, image: "/gallrery6.jpg", alt: "Bubble tea preparation" },
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white" id="gallery">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 sm:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight px-2">
                            Gallery
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg font-medium max-w-2xl mx-auto px-2">
                            Take a look at our bubble tea, waffles and vibrant cafe atmosphere.
                        </p>
                    </motion.div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                    {galleryItems.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200 shadow-lg group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                        >
                            <Image
                                src={item.image}
                                alt={item.alt}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                unoptimized
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

