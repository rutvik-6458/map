"use client";
import React from "react";
import { Star, Quote } from "lucide-react";

export default function Trust() {
  const rating = "4.8";
  const reviewCount = "47";
  const testimonialQuotes = [
    "One of the most pocket friendly places. Loved the food, ambience and vibe.",
    "The ambience was inviting and perfectly set the stage for a relaxing meal.",
    "Best staff and delicious food.",
  ];

  const topReviewThemes = [
    "Excellent food and service",
    "Warm ambience and vibe",
    "Friendly staff and owner hospitality",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-amber-50/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={28}
                  className={
                    i < Math.floor(parseFloat(rating))
                      ? "fill-amber-500 text-amber-500"
                      : "fill-gray-200 text-gray-200"
                  }
                />
              ))}
            </div>
            <div className="text-left">
              <div className="text-4xl font-black text-gray-900">
                {rating}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {reviewCount} Reviews
              </div>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Loved by Our Customers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our visitors say about their experience at Cafetrio
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonialQuotes.map((quote, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <Quote
                size={32}
                className="text-amber-600 mb-4 fill-amber-100"
              />
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                "{quote}"
              </p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-amber-500 text-amber-500"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex flex-wrap justify-center gap-6 text-sm text-gray-600">
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

