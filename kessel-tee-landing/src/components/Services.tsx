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

        if (service.toLowerCase().includes("chai") || service.toLowerCase().includes("tea")) {
            icon = Coffee;
            category = "Beverages";
        } else if (service.toLowerCase().includes("dosa") || service.toLowerCase().includes("pizza") || service.toLowerCase().includes("sandwich")) {
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
        <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 sm:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight px-4">
                            Menu Highlights
                        </h2>
                        <p className="text-gray-600 text-base sm:text-lg font-medium max-w-2xl mx-auto px-4">
                            Our crowd-favourite items that keep people coming back.
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
                                <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-amber-50 w-fit rounded-xl sm:rounded-2xl group-hover:bg-amber-600 group-hover:text-white transition-colors duration-500 relative">
                                    <Icon size={32} className="w-8 h-8 sm:w-10 sm:h-10 text-amber-600 group-hover:text-white transition-colors duration-500 cursor-pointer" />
                                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900 text-white text-xs sm:text-sm font-bold rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 shadow-lg">
                                        {item.title}
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 w-2 h-2 bg-gray-900 rotate-45"></div>
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">
                                        {item.category}
                                    </span>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
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
                    className="mt-12 sm:mt-16 text-center"
                >
                    <p className="text-gray-500 font-medium mb-4 sm:mb-6 text-sm sm:text-base px-4">
                        Perfect for {cafeData.positioning.best_for.join(", ").toLowerCase()}
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 px-4">
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


