import { businessData } from "../data";
import { CheckCircle2, Clock, Users, Utensils, Home, Zap, DollarSign } from "lucide-react";

const ICON_MAP: Record<string, any> = {
  "Cheesy": Utensils,
  "Popular": Users,
  "Friendly": Users,
  "Comfortable": Home,
  "Dine-in": CheckCircle2,
  "Budget": DollarSign,
  "Open": Clock,
};

export function Features() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-8 leading-tight">
              Everything You Love About <span className="text-primary">A Great Cafe</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              {businessData.content_blocks.about_paragraph}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {businessData.content_blocks.features_bullets.map((feature, index) => {
                const Icon = ICON_MAP[Object.keys(ICON_MAP).find(key => feature.includes(key)) || ""] || Zap;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="font-medium text-foreground py-2 leading-tight">
                      {feature}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/5 rounded-[2.5rem] rotate-2 group-hover:rotate-1 transition-transform" />
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop"
              alt="Cafe Interior"
              className="relative z-10 w-full h-[500px] object-cover rounded-[2rem] shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 z-20 bg-white p-8 rounded-2xl shadow-xl max-w-xs hidden md:block border border-border/50">
              <p className="text-primary font-bold text-lg mb-2">Unique Selling Points</p>
              <ul className="space-y-3">
                {businessData.positioning.unique_selling_points.map((usp, i) => (
                  <li key={i} className="text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {usp}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




