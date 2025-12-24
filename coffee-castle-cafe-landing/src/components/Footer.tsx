import { MapPin, Clock } from "lucide-react";
import { cafeData } from "@/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-amber-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{cafeData.brand.business_name}</h3>
            <p className="text-amber-100 text-sm">
              {cafeData.content_blocks.about_paragraph}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-amber-300 mt-0.5 shrink-0" />
                <span className="text-amber-100">
                  {cafeData.contact.address}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-5 h-5 text-amber-300 mt-0.5 shrink-0" />
                <span className="text-amber-100">
                  {cafeData.contact.hours}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Rating</h4>
            <div className="text-amber-100">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl font-bold">{cafeData.social_proof.rating}</span>
                <span className="text-amber-300">★</span>
              </div>
              <p className="text-sm">
                {cafeData.social_proof.review_count}+ Reviews
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-800 pt-8 text-center text-sm text-amber-200">
          <p>
            © {currentYear} {cafeData.brand.business_name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

