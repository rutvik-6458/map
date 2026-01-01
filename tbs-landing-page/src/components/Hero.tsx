"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-amber-100 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[300px] h-[300px] bg-rose-100 rounded-full blur-3xl opacity-40" />
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center space-x-2 text-amber-800 font-bold mb-4">
                        <Star className="fill-amber-500 text-amber-500" size={20} />
                        <span className="tracking-widest uppercase text-sm">Surat's Premium Bakery Cafe</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
                        The Baking Stories – <br />
                        <span className="text-amber-800">Freshly</span> Baked.
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
                        Enjoy artisan bakes, cafe food, and desserts in a relaxing ambience.
                        From sourdough to cakes, everything is crafted with care.
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <a
                            href="#menu"
                            className="bg-amber-800 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center space-x-2 hover:bg-amber-900 transition-all shadow-xl shadow-amber-900/10"
                        >
                            <span>Explore Menu</span>
                            <ArrowRight size={20} />
                        </a>
                        <a
                            href="https://wa.me/919662714166"
                            className="border-2 border-amber-800 text-amber-800 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center space-x-2 hover:bg-amber-50 transition-all"
                        >
                            Order Online
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl skew-y-3 relative z-10">
                        <img
                            src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800"
                            alt="Artisan Breads and Bakes"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 flex items-center space-x-4">
                        <div className="bg-amber-100 p-3 rounded-xl">
                            <Star className="fill-amber-600 text-amber-600" />
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-slate-900">4.7 / 5</p>
                            <p className="text-sm text-slate-500">465+ Google Reviews</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
