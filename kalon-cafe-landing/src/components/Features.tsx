"use client";

import { Sparkles, Coffee, Heart, Award } from "lucide-react";
import { cafeData } from "@/data";

export default function Features() {
  const uniqueSellingPoints = cafeData.positioning.unique_selling_points.map((point, index) => {
    const icons = [Coffee, Heart, Award];
    return {
      icon: icons[index] || Coffee,
      title: point,
      description: index === 0
        ? "Highly rated by customers with consistent positive reviews"
        : index === 1
        ? "Perfect setting for relaxation and quality time"
        : "Professional service that makes every visit memorable"
    };
  });

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Why Choose KALON
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what makes us a favorite destination in Vesu
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {uniqueSellingPoints.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all hover:scale-105"
              >
                <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
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
            {cafeData.positioning.best_for.map((item, index) => (
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

