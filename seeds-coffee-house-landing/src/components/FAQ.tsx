"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is Seeds - The Coffee House known for?",
      a: "It is known for high-quality coffee beans, expert baristas and a peaceful rooftop ambience.",
    },
    {
      q: "Is Seeds suitable for relaxed coffee meetings?",
      a: "Yes, it's a calm and aesthetic place ideal for relaxed meetups and quiet time.",
    },
    {
      q: "What time does Seeds close?",
      a: "The cafe closes at 12 am.",
    },
  ];

  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-amber-50/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3 sm:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-gray-600 px-2">
            Everything you need to know about Seeds - The Coffee House
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left gap-4"
              >
                <span className="font-bold text-base sm:text-lg text-gray-900">
                  {faq.q}
                </span>
                <ChevronDown
                  size={20}
                  className={cn(
                    "text-gray-500 flex-shrink-0 transition-transform",
                    openIndex === index && "transform rotate-180"
                  )}
                />
              </button>
              {openIndex === index && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-5">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}





