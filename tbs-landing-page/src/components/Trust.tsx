"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Heart, Award, Users } from "lucide-react";

const stats = [
    { icon: <CheckCircle2 size={32} />, label: "Google Rating", value: "4.7 / 5" },
    { icon: <Users size={32} />, label: "Happy Customers", value: "10k+" },
    { icon: <Award size={32} />, label: "Reviews", value: "465+" },
    { icon: <Heart size={32} />, label: "Owned By", value: "Women" },
];

export default function Trust() {
    return (
        <section className="py-20 bg-amber-50/50">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-amber-100"
                        >
                            <div className="text-amber-700 mb-4">{stat.icon}</div>
                            <h3 className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</h3>
                            <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 grid md:grid-cols-3 gap-8">
                    {[
                        "Food, service, atmosphere, ambience, staff everything is top notch!",
                        "The taste was absolutely delightful.",
                        "Really enjoyed the experience."
                    ].map((quote, i) => (
                        <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-amber-100 flex flex-col justify-between">
                            <p className="text-slate-700 italic text-lg mb-6">"{quote}"</p>
                            <div className="flex items-center space-x-2 text-amber-500">
                                {[...Array(5)].map((_, j) => (
                                    <Star key={j} className="fill-current" size={16} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Star({ className, size }: { className?: string, size?: number }) {
    return (
        <svg
            className={className}
            width={size || 24}
            height={size || 24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    );
}
