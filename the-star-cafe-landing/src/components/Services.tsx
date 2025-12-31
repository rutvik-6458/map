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
        <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-10 sm:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight px-2">
                            Our Signature Items
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg font-medium max-w-2xl mx-auto px-4">
                            Discover our popular menu items that keep guests coming back.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {menuItems.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                                className="bg-white p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/40 flex flex-col group hover:shadow-2xl hover:shadow-amber-100/50 transition-all duration-500 hover:-translate-y-2"
                            >
                                <div className="mb-6 p-4 bg-amber-600 text-white w-fit rounded-2xl shadow-lg shadow-amber-200/50 transition-all duration-500">
                                    <Icon size={32} className="sm:hidden" />
                                    <Icon size={40} className="hidden sm:block" />
                                </div>
                                <div className="mb-3 sm:mb-4">
                                    <span className="text-[10px] sm:text-xs font-bold text-amber-600 uppercase tracking-widest">
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
                    className="mt-12 sm:mt-16 text-center"
                >
                    <p className="text-gray-500 font-bold text-xs sm:text-sm uppercase tracking-widest mb-6 sm:mb-8 opacity-70">
                        Perfect Experience For
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 px-4">
                        {[
                            "Small gatherings and celebrations",
                            "Students and casual meetups",
                            "Evening snacks and coffee"
                        ].map((tag, idx) => (
                            <span
                                key={idx}
                                className="px-4 sm:px-6 py-2 sm:py-3 bg-amber-50 text-amber-700 rounded-full font-bold text-[11px] sm:text-sm border border-amber-200 shadow-sm"
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





