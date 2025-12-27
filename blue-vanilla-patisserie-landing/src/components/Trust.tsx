"use client";
import React from "react";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Trust() {
  const rating = "4.5";
  const reviewCount = "133";
  const testimonialQuotes = [
    "Nice atmosphere, delicious food and my one and only favourite cheesecake.",
    "Brownies and frappes were some of the best I've ever tasted.",
    "A must-visit for anyone who appreciates good coffee and exquisite pastries.",
  ];

  const topReviewThemes = [
    "Delicious desserts and cheesecakes",
    "Beautiful ambience and interior",
    "Polite staff and good service",
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-blue-50/30">
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
                      ? "fill-blue-500 text-blue-500"
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3 sm:mb-4 px-2">
            Loved by Our Customers
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            See what our visitors say about their experience at Blue Vanilla Patisserie & Cafe
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonialQuotes.map((quote, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <Quote
                size={28}
                className="sm:w-8 sm:h-8 text-blue-600 mb-3 sm:mb-4 fill-blue-100"
              />
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                "{quote}"
              </p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="sm:w-4 sm:h-4 fill-blue-500 text-blue-500"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center px-2">
          <div className="inline-flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-gray-600">
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


