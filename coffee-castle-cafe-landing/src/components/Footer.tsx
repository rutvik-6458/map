import { MapPin, Clock } from "lucide-react";
import { cafeData } from "@/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-amber-900 text-white py-8 sm:py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{cafeData.brand.business_name}</h3>
            <p className="text-amber-100 text-xs sm:text-sm">
              {cafeData.content_blocks.about_paragraph}
            </p>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact</h4>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300 mt-0.5 shrink-0" />
                <span className="text-amber-100">
                  {cafeData.contact.address}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300 mt-0.5 shrink-0" />
                <span className="text-amber-100">
                  {cafeData.contact.hours}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Rating</h4>
            <div className="text-amber-100">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl sm:text-2xl font-bold">{cafeData.social_proof.rating}</span>
                <span className="text-amber-300">★</span>
              </div>
              <p className="text-xs sm:text-sm">
                {cafeData.social_proof.review_count}+ Reviews
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-800 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-amber-200">
          <p>
            © {currentYear} {cafeData.brand.business_name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

