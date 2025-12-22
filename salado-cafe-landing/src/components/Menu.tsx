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
        <section id="menu" className="py-20 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Our <span className="text-green-600">Signature Items</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Discover our most loved healthy dishes
                    </p>
                </div>

                {/* Signature Items */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {signatureItems.map((item, index) => (
                        <Card
                            key={index}
                            className="border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-lg"
                        >
                            <CardHeader>
                                <div className="text-6xl mb-4">{item.icon}</div>
                                <CardTitle className="text-2xl text-gray-900">{item.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-gray-600 text-base">
                                    {item.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Best For Section */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 md:p-12">
                    <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                        Best For
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {bestFor.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg p-6 text-center border border-green-200"
                            >
                                <div className="text-4xl mb-3">
                                    {index === 0 && "🥗"}
                                    {index === 1 && "⚡"}
                                    {index === 2 && "🌙"}
                                </div>
                                <p className="text-gray-700 font-medium">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Menu;

