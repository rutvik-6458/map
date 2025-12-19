"use client";

import { businessData } from "./data";
import { Star, Quote } from "lucide-react";

export function Trust() {
    return (
        <section id="reviews" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase">
                            What People <span className="text-orange-600">Love</span> About Us
                        </h2>
                        <div className="flex items-center gap-2 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={24} className={i < 4 ? "fill-orange-500 text-orange-500" : "fill-orange-200 text-orange-200"} />
                            ))}
                            <span className="text-xl font-bold ml-2">{businessData.social_proof.rating} Out of 5</span>
                        </div>
                    </div>
                    <div className="bg-gray-50 border border-gray-100 p-6 rounded-3xl">
                        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Total Google Reviews</p>
                        <p className="text-4xl font-black text-gray-900">{businessData.social_proof.review_count}+</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {businessData.social_proof.testimonial_quotes.map((item, i) => (
                        <div key={i} className="group p-8 rounded-[2rem] bg-gray-50 border-2 border-transparent hover:border-orange-500/20 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-2xl">
                            <Quote size={40} className="text-orange-200 mb-6 group-hover:text-orange-500 transition-colors" />
                            <p className="text-lg md:text-xl font-medium text-gray-700 italic mb-8 leading-relaxed">
                                "{item.quote}"
                            </p>
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-xl">
                                    {item.author[0]}
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">{item.author}</p>
                                    <p className="text-sm text-gray-400">Verified Customer</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 flex flex-wrap justify-center gap-4">
                    {businessData.social_proof.top_review_themes.map((theme, i) => (
                        <span key={i} className="px-6 py-3 rounded-full bg-orange-50 text-orange-700 font-bold text-sm tracking-wide border border-orange-100">
                            ✓ {theme}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
