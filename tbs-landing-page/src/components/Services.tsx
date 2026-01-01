"use client";

import React from "react";
import { motion } from "framer-motion";

const menuItems = [
    {
        category: "Bakery",
        items: [
            { name: "Artisan Breads", desc: "Fresh sourdough, multi-grain, and classic loaves." },
            { name: "Cakes & Pastries", desc: "Handcrafted desserts for every craving and celebration." }
        ],
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800"
    },
    {
        category: "Cafe Food",
        items: [
            { name: "Gourmet Pizzas", desc: "Wood-fired style pizzas with premium toppings." },
            { name: "Signature Kebabs", desc: "Succulent and flavorful kebabs, a local favorite." }
        ],
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800"
    }
];

export default function Services() {
    return (
        <section id="menu" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Signature Highlights</h2>
                        <p className="text-slate-600 text-lg">
                            Explore the flavors that make TBS / The Baking Stories a destination in Surat.
                        </p>
                    </div>
                    <a href="#" className="text-amber-800 font-bold border-b-2 border-amber-800 pb-1 hover:text-amber-600 hover:border-amber-600 transition-all">
                        View Full Menu
                    </a>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {menuItems.map((menu, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/50"
                        >
                            <div className="h-64 relative">
                                <img src={menu.image} alt={menu.category} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                    <h3 className="text-3xl font-bold text-white">{menu.category}</h3>
                                </div>
                            </div>
                            <div className="p-8 space-y-6">
                                {menu.items.map((item, i) => (
                                    <div key={i} className="flex justify-between items-start group">
                                        <div>
                                            <h4 className="text-xl font-bold text-slate-900 group-hover:text-amber-800 transition-colors uppercase tracking-tight">{item.name}</h4>
                                            <p className="text-slate-500 mt-1">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
