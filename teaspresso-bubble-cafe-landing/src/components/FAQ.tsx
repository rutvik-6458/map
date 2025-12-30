"use client";
import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function FAQ() {
    const faqs = [
        {
            q: "What is Teaspresso Bubble Cafe famous for?",
            a: "It is best known for its bubble tea and waffles."
        },
        {
            q: "Can I customise my bubble tea?",
            a: "Yes, customers can customise flavours and options."
        },
        {
            q: "Is Teaspresso Bubble Cafe open late at night?",
            a: "Yes, it is open till 12:30 am."
        },
    ];

    const [openIdx, setOpenIdx] = useState<number | null>(0);

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-gray-50/30" id="faq">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12 sm:mb-16">
                    <div className="inline-flex p-2.5 sm:p-3 bg-pink-100 text-pink-600 rounded-xl sm:rounded-2xl mb-4 sm:mb-6">
                        <HelpCircle size={24} className="sm:w-7 sm:h-7" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight px-2">Common Questions</h2>
                    <p className="text-gray-500 font-medium text-sm sm:text-base px-2">Everything you need to know about Teaspresso Bubble Cafe</p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className={cn(
                                "bg-white rounded-[1.5rem] sm:rounded-[2rem] border transition-all duration-300 overflow-hidden shadow-sm",
                                openIdx === idx ? "border-pink-200 shadow-xl shadow-pink-100/50" : "border-gray-100"
                            )}
                        >
                            <button
                                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                                className="w-full text-left p-5 sm:p-6 md:p-8 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors group gap-4"
                            >
                                <span className={cn(
                                    "text-base sm:text-lg md:text-xl font-bold transition-colors flex-1",
                                    openIdx === idx ? "text-pink-600" : "text-gray-800 group-hover:text-pink-600"
                                )}>
                                    {faq.q}
                                </span>
                                <div className={cn(
                                    "p-1.5 sm:p-2 rounded-lg sm:rounded-xl transition-all flex-shrink-0",
                                    openIdx === idx ? "bg-pink-600 text-white rotate-180" : "bg-gray-100 text-gray-500"
                                )}>
                                    <ChevronDown size={18} className="sm:w-5 sm:h-5" />
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIdx === idx && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-5 sm:px-6 md:px-8 pb-5 sm:pb-6 md:pb-8 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
                                            <div className="p-4 sm:p-5 md:p-6 bg-pink-50/50 rounded-xl sm:rounded-2xl border border-pink-50">
                                                {faq.a}
                                            </div>
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





