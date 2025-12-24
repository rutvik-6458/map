"use client";
import React from "react";
import { DollarSign, Heart, Award, Sparkles } from "lucide-react";

export default function Features() {
  const uniqueSellingPoints = [
    {
      icon: DollarSign,
      title: "Very Pocket-Friendly Pricing",
      description: "Enjoy delicious food and great value without breaking the bank",
    },
    {
      icon: Heart,
      title: "Highly Praised Hospitality",
      description: "Experience warm, friendly service that makes every visit special",
    },
    {
      icon: Award,
      title: "Calm and Inviting Ambience",
      description: "Relax in a cozy setting perfect for casual meals and conversations",
    },
  ];

  const bestFor = [
    "Budget-friendly cafe dining",
    "Relaxed meals with friends",
    "Casual hangouts and coffee breaks",
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Why Choose Cafetrio?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience pocket-friendly cafe dining with delicious food and warm hospitality
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {uniqueSellingPoints.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl border border-amber-100 hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-amber-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-amber-200">
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

        <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-3xl p-8 md:p-12 text-white">
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
                <div className="w-2 h-2 rounded-full bg-amber-300"></div>
                <span className="font-bold text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

