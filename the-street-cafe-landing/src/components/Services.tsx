"use client";
import React from "react";
import { Utensils, Clock, Truck } from "lucide-react";

export default function Services() {
  const signatureItems = [
    {
      icon: Utensils,
      title: "Veg Steamed Momos",
      description: "Delicious steamed momos that are a customer favourite",
    },
    {
      icon: Utensils,
      title: "Peri Peri Fries",
      description: "Crispy fries with spicy peri peri seasoning",
    },
    {
      icon: Utensils,
      title: "Sandwiches and Pasta",
      description: "Tasty sandwiches and comforting pasta dishes",
    },
  ];

  const features = [
    "Very affordable price range",
    "Popular veg momos and fries",
    "Fast service and takeaway packing",
    "Friendly and welcoming staff",
    "Dine-in, takeaway and delivery available",
    "Convenient VIP Road location",
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-orange-50/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Our Menu & Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Signature items and services that make The Street Cafe special
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {signatureItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-orange-600 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-orange-200">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <h3 className="text-3xl font-black text-gray-900 mb-8 text-center">
            What We Offer
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-orange-50 rounded-xl border border-orange-100"
              >
                <div className="w-2 h-2 rounded-full bg-orange-600"></div>
                <span className="font-semibold text-gray-800">{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-gray-700">
              <Clock size={20} className="text-orange-600" />
              <span className="font-semibold">Fast service and quick packing</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Truck size={20} className="text-orange-600" />
              <span className="font-semibold">Dine-in • Takeaway • Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




