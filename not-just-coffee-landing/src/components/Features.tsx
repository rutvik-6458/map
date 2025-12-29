"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, Coffee, Heart, MapPin, Users, Sparkles } from "lucide-react";
import { cafeData } from "@/data";

export default function Features() {
    const features = [
        {
            icon: Star,
            title: "4.5-Star Rated Coffee Shop",
            description: "Highly rated with excellent reviews for ambience, food, and service.",
            color: "amber"
        },
        {
            icon: Coffee,
            title: "Cozy and Clean Ambience",
            description: "Enjoy a pleasant atmosphere with clean surroundings perfect for relaxation.",
            color: "amber"
        },
        {
            icon: Heart,
            title: "Tasty Desserts and Beverages",
            description: "Indulge in delicious desserts and quality coffee that customers love.",
            color: "red"
        },
        {
            icon: Users,
            title: "Friendly and Polite Staff",
            description: "Experience excellent service from well-behaved and courteous team members.",
            color: "blue"
        },
        {
            icon: MapPin,
            title: "Easy-to-Reach VIP Road Location",
            description: "Conveniently located on VIP Road in Vesu for easy access.",
            color: "green"
        },
        {
            icon: Sparkles,
            title: "Dine-in Seating Available",
            description: "Comfortable seating for casual coffee breaks and relaxed hangouts.",
            color: "purple"
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
        <section className="py-24 bg-white" id="features">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                            Why Choose {cafeData.brand.business_name}
                        </h2>
                        <p className="text-gray-600 text-lg font-medium max-w-2xl mx-auto">
                            {cafeData.content_blocks.about_paragraph}
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                                className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-lg shadow-gray-100/50 flex flex-col group hover:shadow-2xl hover:shadow-amber-100/50 transition-all duration-500"
                            >
                                <div className={`mb-6 p-4 w-fit rounded-2xl transition-colors duration-500 ${iconColors[feature.color as keyof typeof iconColors]}`}>
                                    <Icon size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 font-medium leading-relaxed">
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


