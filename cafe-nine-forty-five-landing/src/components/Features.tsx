"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, Clock, Users, MapPin, Coffee, Heart } from "lucide-react";
import { cafeData } from "@/data";

export default function Features() {
    const features = [
        {
            icon: Star,
            title: "5-Star Rated Cafe",
            description: "Highly rated with excellent reviews for ambience and service.",
            color: "amber"
        },
        {
            icon: Clock,
            title: "Evening Cafe",
            description: "Opens at 6 pm, perfect for evening hangouts and get-togethers.",
            color: "purple"
        },
        {
            icon: Users,
            title: "Great for Groups",
            description: "Amazing ambience that's perfect for group hangouts and celebrations.",
            color: "blue"
        },
        {
            icon: MapPin,
            title: "Next to Pickleball Court",
            description: "Located beside Netflicks Pickle Ball, ideal for post-sports refreshments.",
            color: "green"
        },
        {
            icon: Coffee,
            title: "Cafe Refreshments",
            description: "Enjoy delicious refreshments and food in a comfortable setting.",
            color: "amber"
        },
        {
            icon: Heart,
            title: "Ideal for Hangouts",
            description: "The perfect spot for friends to catch up and enjoy quality time together.",
            color: "red"
        },
    ];

    const iconColors = {
        blue: "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
        amber: "bg-amber-100 text-amber-600 group-hover:bg-amber-600 group-hover:text-white",
        green: "bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white",
        red: "bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white",
        purple: "bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
    };

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white" id="features">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
                <div className="text-center mb-12 sm:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight px-4">
                            Why Choose {cafeData.brand.business_name}
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg font-medium max-w-2xl mx-auto px-4">
                            {cafeData.content_blocks.about_paragraph}
                        </p>
                    </motion.div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {features.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                                className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-[2.5rem] border border-gray-100 shadow-lg shadow-gray-100/50 flex flex-col group hover:shadow-2xl hover:shadow-amber-100/50 transition-all duration-500"
                            >
                                <div className={`mb-4 sm:mb-6 p-3 sm:p-4 w-fit rounded-xl sm:rounded-2xl transition-colors duration-500 ${iconColors[feature.color as keyof typeof iconColors]}`}>
                                    <Icon size={28} className="sm:w-8 sm:h-8" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base font-medium leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

