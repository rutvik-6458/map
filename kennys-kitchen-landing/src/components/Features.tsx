"use client";
import React from "react";
import { Sparkles, Heart, Award, UtensilsCrossed } from "lucide-react";

export default function Features() {
  const uniqueSellingPoints = [
    {
      icon: UtensilsCrossed,
      title: "Unique Fusion Items",
      description: "Creative dishes like Pavbhaji Pie that combine traditional flavors with modern twists",
    },
    {
      icon: Heart,
      title: "Relaxing Ambience",
      description: "Comfortable setting with courteous staff perfect for casual dining",
    },
    {
      icon: Award,
      title: "Affordable Prices",
      description: "Great food at budget-friendly prices, typically ₹200-400 per person",
    },
  ];

  const bestFor = [
    "Casual dining with friends and family",
    "Affordable cafe meals",
    "Trying unique comfort-food combinations",
  ];

  return (
    <section id="features" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3 sm:mb-4">
            Why Choose Kenny's Kitchen?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Experience comfort food with a creative twist in a relaxed cafe setting
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-10 sm:mb-12 md:mb-16">
          {uniqueSellingPoints.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-white p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-orange-100 hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-orange-600 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-orange-200">
                  <Icon size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-white">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <Sparkles size={24} className="sm:w-7 sm:h-7 md:w-8 md:h-8 fill-white" />
            <h3 className="text-2xl sm:text-3xl font-black">Best For</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {bestFor.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/20"
              >
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-300 flex-shrink-0"></div>
                <span className="font-bold text-sm sm:text-base md:text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


