"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import gallery4 from "@/assets/gallery4.jpg";
import gallery5 from "@/assets/gallery5.jpg";
import gallery6 from "@/assets/gallery6.jpg";
import { cafeData } from "@/data";

export default function Gallery() {
    const galleryItems = [
        { id: 1, image: gallery1, alt: "Gossip Cafe - Exterior view at Ashtha Complex" },
        { id: 2, image: gallery2, alt: "Gossip Cafe - Interior seating and lighting" },
        { id: 3, image: gallery3, alt: "Gossip Cafe - Cold coffee and snacks" },
        { id: 4, image: gallery4, alt: "Gossip Cafe - Group and couple seating areas" },
        { id: 5, image: gallery5, alt: "Gossip Cafe - Decor and ambience" },
        { id: 6, image: gallery6, alt: "Gossip Cafe - Privacy-focused seating" },
    ];

    return (
        <section className="py-12 sm:py-16 lg:py-24 bg-white" id="gallery">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
                <div className="text-center mb-10 sm:mb-12 lg:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 tracking-tight px-2">
                            Gallery
                        </h2>
                        <p className="text-gray-600 text-sm sm:text-base lg:text-lg font-medium max-w-2xl mx-auto px-4">
                            Take a look at our cozy ambience, privacy-focused seating, and welcoming space.
                        </p>
                    </motion.div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
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
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
