"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Plus, Minus } from "lucide-react";

const faqs = [
    {
        q: "What is The Birds Cafe known for?",
        a: "It is especially known for its amazing, nature-inspired ambience and consistently tasty food. Whether you're here for coffee or a full meal, the vibe is unmatched in Vesu."
    },
    {
        q: "Is it open late at night?",
        a: "Yes! We are proud to be one of the favorite late-night spots in Vesu, Surat. We remain open until 1:00 AM every night."
    },
    {
        q: "Is it good for group hangouts?",
        a: "Absolutely. Many of our reviews highlight The Birds Cafe as a great place to visit with friends and large groups, thanks to our spacious seating and welcoming atmosphere."
    },
    {
        q: "Do you offer delivery or takeaway?",
        a: "Yes, we offer dine-in, takeaway, and delivery services. You can enjoy your favorite Birds Cafe treats wherever you are."
    }
];

const FAQ = () => {
    const [openIdx, setOpenIdx] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 bg-nature-100/30">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-4 text-nature-950">
                            Common <span className="text-nature-600 italic">Questions</span>
                        </h2>
                        <p className="text-base sm:text-lg text-nature-800/70">
                            Everything you need to know before your visit to The Birds Cafe.
                        </p>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                        {faqs.map((f, idx) => (
                            <motion.div
                                key={idx}
                                className="bg-white rounded-[20px] sm:rounded-[24px] overflow-hidden border border-nature-200 shadow-sm"
                            >
                                <button
                                    onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                                    className="w-full p-4 sm:p-6 text-left flex items-center justify-between group gap-4"
                                >
                                    <span className={`text-lg sm:text-xl font-bold font-serif transition-colors ${openIdx === idx ? 'text-nature-600' : 'text-nature-900 group-hover:text-nature-700'}`}>
                                        {f.q}
                                    </span>
                                    <div className={`p-2 rounded-full transition-all shrink-0 ${openIdx === idx ? 'bg-nature-600 text-white' : 'bg-nature-50 text-nature-400'}`}>
                                        {openIdx === idx ? <Minus size={18} /> : <Plus size={18} />}
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {openIdx === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-nature-800/80 leading-relaxed text-base sm:text-lg border-t border-nature-50 pt-4">
                                                {f.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
