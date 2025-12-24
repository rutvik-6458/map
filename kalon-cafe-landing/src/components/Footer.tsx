"use client";

import { Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import { cafeData } from "@/data";

const Footer = () => {
  const formatPhoneForTel = (phone: string) => {
    if (!phone) return "";
    return phone.replace(/\s+/g, "").replace(/^0/, "+91");
  };

  const phone = formatPhoneForTel(cafeData.contact.phone);
  const whatsappNumber = phone ? `91${phone.replace(/\+91/g, "")}` : "";
  const whatsappLink = whatsappNumber ? `https://wa.me/${whatsappNumber}` : "";
  const telLink = phone ? `tel:+91${phone.replace(/\+91/g, "")}` : "";
  const googleMapsLink = cafeData.contact.google_maps_link ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cafeData.contact.address)}`;

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
            <h3 className="text-2xl font-bold text-white mb-4">
              {cafeData.brand.business_name}
            </h3>
            <p className="text-gray-400 mb-4">
              {cafeData.brand.category}
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              {cafeData.content_blocks.about_paragraph}
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
                  onClick={() => scrollToSection("features")}
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Features
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
                <MapPin className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-400">{cafeData.contact.address}</p>
              </div>
              {phone && (
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <a
                    href={telLink}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {cafeData.contact.phone}
                  </a>
                </div>
              )}
              {cafeData.contact.hours && (
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <p className="text-sm text-gray-400">{cafeData.contact.hours}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} {cafeData.brand.business_name}. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 mt-2">
            Rated {cafeData.social_proof.rating}★ by {cafeData.social_proof.review_count}+ customers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

