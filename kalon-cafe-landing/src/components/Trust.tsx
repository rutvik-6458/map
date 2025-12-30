"use client";

import { Star, Quote } from "lucide-react";
import { cafeData } from "@/data";

export default function Trust() {
  const rating = parseFloat(cafeData.social_proof.rating);
  const reviewCount = cafeData.social_proof.review_count;

  return (
    <section id="trust" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={28}
                  className={
                    i < Math.floor(rating)
                      ? "fill-amber-500 text-amber-500"
                      : "fill-gray-200 text-gray-200"
                  }
                />
              ))}
            </div>
            <div className="text-left">
              <div className="text-4xl font-black text-gray-900">
                {cafeData.social_proof.rating}
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
            See what our visitors say about their experience at {cafeData.brand.business_name}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {cafeData.social_proof.testimonial_quotes.map((quote, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow relative"
            >
              <Quote className="h-8 w-8 text-amber-500/20 absolute top-6 right-6" />
              <p className="text-lg italic text-gray-700 leading-relaxed mb-6">
                "{quote}"
              </p>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold">
                  {String.fromCharCode(65 + index)}
                </div>
                <div>
                  <p className="font-semibold text-sm text-gray-900">Happy Customer</p>
                  <p className="text-xs text-gray-500">Local Guide</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-4 md:gap-12">
          {cafeData.social_proof.top_review_themes.map((theme, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-amber-50 px-6 py-3 rounded-full border border-amber-200"
            >
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span className="font-semibold text-gray-900">{theme}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



