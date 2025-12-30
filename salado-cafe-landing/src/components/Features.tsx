"use client";

const Features = () => {
    const features = [
        "Healthy and nutritious food options",
        "Fresh salads, wraps and bowls",
        "Friendly and welcoming staff",
        "Comfortable dine-in seating",
        "Drive-through and no-contact delivery available",
        "Open till midnight",
    ];

    const uniqueSellingPoints = [
        "Focus on healthy and nutritious food",
        "Fresh ingredients with balanced flavours",
        "Friendly service and welcoming atmosphere",
    ];

    return (
        <section id="features" className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b from-green-50 to-white">
            <div className="container mx-auto max-w-6xl">
                {/* Section Header */}
                <div className="text-center mb-10 sm:mb-12 md:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
                        Why Choose <span className="text-green-600">SaladO Cafe</span>?
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                        A cafe where nutrition meets flavour
                    </p>
                </div>

                {/* Unique Selling Points */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
                    {uniqueSellingPoints.map((point, index) => (
                        <div
                            key={index}
                            className="bg-white border border-green-200 rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                        >
                            <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">
                                {index === 0 && "🥗"}
                                {index === 1 && "🌿"}
                                {index === 2 && "💚"}
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{point}</h3>
                        </div>
                    ))}
                </div>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white border border-green-200 rounded-lg p-4 sm:p-6 flex items-start gap-3 sm:gap-4 hover:border-green-400 transition-colors"
                        >
                            <div className="text-xl sm:text-2xl flex-shrink-0">✓</div>
                            <p className="text-gray-700 font-medium text-sm sm:text-base">{feature}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;







