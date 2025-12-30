"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UtensilsCrossed } from "lucide-react";

const Menu = () => {
  const signatureItems = [
    "Pasta",
    "Tacos",
    "Sizzlers and Paneer dishes"
  ];

  const bestFor = [
    "Family dinners and celebrations",
    "Friends hangouts and parties",
    "Rooftop dining experience"
  ];

  return (
    <section
      id="menu"
      className="py-16 px-4 bg-white"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
            <UtensilsCrossed className="w-8 h-8 text-orange-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Signature Dishes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most loved dishes, crafted with care and quality ingredients
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {signatureItems.map((item, index) => (
            <Card key={index} className="border-gray-200 shadow-sm hover:shadow-md transition-all hover:scale-105">
              <CardHeader>
                <CardTitle className="text-xl text-center">{item}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">A customer favorite</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Perfect For
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {bestFor.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-3 h-3 bg-orange-600 rounded-full mx-auto mb-3"></div>
                <p className="text-gray-700 text-lg font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Explore our full menu when you visit us
          </p>
          <p className="text-sm text-gray-500">
            For detailed menu information, please call us or visit our location
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;




