import { Phone, MapPin, Clock } from "lucide-react";
import { cafeData } from "@/data";

const Footer = () => {
  const formatPhoneForTel = (phone: string) => {
    if (!phone) return "";
    return phone.replace(/\s+/g, "").replace(/^0/, "+91");
  };

  const phone = formatPhoneForTel(cafeData.contact.phone);
  const hasPhone = phone.length > 0;

  return (
    <footer className="bg-amber-950 text-stone-300 py-8 sm:py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              {cafeData.brand.business_name}
            </h3>
            <p className="text-xs sm:text-sm text-stone-400">
              {cafeData.content_blocks.about_paragraph}
            </p>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Contact</h4>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 mt-0.5 shrink-0" />
                <span className="break-words">{cafeData.contact.address}</span>
              </div>
              {hasPhone && (
                <div className="flex items-center gap-2 sm:gap-3">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 shrink-0" />
                  <a
                    href={`tel:${phone}`}
                    className="hover:text-amber-500 transition-colors break-words"
                  >
                    {cafeData.contact.phone}
                  </a>
                </div>
              )}
              <div className="flex items-start gap-2 sm:gap-3">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 mt-0.5 shrink-0" />
                <span className="break-words">{cafeData.contact.hours}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
              <li>
                <a
                  href="#menu"
                  className="hover:text-amber-500 transition-colors"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-amber-500 transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-amber-500 transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  className="hover:text-amber-500 transition-colors"
                >
                  Location
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-900 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-stone-400">
          <p>
            © {new Date().getFullYear()} {cafeData.brand.business_name}. All
            rights reserved.
          </p>
          <p className="mt-1 sm:mt-2">
            {cafeData.brand.city_area} • {cafeData.brand.category}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

