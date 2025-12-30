import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { BUSINESS_DATA } from "@/data";

export function FAQ() {
    return (
        <section id="faq" className="py-24 bg-background">
            <div className="container mx-auto px-6 max-w-3xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 italic">Common Questions</h2>
                <Accordion type="single" collapsible className="w-full space-y-4">
                    {BUSINESS_DATA.content_blocks.faq.map((item, idx) => (
                        <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-2xl px-6 bg-secondary/10">
                            <AccordionTrigger className="text-left font-bold py-6 hover:no-underline">
                                {item.q}
                            </AccordionTrigger>
                            <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                                {item.a}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
