"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star, Users, Clock, MapPin, UtensilsCrossed, Truck } from "lucide-react";
import { cafeData } from "@/data";

export default function Features() {
    const features = cafeData.content_blocks.features_bullets.map((bullet, idx) => {
        let icon = UtensilsCrossed;
        let color = "orange";

        if (bullet.toLowerCase().includes("review") || bullet.toLowerCase().includes("rating")) {
            icon = Star;
            color = "orange";
        } else if (bullet.toLowerCase().includes("pancake") || bullet.toLowerCase().includes("dessert")) {
            icon = UtensilsCrossed;
            color = "orange";
        } else if (bullet.toLowerCase().includes("open") || bullet.toLowerCase().includes("close") || bullet.toLowerCase().includes("midnight")) {
            icon = Clock;
            color = "pink";
        } else if (bullet.toLowerCase().includes("location") || bullet.toLowerCase().includes("vesu")) {
            icon = MapPin;
            color = "blue";
        } else if (bullet.toLowerCase().includes("delivery") || bullet.toLowerCase().includes("takeaway")) {
            icon = Truck;
            color = "green";
        } else {
            icon = Users;
            color = "orange";
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
        orange: "bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white",
        green: "bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white",
        pink: "bg-pink-100 text-pink-600 group-hover:bg-pink-600 group-hover:text-white",
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
                                className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-lg shadow-gray-100/50 flex flex-col group hover:shadow-2xl hover:shadow-orange-100/50 transition-all duration-500"
                            >
                                <div className={`mb-6 p-4 w-fit rounded-2xl transition-colors duration-500 ${iconColors[feature.color as keyof typeof iconColors]}`}>
                                    <Icon size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">
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



