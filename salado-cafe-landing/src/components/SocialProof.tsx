"use client";

const SocialProof = () => {
    const testimonials = [
        "A good place for healthy bites at reasonable prices.",
        "Must try, friendly atmosphere and lovely staff.",
        "Excellent food with good service.",
    ];

    const reviewThemes = [
        "Healthy and tasty food",
        "Friendly and polite staff",
        "Good value for healthy meals",
    ];

    return (
        <section id="social-proof" className="py-12 sm:py-16 md:py-20 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
                {/* Rating Section */}
                <div className="text-center mb-10 sm:mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-2 sm:gap-3 bg-green-50 border border-green-200 rounded-full px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 mb-4 sm:mb-6 flex-wrap justify-center">
                        <div className="flex items-center gap-0.5 sm:gap-1">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-green-500 fill-current"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">4.8</span>
                        <span className="text-gray-400 text-base sm:text-lg md:text-xl hidden sm:inline">•</span>
                        <span className="text-gray-600 text-sm sm:text-base md:text-lg">62 reviews</span>
                    </div>
                    <p className="text-gray-600 text-base sm:text-lg px-4">Trusted by customers in Vesu, Surat</p>
                </div>

                {/* Review Themes */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12 md:mb-16">
                    {reviewThemes.map((theme, index) => (
                        <div
                            key={index}
                            className="bg-green-50 border border-green-200 rounded-xl p-4 sm:p-6 text-center"
                        >
                            <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">✨</div>
                            <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">{theme}</h3>
                        </div>
                    ))}
                </div>

                {/* Testimonials */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-center gap-1 mb-3 sm:mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 fill-current"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-700 italic leading-relaxed text-sm sm:text-base">"{testimonial}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;







