"use client";

import { useState } from "react";
import { ChevronDown, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            q: "What type of coffee does Meraki serve?",
            a: "Meraki serves a wide range of hot and cold coffee options including cold brew, cappuccino, Vietnamese iced coffee and more."
        },
        {
            q: "Do you offer delivery or pickup?",
            a: "Yes, kerbside pickup and no-contact delivery options are available via major delivery partners."
        },
        {
            q: "Where is Meraki The Coffee House located?",
            a: "It is located at SNS Platina, 108, Vesu Main Road, near Reliance Market, Surat, Gujarat 395007."
        },
        {
            q: "What are your opening hours?",
            a: "We are open daily. Our service typically starts early in the morning and we close at 10 pm."
        }
    ];

    return (
        <section id="faq" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-outfit font-bold text-stone-900 mb-12 text-center">
                        Questions?
                    </h2>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="border-b border-stone-100 pb-4">
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    className="w-full flex items-center justify-between py-4 text-left group"
                                >
                                    <span className={`text-xl font-bold font-outfit transition-colors ${openIndex === i ? 'text-stone-900' : 'text-stone-500 group-hover:text-stone-700'}`}>
                                        {faq.q}
                                    </span>
                                    <div className={`transition-transform duration-300 ${openIndex === i ? 'rotate-45' : ''}`}>
                                        <Plus className={`w-6 h-6 ${openIndex === i ? 'text-[#D4A373]' : 'text-stone-400'}`} />
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {openIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="pb-6 text-stone-600 leading-relaxed max-w-2xl">
                                                {faq.a}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
