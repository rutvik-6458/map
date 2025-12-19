"use client";

import { motion } from "framer-motion";
import { Coffee, Briefcase, Heart, CheckCircle2, Leaf, Users } from "lucide-react";

const features = [
    {
        title: "Work-Friendly Vibe",
        description: "Ideal for working, reading or quiet meetings with dedicated seating.",
        icon: Briefcase,
        color: "bg-blue-50 text-blue-600"
    },
    {
        title: "Artisanal Coffee",
        description: "A wide selection of hot and cold coffee, including our signature Cold Brew.",
        icon: Coffee,
        color: "bg-orange-50 text-orange-600"
    },
    {
        title: "Inclusive Space",
        description: "Women-owned and LGBTQ+ friendly space with welcoming staff.",
        icon: Heart,
        color: "bg-pink-50 text-pink-600"
    },
    {
        title: "Premium Sweets",
        description: "Famous for our cheesecakes, brownies and fresh sandwiches.",
        icon: Leaf,
        color: "bg-green-50 text-green-600"
    }
];

const checkmarks = [
    "Calm and cozy cafe ambience",
    "Work-friendly and peaceful seating",
    "Wide selection of coffee",
    "Popular cheesecakes & brownies",
    "Dine-in and Delivery",
    "Women-owned space"
];

export default function Features() {
    return (
        <section id="features" className="section-padding overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            A Peaceful Escape <br />
                            <span className="text-orange-600">in the Heart of Vesu</span>
                        </h2>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            Moonstruck Coffee is more than just a cafe. It's a sanctuary for those who appreciate the finer things—be it a perfectly pulled espresso or a quiet corner to finish that book.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            {checkmarks.map((text, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0" />
                                    <span className="text-gray-700 font-medium">{text}</span>
                                </div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="p-6 bg-orange-50 rounded-2xl border border-orange-100"
                        >
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                                    <Users className="w-6 h-6 text-orange-600" />
                                </div>
                                <div>
                                    <p className="font-bold text-orange-900">Women-Owned Business</p>
                                    <p className="text-orange-800/80 text-sm">We take pride in creating a welcoming environment for everyone in our community.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}>
                                    <feature.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
