"use client";
import React from "react";
import { Sparkles, Coffee, Award, Users } from "lucide-react";

export default function Features() {
  const uniqueSellingPoints = [
    {
      icon: Coffee,
      title: "High-Quality Coffee Beans",
      description: "Premium-quality beans that truly make a difference in taste and flavor",
    },
    {
      icon: Users,
      title: "Expert Baristas",
      description: "Skilled baristas and owner-led hospitality ensuring every cup is perfect",
    },
    {
      icon: Award,
      title: "Aesthetic Rooftop Ambience",
      description: "Peaceful rooftop setting perfect for relaxed evenings and quiet meetups",
    },
  ];

  const bestFor = [
    "Coffee lovers",
    "Relaxed evenings and quiet meetups",
    "Aesthetic rooftop coffee experience",
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Why Choose Seeds?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience premium coffee in a peaceful rooftop setting
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
                <div className="w-16 h-16 bg-amber-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-amber-200">
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

        <div className="bg-gradient-to-r from-amber-800 to-amber-900 rounded-3xl p-8 md:p-12 text-white">
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



