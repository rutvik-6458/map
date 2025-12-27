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
      q: "Does BB Social have poolside seating?",
      a: "Yes, BB Social is known for its poolside seating and relaxing ambience.",
    },
    {
      q: "Is BB Social good for casual outings?",
      a: "Yes, it is popular for casual outings with friends and family.",
    },
    {
      q: "Do you offer takeaway or delivery?",
      a: "Yes, takeaway and delivery options are available.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-16 px-4 bg-white"
    >
      <div className="container mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Everything you need to know about BB Social
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-gray-200 rounded-lg px-4 sm:px-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-semibold text-sm sm:text-base text-gray-900 hover:no-underline py-3 sm:py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-gray-600 pb-3 sm:pb-4">
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




