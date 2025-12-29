"use client";
import React from "react";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Trust() {
  const rating = "4.2";
  const reviewCount = "39";
  const testimonialQuotes = [
    "Great cafe and great vibes. Must visit for amazing coffees and shakes.",
    "Nice place, good ambience and delicious varieties of food.",
    "Food quality and quantity is also good.",
  ];

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-b from-white to-amber-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="flex items-center gap-0.5 sm:gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={cn(
                    "sm:w-7 sm:h-7",
                    i < Math.floor(parseFloat(rating))
                      ? "fill-amber-500 text-amber-500"
                      : "fill-gray-200 text-gray-200"
                  )}
                />
              ))}
            </div>
            <div className="text-left">
              <div className="text-2xl sm:text-4xl font-black text-gray-900">
                {rating}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium">
                {reviewCount} Reviews
              </div>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3 sm:mb-4">
            Loved by Our Customers
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            See what our visitors say about their experience at Driftt Cafe
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonialQuotes.map((quote, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <Quote
                size={24}
                className="sm:w-8 sm:h-8 text-amber-600 mb-3 sm:mb-4 fill-amber-100"
              />
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                "{quote}"
              </p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="sm:w-4 sm:h-4 fill-amber-500 text-amber-500"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center px-2">
          <div className="inline-flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-gray-600">
            <span className="font-semibold">Top Review Themes:</span>
            <span>Good ambience and vibes</span>
            <span>•</span>
            <span>Tasty sandwiches and pizzas</span>
            <span>•</span>
            <span>Good food quality and quantity</span>
          </div>
        </div>
      </div>
    </section>
  );
}


