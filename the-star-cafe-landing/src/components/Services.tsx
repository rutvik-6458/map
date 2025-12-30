"use client";
import React from "react";
import { motion } from "framer-motion";
import { Coffee, UtensilsCrossed, GlassWater } from "lucide-react";

export default function Services() {
    const menuItems = [
        {
            icon: GlassWater,
            title: "Mojito",
            description: "Refreshing and flavorful mojitos to quench your thirst.",
            category: "Beverages"
        },
        {
            icon: UtensilsCrossed,
            title: "Peri Peri Fries",
            description: "Crispy and spicy peri peri fries, a crowd favorite.",
            category: "Snacks"
        },
        {
            icon: Coffee,
            title: "Tea and Coffee",
            description: "Quality tea and coffee for your perfect break.",
            category: "Beverages"
        },
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white" id="services">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                            Our Signature Items
                        </h2>
                        <p className="text-gray-600 text-lg font-medium max-w-2xl mx-auto">
                            Discover our popular menu items that keep guests coming back.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {menuItems.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                                className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/40 flex flex-col group hover:shadow-2xl hover:shadow-amber-100/50 transition-all duration-500 hover:-translate-y-2"
                            >
                                <div className="mb-6 p-4 bg-amber-50 w-fit rounded-2xl group-hover:bg-amber-600 group-hover:text-white transition-colors duration-500">
                                    <Icon size={40} />
                                </div>
                                <div className="mb-4">
                                    <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">
                                        {item.category}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 font-medium leading-relaxed flex-grow">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <p className="text-gray-500 font-medium mb-6">
                        Perfect for small gatherings, students, and casual meetups
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {["Small gatherings and celebrations", "Students and casual meetups", "Evening snacks and coffee"].map((tag, idx) => (
                            <span
                                key={idx}
                                className="px-6 py-3 bg-amber-50 text-amber-700 rounded-full font-bold text-sm border border-amber-200"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}




