"use client";
import React from "react";
import { Cake, Sparkles, Heart } from "lucide-react";

export default function Features() {
  const uniqueSellingPoints = [
    {
      icon: Cake,
      title: "Strong Focus on Patisserie-Style Desserts",
      description: "Premium cheesecakes, brownies, and handcrafted pastries made with care",
    },
    {
      icon: Sparkles,
      title: "Elegant Interior with Great Ambience",
      description: "Beautiful setting perfect for celebrations, coffee dates, and special moments",
    },
    {
      icon: Heart,
      title: "Highly Praised Cheesecakes and Brownies",
      description: "Customer favorites that keep visitors coming back for more",
    },
  ];

  const bestFor = [
    "Dessert and pastry lovers",
    "Birthday celebrations and special moments",
    "Coffee with premium baked treats",
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Why Choose Blue Vanilla?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience premium patisserie desserts with elegant ambience and exceptional service
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {uniqueSellingPoints.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
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

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white">
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
                <div className="w-2 h-2 rounded-full bg-blue-300"></div>
                <span className="font-bold text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

