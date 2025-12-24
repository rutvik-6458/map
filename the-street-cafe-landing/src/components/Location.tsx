"use client";
import React from "react";
import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";

export default function Location() {
  const address = "B-11, VIP Rd, Vesu, Surat, Gujarat 395007";
  const hours = ""; // Empty as per JSON data
  const phoneNumber = ""; // Empty as per JSON data
  const whatsappNumber = phoneNumber ? phoneNumber.replace(/\s/g, "") : "";
  const googleMapsLink = ""; // Empty as per JSON data

  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Visit Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find us in Vesu, Surat for budget-friendly street food
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border border-orange-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
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

            {hours && (
              <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border border-orange-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
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
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              {phoneNumber && (
                <a
                  href={`tel:${phoneNumber}`}
                  className="flex-1 bg-orange-600 hover:bg-orange-700 text-white px-6 py-4 rounded-xl font-bold text-center transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-orange-600/20 flex items-center justify-center gap-2"
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
                href={googleMapsLink || `https://www.google.com/maps?q=${encodeURIComponent(address)}`}
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
            {googleMapsLink ? (
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
                title="The Street Cafe by Ab's Kitchen Location"
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
                title="The Street Cafe by Ab's Kitchen Location"
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


