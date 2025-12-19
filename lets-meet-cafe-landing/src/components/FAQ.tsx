"use client";

import { businessData } from "./data";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase">
                        Got <span className="text-orange-600">Questions?</span>
                    </h2>
                    <p className="text-lg text-gray-500 font-medium tracking-wide">
                        Find answers to common questions about Let's Meet Cafe.
                    </p>
                </div>

                <div className="space-y-4">
                    {businessData.content_blocks.faq.map((item, i) => (
                        <div
                            key={i}
                            className={`border-2 rounded-[2rem] transition-all duration-300 ${openIndex === i ? 'border-orange-500 bg-orange-50/30' : 'border-gray-100 bg-gray-50 hover:bg-white hover:border-orange-200'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full text-left p-8 flex items-center justify-between gap-4"
                            >
                                <span className={`text-xl font-bold transition-colors ${openIndex === i ? 'text-orange-600' : 'text-gray-900'}`}>{item.q}</span>
                                <div className={`h-10 w-10 rounded-full flex items-center justify-center transition-all ${openIndex === i ? 'bg-orange-600 text-white rotate-180' : 'bg-white text-gray-400'}`}>
                                    {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                                </div>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="px-8 pb-8 text-lg text-gray-600 font-medium leading-relaxed">
                                    {item.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 p-10 rounded-[2.5rem] bg-gray-900 text-white flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <p className="text-2xl font-black tracking-tight mb-1 uppercase">Still curious about something?</p>
                        <p className="text-gray-400 font-medium">Contact our team directly for any specific inquiries.</p>
                    </div>
                    <a
                        href={`tel:${businessData.contact.phone.replace(/\s+/g, '')}`}
                        className="px-8 py-4 bg-orange-600 rounded-2xl font-black hover:bg-orange-700 transition-all shadow-lg"
                    >
                        GET IN TOUCH
                    </a>
                </div>
            </div>
        </section>
    );
}
