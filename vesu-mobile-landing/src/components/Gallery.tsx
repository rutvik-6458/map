"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Gallery() {
    const images = [
        {
            src: "/store.png",
            alt: "Shop interior at Someshwar Square",
            className: "md:col-span-2 md:row-span-2"
        },
        {
            src: "/hero.png",
            alt: "Inside view of the mobile repair counter",
            className: "md:col-span-1 md:row-span-1"
        },
        {
            src: "/repair.png",
            alt: "Technician working on a mobile phone",
            className: "md:col-span-1 md:row-span-1"
        },
        {
            src: "/hero.png",
            alt: "Close-up of repair tools and workspace",
            className: "md:col-span-2 md:row-span-1"
        },
    ];

    return (
        <section className="py-24 bg-white" id="gallery">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Gallery</h2>
                    <p className="text-gray-500 font-medium">A glimpse into our professional repair environment</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[800px]">
                    {images.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className={`relative overflow-hidden rounded-[2.5rem] shadow-lg group ${img.className}`}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                <p className="text-white font-bold text-lg">{img.alt}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-400 font-medium italic">Visit us at Someshwar Square to see our full range of services.</p>
                </div>
            </div>
        </section>
    );
}
