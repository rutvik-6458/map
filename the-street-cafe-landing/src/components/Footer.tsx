"use client";
import React from "react";
import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";

export default function Footer() {
  const businessName = "The Street Cafe by Ab's Kitchen";
  const address = "B-11, VIP Rd, Vesu, Surat, Gujarat 395007";
  const hours = ""; // Empty as per JSON data
  const phoneNumber = ""; // Empty as per JSON data
  const whatsappNumber = phoneNumber ? phoneNumber.replace(/\s/g, "") : "";

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">🍜</span>
              </div>
              <span className="font-black text-xl">{businessName}</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              A budget-friendly street cafe in Vesu, Surat, offering everyday street food favourites with quick service. Customers appreciate the warm welcome from the owner and staff, fast packing for takeaway, and affordable pricing.
            </p>
          </div>

          <div>
            <h3 className="font-black text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-orange-500 mt-1 flex-shrink-0" />
                <span>{address}</span>
              </div>
              {hours && (
                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-orange-500 flex-shrink-0" />
                  <span>{hours}</span>
                </div>
              )}
              {phoneNumber && (
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-orange-500 flex-shrink-0" />
                  <a
                    href={`tel:${phoneNumber}`}
                    className="hover:text-white transition-colors"
                  >
                    {phoneNumber}
                  </a>
                </div>
              )}
            </div>
          </div>

          <div>
            <h3 className="font-black text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a
                href="#features"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#services"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Menu
              </a>
              <a
                href="#gallery"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Gallery
              </a>
              <a
                href="#faq"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                FAQ
              </a>
              <a
                href="#location"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Location
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {businessName}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {whatsappNumber && (
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors"
              >
                <MessageCircle size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}



