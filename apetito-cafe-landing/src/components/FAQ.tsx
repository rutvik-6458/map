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
            q: "What kind of food does Apetito serve?",
            a: "Apetito serves coffee, shakes and Italian-inspired café dishes like pasta and crostini.",
        },
        {
            q: "Is Apetito good for hanging out with friends?",
            a: "Yes, customers often mention the cozy ambience and calm vibe for spending quality time.",
        },
        {
            q: "Does Apetito have a drive-through?",
            a: "Yes, a drive-through option is available.",
        },
        {
            q: "What are the operating hours?",
            a: "Apetito is open daily and closes at 11 pm.",
        },
        {
            q: "Where is Apetito located?",
            a: "We're located at G/5, DMD Pacific, Vesu Canal Rd, Opp. L. P. Savani School, Bharthana, Surat, Gujarat 395007.",
        },
        {
            q: "Is Apetito LGBTQ+ friendly?",
            a: "Yes, Apetito is a welcoming and inclusive space for everyone.",
        },
    ];

    return (
        <section id="faq" className="py-20 px-4 bg-white">
            <div className="container mx-auto max-w-4xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        ❓ FAQ
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-gray-600">
                        Everything you need to know about Apetito
                    </p>
                </div>

                {/* FAQ Accordion */}
                <Accordion type="single" collapsible className="space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-lg px-6 data-[state=open]:shadow-lg transition-all duration-300"
                        >
                            <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-amber-600 transition-colors py-6">
                                {faq.q}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-700 text-base leading-relaxed pb-6">
                                {faq.a}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                {/* Contact CTA */}
                <div className="mt-12 text-center p-8 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl border-2 border-amber-300">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        Still have questions?
                    </h3>
                    <p className="text-gray-700 mb-6">
                        Feel free to reach out to us directly
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="tel:+917802001555"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                            📞 Call Us
                        </a>
                        <a
                            href="https://wa.me/917802001555"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                            💬 WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
