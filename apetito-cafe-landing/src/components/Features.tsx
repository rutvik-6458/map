"use client";

import { Card } from "@/components/ui/card";
import { Coffee, UtensilsCrossed, Armchair, Car, Heart, Wifi } from "lucide-react";

const Features = () => {
    const features = [
        {
            icon: Coffee,
            title: "Specialty Coffee & Beverages",
            description: "Expertly crafted coffee and refreshing cold drinks",
            gradient: "from-amber-500 to-orange-500",
        },
        {
            icon: UtensilsCrossed,
            title: "Italian-Inspired Cuisine",
            description: "Delicious pastas and café food made with care",
            gradient: "from-orange-500 to-red-500",
        },
        {
            icon: Armchair,
            title: "Modern Aesthetic Interiors",
            description: "Instagram-worthy design with cozy seating",
            gradient: "from-pink-500 to-rose-500",
        },
        {
            icon: Car,
            title: "Drive-Through Available",
            description: "Convenient pickup for on-the-go orders",
            gradient: "from-blue-500 to-cyan-500",
        },
        {
            icon: Heart,
            title: "LGBTQ+ Friendly Space",
            description: "Welcoming and inclusive environment for all",
            gradient: "from-purple-500 to-pink-500",
        },
        {
            icon: Wifi,
            title: "Perfect for Hangouts",
            description: "Ideal spot for friends, work, or relaxation",
            gradient: "from-green-500 to-emerald-500",
        },
    ];

    return (
        <section id="features" className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-b from-white to-amber-50">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                        ✨ Why Choose Apetito
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                        What Makes Us Special
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-2">
                        A modern café designed for quality time and good food
                    </p>
                </div>

                {/* About Paragraph */}
                <Card className="p-5 sm:p-6 md:p-8 lg:p-12 mb-8 sm:mb-12 lg:mb-16 bg-white border-2 border-amber-200 shadow-xl">
                    <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed text-center">
                        Apetito is a popular café in the Vesu–Bharthana area of Surat, known for its{" "}
                        <span className="font-semibold text-amber-700">modern design</span>,{" "}
                        <span className="font-semibold text-amber-700">cozy ambience</span> and{" "}
                        <span className="font-semibold text-amber-700">thoughtfully prepared food</span>.
                        Guests love the calm vibe, quality coffee and Italian-inspired dishes, making it a
                        perfect spot for relaxed dining, conversations and café hopping. With dine-in and
                        drive-through options, Apetito offers both comfort and convenience.
                    </p>
                </Card>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <Card
                                key={index}
                                className="group p-5 sm:p-6 lg:p-8 bg-white border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
                            >
                                {/* Gradient Background on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                                {/* Icon */}
                                <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                                </div>

                                {/* Content */}
                                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-amber-600 group-hover:to-orange-600 transition-all duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                    {feature.description}
                                </p>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Features;
