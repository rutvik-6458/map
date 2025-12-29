import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UtensilsCrossed } from "lucide-react";
import { cafeData } from "@/data";

const Menu = () => {
  return (
    <section id="menu" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Our Signature Items
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Discover our most loved dishes and specialties
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {cafeData.positioning.signature_items_or_services.map(
            (item, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow border-orange-100"
              >
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="p-2 bg-orange-100 rounded-lg shrink-0">
                      <UtensilsCrossed className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl text-gray-900">
                      {item}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <p className="text-sm sm:text-base text-gray-600">
                    {item.includes("Mocktails")
                      ? "Refreshing and flavorful mocktails perfect for any time of day"
                      : item.includes("Noodles")
                      ? "Delicious noodles with authentic flavors and fresh ingredients"
                      : "Comforting cafe-style food that hits the spot"}
                  </p>
                </CardContent>
              </Card>
            )
          )}
        </div>

        <div className="mt-8 sm:mt-12 text-center px-2">
          <div className="inline-block bg-orange-50 border border-orange-200 rounded-lg p-4 sm:p-6 w-full max-w-2xl">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
              Unique Selling Points
            </h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {cafeData.positioning.unique_selling_points.map((usp, index) => (
                <span
                  key={index}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-orange-700 rounded-full text-xs sm:text-sm font-medium shadow-sm"
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





