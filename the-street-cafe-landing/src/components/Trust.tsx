"use client";
import React from "react";
import { Star, Quote } from "lucide-react";

export default function Trust() {
  const rating = "4.7";
  const reviewCount = "15";
  const testimonialQuotes = [
    "The owner and the staff is very well mannered.",
    "Such good place and nice ambiance, I just love the pasta.",
    "The guy welcomed us very warmly and got our food packed in like 10 mins.",
  ];
  const topReviewThemes = [
    "Friendly owner and staff",
    "Good taste at low prices",
    "Quick service and packing",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-orange-50/30">
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
                      ? "fill-orange-600 text-orange-600"
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
            See what our visitors say about their experience at The Street Cafe by Ab's Kitchen
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
                className="text-orange-600 mb-4 fill-orange-100"
              />
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                "{quote}"
              </p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-orange-600 text-orange-600"
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





