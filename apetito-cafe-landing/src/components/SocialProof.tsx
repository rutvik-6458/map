"use client";

import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const SocialProof = () => {
    const testimonials = [
        {
            quote: "Absolutely loved my experience at Apetito Café!",
            author: "Customer Review",
        },
        {
            quote: "Love the ambience such a positive cosy and beautiful energy.",
            author: "Customer Review",
        },
        {
            quote: "Great vibes, great ambiance, great food and service.",
            author: "Customer Review",
        },
    ];

    const themes = [
        "Beautiful ambience and positive vibes",
        "Good quality food and coffee",
        "Calm and cozy café atmosphere",
    ];

    return (
        <section id="social-proof" className="py-20 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        <Star className="w-4 h-4 fill-current" />
                        Trusted by 292+ Happy Customers
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        What Our Guests Say
                    </h2>
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className="w-6 h-6 text-amber-500 fill-current"
                                />
                            ))}
                        </div>
                        <span className="text-3xl font-bold text-gray-900">4.6</span>
                        <span className="text-gray-600">/ 5.0</span>
                    </div>
                </div>

                {/* Review Themes */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {themes.map((theme, index) => (
                        <Card
                            key={index}
                            className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
                                    <svg
                                        className="w-5 h-5 text-white"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <p className="text-gray-700 font-medium leading-relaxed">
                                    {theme}
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Testimonials */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={index}
                            className="p-8 bg-white border-2 border-gray-100 hover:border-amber-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full -mr-16 -mt-16 opacity-50 group-hover:scale-150 transition-transform duration-500" />
                            <Quote className="w-10 h-10 text-amber-500 mb-4 relative z-10" />
                            <p className="text-gray-700 text-lg mb-6 leading-relaxed relative z-10 italic">
                                "{testimonial.quote}"
                            </p>
                            <div className="flex items-center gap-1 relative z-10">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-4 h-4 text-amber-500 fill-current"
                                    />
                                ))}
                            </div>
                            <p className="text-sm text-gray-500 mt-3 relative z-10">
                                — {testimonial.author}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
