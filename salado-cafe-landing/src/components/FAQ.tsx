"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
    const faqs = [
        {
            q: "Is SaladO Cafe focused on healthy food?",
            a: "Yes, SaladO Cafe is known for nutritious, fresh and wholesome food options.",
        },
        {
            q: "What are popular items here?",
            a: "Healthy salads, wraps, Paneer Paradise and hummus-based salads are popular.",
        },
        {
            q: "Does SaladO Cafe offer delivery or drive-through?",
            a: "Yes, drive-through and no-contact delivery options are available.",
        },
    ];

    return (
        <section id="faq" className="py-20 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Frequently Asked <span className="text-green-600">Questions</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        Everything you need to know about SaladO Cafe
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="border-b border-green-200 last:border-b-0"
                            >
                                <AccordionTrigger className="text-left text-gray-900 hover:text-green-600 font-semibold">
                                    {faq.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-700 leading-relaxed">
                                    {faq.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default FAQ;

