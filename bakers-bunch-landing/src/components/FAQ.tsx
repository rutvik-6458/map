import { businessData } from "../data";
import { Plus } from "lucide-react";

export function FAQ() {
    return (
        <section id="faq" className="py-20 bg-white">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

                <div className="space-y-4">
                    {businessData.content_blocks.faq.map((item, idx) => (
                        <div key={idx} className="border border-gray-100 rounded-lg p-6 hover:border-primary/20 transition-colors shadow-sm">
                            <h3 className="text-lg font-semibold flex items-center justify-between">
                                {item.q}
                                <Plus className="h-5 w-5 text-primary" />
                            </h3>
                            <p className="mt-3 text-muted-foreground leading-relaxed">
                                {item.a}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
