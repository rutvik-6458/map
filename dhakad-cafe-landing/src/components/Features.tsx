"use client";

import { Clock, Coffee, Utensils, Truck, Users, Moon } from "lucide-react";

const Features = () => {
    const features = [
        {
            icon: Clock,
            title: "Open till 2 am",
            description: "Perfect for late-night cravings and hangouts"
        },
        {
            icon: Coffee,
            title: "Special tea with unique taste",
            description: "Our signature tea that stands out from the rest"
        },
        {
            icon: Utensils,
            title: "Popular cheese chilli toast",
            description: "A must-try favorite among our customers"
        },
        {
            icon: Utensils,
            title: "Quick snacks like puff and Maggi",
            description: "Simple comfort food for any time"
        },
        {
            icon: Truck,
            title: "Dine-in, drive-through and delivery available",
            description: "Multiple ways to enjoy our offerings"
        },
        {
            icon: Users,
            title: "Casual seating for friends",
            description: "Comfortable space for gatherings"
        }
    ];

    return (
        <section id="features" className="py-12 sm:py-16 bg-gradient-to-b from-white to-amber-50">
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                        Why Choose Dhakad Cafe?
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
                        Simple food, comfortable seating and a relaxed vibe.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white p-4 sm:p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Features;




