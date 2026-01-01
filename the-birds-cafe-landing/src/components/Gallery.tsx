"use client";

import { motion } from "framer-motion";
import gallery2 from "@/assets/gallery2.jpg";

const images = [
    {
        url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop",
        title: "Nature-inspired interior",
        size: "large"
    },
    {
        url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000&auto=format&fit=crop",
        title: "Artisan Coffee",
        size: "small"
    },
    {
        url: "https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?q=80&w=1000&auto=format&fit=crop",
        title: "Evening Vibe",
        size: "small"
    },
    {
        url: gallery2.src,
        title: "Group Seating",
        size: "large"
    }
];

const Gallery = () => {
    return (
        <section id="vibe" className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-4 text-nature-950">
                        A Glimpse of <span className="text-nature-600 italic">Bliss</span>
                    </h2>
                    <p className="text-base sm:text-lg text-nature-800/70 max-w-2xl mx-auto">
                        Take a look at the atmosphere that makes The Birds Cafe the most loved spot in Vesu.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 auto-rows-[200px] sm:auto-rows-[250px] md:auto-rows-[300px]">
                    {images.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.02 }}
                            viewport={{ once: true }}
                            className={`relative rounded-[24px] sm:rounded-[28px] md:rounded-[32px] overflow-hidden group shadow-lg ${img.size === "large" ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
                                }`}
                        >
                            <img
                                src={img.url}
                                alt={img.title}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-nature-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                                <span className="text-white font-medium text-base sm:text-lg">{img.title}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 sm:mt-12 text-center text-nature-500 font-medium text-sm sm:text-base">
                    <p>* Photos are for representation. Replace with actual cafe images.</p>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
