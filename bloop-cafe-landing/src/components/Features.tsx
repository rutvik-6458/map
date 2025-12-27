import { CheckCircle2, DollarSign, Utensils, Sparkles, Users, Clock } from "lucide-react";
import { cafeData } from "@/data";

const Features = () => {
  const icons = [
    Sparkles,
    Utensils,
    CheckCircle2,
    Clock,
    Users,
    CheckCircle2,
  ];

  return (
    <section
      id="features"
      className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-b from-white to-stone-50"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-900 mb-3 sm:mb-4 px-2">
            Why Choose {cafeData.brand.business_name}?
          </h2>
          <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto px-4">
            {cafeData.content_blocks.about_paragraph}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {cafeData.content_blocks.features_bullets.map((feature, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={index}
                className="bg-white p-4 sm:p-6 rounded-xl shadow-md border border-stone-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 bg-amber-100 rounded-lg shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-700" />
                  </div>
                  <p className="text-stone-700 font-medium flex-1 text-sm sm:text-base">{feature}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 sm:mt-12">
          <h3 className="text-xl sm:text-2xl font-bold text-amber-900 mb-4 sm:mb-6 text-center px-2">
            Best For
          </h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4">
            {cafeData.positioning.best_for.map((item, index) => (
              <span
                key={index}
                className="px-4 sm:px-5 py-2 sm:py-3 bg-white border-2 border-amber-200 text-amber-800 rounded-full text-xs sm:text-sm font-medium shadow-sm"
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

