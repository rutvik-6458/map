"use client";
import React from "react";
import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  const businessName = "Blue Vanilla Patisserie & Cafe";
  const address = "F3, DMD Paccific, Vesu Canal Rd, near Cellestial Dreams, Surat, Gujarat 395007";
  const hours = "Opens at 12 pm";
  const phoneNumber = "091047 26042";
  const whatsappNumber = phoneNumber.replace(/\s/g, "");

  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">🧁</span>
              </div>
              <span className="font-black text-lg sm:text-xl">{businessName}</span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Popular dessert-focused cafe in Vesu, Surat, known for its elegant interiors and premium baked treats. Customers especially love the cheesecakes, brownies and frappes.
            </p>
          </div>

          <div>
            <h3 className="font-black text-base sm:text-lg mb-3 sm:mb-4">Contact</h3>
            <div className="space-y-2 sm:space-y-3 text-gray-400">
              <div className="flex items-start gap-2 sm:gap-3">
                <MapPin size={16} className="sm:w-4.5 sm:h-4.5 text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-base">{address}</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <Clock size={16} className="sm:w-4.5 sm:h-4.5 text-blue-500 flex-shrink-0" />
                <span className="text-sm sm:text-base">{hours}</span>
              </div>
              {phoneNumber && (
                <div className="flex items-center gap-2 sm:gap-3">
                  <Phone size={16} className="sm:w-4.5 sm:h-4.5 text-blue-500 flex-shrink-0" />
                  <a
                    href={`tel:${phoneNumber}`}
                    className="hover:text-white transition-colors text-sm sm:text-base"
                  >
                    {phoneNumber}
                  </a>
                </div>
              )}
            </div>
          </div>

          <div>
            <h3 className="font-black text-base sm:text-lg mb-3 sm:mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a
                href="#features"
                className="block text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
              >
                Features
              </a>
              <a
                href="#services"
                className="block text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
              >
                Menu
              </a>
              <a
                href="#gallery"
                className="block text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
              >
                Gallery
              </a>
              <a
                href="#faq"
                className="block text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
              >
                FAQ
              </a>
              <a
                href="#location"
                className="block text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
              >
                Location
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} {businessName}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {whatsappNumber && (
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} className="sm:w-5 sm:h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}


