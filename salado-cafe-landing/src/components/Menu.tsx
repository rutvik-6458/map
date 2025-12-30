"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Menu = () => {
    const signatureItems = [
        {
            name: "Healthy Salads & Wraps",
            description: "Fresh, nutritious salads and wraps made with premium ingredients",
            icon: "🥗",
        },
        {
            name: "Classic Hummus & Peanut Melody Salad",
            description: "A delightful combination of hummus and peanuts in a fresh salad",
            icon: "🥙",
        },
        {
            name: "Paneer Paradise",
            description: "A healthy and flavorful paneer-based dish",
            icon: "🧀",
        },
    ];

    const bestFor = [
        "Healthy eating and clean food",
        "Quick nutritious meals",
        "Late-night healthy options",
    ];

    return (
        <section id="menu" className="py-12 sm:py-16 md:py-20 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
                {/* Section Header */}
                <div className="text-center mb-10 sm:mb-12 md:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
                        Our <span className="text-green-600">Signature Items</span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                        Discover our most loved healthy dishes
                    </p>
                </div>

                {/* Signature Items */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
                    {signatureItems.map((item, index) => (
                        <Card
                            key={index}
                            className="border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-lg"
                        >
                            <CardHeader className="p-4 sm:p-6">
                                <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">{item.icon}</div>
                                <CardTitle className="text-lg sm:text-xl md:text-2xl text-gray-900">{item.name}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-4 sm:p-6 pt-0">
                                <CardDescription className="text-gray-600 text-sm sm:text-base">
                                    {item.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Best For Section */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 sm:p-8 md:p-12">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
                        Best For
                    </h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                        {bestFor.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg p-4 sm:p-6 text-center border border-green-200"
                            >
                                <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">
                                    {index === 0 && "🥗"}
                                    {index === 1 && "⚡"}
                                    {index === 2 && "🌙"}
                                </div>
                                <p className="text-gray-700 font-medium text-sm sm:text-base">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Menu;







