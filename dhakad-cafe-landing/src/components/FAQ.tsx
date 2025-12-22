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
            q: "What is Dhakad Cafe best known for?",
            a: "It is best known for its tea and cheese chilli toast."
        },
        {
            q: "Is Dhakad Cafe open late at night?",
            a: "Yes, the cafe is open till 2 am."
        },
        {
            q: "Can we sit and have tea here?",
            a: "Yes, there is seating available for customers."
        }
    ];

    return (
        <section id="faq" className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-gray-600">
                        Everything you need to know about Dhakad Cafe
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left text-lg font-semibold text-gray-900">
                                {faq.q}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 text-base">
                                {faq.a}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default FAQ;



