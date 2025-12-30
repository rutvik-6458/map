"use client";
import React from "react";
import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";

export default function Location() {
  const address = "International Wealth Center, 312, VIP Rd, Vesu, Surat, Gujarat 395007";
  const hours = "Open daily, closes at 12 am";
  const phoneNumber = "099099 01944";
  const whatsappNumber = phoneNumber.replace(/\s/g, "");
  const googleMapsLink = "https://maps.app.goo.gl/EhUDH3oqC8CHjzk39";
  // Embed URL for the same location - short links can't be embedded directly
  const googleMapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed&hl=en`;

  return (
    <section id="location" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3 sm:mb-4">
            Visit Us
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Find us in Vesu, Surat for a premium coffee experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-gradient-to-br from-amber-50 to-white p-6 sm:p-8 rounded-2xl border border-amber-100">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2">
                    Address
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                    {address}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white p-6 sm:p-8 rounded-2xl border border-amber-100">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-800 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2">
                    Hours
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                    {hours}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              {phoneNumber && (
                <a
                  href={`tel:${phoneNumber}`}
                  className="flex-1 bg-amber-800 hover:bg-amber-900 text-white px-5 sm:px-6 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base text-center transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-amber-800/20 flex items-center justify-center gap-2"
                >
                  <Phone size={18} className="sm:w-5 sm:h-5" />
                  <span>Call Now</span>
                </a>
              )}

              {whatsappNumber && (
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white px-5 sm:px-6 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base text-center transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-green-600/20 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} className="sm:w-5 sm:h-5" />
                  <span>WhatsApp</span>
                </a>
              )}

              <a
                href={googleMapsLink || `https://www.google.com/maps?q=${encodeURIComponent(address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gray-900 hover:bg-gray-800 text-white px-5 sm:px-6 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base text-center transition-all transform hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-2"
              >
                <MapPin size={18} className="sm:w-5 sm:h-5" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          <div className="bg-gray-200 rounded-xl sm:rounded-2xl overflow-hidden border border-gray-300 aspect-[4/3] flex items-center justify-center min-h-[250px] sm:min-h-[300px]">
            <iframe
              src={googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="Seeds - The Coffee House Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}





