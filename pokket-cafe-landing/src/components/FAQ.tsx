"use client";

import { useState } from "react";
import { businessData } from "../data";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "../lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-secondary/10">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">Common Questions</h2>
          <p className="text-muted-foreground">Everything you need to know about visiting {businessData.brand.business_name}.</p>
        </div>

        <div className="space-y-4">
          {businessData.content_blocks.faq.map((item, index) => (
            <div
              key={index}
              className={cn(
                "bg-white rounded-2xl overflow-hidden border transition-all duration-300",
                openIndex === index ? "border-primary shadow-lg shadow-primary/5" : "border-border/50 hover:border-primary/30"
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold">{item.q}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-primary" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 animate-in slide-in-from-top duration-300">
                  <div className="pt-2 border-t border-gray-50 text-muted-foreground leading-relaxed">
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






