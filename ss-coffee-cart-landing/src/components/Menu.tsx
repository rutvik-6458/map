import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coffee, CupSoda, Car } from "lucide-react";
import { cafeData } from "@/data";

const Menu = () => {
  const getDescription = (item: string) => {
    if (item.toLowerCase().includes("hot chocolate")) {
      return "Rich, creamy hot chocolate made with premium ingredients";
    }
    if (item.toLowerCase().includes("coffee")) {
      return "Freshly brewed coffee with authentic flavors";
    }
    if (item.toLowerCase().includes("drive-through")) {
      return "Convenient drive-through service for quick coffee stops";
    }
    return "Quality beverages made with care";
  };

  const getIcon = (item: string) => {
    if (item.toLowerCase().includes("hot chocolate")) {
      return CupSoda;
    }
    if (item.toLowerCase().includes("coffee")) {
      return Coffee;
    }
    return Car;
  };

  return (
    <section id="menu" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            Our Signature Items
          </h2>
          <p className="text-lg text-stone-600">
            Discover our most loved beverages and services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cafeData.positioning.signature_items_or_services.map(
            (item, index) => {
              const Icon = getIcon(item);
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
                      <CardTitle className="text-xl text-amber-900">
                        {item}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-stone-600">
                      {getDescription(item)}
                    </p>
                  </CardContent>
                </Card>
              );
            }
          )}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-amber-900 mb-2">
              What Makes Us Special
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {cafeData.positioning.unique_selling_points.map((usp, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white text-amber-800 rounded-full text-sm font-medium shadow-sm"
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

