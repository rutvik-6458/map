import { businessData } from "../data";
import { Plus } from "lucide-react";

export function FAQ() {
    return (
        <section id="faq" className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
                <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 md:mb-12 px-4">Frequently Asked Questions</h2>

                <div className="space-y-3 sm:space-y-4">
                    {businessData.content_blocks.faq.map((item, idx) => (
                        <div key={idx} className="border border-gray-100 rounded-lg p-4 sm:p-5 md:p-6 hover:border-primary/20 transition-colors shadow-sm">
                            <h3 className="text-base sm:text-lg font-semibold flex items-start justify-between gap-3">
                                <span className="flex-1">{item.q}</span>
                                <Plus className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0 mt-0.5" />
                            </h3>
                            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                                {item.a}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
