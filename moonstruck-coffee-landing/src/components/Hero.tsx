"use client";

import { motion } from "framer-motion";
import { MessageSquare, ArrowRight, Star } from "lucide-react";

const heroContent = {
    headline: "A Peaceful Coffee Escape in Vesu",
    subheadline: "Enjoy quality coffee, desserts and a relaxing atmosphere. Perfect for brunch, reading or working with a cup of coffee.",
    tagline: "Where Great Coffee Meets Calm Ambience",
    rating: "4.3",
    reviews: "539"
};

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=2000"
                    alt="Cozy Cafe Interior"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-600/90 text-white rounded-full text-sm font-medium mb-6">
                        <Star className="w-4 h-4 fill-white" />
                        <span>{heroContent.rating} Rating from {heroContent.reviews} Guests</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]">
                        {heroContent.headline}
                    </h1>

                    <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl leading-relaxed">
                        {heroContent.subheadline}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href="https://wa.me/919664721479"
                            className="flex items-center justify-center gap-2 px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-semibold text-lg transition-all transform hover:scale-105"
                        >
                            Order on WhatsApp
                            <MessageSquare className="w-5 h-5" />
                        </a>
                        <a
                            href="#about"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-xl font-semibold text-lg transition-all transform hover:scale-105"
                        >
                            Explore Our Story
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>

                    <div className="mt-12 flex items-center gap-6">
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-orange-600 overflow-hidden bg-gray-200">
                                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                                </div>
                            ))}
                            <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center border-2 border-white text-xs font-bold">
                                +500
                            </div>
                        </div>
                        <p className="text-sm font-medium text-gray-200">
                            Join hundreds of happy coffee lovers in Surat
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Decorative SVG wave */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-1">
                <svg
                    className="relative block w-full h-[60px]"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.43,141,125.88,232.07,109.93,285.47,100.5,310.66,82,321.39,56.44Z"
                        className="fill-white"
                    />
                </svg>
            </div>
        </section>
    );
}
