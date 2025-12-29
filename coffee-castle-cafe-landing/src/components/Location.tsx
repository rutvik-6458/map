"use client";

import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Clock } from "lucide-react";
import { cafeData } from "@/data";

const Location = () => {
  const hasGoogleMaps = cafeData.contact.google_maps_link.length > 0;

  const getGoogleMapsLink = (address: string) => {
    const encoded = encodeURIComponent(address);
    return `https://www.google.com/maps/search/?api=1&query=${encoded}`;
  };

  const getGoogleMapsEmbedUrl = (address: string) => {
    const encoded = encodeURIComponent(address);
    return `https://www.google.com/maps?q=${encoded}&output=embed`;
  };

  return (
    <section id="location" className="py-20 px-4 bg-gradient-to-b from-white to-stone-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-900 mb-3 sm:mb-4">
            Visit Us
          </h2>
          <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto px-4">
            Find us at our convenient location in Vesu, Surat
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-stone-200">
              <div className="flex items-start gap-3 sm:gap-4 mb-4">
                <div className="p-2 sm:p-3 bg-amber-100 rounded-lg shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-amber-900 mb-2">
                    Address
                  </h3>
                  <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                    {cafeData.contact.address}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-stone-200">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-amber-100 rounded-lg shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-amber-700" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-amber-900 mb-2">
                    Hours
                  </h3>
                  <p className="text-sm sm:text-base text-stone-700">
                    {cafeData.contact.hours}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              {hasGoogleMaps ? (
                <Button
                  size="lg"
                  className="bg-amber-800 hover:bg-amber-900 text-white w-full sm:w-auto"
                  onClick={() => window.open(cafeData.contact.google_maps_link, "_blank")}
                >
                  <Navigation className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Get Directions
                </Button>
              ) : (
                <Button
                  size="lg"
                  className="bg-amber-800 hover:bg-amber-900 text-white w-full sm:w-auto"
                  onClick={() => window.open(getGoogleMapsLink(cafeData.contact.address), "_blank")}
                >
                  <Navigation className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Get Directions
                </Button>
              )}
            </div>
          </div>

          <div className="bg-stone-200 rounded-lg overflow-hidden border border-stone-300 aspect-square lg:aspect-auto lg:h-full w-full">
            <iframe
              src={getGoogleMapsEmbedUrl(cafeData.contact.address)}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[300px] sm:min-h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

