"use client";

import { motion } from "framer-motion";
import { Coffee, Pizza, IceCream, Sandwich } from "lucide-react";
import gallery1 from "@/assets/gallery1.jpg";

const categories = [
    {
        icon: <Coffee />,
        name: "Beverages",
        items: ["Signature Coffee", "Craft Tonics", "Fresh Smoothies", "Herbal Teas"],
        image: gallery1.src
    },
    {
        icon: <Sandwich />,
        name: "Cafe Bites",
        items: ["Gourmet Sandwiches", "Handmade Pasta", "Crispy Appetizers", "Fresh Salads"],
        image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=1000&auto=format&fit=crop"
    },
    {
        icon: <IceCream />,
        name: "Desserts",
        items: ["Artisan Pastries", "Signature Cakes", "Waffle Delights", "Smoothie Bowls"],
        image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1000&auto=format&fit=crop"
    }
];

const Menu = () => {
    return (
        <section id="menu" className="py-16 sm:py-20 md:py-24 bg-nature-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 md:mb-16 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-3 sm:mb-4 text-nature-950">
                            Handcrafted With <span className="text-nature-600 italic">Nature's Finest</span>
                        </h2>
                        <p className="text-base sm:text-lg text-nature-800/70">
                            From morning brews to late-night bites, every dish is crafted to match our blissful ambience.
                        </p>
                    </div>
                    <button className="bg-nature-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium hover:bg-nature-800 transition-colors text-sm sm:text-base w-full md:w-auto">
                        View Full Menu
                    </button>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-white rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-xl shadow-nature-100/50 border border-nature-100"
                        >
                            <div className="h-48 sm:h-56 md:h-64 overflow-hidden relative">
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-white/90 backdrop-blur px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-2 text-nature-900 font-bold text-sm sm:text-base">
                                    {cat.icon}
                                    <span>{cat.name}</span>
                                </div>
                            </div>
                            <div className="p-6 sm:p-8">
                                <ul className="space-y-3 sm:space-y-4">
                                    {cat.items.map((item, i) => (
                                        <li key={i} className="flex items-center justify-between group/item">
                                            <span className="text-nature-800 font-medium group-hover/item:text-nature-600 transition-colors text-sm sm:text-base">{item}</span>
                                            <div className="h-[1px] flex-grow mx-3 sm:mx-4 bg-nature-100 group-hover/item:bg-nature-300" />
                                            <span className="text-nature-400 text-xs sm:text-sm">Popular</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Menu;
