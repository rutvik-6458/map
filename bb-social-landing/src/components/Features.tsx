"use client";

import { Waves, UtensilsCrossed, Gamepad2, Music, Clock, ShoppingBag } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Waves,
      title: "Poolside seating with premium ambience",
      description: "Relax by the pool with comfortable seating and a serene atmosphere.",
    },
    {
      icon: UtensilsCrossed,
      title: "Wide menu with coffee, global dishes and fast food",
      description: "From iced lattes to pad thai, we have something for everyone.",
    },
    {
      icon: Gamepad2,
      title: "Game zone with board games and cards",
      description: "Enjoy fun games with friends and family in our dedicated game area.",
    },
    {
      icon: Music,
      title: "Pleasant music and relaxed atmosphere",
      description: "Soft music creates the perfect backdrop for your conversations.",
    },
    {
      icon: ShoppingBag,
      title: "Dine-in, takeaway and delivery available",
      description: "Enjoy our food however you prefer - at the cafe or at home.",
    },
    {
      icon: Clock,
      title: "Open till midnight",
      description: "Late-night hours perfect for evening hangouts and relaxed dinners.",
    },
  ];

  return (
    <section
      id="features"
      className="py-16 px-4 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose BB Social?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A premium cafe experience combining great food, games, and a relaxing
            poolside ambience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-300"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;



