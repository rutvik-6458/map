"use client";

import { motion } from "framer-motion";
import { Coffee, Tag, Star, Smile, Clock, ShoppingBag } from "lucide-react";

const Highlights = () => {
    const features = [
        {
            icon: Star,
            title: "5-Star Rated",
            desc: "Top-rated by our community for exceptional quality and service.",
            color: "bg-orange-100 text-orange-600"
        },
        {
            icon: Tag,
            title: "Very Affordable",
            desc: "Great taste doesn't have to be expensive. Pocket-friendly pricing.",
            color: "bg-green-100 text-green-600"
        },
        {
            icon: Coffee,
            title: "Cozy Ambience",
            desc: "Perfect for casual hangouts, study sessions, or quick meals.",
            color: "bg-amber-100 text-amber-600"
        },
        {
            icon: Smile,
            title: "Friendly Service",
            desc: "Our attentive staff is here to make your visit special.",
            color: "bg-blue-100 text-blue-600"
        },
        {
            icon: Clock,
            title: "Open Daily",
            desc: "Available until 11:00 PM for your late-night cravings.",
            color: "bg-purple-100 text-purple-600"
        },
        {
            icon: ShoppingBag,
            title: "Multiple Options",
            desc: "Dine-in, kerbside pickup, and delivery available.",
            color: "bg-rose-100 text-rose-600"
        }
    ];

    return (
        <section id="highlights" className="py-24 bg-[#FDFCF0]">
            <div className="container px-4 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="font-playfair text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        Why Visit Us?
                    </h2>
                    <p className="text-slate-600 text-base md:text-lg">
                        We combine high-quality ingredients with a warm atmosphere to create the perfect cafe experience in Vesu.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group p-8 bg-white/50 backdrop-blur-sm border border-slate-200/60 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-amber-900/5 transition-all duration-300"
                        >
                            <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <item.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Highlights;
