"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        q: "Is Moonstruck Coffee good for working or reading?",
        a: "Yes, many customers visit for a calm environment that is ideal for work or reading. We have dedicated seating areas designed for those who want to get work done."
    },
    {
        q: "What food and drinks are popular here?",
        a: "Cold brew coffee, cheesecakes, brownies and the spicy cottage cheese sandwich are popular choices among our regulars."
    },
    {
        q: "Do you offer takeaway or delivery?",
        a: "Yes, kerbside pickup and no-contact delivery options are available via our partner platforms."
    },
    {
        q: "Is there parking available?",
        a: "Yes, we are located in SNS Atria which has ample parking space for our customers."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="section-padding bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">Frequently Asked Questions</h2>
                        <p className="text-gray-600 text-lg">
                            Everything you need to know about your next visit to Moonstruck.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className={cn(
                                    "border rounded-2xl transition-all duration-300",
                                    openIndex === idx ? "bg-white border-orange-200 shadow-lg" : "bg-white/50 border-gray-100"
                                )}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                    className="w-full text-left p-6 md:p-8 flex items-center justify-between"
                                >
                                    <span className="text-lg md:text-xl font-bold text-gray-900">{faq.q}</span>
                                    {openIndex === idx ? (
                                        <ChevronUp className="w-6 h-6 text-orange-600 mb-auto" />
                                    ) : (
                                        <ChevronDown className="w-6 h-6 text-gray-400 mb-auto" />
                                    )}
                                </button>
                                <div
                                    className={cn(
                                        "overflow-hidden transition-all duration-300",
                                        openIndex === idx ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                                    )}
                                >
                                    <div className="px-6 md:px-8 pb-8 text-gray-600 leading-relaxed text-lg border-t border-gray-50 pt-6">
                                        {faq.a}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
