"use client";

import { motion } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background with a soft gradient and pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(223,148,87,0.1),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(223,148,87,0.05),transparent_50%)]" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wider uppercase mb-6">
                            A Cozy Cafe for Couples & Celebrations
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold font-outfit text-foreground leading-[1.1] mb-6 text-balance">
                            Jerry Cafe – <span className="text-primary">Celebrate Moments</span> That Matter
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-balance">
                            A cozy cafe in Vesu known for celebrations and couple-friendly vibes. Perfect for birthdays, special days, and quality time.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="#location"
                                className="group w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-primary/20 transition-all active:scale-95"
                            >
                                Plan a celebration
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                            </a>
                            <a
                                href="#menu"
                                className="w-full sm:w-auto px-8 py-4 bg-white text-foreground border-2 border-border rounded-full font-bold text-lg hover:bg-muted transition-colors active:scale-95"
                            >
                                Explore Menu
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Floating abstract shapes for dynamic feel */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-1/4 left-10 w-24 h-24 bg-primary/5 rounded-full blur-3xl hidden lg:block"
            />
            <motion.div
                animate={{
                    y: [0, 20, 0],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-1/4 right-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl hidden lg:block"
            />
        </section>
    );
};

export default Hero;
