"use client";
import React from "react";
import { Coffee, Clock, Truck, Coffee as CoffeeIcon } from "lucide-react";

export default function Services() {
  const signatureItems = [
    {
      icon: CoffeeIcon,
      title: "Bombon Coffee",
      description: "A specialty coffee blend with rich, balanced flavors",
    },
    {
      icon: CoffeeIcon,
      title: "Hazelnut Latte",
      description: "Smooth espresso with creamy hazelnut flavor",
    },
    {
      icon: CoffeeIcon,
      title: "Specialty Coffee",
      description: "Expertly brewed coffee from quality beans",
    },
  ];

  const features = [
    "Premium-quality coffee beans",
    "Expertly crafted specialty coffees",
    "Aesthetic rooftop seating",
    "Polite and welcoming staff",
    "Dine-in, kerbside pickup and delivery available",
    "Open till midnight",
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-amber-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3 sm:mb-4">
            Our Menu & Services
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Signature items and services that make Seeds special
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12 lg:mb-16">
          {signatureItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white p-5 sm:p-6 rounded-2xl border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-amber-800 rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg shadow-amber-200">
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

        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl border border-gray-100">
          <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-6 sm:mb-8 text-center">
            What We Offer
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-amber-50 rounded-xl border border-amber-100"
              >
                <div className="w-2 h-2 rounded-full bg-amber-800 flex-shrink-0"></div>
                <span className="font-semibold text-sm sm:text-base text-gray-800">{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2 text-gray-700">
              <Clock size={18} className="sm:w-5 sm:h-5 text-amber-800" />
              <span className="font-semibold text-sm sm:text-base">Open daily, closes at 12 am</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <Truck size={18} className="sm:w-5 sm:h-5 text-amber-800" />
              <span className="font-semibold text-sm sm:text-base text-center">Dine-in • Kerbside Pickup • Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}





