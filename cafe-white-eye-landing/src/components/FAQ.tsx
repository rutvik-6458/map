"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    { q: "Is Cafe White Eye good for brunch or casual dining?", a: "Yes, many customers recommend it for brunch, coffee and relaxed meals." },
    { q: "Does the cafe stay open late?", a: "Yes, Cafe White Eye is open till 1 am." },
    { q: "Do you offer takeaway or delivery?", a: "Yes, kerbside pickup and delivery options are available." }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-20 bg-zinc-50">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-white rounded-lg border border-zinc-200 overflow-hidden shadow-sm">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full flex items-center justify-between p-5 text-left font-medium text-lg hover:bg-zinc-50 transition-colors"
                                aria-expanded={openIndex === i}
                            >
                                {faq.q}
                                {openIndex === i ? <Minus className="w-5 h-5 text-primary" /> : <Plus className="w-5 h-5 text-zinc-400" />}
                            </button>
                            <div
                                className={cn(
                                    "px-5 text-muted-foreground overflow-hidden transition-all duration-300 ease-in-out",
                                    openIndex === i ? "max-h-40 pb-5 opacity-100" : "max-h-0 opacity-0"
                                )}
                            >
                                {faq.a}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
