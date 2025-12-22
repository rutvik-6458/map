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
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Why Choose Kenny's Kitchen?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience comfort food with a creative twist in a relaxed cafe setting
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {uniqueSellingPoints.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border border-orange-100 hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-200">
                  <Icon size={32} className="text-white" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-3xl p-8 md:p-12 text-white">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles size={32} className="fill-white" />
            <h3 className="text-3xl font-black">Best For</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {bestFor.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
              >
                <div className="w-2 h-2 rounded-full bg-orange-300"></div>
                <span className="font-bold text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

