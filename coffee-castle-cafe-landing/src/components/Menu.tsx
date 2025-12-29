import { Coffee, UtensilsCrossed, ShoppingBag } from "lucide-react";
import { cafeData } from "@/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Menu = () => {
  const serviceIcons: Record<string, typeof Coffee> = {
    Coffee: Coffee,
    "Dine-in seating": UtensilsCrossed,
    "Takeaway service": ShoppingBag,
  };

  return (
    <section id="menu" className="py-12 sm:py-16 md:py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-900 mb-3 sm:mb-4">
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto px-4">
            What we offer at Coffee Castle Cafe
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {cafeData.positioning.signature_items_or_services.map((item, index) => {
            const Icon = serviceIcons[item] || Coffee;
            return (
              <Card key={index} className="text-center border-amber-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <div className="p-3 sm:p-4 bg-amber-100 rounded-full">
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-amber-700" />
                    </div>
                  </div>
                  <CardTitle className="text-lg sm:text-xl text-amber-900">
                    {item}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm sm:text-base text-stone-600">
                    {item === "Coffee" && "Quality coffee served fresh"}
                    {item === "Dine-in seating" && "Comfortable and private seating"}
                    {item === "Takeaway service" && "Take your favorites to go"}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-stone-200">
          <h3 className="text-xl sm:text-2xl font-semibold text-amber-900 mb-4 sm:mb-6 text-center">
            Unique Selling Points
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {cafeData.positioning.unique_selling_points.map((point, index) => (
              <div
                key={index}
                className="bg-amber-50 p-4 sm:p-6 rounded-lg border border-amber-200"
              >
                <p className="text-sm sm:text-base text-stone-700 text-center">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;

