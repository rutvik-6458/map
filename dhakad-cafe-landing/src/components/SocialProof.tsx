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
        <section id="social-proof" className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className="w-6 h-6 fill-amber-400 text-amber-400"
                                />
                            ))}
                        </div>
                        <span className="text-3xl font-bold text-gray-900 ml-2">
                            {rating}
                        </span>
                    </div>
                    <p className="text-gray-600 text-lg">
                        Rated {rating} by {reviewCount} customers
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {topReviewThemes.map((theme, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-100"
                        >
                            <div className="flex items-center mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-4 h-4 fill-amber-400 text-amber-400"
                                    />
                                ))}
                            </div>
                            <p className="text-gray-800 font-medium">{theme}</p>
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {testimonialQuotes.map((quote, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm"
                        >
                            <div className="flex items-center mb-3">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-4 h-4 fill-amber-400 text-amber-400"
                                    />
                                ))}
                            </div>
                            <p className="text-gray-700 italic">"{quote}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;



