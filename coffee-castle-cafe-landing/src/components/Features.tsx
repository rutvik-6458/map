import { Shield, Star, MapPin, Coffee, Users, UtensilsCrossed } from "lucide-react";
import { cafeData } from "@/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const featureIcons = [
    Star,
    Shield,
    Coffee,
    Users,
    UtensilsCrossed,
    MapPin,
  ];

  return (
    <section id="features" className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b from-white to-stone-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-900 mb-3 sm:mb-4">
            Why Choose Coffee Castle Cafe
          </h2>
          <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto px-4">
            {cafeData.content_blocks.about_paragraph}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {cafeData.content_blocks.features_bullets.map((feature, index) => {
            const Icon = featureIcons[index % featureIcons.length];
            return (
              <Card key={index} className="border-amber-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-amber-100 rounded-lg">
                      <Icon className="w-5 h-5 text-amber-700" />
                    </div>
                    <CardTitle className="text-lg text-amber-900">
                      {feature.length > 30 ? `${feature.substring(0, 30)}...` : feature}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-stone-700 text-sm">
                    {feature}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-stone-200">
          <h3 className="text-xl sm:text-2xl font-semibold text-amber-900 mb-4 sm:mb-6 text-center">
            Best For
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {cafeData.positioning.best_for.map((item, index) => (
              <span
                key={index}
                className="px-4 py-2 sm:px-6 sm:py-3 bg-amber-100 text-amber-800 rounded-full text-sm sm:text-base font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

