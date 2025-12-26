"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cafeData } from "@/data";
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import gallery4 from "@/assets/gallery4.jpg";
import gallery5 from "@/assets/gallery5.jpg";

export default function Gallery() {
    const photoShotlist = cafeData.assets_needed.photo_shotlist;

    const galleryItems = [
        { id: 1, image: gallery1, alt: `${cafeData.brand.business_name} - ${photoShotlist[0] || "Cafe exterior"}` },
        { id: 2, image: gallery2, alt: `${cafeData.brand.business_name} - ${photoShotlist[1] || "Cold coffee close-up"}` },
        { id: 3, image: gallery3, alt: `${cafeData.brand.business_name} - ${photoShotlist[2] || "Ice creams and desserts"}` },
        { id: 4, image: gallery4, alt: `${cafeData.brand.business_name} - ${photoShotlist[3] || "Dine-in seating area"}` },
        { id: 5, image: gallery5, alt: `${cafeData.brand.business_name} - ${photoShotlist[4] || "Coffee being served"}` },
    ];

    return (
        <section className="py-24 bg-white" id="gallery">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                            Gallery
                        </h2>
                        <p className="text-gray-600 text-lg font-medium max-w-2xl mx-auto">
                            Take a look at our cafe, cold coffee, and cozy atmosphere.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryItems.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-gray-200 shadow-lg group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
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

