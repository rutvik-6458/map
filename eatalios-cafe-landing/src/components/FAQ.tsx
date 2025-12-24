import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
    const faqs = [
        {
            q: "What is Eatalio's Cafe best known for?",
            a: "It is especially known for its pasta."
        },
        {
            q: "Does Eatalio's Cafe offer takeaway or delivery?",
            a: "Yes, takeaway and delivery options are available."
        },
        {
            q: "What time does the cafe close?",
            a: "The cafe closes at 11:30 pm."
        }
    ];

    return (
        <section id="faq" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-lg text-gray-600">
                            Everything you need to know about Eatalio's Cafe
                        </p>
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-gray-200">
                                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-red-600">
                                    {faq.q}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600">
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



