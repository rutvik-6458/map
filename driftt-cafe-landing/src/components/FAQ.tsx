"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What kind of cafe is Driftt Cafe?",
      a: "It is a premium coffee shop offering cafe food and a calm ambience.",
    },
    {
      q: "What food items are popular here?",
      a: "Sandwiches, pizzas, sizzlers and coffee drinks are commonly recommended.",
    },
    {
      q: "Does Driftt Cafe offer drive-through or delivery?",
      a: "Yes, drive-through and no-contact delivery options are available.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-white to-amber-50/30">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about Driftt Cafe
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-bold text-lg text-gray-900 pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  size={24}
                  className={cn(
                    "text-gray-500 flex-shrink-0 transition-transform",
                    openIndex === index && "transform rotate-180"
                  )}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

