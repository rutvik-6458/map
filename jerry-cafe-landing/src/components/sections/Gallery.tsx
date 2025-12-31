"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import gallery4 from "@/assets/gallery4.jpg";
import gallery5 from "@/assets/gallery5.jpg";

const Gallery = () => {
    const images = [
        { src: gallery2, label: "Celebration Decor", span: "md:col-span-2 md:row-span-2" },
        { src: gallery3, label: "Couple Seating", span: "" },
        { src: gallery4, label: "Cafe Ambience", span: "" },
        { src: gallery5, label: "Birthday Party", span: "md:col-span-2" },
    ];

    return (
        <section id="gallery" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-4xl font-bold font-outfit mb-4">A Glimpse of Jerry Cafe</h2>
                        <p className="text-muted-foreground">Capturing the moments and the magic of our cozy space.</p>
                    </div>
                    <div className="text-primary font-bold hidden md:block">#JerryCafeVesu</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group relative rounded-3xl overflow-hidden bg-muted border-4 border-white shadow-lg ${img.span}`}
                        >
                            <Image
                                src={img.src}
                                alt={img.label}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute bottom-6 left-6 text-white font-bold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all font-outfit text-lg">
                                {img.label}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <p className="mt-12 text-center text-muted-foreground text-sm italic">
                    * Professional decoration available upon request.
                </p>
            </div>
        </section>
    );
};

export default Gallery;
