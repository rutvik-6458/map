import { Star, Users } from "lucide-react";
import { cafeData } from "@/data";

const SocialProof = () => {
  return (
    <section
      id="social-proof"
      className="py-16 px-4 bg-white border-y border-gray-100"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <Star className="w-8 h-8 fill-amber-400 text-amber-400" />
              <span className="text-4xl font-bold text-gray-900">
                {cafeData.social_proof.rating}
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Users className="w-5 h-5" />
              <span className="text-lg">
                {cafeData.social_proof.review_count}+ Reviews
              </span>
            </div>
          </div>

          <div className="flex-1 max-w-2xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center md:text-left">
              What Our Customers Say
            </h3>
            <div className="space-y-4">
              {cafeData.social_proof.testimonial_quotes.map((quote, index) => (
                <div
                  key={index}
                  className="bg-amber-50 border-l-4 border-amber-600 p-4 rounded-r-lg"
                >
                  <p className="text-gray-700 italic">&quot;{quote}&quot;</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
            Top Review Themes
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {cafeData.social_proof.top_review_themes.map((theme, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium"
              >
                {theme}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;




