"use client";

import { motion } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
    const faqs = [
        {
            q: "What is The Old Town Cafe best known for?",
            a: "It is best known for its budget-friendly menu and signature pink sauce pasta."
        },
        {
            q: "Is it suitable for students or daily visits?",
            a: "Yes, many customers mention it as very affordable and value for money, making it ideal for regular visits."
        },
        {
            q: "What time does the cafe close?",
            a: "The cafe closes at 11:00 PM daily."
        },
        {
            q: "Do you offer delivery or pickup?",
            "a": "Yes, we offer dine-in, kerbside pickup, and delivery options for your convenience."
        }
    ];

    return (
        <section id="faq" className="py-24 bg-white">
            <div className="container px-4 mx-auto">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="font-playfair text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                            Common <span className="text-amber-600">Questions</span>
                        </h2>
                        <p className="text-slate-600 text-base md:text-lg">
                            Everything you need to know about your favorite local cafe.
                        </p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, i) => (
                                <AccordionItem key={i} value={`item-${i}`} className="border border-slate-200 rounded-2xl px-6 mb-4 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                    <AccordionTrigger className="text-left font-bold text-slate-900 hover:no-underline py-6">
                                        {faq.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600 text-lg pb-6 leading-relaxed">
                                        {faq.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
