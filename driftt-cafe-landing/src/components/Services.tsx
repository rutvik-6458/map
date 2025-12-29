"use client";
import React from "react";
import { Coffee, Sandwich, Pizza, UtensilsCrossed, Clock, Truck } from "lucide-react";

export default function Services() {
  const signatureItems = [
    {
      icon: Coffee,
      title: "Cappuccino and Coffee Drinks",
      description: "Premium coffee beverages crafted with care",
    },
    {
      icon: Sandwich,
      title: "Sandwiches",
      description: "Tasty sandwiches made with fresh ingredients",
    },
    {
      icon: Pizza,
      title: "Pizzas",
      description: "Delicious pizzas with quality toppings",
    },
    {
      icon: UtensilsCrossed,
      title: "Sizzler Dishes",
      description: "Satisfying sizzler meals with generous portions",
    },
  ];

  const features = [
    "Premium coffee and cafe drinks",
    "Tasty sandwiches and pizzas",
    "Good food quality and quantity",
    "Calm and pleasant ambience",
    "Dine-in, drive-through and delivery available",
    "Open till 11 pm",
  ];

  return (
    <section id="services" className="py-12 sm:py-20 bg-gradient-to-b from-white to-amber-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3 sm:mb-4">
            Our Menu & Services
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Signature items and services that make Driftt Cafe special
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {signatureItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-amber-600 rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg shadow-amber-200">
                  <Icon size={20} className="sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl border border-gray-100">
          <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-6 sm:mb-8 text-center">
            What We Offer
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100"
              >
                <div className="w-2 h-2 rounded-full bg-amber-600"></div>
                <span className="font-semibold text-gray-800">{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2 text-gray-700">
              <Clock size={18} className="sm:w-5 sm:h-5 text-amber-600" />
              <span className="font-semibold text-sm sm:text-base">Open daily, closes at 11 pm</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Truck size={18} className="sm:w-5 sm:h-5 text-amber-600" />
              <span className="font-semibold text-sm sm:text-base">Dine-in • Drive-through • Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


