'use client'
import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function FAQ() {
    const faqs = [
        {
            q: "Is Jerry Cafe good for birthday celebrations?",
            a: "Yes, many reviews mention it as a great place for birthdays and special occasions."
        },
        {
            q: "Is Jerry Cafe suitable for couples?",
            a: "Yes, it is often recommended as a cozy and private place for couples."
        },
        {
            q: "Do they provide decoration for occasions?",
            a: "Customers frequently praise the decoration, indicating occasion setups are available."
        }
    ]

    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section id="faq" className="py-24 bg-secondary/30">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border border-border rounded-lg bg-card overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="flex items-center justify-between w-full p-6 text-left font-medium text-lg hover:bg-secondary/50 transition-colors"
                                aria-expanded={openIndex === i}
                            >
                                <span>{faq.q}</span>
                                {openIndex === i ? (
                                    <Minus className="w-5 h-5 text-primary shrink-0 ml-4" />
                                ) : (
                                    <Plus className="w-5 h-5 text-primary shrink-0 ml-4" />
                                )}
                            </button>
                            <div
                                className={cn(
                                    "px-6 text-muted-foreground transition-all duration-300 ease-in-out overflow-hidden",
                                    openIndex === i ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
                                )}
                            >
                                {faq.a}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
