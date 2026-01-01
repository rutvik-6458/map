"use client";

import { motion } from "framer-motion";
import { Leaf, Clock, Users, Utensils, Award, Truck } from "lucide-react";

const features = [
    {
        icon: <Leaf className="text-nature-600" />,
        title: "Nature-Inspired",
        desc: "A blissful, nature-themed ambience that calms the soul.",
    },
    {
        icon: <Clock className="text-nature-600" />,
        title: "Open Late",
        desc: "We're here for your late-night cravings until 1:00 AM.",
    },
    {
        icon: <Award className="text-nature-600" />,
        title: "4.9-Star Rated",
        desc: "Consistently loved for our quality, food, and service.",
    },
    {
        icon: <Users className="text-nature-600" />,
        title: "Perfect for Groups",
        desc: "The ideal spot for friends and family gatherings.",
    },
    {
        icon: <Utensils className="text-nature-600" />,
        title: "Great Taste",
        desc: "Food prepared with love and the finest ingredients.",
    },
    {
        icon: <Truck className="text-nature-600" />,
        title: "Dine & Delivery",
        desc: "Available for dine-in, takeaway, and home delivery.",
    },
];

const Features = () => {
    return (
        <section id="about" className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
            {/* Decorative Blob */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-nature-50 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2" />

            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif mb-6 sm:mb-8 text-nature-900 leading-tight">
                        More Than Just a Cafe, <br />
                        <span className="text-nature-600 italic">It's an Experience</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-nature-800/70 leading-relaxed">
                        The Birds Cafe is a highly rated cafe in Vesu, Surat, known for its nature-inspired ambience, delicious food, and warm service.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {features.map((f, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -5 }}
                            viewport={{ once: true }}
                            className="p-6 sm:p-8 rounded-[28px] sm:rounded-[32px] bg-nature-50 hover:bg-nature-100 transition-all border border-nature-100/50 group"
                        >
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                {f.icon}
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold font-serif mb-2 sm:mb-3 text-nature-900">{f.title}</h3>
                            <p className="text-nature-800/70 leading-relaxed text-sm sm:text-base">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
