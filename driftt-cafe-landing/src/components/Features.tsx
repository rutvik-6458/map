"use client";
import React from "react";
import { Coffee, Heart, Award, Clock, UtensilsCrossed, Sparkles } from "lucide-react";

export default function Features() {
  const uniqueSellingPoints = [
    {
      icon: Coffee,
      title: "Premium Pricing Cafe Experience",
      description: "Enjoy a refined cafe atmosphere with premium quality offerings",
    },
    {
      icon: Heart,
      title: "Good Ambience with Calm Vibe",
      description: "Relax in a peaceful setting perfect for quality conversations",
    },
    {
      icon: Award,
      title: "Quality Food with Generous Quantity",
      description: "Tasty dishes served in generous portions that satisfy",
    },
  ];

  const bestFor = [
    "Relaxed coffee dates",
    "Quiet cafe time with friends",
    "Premium cafe dining experience",
  ];

  return (
    <section id="features" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3 sm:mb-4">
            Why Choose Driftt Cafe?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Experience premium cafe dining with quality food and a calm ambience
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {uniqueSellingPoints.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-amber-50 to-white p-6 sm:p-8 rounded-2xl border border-amber-100 hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-amber-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-amber-200">
                  <Icon size={28} className="sm:w-8 sm:h-8 text-white" />
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

        <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-3xl p-6 sm:p-8 md:p-12 text-white">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <Sparkles size={24} className="sm:w-8 sm:h-8 fill-white" />
            <h3 className="text-2xl sm:text-3xl font-black">Best For</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {bestFor.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20"
              >
                <div className="w-2 h-2 rounded-full bg-amber-300"></div>
                <span className="font-bold text-base sm:text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


