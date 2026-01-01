"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-[90vh] md:min-h-screen flex items-center pt-28 md:pt-20 px-4 overflow-hidden bg-[#FFFAF5]">
            {/* Decorative Orbs */}
            <div className="absolute top-[-10%] right-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#DB2777]/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-[#D97706]/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-6 text-center md:text-left items-center md:items-start"
                >
                    <div className="flex items-center gap-2 bg-[#DB2777]/10 text-[#DB2777] px-4 py-1.5 rounded-full w-fit text-sm font-bold border border-[#DB2777]/20">
                        <Star size={16} fill="currentColor" />
                        4.9 Rated Bakery in Vesu
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-playfair font-bold text-[#2D241E] leading-[1.1]">
                        Shades On Cake – <span className="text-[#DB2777]">Designer Cakes</span> You'll Love
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl text-[#6B5E55] max-w-xl leading-relaxed">
                        Order designer cakes with great taste and elegant finishes. Perfect for birthdays, anniversaries, and all your special celebrations.
                    </p>


                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <a
                            href="#services"
                            className="group flex items-center justify-center gap-2 bg-[#DB2777] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#BE185D] transition-all shadow-xl hover:shadow-[#DB2777]/40"
                        >
                            Order Your Cake
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#location"
                            className="flex items-center justify-center gap-2 bg-white text-[#2D241E] border-2 border-[#E5E7EB] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-sm"
                        >
                            Visit Shop
                        </a>
                    </div>

                    <div className="flex items-center gap-6 mt-8">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-12 h-12 rounded-full border-4 border-[#FFFAF5] bg-[#F1E9E2] overflow-hidden">
                                    {/* Placeholder avatars */}
                                    <div className="w-full h-full bg-gradient-to-br from-[#DB2777]/20 to-[#D97706]/20 flex items-center justify-center text-xs font-bold text-[#DB2777]">
                                        Cake {i}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div>
                            <div className="flex items-center gap-1 text-[#D97706]">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <Star key={s} size={14} fill="currentColor" />
                                ))}
                            </div>
                            <p className="text-sm font-medium text-[#6B5E55]">Loved by 83+ happy customers</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative"
                >
                    <div className="aspect-square relative rounded-[3rem] overflow-hidden shadow-2xl shadow-[#DB2777]/20 border-8 border-white">
                        {/* Image Placeholder */}
                        <div className="w-full h-full bg-[#F1E9E2] flex items-center justify-center">
                            <img
                                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1089&auto=format&fit=crop"
                                alt="Beautiful Designer Cake"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                    </div>

                    {/* Floating Card */}
                    <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-[200px] hidden lg:block">
                        <p className="text-[#DB2777] font-bold text-xl leading-none">Best Seller</p>
                        <p className="text-sm text-[#6B5E55] mt-1 italic">"The most beautiful custom-flavoured cakes in Vesu."</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
