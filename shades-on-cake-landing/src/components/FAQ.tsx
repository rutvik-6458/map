"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        q: "What is Shades On Cake best known for?",
        a: "It is best known for designer cakes with great taste.",
    },
    {
        q: "Do they offer custom cake designs?",
        a: "Yes, customers frequently mention custom and designer cakes.",
    },
    {
        q: "What time does Shades On Cake close?",
        a: "The shop closes at 10:00 pm.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#2D241E] mb-6">
                        Frequently Asked <span className="text-[#DB2777]">Questions</span>
                    </h2>
                    <p className="text-xl text-[#6B5E55]">
                        Everything you need to know about our cakes, custom orders, and timings.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className={cn(
                                "border rounded-[2rem] transition-all duration-300 overflow-hidden",
                                openIndex === i ? "border-[#DB2777] bg-[#FFFAF5]" : "border-[#F1E9E2] bg-white"
                            )}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-8 text-left group"
                            >
                                <span className={cn(
                                    "text-xl font-bold transition-colors",
                                    openIndex === i ? "text-[#DB2777]" : "text-[#2D241E] group-hover:text-[#DB2777]"
                                )}>
                                    {faq.q}
                                </span>
                                <div className={cn(
                                    "w-10 h-10 rounded-full flex items-center justify-center transition-all",
                                    openIndex === i ? "bg-[#DB2777] text-white rotate-0" : "bg-[#F1E9E2] text-[#2D241E] rotate-90"
                                )}>
                                    {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                                </div>
                            </button>
                            <div
                                className={cn(
                                    "transition-all duration-300 ease-in-out",
                                    openIndex === i ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                                )}
                            >
                                <div className="p-8 pt-0 text-[#6B5E55] text-lg leading-relaxed">
                                    {faq.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
