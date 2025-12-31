"use client";

import { motion } from "framer-motion";
import { Coffee, Utensils, Sparkles, Clock } from "lucide-react";

const Services = () => {
    const items = [
        {
            title: "Cafe Food & Beverages",
            description: "A delightful selection of snacks, main courses, and refreshing drinks.",
            icon: <Utensils className="w-8 h-8" />,
        },
        {
            title: "Occasion Decoration Setup",
            description: "Professional decoration services for birthdays, anniversaries, and more.",
            icon: <Sparkles className="w-8 h-8" />,
        },
        {
            title: "Dine-in Experience",
            description: "Enjoy your food in a cozy, private, and aesthetic environment.",
            icon: <Coffee className="w-8 h-8" />,
        },
        {
            title: "Quality Service",
            description: "Friendly staff dedicated to making your celebrations memorable.",
            icon: <Clock className="w-8 h-8" />,
        },
    ];

    return (
        <section id="menu" className="py-24 bg-muted/50 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold font-outfit mb-4">Our Services</h2>
                    <p className="text-muted-foreground">Everything you need for a perfect hangout or a grand celebration.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-3xl border border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all group"
                        >
                            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold font-outfit mb-3">{item.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 p-8 md:p-12 bg-primary rounded-[2.5rem] md:rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl" />
                    <div className="z-10 text-center md:text-left">
                        <h3 className="text-2xl md:text-3xl font-bold font-outfit mb-2">Ready to plan your event?</h3>
                        <p className="text-white/80 text-sm md:text-base">Get in touch with us for customized decoration packages.</p>
                    </div>
                    <a
                        href="https://maps.app.goo.gl/fcPadNLB7QW4Qbnq9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="z-10 w-full md:w-auto text-center px-10 py-4 bg-white text-primary rounded-full font-bold text-lg hover:bg-muted transition-colors whitespace-nowrap"
                    >
                        Visit Us Today
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;
