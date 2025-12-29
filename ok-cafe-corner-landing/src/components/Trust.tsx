import { businessData } from "../data";
import { Star, Quote } from "lucide-react";

export function Trust() {
  return (
    <section id="reviews" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-1 mb-4 text-primary">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-current" />
            ))}
          </div>
          <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-4">
            {businessData.social_proof.rating} Stars from {businessData.social_proof.review_count} Guests
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our customers love the great service, friendly staff and comfortable hangout setup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {businessData.social_proof.testimonial_quotes.map((quote, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 relative hover:shadow-md transition-shadow"
            >
              <Quote className="h-8 w-8 text-primary/10 absolute top-6 right-6" />
              <p className="text-lg italic text-foreground leading-relaxed mb-6">
                "{quote}"
              </p>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  {String.fromCharCode(65 + index)}
                </div>
                <div>
                  <p className="font-semibold text-sm">Happy Customer</p>
                  <p className="text-xs text-muted-foreground">Local Guide</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-4 md:gap-12">
          {businessData.social_proof.top_review_themes.map((theme, i) => (
            <div key={i} className="flex items-center gap-3 px-6 py-3 bg-white rounded-full border border-border/50 text-sm font-medium shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary" />
              {theme}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



