"use client";
import React from "react";
import { motion } from "framer-motion";
import { Coffee, UtensilsCrossed, ChefHat } from "lucide-react";
import { cafeData } from "@/data";

export default function Services() {
    const services = cafeData.positioning.signature_items_or_services;

    const menuItems = services.map((service, idx) => {
        let icon = Coffee;
        let category = "Signature Items";

        if (service.toLowerCase().includes("coffee")) {
            icon = Coffee;
            category = "Beverages";
        } else if (service.toLowerCase().includes("nachos") || service.toLowerCase().includes("bread")) {
            icon = UtensilsCrossed;
            category = "Snacks";
        } else {
            icon = ChefHat;
            category = "Menu";
        }

        return {
            icon,
            title: service,
            description: `Our popular ${service.toLowerCase()} that customers love.`,
            category
        };
    });

    return (
        <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
                <div className="text-center mb-10 sm:mb-12 lg:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 tracking-tight px-2">
                            Menu Highlights
                        </h2>
                        <p className="text-gray-600 text-sm sm:text-base lg:text-lg font-medium max-w-2xl mx-auto px-4">
                            Our crowd-favourite items that keep people coming back.
                        </p>
                    </motion.div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {menuItems.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.6 }}
                                className="bg-white p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-[2rem] lg:rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/40 flex flex-col group hover:shadow-2xl hover:shadow-purple-100/50 transition-all duration-500 hover:-translate-y-2"
                            >
                                <div className="mb-4 sm:mb-5 lg:mb-6 p-3 sm:p-3.5 lg:p-4 bg-purple-600 text-white w-fit rounded-xl sm:rounded-2xl group-hover:bg-purple-700 transition-colors duration-500">
                                    <Icon size={28} className="sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
                                </div>
                                <div className="mb-3 sm:mb-4">
                                    <span className="text-[10px] sm:text-xs font-bold text-purple-600 uppercase tracking-widest">
                                        {item.category}
                                    </span>
                                </div>
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600 font-medium leading-relaxed flex-grow">
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
                    className="mt-10 sm:mt-12 lg:mt-16 text-center px-4"
                >
                    <p className="text-gray-500 font-medium mb-4 sm:mb-6 text-sm sm:text-base">
                        Perfect for {cafeData.positioning.best_for.join(", ").toLowerCase()}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4">
                        {cafeData.positioning.best_for.map((tag, idx) => (
                            <span
                                key={idx}
                                className="px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 bg-purple-50 text-purple-700 rounded-full font-bold text-xs sm:text-sm border border-purple-200"
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
