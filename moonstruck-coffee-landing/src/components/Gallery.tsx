"use client";

import { motion } from "framer-motion";

const images = [
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1507133750040-4c8b5f9a5f1e?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800",
    "/assets/gluten-free-new-york-cheesecake-1450985-hero-01-dc54f9daf38044238b495c7cefc191fa.jpg"
];

export default function Gallery() {
    return (
        <section id="gallery" className="section-padding">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">Captured Moments</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        Take a glimpse into the cozy atmosphere and artisanal coffee creations at Moonstruck.
                    </p>
                </div>

                <div className="columns-2 md:columns-3 gap-4 space-y-4">
                    {images.map((src, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative group overflow-hidden rounded-2xl cursor-pointer"
                        >
                            <img
                                src={src}
                                alt={`Gallery ${i}`}
                                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-orange-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-bold border-2 border-white px-4 py-2 rounded-full transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    View Photo
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
