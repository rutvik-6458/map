import { CheckCircle2, Clock, Users, Sparkles, Utensils, Heart } from "lucide-react";
import { cafeData } from "@/data";

const Features = () => {
  const icons = [
    Clock,
    Sparkles,
    Utensils,
    Heart,
    Users,
    CheckCircle2,
  ];

  return (
    <section
      id="features"
      className="py-20 px-4 bg-gradient-to-b from-white to-stone-50"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            Why Choose {cafeData.brand.business_name}?
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            {cafeData.content_blocks.about_paragraph}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {cafeData.content_blocks.features_bullets.map((feature, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md border border-stone-100 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-100 rounded-lg">
                    <Icon className="w-6 h-6 text-amber-700" />
                  </div>
                  <p className="text-stone-700 font-medium flex-1">{feature}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-bold text-amber-900 mb-6 text-center">
            Best For
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {cafeData.positioning.best_for.map((item, index) => (
              <span
                key={index}
                className="px-5 py-3 bg-white border-2 border-amber-200 text-amber-800 rounded-full text-sm font-medium shadow-sm"
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


