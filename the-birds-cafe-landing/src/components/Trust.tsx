"use client";

import { motion } from "framer-motion";
import { Star, MessageCircle, Quote } from "lucide-react";

const testimonials = [
    {
        quote: "The ambiance is awesome ... Good service.. taste is at it's best.",
        author: "Happy Guest",
    },
    {
        quote: "The food taste is very awesome.. the ambiance is blissful.",
        author: "Ambience Lover",
    },
    {
        quote: "Food taste was very good, ambiance is wow.",
        author: "Regular Visitor",
    }
];

const Trust = () => {
    return (
        <section className="py-24 bg-nature-950 text-white relative overflow-hidden">
            {/* Texture Background */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 mb-16 md:mb-20">
                    <div className="max-w-xl text-center md:text-left">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-4 md:mb-6 leading-tight">
                            Loved for Our Ambience, <br />
                            <span className="text-nature-400 italic">Cherished for Our Taste</span>
                        </h2>
                        <p className="text-nature-200/80 text-base sm:text-lg">
                            Our customers speak for us. With a near-perfect rating, we take pride in every cup of coffee and every meal served.
                        </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-[32px] p-6 sm:p-8 border border-white/20 flex flex-col items-center min-w-[200px]">
                        <div className="text-5xl sm:text-6xl font-bold mb-2">4.9</div>
                        <div className="flex gap-1 mb-3 sm:mb-4">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} className="fill-yellow-400 text-yellow-400" size={20} />
                            ))}
                        </div>
                        <p className="text-nature-300 font-medium tracking-wide uppercase text-xs sm:text-sm">29 Verified Reviews</p>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 p-6 sm:p-8 rounded-[32px] sm:rounded-[40px] border border-white/10 relative"
                        >
                            <Quote className="absolute top-6 right-6 sm:right-8 text-nature-600/30" size={32} />
                            <p className="text-lg sm:text-xl italic mb-4 sm:mb-6 leading-relaxed relative z-10">
                                "{t.quote}"
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-nature-700 flex items-center justify-center font-bold">
                                    {t.author[0]}
                                </div>
                                <span className="font-medium text-nature-300">{t.author}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trust;
