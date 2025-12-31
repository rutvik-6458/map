"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Coffee, Utensils, Sandwich } from "lucide-react";

import pastaImage from "@/assets/gallery1.jpg";

const Services = () => {
    const items = [
        {
            name: "Pink Sauce Pasta",
            desc: "Our customer-favorite signature dish. Creamy, tangy, and absolutely delicious.",
            category: "Pasta",
            icon: Utensils,
            image: pastaImage.src
        },
        {
            name: "Aaloo Tikki Burger",
            desc: "Perfectly spiced patty with fresh veggies and our special house sauce.",
            category: "Burgers",
            icon: Sandwich,
            image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&q=80"
        },
        {
            name: "Cold Coffee",
            desc: "The ultimate refresher. Rich, creamy coffee served chilled to perfection.",
            category: "Beverages",
            icon: Coffee,
            image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80"
        }
    ];

    return (
        <section id="services" className="py-24 bg-white">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl text-center md:text-left">
                        <h2 className="font-playfair text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                            Signature <span className="text-amber-600">Menu</span>
                        </h2>
                        <p className="text-slate-600 text-base md:text-lg">
                            Hand-picked favorites that our customers can't get enough of. Budget-friendly treats made with love.
                        </p>
                    </div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="hidden md:block bg-amber-600 text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-amber-600/20 cursor-pointer"
                    >
                        Full Menu Available at Cafe
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Card className="overflow-hidden border-none shadow-xl shadow-slate-200/50 rounded-3xl group">
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-700 uppercase tracking-widest shadow-sm">
                                        {item.category}
                                    </div>
                                </div>
                                <CardContent className="p-8">
                                    <div className="flex items-start justify-between mb-4">
                                        <h3 className="text-2xl font-bold text-slate-900">{item.name}</h3>
                                        <item.icon className="w-6 h-6 text-amber-600 shrink-0" />
                                    </div>
                                    <p className="text-slate-600 leading-relaxed mb-6">
                                        {item.desc}
                                    </p>
                                    <div className="flex items-center text-amber-600 font-bold text-sm uppercase tracking-wider group-hover:underline cursor-pointer">
                                        Order Now
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
