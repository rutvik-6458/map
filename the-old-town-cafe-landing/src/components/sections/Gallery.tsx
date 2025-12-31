"use client";

import { motion } from "framer-motion";

const Gallery = () => {
    const images = [
        { url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80", title: "Cozy Corner" },
        { url: "https://images.unsplash.com/photo-1541167760496-162955ed8a9f?auto=format&fit=crop&q=80", title: "Fresh Coffee" },
        { url: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&q=80", title: "Tasty Pasta" },
        { url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80", title: "Interior Vibes" },
        { url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80", title: "Warm Lights" },
        { url: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80", title: "Healthy Picks" },
    ];

    return (
        <section id="gallery" className="py-24 bg-[#FDFCF0]">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-playfair text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        A Glimpse into <span className="text-amber-600">Our Space</span>
                    </h2>
                    <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">
                        Take a look at our cozy atmosphere and delicious servings. We're all about creating memories.
                    </p>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {images.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="relative group overflow-hidden rounded-3xl"
                        >
                            <img
                                src={img.url}
                                alt={img.title}
                                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                <p className="text-white font-bold text-xl">{img.title}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 p-8 bg-amber-600/5 border border-amber-600/10 rounded-3xl text-center">
                    <p className="text-amber-800 font-medium">
                        Note: Replace these images with real photos of The Old Town Cafe for authenticity.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
