"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
    const faqs = [
        {
            q: "Is Blue Basil good for family dining?",
            a: "Yes, many reviews highlight it as a great place for families and group outings."
        },
        {
            q: "What cuisines are served at Blue Basil?",
            a: "Blue Basil serves North Indian, Chinese, and other multicuisine dishes."
        },
        {
            q: "What are the operating hours?",
            a: "The restaurant is open until 3:00 pm and reopens at 6:00 pm (Dinner timings usually 7 PM - 11 PM)."
        },
        {
            q: "Do you offer home delivery?",
            a: "Yes, we offer dine-in, takeaway, and delivery options via our official contact or partners."
        },
        {
            q: "Is parking available?",
            a: "Yes, the Aakash Retail complex has ample parking space for our customers."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-16 md:py-24 bg-slate-50">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
                    <p className="text-lg text-slate-600">Everything you need to know before visiting us.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm transition-all"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                            >
                                <span className="text-lg font-bold text-slate-900">{faq.q}</span>
                                {openIndex === i ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                            </button>

                            {openIndex === i && (
                                <div className="px-6 pb-6 animate-fade-up">
                                    <p className="text-slate-600 leading-relaxed leading-relaxed">{faq.a}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
