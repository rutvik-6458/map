"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, Users, Shield, MapPin, Coffee, Truck } from "lucide-react";
import { cafeData } from "@/data";

export default function Features() {
    const features = cafeData.content_blocks.features_bullets.map((bullet, idx) => {
        let icon = Coffee;
        let color = "purple";

        if (bullet.toLowerCase().includes("privacy")) {
            icon = Shield;
            color = "purple";
        } else if (bullet.toLowerCase().includes("party") || bullet.toLowerCase().includes("group")) {
            icon = Users;
            color = "pink";
        } else if (bullet.toLowerCase().includes("review") || bullet.toLowerCase().includes("rating")) {
            icon = Star;
            color = "amber";
        } else if (bullet.toLowerCase().includes("location") || bullet.toLowerCase().includes("road")) {
            icon = MapPin;
            color = "blue";
        } else if (bullet.toLowerCase().includes("delivery") || bullet.toLowerCase().includes("drive")) {
            icon = Truck;
            color = "green";
        } else {
            icon = Coffee;
            color = "purple";
        }

        return {
            icon,
            title: bullet,
            description: "",
            color
        };
    });

    const iconColors = {
        blue: "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
        purple: "bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
        green: "bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white",
        pink: "bg-pink-100 text-pink-600 group-hover:bg-pink-600 group-hover:text-white",
        amber: "bg-amber-100 text-amber-600 group-hover:bg-amber-600 group-hover:text-white",
    };

    return (
        <section className="py-12 sm:py-16 lg:py-24 bg-white" id="features">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
                <div className="text-center mb-10 sm:mb-12 lg:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 tracking-tight px-2">
                            Why Choose {cafeData.brand.business_name}
                        </h2>
                        <p className="text-gray-600 text-sm sm:text-base lg:text-lg font-medium max-w-2xl mx-auto px-4">
                            {cafeData.content_blocks.about_paragraph}
                        </p>
                    </motion.div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {features.map((feature, idx) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                                className="bg-white p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-[2rem] lg:rounded-[2.5rem] border border-gray-100 shadow-lg shadow-gray-100/50 flex flex-col group hover:shadow-2xl hover:shadow-purple-100/50 transition-all duration-500"
                            >
                                <div className={`mb-4 sm:mb-5 lg:mb-6 p-3 sm:p-3.5 lg:p-4 w-fit rounded-xl sm:rounded-2xl transition-colors duration-500 ${iconColors[feature.color as keyof typeof iconColors]}`}>
                                    <Icon size={24} className="sm:w-7 sm:h-7 lg:w-8 lg:h-8" />
                                </div>
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">
                                    {feature.title}
                                </h3>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
