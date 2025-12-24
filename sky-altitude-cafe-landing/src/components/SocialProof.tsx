"use client";

import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SocialProof = () => {
  const rating = "4.4";
  const reviewCount = "762";
  const testimonials = [
    "Good food good service great location family & friends place",
    "Pretty amazing ambience with good staff quality",
    "Hosted a family party and had an amazing experience"
  ];

  const topReviewThemes = [
    "Beautiful rooftop ambience",
    "Good food quality",
    "Suitable for families and groups"
  ];

  return (
    <section
      id="social-proof"
      className="py-16 px-4 bg-white"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${
                    i < Math.floor(parseFloat(rating))
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900 ml-2">
              {rating}
            </span>
          </div>
          <p className="text-gray-600 text-lg">
            Rated by <span className="font-semibold">{reviewCount}+</span> customers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <Quote className="w-8 h-8 text-orange-600 mb-4" />
                <p className="text-gray-700 leading-relaxed">{testimonial}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 mb-2">Top Review Themes</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {topReviewThemes.map((theme, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-orange-50 text-orange-700 rounded-full text-sm font-medium"
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

