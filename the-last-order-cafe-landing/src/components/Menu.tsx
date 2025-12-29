import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UtensilsCrossed } from "lucide-react";
import { cafeData } from "@/data";

const Menu = () => {
  const getDescription = (item: string) => {
    if (item.toLowerCase().includes("nachos")) {
      return "Crispy loaded nachos with fresh toppings and melted cheese";
    }
    if (item.toLowerCase().includes("garlic bread")) {
      return "Warm, molten garlic bread with aromatic herbs";
    }
    if (item.toLowerCase().includes("lasagna") || item.toLowerCase().includes("pasta")) {
      return "Rich, flavorful Italian comfort food made with care";
    }
    return "Delicious comfort food made with quality ingredients";
  };

  return (
    <section id="menu" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            Our Signature Items
          </h2>
          <p className="text-lg text-stone-600">
            Discover our most loved dishes and specialties
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cafeData.positioning.signature_items_or_services.map(
            (item, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow border-amber-100"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-amber-100 rounded-lg">
                      <UtensilsCrossed className="w-5 h-5 text-amber-700" />
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
            )
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


