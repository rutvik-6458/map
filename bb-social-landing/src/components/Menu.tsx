"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coffee, UtensilsCrossed, IceCream } from "lucide-react";

const Menu = () => {
  const menuCategories = [
    {
      icon: Coffee,
      title: "Drinks",
      items: ["Iced Latte", "Mojitos"],
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: UtensilsCrossed,
      title: "Signature Dishes",
      items: ["Loaded Nachos", "Mexican Tacos", "Shakshuka", "Pad Thai"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: IceCream,
      title: "More Options",
      items: ["Healthy dishes", "Fast food favorites", "Global cuisine"],
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section
      id="menu"
      className="py-16 px-4 bg-white"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Menu Highlights
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our signature items and popular favorites
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {menuCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <CardHeader className={`bg-gradient-to-br ${category.color} text-white pb-4`}>
                  <div className="flex items-center gap-3">
                    <Icon className="w-8 h-8" />
                    <CardTitle className="text-2xl text-white">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        <span className="text-base">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Mix of healthy dishes and fast food favorites
          </p>
          <p className="text-sm text-gray-500">
            Full menu available at the cafe. Ask our staff for recommendations!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Menu;


