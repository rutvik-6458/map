"use client";

import React from "react";
import { motion } from "framer-motion";
import { Coffee, Cake, Utensils, Zap, ShieldCheck, Clock } from "lucide-react";

const features = [
    {
        icon: <Clock />,
        title: "Fresh Daily",
        description: "Our items are baked fresh every morning to ensure the best taste and quality."
    },
    {
        icon: <Cake />,
        title: "Custom Cakes",
        description: "Celebrate your special moments with our beautifully crafted custom cakes."
    },
    {
        icon: <Utensils />,
        title: "Diverse Menu",
        description: "From artisan sourdough to pizza and kebabs, we have something for everyone."
    },
    {
        icon: <Zap />,
        title: "Quick Pickup",
        description: "Kerbside pickup available for your convenience. Grab your bakes on the go."
    },
    {
        icon: <Coffee />,
        title: "Relaxing Vibe",
        description: "Our cafe offers a warm hospitality and relaxing ambience for dine-in."
    },
    {
        icon: <ShieldCheck />,
        title: "Women Owned",
        description: "Proudly a women-owned business focused on quality and hospitality."
    }
];

export default function Features() {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Why Choose TBS?</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        We combine traditional baking methods with modern hospitality to create
                        experiences, not just food.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group p-8 rounded-3xl border border-slate-100 hover:border-amber-200 hover:bg-amber-50/30 transition-all duration-300"
                        >
                            <div className="w-14 h-14 bg-amber-100 text-amber-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {React.cloneElement(feature.icon as React.ReactElement, { size: 28 })}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
