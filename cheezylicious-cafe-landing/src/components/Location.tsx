"use client";
import React from "react";
import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";
import { businessData } from "../data";

export function Location() {
  const address = businessData.contact.address;
  const hours = businessData.contact.hours;
  const phoneNumber = businessData.contact.phone;
  const whatsappNumber = phoneNumber ? phoneNumber.replace(/\s+/g, '') : '';
  const googleMapsLink = businessData.contact.google_maps_link || "";

  // Use the Google Maps link directly for directions
  const directionsLink = googleMapsLink || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  // Convert Google Maps short link to embed format
  // For short links like https://maps.app.goo.gl/..., we'll use the address-based embed
  // or try to extract the place ID from the short link
  const getEmbedUrl = () => {
    if (!googleMapsLink) {
      return `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed&hl=en`;
    }

    // If it's a short link, we'll use the address for embedding
    // Short links need to be converted to embed format, but we can use the address as fallback
    if (googleMapsLink.includes('maps.app.goo.gl')) {
      // Use the address to generate embed URL since short links need conversion
      return `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed&hl=en`;
    }

    // If it's already an embed URL, use it
    if (googleMapsLink.includes('/embed/')) {
      return googleMapsLink;
    }

    // If it's a regular maps URL, try to convert to embed
    if (googleMapsLink.includes('/dir/')) {
      return googleMapsLink.replace('/dir/', '/embed/');
    }

    // Default: use address
    return `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed&hl=en`;
  };

  const embedUrl = getEmbedUrl();

  return (
    <section id="location" className="py-16 sm:py-20 bg-white w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3 sm:mb-4">
            Visit Us
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Find us in Vesu, Surat for a cheesy cafe experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-gradient-to-br from-yellow-50 to-white p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-yellow-100">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2">
                    Address
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed break-words">
                    {address}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-white p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-yellow-100">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-2">
                    Hours
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                    {hours}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              {phoneNumber && (
                <a
                  href={`tel:${phoneNumber}`}
                  className="flex-1 bg-primary hover:bg-primary/90 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base text-center transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
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
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base text-center transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-green-600/20 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} className="sm:w-5 sm:h-5" />
                  WhatsApp
                </a>
              )}

              <a
                href={directionsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gray-900 hover:bg-gray-800 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base text-center transition-all transform hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-2"
              >
                <MapPin size={18} className="sm:w-5 sm:h-5" />
                Get Directions
              </a>
            </div>
          </div>

          <div className="bg-gray-200 rounded-xl sm:rounded-2xl overflow-hidden border border-gray-300 aspect-[4/3] min-h-[300px] sm:min-h-[400px] flex items-center justify-center">
            <iframe
              src={embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title="Cheezylicious Cafe Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}


