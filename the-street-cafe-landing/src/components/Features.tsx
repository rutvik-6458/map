"use client";
import React from "react";
import { Sparkles, DollarSign, Clock, Users } from "lucide-react";

export default function Features() {
  const uniqueSellingPoints = [
    {
      icon: DollarSign,
      title: "Very Pocket-Friendly Pricing",
      description: "Affordable street food that fits your budget without compromising on taste",
    },
    {
      icon: Clock,
      title: "Fast Service and Quick Packing",
      description: "Quick service and efficient packing for takeaway and delivery orders",
    },
    {
      icon: Users,
      title: "Warm, Well-Mannered Owner and Staff",
      description: "Friendly and welcoming service that makes every visit pleasant",
    },
  ];

  const bestFor = [
    "Budget-friendly street food",
    "Quick takeaway and delivery",
    "Casual snacks with friends",
  ];

  return (
    <section id="features" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-3 sm:mb-4 px-4">
            Why Choose The Street Cafe?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Experience budget-friendly street food with fast service and warm hospitality
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {uniqueSellingPoints.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-white p-6 sm:p-8 rounded-2xl border border-orange-100 hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-orange-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-orange-200">
                  <Icon size={28} className="text-white sm:w-8 sm:h-8" />
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

        <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-white">
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <Sparkles size={24} className="fill-white sm:w-8 sm:h-8" />
            <h3 className="text-2xl sm:text-3xl font-black">Best For</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {bestFor.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20"
              >
                <div className="w-2 h-2 rounded-full bg-orange-300"></div>
                <span className="font-bold text-base sm:text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}





