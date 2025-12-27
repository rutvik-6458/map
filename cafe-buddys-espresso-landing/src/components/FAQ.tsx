import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cafeData } from "@/data";

const FAQ = () => {
  return (
    <section id="faq" className="py-12 sm:py-16 md:py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-900 mb-3 sm:mb-4 px-2">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-stone-600 px-4">
            Everything you need to know about {cafeData.brand.business_name}
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {cafeData.content_blocks.faq.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-stone-200 rounded-lg px-4 bg-amber-50/50"
            >
              <AccordionTrigger className="text-left font-semibold text-amber-900 hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-stone-700">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;

