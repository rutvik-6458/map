"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
    const faqs = [
        {
            q: "Is Jerry Cafe good for birthday celebrations?",
            a: "Yes, many reviews mention it as a great place for birthdays and special occasions.",
        },
        {
            q: "Is Jerry Cafe suitable for couples?",
            a: "Yes, it is often recommended as a cozy and private place for couples.",
        },
        {
            q: "Do they provide decoration for occasions?",
            a: "Customers frequently praise the decoration, indicating occasion setups are available.",
        },
    ];

    return (
        <section id="faq" className="py-24 bg-muted/30">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold font-outfit mb-4">Frequently Asked Questions</h2>
                        <p className="text-muted-foreground">Everything you need to know about Jerry Cafe.</p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <FAQItem key={index} faq={faq} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const FAQItem = ({ faq }: { faq: { q: string; a: string } }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white rounded-2xl border border-border overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
            >
                <span className="font-bold font-outfit text-foreground">{faq.q}</span>
                <div className={`p-1 rounded-full bg-primary/10 text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-border"
                    >
                        <div className="p-6 text-muted-foreground leading-relaxed">
                            {faq.a}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FAQ;
