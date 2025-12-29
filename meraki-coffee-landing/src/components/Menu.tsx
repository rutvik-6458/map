"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Menu() {
    const signatureItems = [
        {
            name: "Cold Brew Coffee",
            description: "Slow-steeped for 18 hours for a smooth, low-acid finish.",
            price: "Best Seller"
        },
        {
            name: "Flat White Cappuccino",
            description: "Rich espresso with velvety micro-foam.",
            price: "Signature"
        },
        {
            name: "Vietnamese Iced Coffee",
            description: "Bold dark roast with traditional condensed milk.",
            price: "Popular"
        }
    ];

    return (
        <section id="menu" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 sm:gap-12 lg:gap-16">
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-outfit font-bold text-stone-900 mb-6 sm:mb-8 leading-tight">
                            Our Signature <br className="hidden sm:block" />
                            <span className="text-stone-400">Coffee Creations</span>
                        </h2>
                        <div className="space-y-8 sm:space-y-10">
                            {signatureItems.map((item, i) => (
                                <div key={i} className="group relative pl-4 sm:pl-0">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2 sm:gap-0 mb-2">
                                        <h3 className="text-lg sm:text-xl font-bold text-stone-900 group-hover:text-[#D4A373] transition-colors font-outfit">
                                            {item.name}
                                        </h3>
                                        <span className="text-xs uppercase tracking-widest font-bold text-stone-400 px-2 py-1 rounded bg-stone-50 w-fit">
                                            {item.price}
                                        </span>
                                    </div>
                                    <p className="text-sm sm:text-base text-stone-500 leading-relaxed max-w-md">
                                        {item.description}
                                    </p>
                                    <div className="absolute left-0 sm:-left-4 top-0 bottom-0 w-1 bg-stone-100 group-hover:bg-[#D4A373] transition-all" />
                                </div>
                            ))}
                        </div>

                        <button className="mt-8 sm:mt-12 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-stone-100 hover:border-stone-900 text-stone-900 font-bold rounded-full transition-all uppercase tracking-widest text-xs sm:text-sm">
                            View Full Menu
                        </button>
                    </div>

                    <div className="w-full lg:w-1/2 relative">
                        <div className="relative aspect-square max-w-full sm:max-w-[400px] lg:max-w-[500px] mx-auto overflow-hidden rounded-3xl sm:rounded-[40px] shadow-2xl skew-y-1">
                            <Image
                                src="/menu-signature.png"
                                alt="Meraki Speciality Coffee and Dessert"
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 500px"
                            />
                        </div>
                        {/* Floating Badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 md:right-0 bg-stone-900 text-white p-4 sm:p-6 md:p-8 rounded-full flex flex-col items-center justify-center text-center shadow-xl border-2 sm:border-4 border-white"
                        >
                            <span className="text-[10px] sm:text-xs uppercase font-bold text-stone-400">Since</span>
                            <span className="text-lg sm:text-xl font-outfit font-bold">2020</span>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
