import { businessData } from "../data";
import { Star, Quote } from "lucide-react";

export function Trust() {
  return (
    <section id="reviews" className="py-16 sm:py-20 bg-secondary/30 w-full overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-full">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-1 mb-3 sm:mb-4 text-primary">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 sm:h-6 sm:w-6 fill-current" />
            ))}
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-playfair mb-3 sm:mb-4 px-4">
            {businessData.social_proof.rating} Stars from {businessData.social_proof.review_count} Guests
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Our customers love the cheesy taste, friendly service and especially our comfort food.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {businessData.social_proof.testimonial_quotes.map((quote, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-sm border border-border/50 relative hover:shadow-md transition-shadow"
            >
              <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-primary/10 absolute top-4 sm:top-6 right-4 sm:right-6" />
              <p className="text-base sm:text-lg italic text-foreground leading-relaxed mb-4 sm:mb-6">
                "{quote}"
              </p>
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm sm:text-base">
                  {String.fromCharCode(65 + index)}
                </div>
                <div>
                  <p className="font-semibold text-xs sm:text-sm">Happy Customer</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground">Local Guide</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-12 px-4">
          {businessData.social_proof.top_review_themes.map((theme, i) => (
            <div key={i} className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white rounded-full border border-border/50 text-xs sm:text-sm font-medium shadow-sm">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary" />
              {theme}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


