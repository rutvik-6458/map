"use client";

import { Star } from "lucide-react";

const SocialProof = () => {
    const rating = "5.0";
    const reviewCount = "18";
    const topReviewThemes = [
        "Great tea taste",
        "Cheese chilli toast is a must-try",
        "Nice seating and casual vibe"
    ];
    const testimonialQuotes = [
        "Tea taste is different from others. Must visit.",
        "Must try cheese chilli toast and tea is also good.",
        "Nice place to seat and have tea and coffee."
    ];

    return (
        <section id="social-proof" className="py-12 sm:py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
                <div className="text-center mb-8 sm:mb-12">
                    <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
                        <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className="w-5 h-5 sm:w-6 sm:h-6 fill-amber-400 text-amber-400"
                                />
                            ))}
                        </div>
                        <span className="text-2xl sm:text-3xl font-bold text-gray-900 ml-2">
                            {rating}
                        </span>
                    </div>
                    <p className="text-base sm:text-lg text-gray-600 px-2">
                        Rated {rating} by {reviewCount} customers
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
                    {topReviewThemes.map((theme, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 sm:p-6 rounded-xl border border-amber-100"
                        >
                            <div className="flex items-center mb-2 sm:mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-400 text-amber-400"
                                    />
                                ))}
                            </div>
                            <p className="text-sm sm:text-base text-gray-800 font-medium">{theme}</p>
                        </div>
                    ))}
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                    {testimonialQuotes.map((quote, index) => (
                        <div
                            key={index}
                            className="bg-white p-4 sm:p-6 rounded-xl border border-gray-200 shadow-sm"
                        >
                            <div className="flex items-center mb-2 sm:mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-400 text-amber-400"
                                    />
                                ))}
                            </div>
                            <p className="text-sm sm:text-base text-gray-700 italic">"{quote}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;




