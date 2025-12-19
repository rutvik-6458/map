"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Gallery() {
    const images = [
        {
            src: "/gallery/caption.jpg",
            span: "col-span-2 row-span-2",
            alt: "Coffee house interior"
        },
        {
            src: "/gallery/08829600257ed8168dd856cafb7446c8.jpeg",
            span: "col-span-1 row-span-1",
            alt: "Latte art"
        },
        {
            src: "/gallery/asa.jfif",
            span: "col-span-1 row-span-2",
            alt: "Speciality coffee"
        },
        {
            src: "/gallery/images.jfif",
            span: "col-span-1 row-span-1",
            alt: "Dessert"
        },
    ];

    return (
        <section id="gallery" className="py-20 md:py-24 bg-stone-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-outfit font-bold text-stone-900 mb-4">
                            #MerakiMoments
                        </h2>
                        <p className="text-stone-600">
                            Glimpses of our space and coffee creations.
                        </p>
                    </div>
                    <a href="#" className="text-stone-900 font-bold border-b-2 border-stone-900 pb-1 hover:text-[#D4A373] hover:border-[#D4A373] transition-colors inline-block">
                        Follow Us on Instagram
                    </a>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-4 md:grid-rows-2 gap-4 h-[800px] md:h-[600px]">
                    {images.map((img, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 0.99 }}
                            transition={{ duration: 0.3 }}
                            className={cn(
                                "relative rounded-2xl md:rounded-3xl overflow-hidden group shadow-md",
                                img.span
                            )}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-all duration-300" />

                            {/* Overlay tag */}
                            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-stone-900 uppercase tracking-widest">
                                    Meraki
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

import { cn } from "@/lib/utils";
