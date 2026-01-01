"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        q: "What is The Baking Stories best known for?",
        a: "It is best known for its bakery items, cakes, and high-quality cafe food."
    },
    {
        q: "Is it suitable for celebrations and cake orders?",
        a: "Yes, many customers visit TBS for cakes and special occasions."
    },
    {
        q: "What time does The Baking Stories close?",
        a: "The cafe closes at 11:30 pm."
    },
    {
        q: "Do you offer kerbside pickup?",
        a: "Yes, we offer convenient kerbside pickup for all our fresh bakes and items."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 bg-amber-50/30">
            <div className="max-w-3xl mx-auto px-4 md:px-8">
                <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">Frequently Asked Questions</h2>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="bg-white rounded-2xl border border-amber-100 overflow-hidden">
                            <button
                                className="w-full p-6 flex items-center justify-between text-left transition-colors hover:bg-amber-50/50"
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            >
                                <span className="text-lg font-bold text-slate-900">{faq.q}</span>
                                {openIndex === idx ? <Minus className="text-amber-700" /> : <Plus className="text-amber-700" />}
                            </button>

                            <AnimatePresence>
                                {openIndex === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-amber-50">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
