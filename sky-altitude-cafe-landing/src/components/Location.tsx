"use client";

import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const Location = () => {
  const address = "6th Floor, Cannon Street 1, opposite Agam Arcade, Vesu, Surat, Gujarat 395007";
  const phoneNumber = "084693 49116";
  const telLink = `tel:+91${phoneNumber.replace(/\s/g, "")}`;
  const hours = "Open daily · Closes 11:30 pm";
  const googleMapsLink = "https://maps.app.goo.gl/omzCGqxzbuG3J2Dm7";

  // Google Maps embed - using place name for exact location view with pin
  const placeName = "Sky Altitude Cafe & Restro Lounge";
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(placeName + ", " + address)}&output=embed&z=16`;

  return (
    <section
      id="location"
      className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-b from-white to-orange-50"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Find Us
          </h2>
          <p className="text-base sm:text-lg text-gray-600 px-4">
            Visit us at our prime location in Vesu, Surat
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 order-2 lg:order-1">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ minHeight: "300px", border: 0 }}
              className="sm:min-h-[400px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sky Altitude Cafe & Restro Lounge Location"
            />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6 order-1 lg:order-2">
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200">
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
                    Address
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {address}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200">
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
                    Phone
                  </h3>
                  <a
                    href={telLink}
                    className="text-orange-600 hover:text-orange-700 font-medium text-base sm:text-lg"
                  >
                    {phoneNumber}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200">
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 flex-shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
                    Hours
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600">
                    {hours}
                  </p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white text-sm sm:text-base py-5 sm:py-6"
              onClick={() => window.open(googleMapsLink, "_blank")}
            >
              <Navigation className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span className="hidden sm:inline">Get Directions on Google Maps</span>
              <span className="sm:hidden">Get Directions</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

