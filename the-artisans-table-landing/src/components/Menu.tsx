import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Coffee, UtensilsCrossed, Trees } from "lucide-react";
import { cafeData } from "@/data";

const Menu = () => {
  const getDescription = (item: string) => {
    if (item.toLowerCase().includes("coffee")) {
      return "Handcrafted specialty coffee with rich, aromatic flavors";
    }
    if (item.toLowerCase().includes("vietnamese")) {
      return "Authentic Vietnamese coffee with bold, smooth taste";
    }
    if (item.toLowerCase().includes("bombon")) {
      return "Refreshing iced bombon coffee, perfect for any time";
    }
    if (item.toLowerCase().includes("food")) {
      return "Freshly prepared dishes made with quality ingredients";
    }
    if (item.toLowerCase().includes("outdoor")) {
      return "Enjoy your meal in our comfortable outdoor seating area";
    }
    return "Delicious offerings made with care and attention to detail";
  };

  const getIcon = (item: string) => {
    if (item.toLowerCase().includes("coffee") || item.toLowerCase().includes("vietnamese") || item.toLowerCase().includes("bombon")) {
      return Coffee;
    }
    if (item.toLowerCase().includes("outdoor")) {
      return Trees;
    }
    return UtensilsCrossed;
  };

  return (
    <section id="menu" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-900 mb-3 sm:mb-4 px-2">
            Our Signature Offerings
          </h2>
          <p className="text-base sm:text-lg text-stone-600 px-4">
            Discover our most loved specialties and services
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {cafeData.positioning.signature_items_or_services.map(
            (item, index) => {
              const Icon = getIcon(item);
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow border-amber-100"
                >
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="p-2 bg-amber-100 rounded-lg shrink-0">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700" />
                      </div>
                      <CardTitle className="text-lg sm:text-xl text-amber-900">
                        {item}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <p className="text-sm sm:text-base text-stone-600">
                      {getDescription(item)}
                    </p>
                  </CardContent>
                </Card>
              );
            }
          )}
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 text-center px-4">
          <div className="inline-block bg-amber-50 border border-amber-200 rounded-lg p-4 sm:p-6 w-full max-w-3xl">
            <h3 className="text-lg sm:text-xl font-semibold text-amber-900 mb-3 sm:mb-4">
              What Makes Us Special
            </h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {cafeData.positioning.unique_selling_points.map((usp, index) => (
                <span
                  key={index}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-amber-800 rounded-full text-xs sm:text-sm font-medium shadow-sm"
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




