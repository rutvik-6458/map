"use client";
import React from "react";
import { motion } from "framer-motion";
import { Coffee, UtensilsCrossed, GlassWater } from "lucide-react";

export default function Services() {
    const menuItems = [
        {
            icon: Coffee,
            title: "Bubble Tea",
            description: "Customisable bubble tea with a wide variety of flavours to choose from.",
            category: "Beverages"
        },
        {
            icon: UtensilsCrossed,
            title: "Waffles",
            description: "Delicious waffles with ice cream and customisable toppings.",
            category: "Desserts"
        },
        {
            icon: GlassWater,
            title: "Milkshakes & Frappes",
            description: "Refreshing milkshakes and frappes for your perfect break.",
            category: "Beverages"
        },
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 sm:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight px-2">
                            Our Signature Items
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg font-medium max-w-2xl mx-auto px-2">
                            Discover our popular menu items that keep guests coming back.
                        </p>
                    </motion.div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {menuItems.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                                className="bg-white p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/40 flex flex-col group hover:shadow-2xl hover:shadow-pink-100/50 transition-all duration-500 hover:-translate-y-2"
                            >
                                <div className="mb-5 sm:mb-6 p-3 sm:p-4 bg-pink-600 text-white w-fit rounded-2xl transition-colors duration-500">
                                    <Icon size={32} className="sm:w-10 sm:h-10" />
                                </div>
                                <div className="mb-3 sm:mb-4">
                                    <span className="text-xs font-bold text-pink-600 uppercase tracking-widest">
                                        {item.category}
                                    </span>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 font-medium leading-relaxed flex-grow text-sm sm:text-base">
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
                    className="mt-12 sm:mt-16 text-center px-2"
                >
                    <p className="text-gray-500 font-medium mb-5 sm:mb-6 text-sm sm:text-base">
                        Perfect for bubble tea lovers, late-night hangouts, and quick bites with friends
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                        {["Bubble tea lovers", "Late-night hangouts", "Quick bites with friends"].map((tag, idx) => (
                            <span
                                key={idx}
                                className="px-4 sm:px-6 py-2 sm:py-3 bg-pink-50 text-pink-700 rounded-full font-bold text-xs sm:text-sm border border-pink-200"
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





