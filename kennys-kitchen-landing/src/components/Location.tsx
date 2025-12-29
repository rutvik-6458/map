"use client";
import React from "react";
import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";

export default function Location() {
  const address = "New VIP Rd, Vesu, Surat, Gujarat 395007";
  const hours = "Open daily, closes at 12 am";
  const phoneNumber = "0261 356 4038";
  const whatsappNumber = phoneNumber.replace(/\s/g, "");
  const googleMapsLink = "https://maps.app.goo.gl/6Xevfp8geKHHPS11A";

  return (
    <section id="location" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3 sm:mb-4">
            Visit Us
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2 sm:px-4">
            Find us on VIP Road in Vesu, Surat for a relaxed cafe experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          <div className="space-y-4 md:space-y-6">
            <div className="bg-gradient-to-br from-orange-50 to-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-orange-100">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 mb-2">
                    Address
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                    {address}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-orange-100">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 mb-2">
                    Hours
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                    {hours}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {phoneNumber && (
                <a
                  href={`tel:${phoneNumber}`}
                  className="flex-1 bg-orange-600 hover:bg-orange-700 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-bold text-center transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-orange-600/20 flex items-center justify-center gap-2 text-sm sm:text-base"
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
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-bold text-center transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-green-600/20 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <MessageCircle size={18} className="sm:w-5 sm:h-5" />
                  <span>WhatsApp</span>
                </a>
              )}

              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gray-900 hover:bg-gray-800 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl font-bold text-center transition-all transform hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <MapPin size={18} className="sm:w-5 sm:h-5" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>

          <div className="bg-gray-200 rounded-xl sm:rounded-2xl overflow-hidden border border-gray-300 aspect-[4/3] min-h-[250px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-0 flex items-center justify-center">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed&hl=en`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="Kenny's Kitchen Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}


