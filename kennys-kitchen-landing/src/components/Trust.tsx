"use client";
import React from "react";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Trust() {
  const rating = "4.6";
  const reviewCount = "157";
  const testimonialQuotes = [
    "Ambience is relaxing and very courteous owner and staff.",
    "Good food and good service with affordable price.",
    "Pavbhaji Pie – a unique food item and awesome taste.",
  ];
  const topReviewThemes = [
    "Relaxing ambience",
    "Good service and friendly owner",
    "Diverse and creative menu",
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-orange-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="flex items-center gap-0.5 sm:gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className={cn(
                    "sm:w-6 sm:h-6 md:w-7 md:h-7",
                    i < Math.floor(parseFloat(rating))
                      ? "fill-orange-500 text-orange-500"
                      : "fill-gray-200 text-gray-200"
                  )}
                />
              ))}
            </div>
            <div className="text-left">
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900">
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
            See what our visitors say about their experience at Kenny's Kitchen
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {testimonialQuotes.map((quote, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <Quote
                size={24}
                className="sm:w-7 sm:h-7 md:w-8 md:h-8 text-orange-600 mb-3 sm:mb-4 fill-orange-100"
              />
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                "{quote}"
              </p>
              <div className="flex items-center gap-0.5 sm:gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="sm:w-4 sm:h-4 fill-orange-500 text-orange-500"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 text-center">
          <div className="inline-flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-gray-600 px-2">
            <span className="font-semibold">Top Review Themes:</span>
            {topReviewThemes.map((theme, index) => (
              <React.Fragment key={index}>
                <span>{theme}</span>
                {index < topReviewThemes.length - 1 && <span>•</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


