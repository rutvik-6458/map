"use client";

import { businessData } from "./data";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-3 sm:mb-4 uppercase">
                        Got <span className="text-orange-600">Questions?</span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-500 font-medium tracking-wide px-2">
                        Find answers to common questions about Let's Meet Cafe.
                    </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                    {businessData.content_blocks.faq.map((item, i) => (
                        <div
                            key={i}
                            className={`border-2 rounded-xl sm:rounded-2xl transition-all duration-300 ${openIndex === i ? 'border-orange-500 bg-orange-50/30' : 'border-gray-100 bg-gray-50 hover:bg-white hover:border-orange-200'}`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full text-left p-4 sm:p-6 md:p-8 flex items-center justify-between gap-3 sm:gap-4"
                            >
                                <span className={`text-base sm:text-lg md:text-xl font-bold transition-colors pr-2 ${openIndex === i ? 'text-orange-600' : 'text-gray-900'}`}>{item.q}</span>
                                <div className={`h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center transition-all shrink-0 ${openIndex === i ? 'bg-orange-600 text-white rotate-180' : 'bg-white text-gray-400'}`}>
                                    {openIndex === i ? <Minus size={18} className="sm:w-5 sm:h-5" /> : <Plus size={18} className="sm:w-5 sm:h-5" />}
                                </div>
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="px-4 sm:px-6 md:px-8 pb-4 sm:pb-6 md:pb-8 text-sm sm:text-base md:text-lg text-gray-600 font-medium leading-relaxed">
                                    {item.a}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 sm:mt-16 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-gray-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
                    <div className="text-center md:text-left">
                        <p className="text-lg sm:text-xl md:text-2xl font-black tracking-tight mb-1 uppercase">Still curious about something?</p>
                        <p className="text-sm sm:text-base text-gray-400 font-medium">Contact our team directly for any specific inquiries.</p>
                    </div>
                    <a
                        href={`tel:${businessData.contact.phone.replace(/\s+/g, '')}`}
                        className="px-6 sm:px-8 py-3 sm:py-4 bg-orange-600 rounded-xl sm:rounded-2xl font-black hover:bg-orange-700 transition-all shadow-lg text-sm sm:text-base whitespace-nowrap w-full md:w-auto text-center"
                    >
                        GET IN TOUCH
                    </a>
                </div>
            </div>
        </section>
    );
}
