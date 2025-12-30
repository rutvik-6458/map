"use client";

import { Phone, Navigation, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const phoneNumber = "09327639226";
  const telLink = `tel:+91${phoneNumber.replace(/\D/g, "")}`;
  const whatsappLink = `https://wa.me/91${phoneNumber.replace(/\D/g, "")}`;
  const address = "G-47, Ambrosia Business Hub, VIP Rd, Vesu, Surat, Gujarat 395007";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleDirections = () => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(mapsUrl, "_blank");
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 sm:py-10 md:py-12 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Rasta Street Cafe
            </h3>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-3 sm:mb-4">
              A casual neighborhood cafe in Vesu, Surat, serving coffee, hot
              chocolate, and street-style comfort food.
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              Located at Ambrosia Business Hub on VIP Road
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-sm sm:text-base text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("menu")}
                  className="text-sm sm:text-base text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-sm sm:text-base text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-sm sm:text-base text-gray-400 hover:text-amber-400 transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("location")}
                  className="text-sm sm:text-base text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Location
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 md:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Contact</h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start gap-2 text-gray-400">
                <span className="mt-0.5">📍</span>
                <span className="text-xs sm:text-sm leading-relaxed">{address}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <span>📞</span>
                <a
                  href={telLink}
                  className="text-xs sm:text-sm hover:text-amber-400 transition-colors"
                >
                  {phoneNumber}
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <span>🕐</span>
                <span className="text-xs sm:text-sm">Opens at 11:30 am</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        {/* <div className="flex flex-col sm:flex-row gap-3 mb-8 pt-8 border-t border-gray-800">
          <Button
            size="sm"
            className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white"
            onClick={() => window.open(telLink, "_self")}
          >
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="flex-1 border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
            onClick={handleDirections}
          >
            <Navigation className="w-4 h-4 mr-2" />
            Get Directions
          </Button>
          <Button
            size="sm"
            className="flex-1 bg-green-600 hover:bg-green-700 text-white"
            onClick={() => window.open(whatsappLink, "_blank")}
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
        </div> */}

        {/* Copyright */}
        <div className="text-center pt-6 sm:pt-8 border-t border-gray-800">
          <p className="text-xs sm:text-sm text-gray-500">
            © {new Date().getFullYear()} Rasta Street Cafe – VIP Road. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;







