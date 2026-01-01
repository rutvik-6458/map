"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, MapPin } from "lucide-react";

const Hero = () => {
    return (
        <section
            id="home"
            className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden"
        >
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-nature-100/50 rounded-l-[100px] -z-10 hidden lg:block" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-nature-200/30 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl"
                >
                    <div className="inline-flex items-center gap-2 bg-nature-100 text-nature-700 px-4 py-1.5 rounded-full mb-6 font-medium text-sm">
                        <Star className="fill-nature-700" size={16} />
                        <span>4.9 Rated Cafe in Vesu</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-nature-900 leading-[1.1] mb-6">
                        The Birds Cafe – <br />
                        <span className="text-nature-600 italic">Where Nature Meets Taste</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-nature-800/80 mb-8 leading-relaxed max-w-lg">
                        Enjoy great food in a nature-inspired, peaceful setting. Perfect for late-night hangouts and relaxed evenings.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <a
                            href="https://maps.app.goo.gl/2qH6osSxRqVz59Tz5"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-nature-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-nature-800 transition-all hover:scale-105 shadow-lg shadow-nature-200"
                        >
                            Get Directions
                            <ArrowRight size={20} />
                        </a>
                        <a
                            href="#vibe"
                            className="inline-flex items-center justify-center gap-2 bg-white text-nature-800 border-2 border-nature-200 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-nature-50 transition-all"
                        >
                            Explore Our Vibe
                        </a>
                    </div>

                    <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-nature-600">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-nature-200 overflow-hidden">
                                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                                </div>
                            ))}
                        </div>
                        <p className="text-sm font-medium">
                            Join <span className="text-nature-950 font-bold">29+</span> happy visitors this week
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative lg:block"
                >
                    <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                        <img
                            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop"
                            alt="The Birds Cafe Ambience"
                            className="w-full aspect-[4/5] object-cover"
                        />
                    </div>
                    {/* Accent decoration */}
                    <div className="absolute -top-6 -right-6 w-32 h-32 bg-earth-200 rounded-full -z-10 animate-float" />
                    <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-nature-300 rounded-2xl -z-10 animate-float" style={{ animationDelay: '1s' }} />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
