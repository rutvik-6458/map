"use client";

import { Coffee, UtensilsCrossed, GlassWater } from "lucide-react";
import { cafeData } from "@/data";

const Menu = () => {
  const signatureItems = cafeData.positioning.signature_items_or_services.map((item, index) => {
    const icons = [Coffee, UtensilsCrossed, GlassWater];
    const descriptions = [
      "Premium quality coffee loved by customers",
      "Delicious pasta with creamy white sauce",
      "Refreshing cranberry tonic drink"
    ];
    return {
      name: item,
      description: descriptions[index] || "Customer favorite",
      icon: icons[index] || Coffee
    };
  });

  return (
    <section id="menu" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Signature Items
          </h2>
          <p className="text-lg text-gray-600">
            Discover our most loved dishes and specialties
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {signatureItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 rounded-xl p-8 hover:shadow-lg transition-all hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-amber-100 rounded-lg">
                    <Icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.name}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Dine-in, takeaway, and delivery available
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;



