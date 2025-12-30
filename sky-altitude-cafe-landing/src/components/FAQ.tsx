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
      q: "Is Sky Altitude suitable for family parties?",
      a: "Yes, many customers host family gatherings and parties here."
    },
    {
      q: "Does the cafe offer rooftop seating?",
      a: "Yes, it features a spacious rooftop with open-sky seating."
    },
    {
      q: "What dining options are available?",
      a: "Dine-in, kerbside pickup, and no-contact delivery are available."
    }
  ];

  return (
    <section
      id="faq"
      className="py-12 sm:py-16 px-4 sm:px-6 bg-white"
    >
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-gray-600 px-4">
            Find answers to common questions about Sky Altitude Cafe & Restro Lounge
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-gray-200">
              <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-gray-900 hover:text-orange-600 px-2">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm sm:text-base px-2">
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




