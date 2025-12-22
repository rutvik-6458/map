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
        <section id="features" className="py-20 px-4 bg-gradient-to-b from-green-50 to-white">
            <div className="container mx-auto max-w-6xl">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Why Choose <span className="text-green-600">SaladO Cafe</span>?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        A cafe where nutrition meets flavour
                    </p>
                </div>

                {/* Unique Selling Points */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {uniqueSellingPoints.map((point, index) => (
                        <div
                            key={index}
                            className="bg-white border border-green-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                        >
                            <div className="text-5xl mb-4">
                                {index === 0 && "🥗"}
                                {index === 1 && "🌿"}
                                {index === 2 && "💚"}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{point}</h3>
                        </div>
                    ))}
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white border border-green-200 rounded-lg p-6 flex items-start gap-4 hover:border-green-400 transition-colors"
                        >
                            <div className="text-2xl flex-shrink-0">✓</div>
                            <p className="text-gray-700 font-medium">{feature}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;

