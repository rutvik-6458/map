"use client";

import { useState } from "react";
import { businessData } from "../data";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "../lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-24 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-playfair mb-4 sm:mb-6">Common Questions</h2>
          <p className="text-sm sm:text-base text-muted-foreground px-2">Everything you need to know about visiting {businessData.brand.business_name}.</p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {businessData.content_blocks.faq.map((item, index) => (
            <div
              key={index}
              className={cn(
                "bg-white rounded-xl sm:rounded-2xl overflow-hidden border transition-all duration-300",
                openIndex === index ? "border-primary shadow-lg shadow-primary/5" : "border-border/50 hover:border-primary/30"
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 sm:p-6 text-left gap-3 sm:gap-4"
              >
                <span className="text-base sm:text-lg font-semibold pr-2">{item.q}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0" />
                ) : (
                  <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 animate-in slide-in-from-top duration-300">
                  <div className="pt-2 border-t border-gray-50 text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {item.a}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}







