"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        quote: "Beautiful designs at reasonable prices and best service.",
        author: "Happy Customer",
        rating: 5,
    },
    {
        quote: "They made it so yummy and tasty.",
        author: "Regular Client",
        rating: 5,
    },
    {
        quote: "One of the best cakes I had!",
        author: "Local Guide",
        rating: 5,
    },
];

const Trust = () => {
    return (
        <section id="trust" className="py-24 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="flex items-center gap-1 text-[#D97706] mb-4">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} size={24} fill="currentColor" />
                        ))}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#2D241E] mb-4">
                        Loved by <span className="text-[#DB2777]">83+ People</span> in Surat
                    </h2>
                    <p className="text-xl text-[#6B5E55] max-w-2xl">
                        With a near-perfect 4.9-star rating, Shades On Cake is the trusted choice for premium designer cakes in Vesu.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="bg-[#FFFAF5] p-8 rounded-3xl border border-[#F1E9E2] relative group hover:shadow-xl transition-all duration-300"
                        >
                            <Quote className="absolute top-6 right-8 text-[#DB2777]/20 group-hover:text-[#DB2777]/40 transition-colors" size={48} />
                            <div className="flex gap-1 text-[#D97706] mb-4">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <Star key={s} size={16} fill="currentColor" />
                                ))}
                            </div>
                            <p className="text-lg text-[#2D241E] italic mb-6 leading-relaxed">
                                "{t.quote}"
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#DB2777]/10 flex items-center justify-center font-bold text-[#DB2777]">
                                    {t.author[0]}
                                </div>
                                <div className="font-bold text-[#2D241E]">{t.author}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 opacity-60">
                    <div className="text-center">
                        <p className="text-3xl font-bold text-[#2D241E]">4.9</p>
                        <p className="text-sm uppercase tracking-widest text-[#6B5E55]">Google Rating</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold text-[#2D241E]">83+</p>
                        <p className="text-sm uppercase tracking-widest text-[#6B5E55]">Reviews</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold text-[#2D241E]">100%</p>
                        <p className="text-sm uppercase tracking-widest text-[#6B5E55]">Eggless Options</p>
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-bold text-[#2D241E]">Surat</p>
                        <p className="text-sm uppercase tracking-widest text-[#6B5E55]">Best Designer Cakes</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Trust;
