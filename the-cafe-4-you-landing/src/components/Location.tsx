"use client";

import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";
import { businessData } from "../data";

export function Location() {
  const address = businessData.contact.address;
  const hours = businessData.contact.hours;
  const phoneNumber = businessData.contact.phone;
  const whatsappNumber = phoneNumber ? phoneNumber.replace(/\s+/g, '') : '';
  const googleMapsLink = businessData.contact.google_maps_link || "";
  const googleMapsEmbedLink = (businessData.contact as any).google_maps_embed_link || "";

  const directionsLink = googleMapsLink || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 font-playfair">
            Visit Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find us in Vesu, Surat for a cozy cafe experience
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
            {googleMapsEmbedLink ? (
              <iframe
                src={googleMapsEmbedLink}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="The Cafe 4 You Location"
              ></iframe>
            ) : googleMapsLink && (googleMapsLink.includes("/embed/") || googleMapsLink.includes("/dir/")) ? (
              <iframe
                src={
                  googleMapsLink.includes("/embed/")
                    ? googleMapsLink
                    : googleMapsLink.replace("/dir/", "/embed/")
                }
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="The Cafe 4 You Location"
              ></iframe>
            ) : (
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed&hl=en`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="The Cafe 4 You Location"
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}





