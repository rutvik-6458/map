"use client";
import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { cafeData } from "@/data";

export default function FAQ() {
    const faqs = cafeData.content_blocks.faq;

    const [openIdx, setOpenIdx] = useState<number | null>(0);

    return (
        <section className="py-24 bg-gray-50/30" id="faq">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="inline-flex p-3 bg-amber-100 text-amber-700 rounded-2xl mb-6">
                        <HelpCircle size={28} />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Common Questions</h2>
                    <p className="text-gray-500 font-medium">Everything you need to know about {cafeData.brand.business_name}</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className={cn(
                                "bg-white rounded-[2rem] border transition-all duration-300 overflow-hidden shadow-sm",
                                openIdx === idx ? "border-amber-200 shadow-xl shadow-amber-100/50" : "border-gray-100"
                            )}
                        >
                            <button
                                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                                className="w-full text-left p-8 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors group"
                            >
                                <span className={cn(
                                    "text-xl font-bold transition-colors",
                                    openIdx === idx ? "text-amber-700" : "text-gray-800 group-hover:text-amber-700"
                                )}>
                                    {faq.q}
                                </span>
                                <div className={cn(
                                    "p-2 rounded-xl transition-all",
                                    openIdx === idx ? "bg-amber-800 text-white rotate-180" : "bg-gray-100 text-gray-500"
                                )}>
                                    <ChevronDown size={20} />
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
                                        <div className="px-8 pb-8 text-gray-600 text-lg leading-relaxed font-medium">
                                            <div className="p-6 bg-amber-50/50 rounded-2xl border border-amber-50">
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




