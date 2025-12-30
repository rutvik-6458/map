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
      question: "What is Rasta Street Cafe known for?",
      answer:
        "It is commonly mentioned for its hot chocolate and garlic burnt rice.",
    },
    {
      question: "Does the cafe offer drive-through or delivery?",
      answer: "Yes, drive-through and delivery options are available.",
    },
    {
      question: "Where is the cafe located?",
      answer:
        "It is located at Ambrosia Business Hub on VIP Road, Vesu, Surat.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white"
    >
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 px-2">
            Everything you need to know about Rasta Street Cafe
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-gray-50 border border-gray-200 rounded-lg px-4 sm:px-6"
            >
              <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-gray-900 hover:text-amber-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-gray-600 leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;







