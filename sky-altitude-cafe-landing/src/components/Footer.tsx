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
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

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
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Sky Altitude
            </h3>
            <p className="text-gray-400 mb-4">
              Cafe & Restro Lounge
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              A well-known rooftop restaurant in Vesu, Surat, offering a spacious open-sky dining experience. Perfect for family dinners, celebrations, and friends hangouts.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("menu")}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("location")}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Location
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-400">{address}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <a
                  href={telLink}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {phoneNumber}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <p className="text-sm text-gray-400">{hours}</p>
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
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-500">
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

