"use client";

import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";
import { businessData } from "../data";

export function Location() {
  const address = businessData.contact.address;
  const hours = businessData.contact.hours;
  const phoneNumber = businessData.contact.phone;
  const whatsappNumber = phoneNumber ? phoneNumber.replace(/\s+/g, '') : '';
  const googleMapsLink = businessData.contact.google_maps_link || "";

  const directionsLink = googleMapsLink || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  // Convert Google Maps link to embeddable format
  const getEmbedUrl = () => {
    if (!googleMapsLink) {
      return `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed&hl=en`;
    }

    // If already an embed URL, return as is
    if (googleMapsLink.includes("/embed/")) {
      return googleMapsLink;
    }

    // Handle short links (maps.app.goo.gl)
    if (googleMapsLink.includes("maps.app.goo.gl") || googleMapsLink.includes("goo.gl/maps")) {
      // Extract the place ID or use address-based embed
      return `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed&hl=en`;
    }

    // Handle /dir/ links
    if (googleMapsLink.includes("/dir/")) {
      return googleMapsLink.replace("/dir/", "/embed/");
    }

    // Handle place links
    if (googleMapsLink.includes("/place/")) {
      const placeIdMatch = googleMapsLink.match(/\/place\/([^/]+)/);
      if (placeIdMatch) {
        return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.${placeIdMatch[1]}!2d72.${placeIdMatch[1]}!3d21.${placeIdMatch[1]}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDAwJzAwLjAiTiA3MsKwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin`;
      }
    }

    // Fallback to address-based embed
    return `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed&hl=en`;
  };

  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 font-playfair">
            Visit Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find us in Vesu, Surat for a cozy coffee club experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl border border-amber-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">
                    Address
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {address}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-white p-8 rounded-2xl border border-amber-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2">
                    Hours
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {hours}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {phoneNumber && (
                <a
                  href={`tel:${phoneNumber}`}
                  className="flex-1 bg-primary hover:bg-primary/90 text-white px-6 py-4 rounded-xl font-bold text-center transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  Call Now
                </a>
              )}

              {whatsappNumber && (
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-xl font-bold text-center transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-green-600/20 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
              )}

              <a
                href={directionsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gray-900 hover:bg-gray-800 text-white px-6 py-4 rounded-xl font-bold text-center transition-all transform hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-2"
              >
                <MapPin size={20} />
                Get Directions
              </a>
            </div>
          </div>

          <div className="bg-gray-200 rounded-2xl overflow-hidden border border-gray-300 aspect-[4/3] flex items-center justify-center">
            <iframe
              src={getEmbedUrl()}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title={`${businessData.brand.business_name} Location`}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}



