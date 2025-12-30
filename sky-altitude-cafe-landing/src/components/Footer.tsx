"use client";

import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const phoneNumber = "084693 49116";
  const whatsappNumber = phoneNumber.replace(/\s/g, "");
  const whatsappLink = `https://wa.me/91${whatsappNumber}`;
  const telLink = `tel:+91${whatsappNumber}`;
  const address = "6th Floor, Cannon Street 1, opposite Agam Arcade, Vesu, Surat, Gujarat 395007";
  const hours = "Open daily · Closes 11:30 pm";
  const googleMapsLink = "https://maps.app.goo.gl/omzCGqxzbuG3J2Dm7";

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

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 sm:py-12 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Sky Altitude
            </h3>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
              Cafe & Restro Lounge
            </p>
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              A well-known rooftop restaurant in Vesu, Surat, offering a spacious open-sky dining experience. Perfect for family dinners, celebrations, and friends hangouts.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("menu")}
                  className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("location")}
                  className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
                >
                  Location
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3 sm:mb-4 text-base sm:text-lg">Contact Us</h4>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{address}</p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0" />
                <a
                  href={telLink}
                  className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {phoneNumber}
                </a>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 flex-shrink-0" />
                <p className="text-xs sm:text-sm text-gray-400">{hours}</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        {/* <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900"
              onClick={() => window.open(telLink, "_self")}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
            {whatsappNumber && (
              <Button
                variant="outline"
                className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white"
                onClick={() => window.open(whatsappLink, "_blank")}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            )}
            <Button
              className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white"
              onClick={() => window.open(googleMapsLink, "_blank")}
            >
              Get Directions
            </Button>
          </div>
        </div> */}

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-500 px-4">
            © {new Date().getFullYear()} Sky Altitude Cafe & Restro Lounge. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 mt-2">
            Rated {4.4}★ by {762}+ customers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

