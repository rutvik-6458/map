"use client";

import { businessData } from "./data";
import { Star, Quote } from "lucide-react";

export function Trust() {
    return (
        <section id="reviews" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 sm:mb-16 gap-6 sm:gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-4 uppercase">
                            What People <span className="text-orange-600">Love</span> About Us
                        </h2>
                        <div className="flex items-center gap-2 mb-4 flex-wrap">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={20} className={`sm:w-6 sm:h-6 ${i < 4 ? "fill-orange-500 text-orange-500" : "fill-orange-200 text-orange-200"}`} />
                            ))}
                            <span className="text-base sm:text-lg md:text-xl font-bold ml-2">{businessData.social_proof.rating} Out of 5</span>
                        </div>
                    </div>
                    <div className="bg-gray-50 border border-gray-100 p-4 sm:p-6 rounded-2xl sm:rounded-3xl w-full md:w-auto">
                        <p className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Total Google Reviews</p>
                        <p className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900">{businessData.social_proof.review_count}+</p>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {businessData.social_proof.testimonial_quotes.map((item, i) => (
                        <div key={i} className="group p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-gray-50 border-2 border-transparent hover:border-orange-500/20 hover:bg-white transition-all duration-300 shadow-sm hover:shadow-2xl">
                            <Quote size={32} className="sm:w-10 sm:h-10 text-orange-200 mb-4 sm:mb-6 group-hover:text-orange-500 transition-colors" />
                            <p className="text-base sm:text-lg md:text-xl font-medium text-gray-700 italic mb-6 sm:mb-8 leading-relaxed">
                                "{item.quote}"
                            </p>
                            <div className="flex items-center gap-3 sm:gap-4">
                                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-lg sm:text-xl shrink-0">
                                    {item.author[0]}
                                </div>
                                <div className="min-w-0">
                                    <p className="font-bold text-gray-900 text-sm sm:text-base">{item.author}</p>
                                    <p className="text-xs sm:text-sm text-gray-400">Verified Customer</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 sm:mt-16 md:mt-20 flex flex-wrap justify-center gap-3 sm:gap-4">
                    {businessData.social_proof.top_review_themes.map((theme, i) => (
                        <span key={i} className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-orange-50 text-orange-700 font-bold text-xs sm:text-sm tracking-wide border border-orange-100">
                            ✓ {theme}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
