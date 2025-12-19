"use client";

import { useState } from "react";
import { ChevronDown, Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        q: "What is Livestream Coffee best known for?",
        a: "We are especially popular for our wide variety of signature cheesecakes (like Blueberry, Red Velvet, and New York Style) and our specialty coffee including Vietnamese Coffee and Mocha Frappes."
    },
    {
        q: "Does Livestream Coffee offer delivery or drive-through?",
        a: "Yes! We offer both a convenient drive-through for quick pickups and no-contact delivery options through major delivery partners."
    },
    {
        q: "What time does the cafe close?",
        a: "Livestream Coffee Vesu is open daily until midnight (12:00 AM), making it the perfect spot for late-night coffee and dessert hangouts."
    },
    {
        q: "Is there a good ambience for group meetups?",
        a: "Absolutely. We pride ourselves on having a vibrant ambience with like-minded people, perfect for friends, family, and group catch-ups."
    },
    {
        q: "Where exactly are you located in Vesu?",
        a: "We are located at C-203, Aagam Viviana, Opp. Florence, Vesu, Surat, Gujarat 395007."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 bg-stone-50">
            <div className="max-w-4xl mx-auto px-4 md:px-8 space-y-12">
                <div className="text-center space-y-4">
                    <h2 className="text-sm font-bold text-amber-800 uppercase tracking-[0.3em]">Common Questions</h2>
                    <h3 className="text-4xl md:text-5xl font-serif font-black text-stone-900 italic">Frequently Asked</h3>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className={cn(
                                "group transition-all duration-300 rounded-[2rem] border overflow-hidden",
                                openIndex === i ? "bg-white border-amber-200 shadow-xl shadow-amber-900/5" : "bg-white border-stone-100 hover:border-amber-100"
                            )}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-8 text-left"
                            >
                                <span className={cn(
                                    "text-xl font-bold italic tracking-tight transition-colors",
                                    openIndex === i ? "text-amber-900" : "text-stone-800 group-hover:text-amber-800"
                                )}>
                                    {faq.q}
                                </span>
                                <div className={cn(
                                    "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all",
                                    openIndex === i ? "bg-amber-900 text-white rotate-45" : "bg-stone-100 text-stone-400 group-hover:bg-amber-100 group-hover:text-amber-900"
                                )}>
                                    <Plus className="w-5 h-5" />
                                </div>
                            </button>

                            <div
                                className={cn(
                                    "grid transition-all duration-300 ease-in-out",
                                    openIndex === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                )}
                            >
                                <div className="overflow-hidden">
                                    <div className="px-8 pb-8 text-lg text-stone-600 font-medium leading-relaxed italic">
                                        {faq.a}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
