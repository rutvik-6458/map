"use client";

import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const Location = () => {
  const address = "6th Floor, Cannon Street 1, opposite Agam Arcade, Vesu, Surat, Gujarat 395007";
  const phoneNumber = "084693 49116";
  const telLink = `tel:+91${phoneNumber.replace(/\s/g, "")}`;
  const hours = "Open daily · Closes 11:30 pm";
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  // Google Maps embed - using address search (no API key needed for basic embed)
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <section
      id="location"
      className="py-16 px-4 bg-gradient-to-b from-white to-orange-50"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Find Us
          </h2>
          <p className="text-lg text-gray-600">
            Visit us at our prime location in Vesu, Surat
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ minHeight: "400px", border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sky Altitude Cafe & Restro Lounge Location"
            />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Address
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {address}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Phone
                  </h3>
                  <a
                    href={telLink}
                    className="text-orange-600 hover:text-orange-700 font-medium text-lg"
                  >
                    {phoneNumber}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Hours
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {hours}
                  </p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white"
              onClick={() => window.open(googleMapsLink, "_blank")}
            >
              <Navigation className="w-5 h-5 mr-2" />
              Get Directions on Google Maps
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

