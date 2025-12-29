"use client";
import React from "react";
import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";

export default function Location() {
  const address = "Vesu, Surat, Gujarat 395007";
  const hours = "Open daily, closes at 11 pm";
  const phoneNumber = ""; // Empty as per JSON data
  const whatsappNumber = phoneNumber.replace(/\s/g, "");
  const googleMapsLink = "https://maps.app.goo.gl/x9rsVmbNNZnTwHjbA";

  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3 sm:mb-4">
            Visit Us
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Find us in Vesu, Surat for a premium cafe experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-gradient-to-br from-amber-50 to-white p-6 sm:p-8 rounded-2xl border border-amber-100">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2">
                    Address
                  </h3>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    {address}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white p-6 sm:p-8 rounded-2xl border border-amber-100">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2">
                    Hours
                  </h3>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    {hours}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              {phoneNumber && (
                <a
                  href={`tel:${phoneNumber}`}
                  className="flex-1 bg-amber-600 hover:bg-amber-700 text-white px-5 sm:px-6 py-3 sm:py-4 rounded-xl font-bold text-center transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-amber-600/20 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Phone size={18} className="sm:w-5 sm:h-5" />
                  Call Now
                </a>
              )}

              {whatsappNumber && (
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white px-5 sm:px-6 py-3 sm:py-4 rounded-xl font-bold text-center transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-green-600/20 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <MessageCircle size={18} className="sm:w-5 sm:h-5" />
                  WhatsApp
                </a>
              )}

              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gray-900 hover:bg-gray-800 text-white px-5 sm:px-6 py-3 sm:py-4 rounded-xl font-bold text-center transition-all transform hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <MapPin size={18} className="sm:w-5 sm:h-5" />
                Get Directions
              </a>
            </div>
          </div>

          <div className="bg-gray-200 rounded-2xl overflow-hidden border border-gray-300 aspect-[4/3] w-full min-h-[300px] sm:min-h-[400px] flex items-center justify-center">
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed&hl=en`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="Driftt Cafe Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

