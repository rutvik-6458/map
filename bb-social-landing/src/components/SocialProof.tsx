"use client";

import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SocialProof = () => {
  const rating = "4.4";
  const reviewCount = "141";
  const testimonials = [
    "It was pleasant atmosphere with soft music and ambience was wow.",
    "BB Social boasts a fantastic ambiance, perfect for relaxation.",
    "The poolside seating is a lovely touch and the food and coffee are delicious.",
  ];

  return (
    <section
      id="social-proof"
      className="py-16 px-4 bg-white"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
            <div className="flex items-center gap-0.5 sm:gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 sm:w-6 sm:h-6 ${
                    i < Math.floor(parseFloat(rating))
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-xl sm:text-2xl font-bold text-gray-900 ml-1.5 sm:ml-2">
              {rating}
            </span>
          </div>
          <p className="text-gray-600 text-base sm:text-lg">
            Rated by <span className="font-semibold">{reviewCount}+</span> customers
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 mb-3 sm:mb-4" />
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{testimonial}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">Top Review Themes</p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              "Great ambience with soft music",
              "Good food and coffee variety",
              "Relaxing poolside atmosphere",
            ].map((theme, index) => (
              <span
                key={index}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-50 text-blue-700 rounded-full text-xs sm:text-sm font-medium"
              >
                {theme}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;




