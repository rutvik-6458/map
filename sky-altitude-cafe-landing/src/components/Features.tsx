"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, UtensilsCrossed, Sparkles, MapPin, Clock, Heart } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Ideal for Family Gatherings",
      description: "Perfect venue for family dinners, parties, and celebrations"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Spacious Rooftop Seating",
      description: "Open-sky dining experience with stunning views"
    },
    {
      icon: <UtensilsCrossed className="w-6 h-6" />,
      title: "Well-Rated Food & Service",
      description: "Quality cuisine and excellent customer service"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Kid-Friendly Environment",
      description: "Safe and welcoming space for families with children"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Prime Vesu Location",
      description: "Conveniently located in the heart of Vesu, Surat"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Multiple Dining Options",
      description: "Dine-in, pickup, and delivery available"
    }
  ];

  const uniqueSellingPoints = [
    "Spacious rooftop and open-sky seating",
    "Popular venue for family parties and events",
    "Strong ratings with large review volume"
  ];

  return (
    <section
      id="features"
      className="py-16 px-4 bg-gradient-to-b from-white to-orange-50"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Sky Altitude?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the perfect blend of great food, stunning ambience, and exceptional service
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            What Makes Us Special
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {uniqueSellingPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 text-lg">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;


