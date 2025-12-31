"use client";

import { Star, Users, CheckCircle2, Award } from "lucide-react";
import { motion } from "framer-motion";

const Trust = () => {
    const stats = [
        {
            icon: <Star className="text-yellow-500" fill="currentColor" />,
            value: "4.5",
            label: "Average Rating",
        },
        {
            icon: <Users className="text-blue-500" />,
            value: "42+",
            label: "Google Reviews",
        },
        {
            icon: <CheckCircle2 className="text-green-500" />,
            value: "100%",
            label: "Hygienic Space",
        },
        {
            icon: <Award className="text-primary" />,
            value: "Top Rated",
            label: "Vesu's Favorite",
        },
    ];

    const testimonials = [
        "It was very good place and service to celebrate any occasion at this place.",
        "Awesome decoration... I love it.",
        "Wonderful place to celebrate birthday party and other occasions.",
    ];

    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-20 text-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-4 md:p-6 bg-white rounded-2xl shadow-sm border border-border/50"
                        >
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-muted rounded-xl flex items-center justify-center mx-auto mb-4">
                                {stat.icon}
                            </div>
                            <div className="text-xl md:text-2xl font-bold font-outfit text-foreground">{stat.value}</div>
                            <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold font-outfit mb-12">What Our Visitors Say</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {testimonials.map((text, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 bg-white rounded-2xl border border-border shadow-sm italic text-muted-foreground relative"
                            >
                                <span className="absolute top-4 left-4 text-primary opacity-20 text-4xl">"</span>
                                {text}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Trust;
