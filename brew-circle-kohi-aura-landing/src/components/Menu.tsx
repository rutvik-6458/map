import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coffee, Dessert, UtensilsCrossed } from "lucide-react";
import { cafeData } from "@/data";

const Menu = () => {
  const icons = [Coffee, Dessert, UtensilsCrossed];

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
          {cafeData.positioning.signature_items_or_services.map(
            (item, index) => {
              const Icon = icons[index % icons.length];
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow border-amber-100"
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-amber-100 rounded-lg">
                        <Icon className="w-5 h-5 text-amber-700" />
                      </div>
                      <CardTitle className="text-xl text-gray-900">
                        {item}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      {item.includes("Coffee") || item.includes("Cappuccino")
                        ? "Premium quality coffee made with care"
                        : item.includes("Dessert") || item.includes("croissants")
                        ? "Freshly baked treats and sweet indulgences"
                        : "Delicious cafe favorites made with quality ingredients"}
                    </p>
                  </CardContent>
                </Card>
              );
            }
          )}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Unique Selling Points
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {cafeData.positioning.unique_selling_points.map((usp, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white text-amber-700 rounded-full text-sm font-medium shadow-sm"
                >
                  {usp}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;

