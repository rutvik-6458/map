"use client";

import { motion } from "framer-motion";
import { Coffee, UtensilsCrossed, CakeSlice } from "lucide-react";

const menuItems = [
    {
        name: "Cold Brew Coffee",
        price: "₹245",
        description: "Slow-steeped for 18 hours for a smooth, low-acid finish.",
        category: "Signature",
        image: "/assets/Cold Brew Coffee.jfif"
    },
    {
        name: "Iced Americano",
        price: "₹185",
        description: "Refreshing and bold, perfect for those hot Surat afternoons.",
        category: "Coffee",
        image: "/assets/Iced Americano.webp"
    },
    {
        name: "New York Cheesecake",
        price: "₹215",
        description: "Rich, creamy and smooth—our most popular dessert.",
        category: "Dessert",
        image: "/assets/gluten-free-new-york-cheesecake-1450985-hero-01-dc54f9daf38044238b495c7cefc191fa.jpg"
    },
    {
        name: "Spicy Cottage Cheese Sandwich",
        price: "₹265",
        description: "Grilled paneer with signature spices and fresh veggies.",
        category: "Brunch",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=600"
    }
];

export default function Menu() {
    return (
        <section id="menu" className="section-padding bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Signature Selection</h2>
                        <p className="text-gray-600 text-lg">
                            Carefully curated items that define our brand—from our signature cold brews to our famous artisanal desserts.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <div className="p-4 bg-white rounded-2xl shadow-sm flex items-center gap-3">
                            <Coffee className="w-6 h-6 text-orange-600" />
                            <div className="text-left">
                                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Coffee</p>
                                <p className="font-bold">40+ Varieties</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {menuItems.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500"
                        >
                            <div className="h-64 relative overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-bold text-orange-600">
                                    {item.category}
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-orange-600 transition-colors">
                                        {item.name}
                                    </h3>
                                    <span className="text-gray-900 font-bold ml-2">{item.price}</span>
                                </div>
                                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                                    {item.description}
                                </p>
                                <button className="w-full py-3 bg-gray-50 group-hover:bg-orange-600 text-gray-700 group-hover:text-white rounded-xl font-bold transition-all duration-300">
                                    Add to Cart
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
