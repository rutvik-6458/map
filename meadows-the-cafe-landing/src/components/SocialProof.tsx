import { Star, Users } from "lucide-react";
import { cafeData } from "@/data";

const SocialProof = () => {
  return (
    <section
      id="social-proof"
      className="py-12 sm:py-16 px-4 sm:px-6 bg-white border-y border-gray-100"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-16">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
              <Star className="w-6 h-6 sm:w-8 sm:h-8 fill-yellow-400 text-yellow-400" />
              <span className="text-3xl sm:text-4xl font-bold text-gray-900">
                {cafeData.social_proof.rating}
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Users className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-base sm:text-lg">
                {cafeData.social_proof.review_count}+ Reviews
              </span>
            </div>
          </div>

          <div className="flex-1 max-w-2xl w-full">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4 text-center lg:text-left">
              What Our Customers Say
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {cafeData.social_proof.testimonial_quotes.map((quote, index) => (
                <div
                  key={index}
                  className="bg-orange-50 border-l-4 border-orange-500 p-3 sm:p-4 rounded-r-lg"
                >
                  <p className="text-gray-700 italic text-sm sm:text-base">&quot;{quote}&quot;</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
          <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4 text-center">
            Top Review Themes
          </h4>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {cafeData.social_proof.top_review_themes.map((theme, index) => (
              <span
                key={index}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-orange-100 text-orange-800 rounded-full text-xs sm:text-sm font-medium"
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





