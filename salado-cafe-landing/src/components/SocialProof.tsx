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
        <section id="social-proof" className="py-20 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
                {/* Rating Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 bg-green-50 border border-green-200 rounded-full px-8 py-4 mb-6">
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    className="w-6 h-6 text-green-500 fill-current"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-3xl font-bold text-gray-900">4.8</span>
                        <span className="text-gray-400 text-xl">•</span>
                        <span className="text-gray-600 text-lg">62 reviews</span>
                    </div>
                    <p className="text-gray-600 text-lg">Trusted by customers in Vesu, Surat</p>
                </div>

                {/* Review Themes */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {reviewThemes.map((theme, index) => (
                        <div
                            key={index}
                            className="bg-green-50 border border-green-200 rounded-xl p-6 text-center"
                        >
                            <div className="text-4xl mb-3">✨</div>
                            <h3 className="font-semibold text-gray-900 mb-2">{theme}</h3>
                        </div>
                    ))}
                </div>

                {/* Testimonials */}
                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-4 h-4 text-green-500 fill-current"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-700 italic leading-relaxed">"{testimonial}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;

