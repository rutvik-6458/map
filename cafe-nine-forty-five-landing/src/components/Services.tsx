"use client";
import React from "react";
import { motion } from "framer-motion";
import { Coffee, UtensilsCrossed, Users } from "lucide-react";
import { cafeData } from "@/data";

export default function Services() {
    const services = cafeData.positioning.signature_items_or_services;

    const menuItems = services.map((service, idx) => {
        let icon = Coffee;
        let category = "Services";

        if (service.toLowerCase().includes("refreshment") || service.toLowerCase().includes("food")) {
            icon = Coffee;
            category = "Refreshments";
        } else if (service.toLowerCase().includes("seating") || service.toLowerCase().includes("dine")) {
            icon = UtensilsCrossed;
            category = "Dining";
        } else if (service.toLowerCase().includes("sports")) {
            icon = Users;
            category = "Services";
        }

        return {
            icon,
            title: service,
            description: cafeData.content_blocks.features_bullets[idx] || `Enjoy our ${service.toLowerCase()}.`,
            category
        };
    });

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
                <div className="text-center mb-12 sm:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight">
                            Our Services
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg font-medium max-w-2xl mx-auto px-4">
                            What we offer for your perfect evening hangout experience.
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
                                className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/40 flex flex-col group hover:shadow-2xl hover:shadow-amber-100/50 transition-all duration-500 hover:-translate-y-2"
                            >
                                <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-amber-50 w-fit rounded-xl sm:rounded-2xl group-hover:bg-amber-600 group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                                    <Icon size={32} className="sm:w-10 sm:h-10 text-amber-600 group-hover:text-white transition-colors duration-500" />
                                </div>
                                <div className="mb-3 sm:mb-4">
                                    <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">
                                        {item.category}
                                    </span>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base font-medium leading-relaxed flex-grow">
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
                    className="mt-12 sm:mt-16 text-center px-4"
                >
                    <p className="text-gray-500 text-sm sm:text-base font-medium mb-4 sm:mb-6">
                        Perfect for {cafeData.positioning.best_for.join(", ").toLowerCase()}
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                        {cafeData.positioning.best_for.map((tag, idx) => (
                            <span
                                key={idx}
                                className="px-4 sm:px-6 py-2 sm:py-3 bg-amber-50 text-amber-700 rounded-full font-bold text-xs sm:text-sm border border-amber-200"
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

