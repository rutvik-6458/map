"use client";

import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { cafeData } from "@/data";

const Location = () => {
  const formatPhoneForTel = (phone: string) => {
    if (!phone) return "";
    return phone.replace(/\s+/g, "").replace(/^0/, "+91");
  };

  const phone = formatPhoneForTel(cafeData.contact.phone);
  const hasPhone = phone.length > 0;
  const hasGoogleMaps = cafeData.contact.google_maps_link.length > 0;

  const getGoogleMapsEmbedUrl = (address: string) => {
    const encoded = encodeURIComponent(address);
    return `https://www.google.com/maps?q=${encoded}&output=embed`;
  };

  const mapEmbedUrl = hasGoogleMaps && cafeData.contact.google_maps_link.includes("embed")
    ? cafeData.contact.google_maps_link
    : getGoogleMapsEmbedUrl(cafeData.contact.address);

  return (
    <section id="location" className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-b from-white to-stone-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-900 mb-3 sm:mb-4 px-2">
            Visit Us
          </h2>
          <p className="text-base sm:text-lg text-stone-600 px-4">
            We&apos;re located in the heart of {cafeData.brand.city_area}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md border border-stone-100">
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-amber-100 rounded-lg shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-amber-700" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-amber-900 mb-2 text-sm sm:text-base">Address</h3>
                  <p className="text-stone-700 text-sm sm:text-base break-words">{cafeData.contact.address}</p>
                </div>
              </div>
            </div>

            {hasPhone && (
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md border border-stone-100">
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="p-2 sm:p-3 bg-amber-100 rounded-lg shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-amber-700" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-amber-900 mb-2 text-sm sm:text-base">Phone</h3>
                    <a
                      href={`tel:${phone}`}
                      className="text-amber-700 hover:text-amber-800 font-medium text-sm sm:text-base break-words"
                    >
                      {cafeData.contact.phone}
                    </a>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md border border-stone-100">
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-amber-100 rounded-lg shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-amber-700" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-amber-900 mb-2 text-sm sm:text-base">Hours</h3>
                  <p className="text-stone-700 text-sm sm:text-base break-words">{cafeData.contact.hours}</p>
                </div>
              </div>
            </div>

            {hasGoogleMaps ? (
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-amber-800 to-amber-700 hover:from-amber-900 hover:to-amber-800 text-white text-sm sm:text-base"
                onClick={() => window.open(cafeData.contact.google_maps_link, "_blank")}
              >
                <Navigation className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Open in Google Maps
              </Button>
            ) : (
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-amber-800 to-amber-700 hover:from-amber-900 hover:to-amber-800 text-white text-sm sm:text-base"
                onClick={() => {
                  const query = encodeURIComponent(cafeData.contact.address);
                  window.open(
                    `https://www.google.com/maps/search/?api=1&query=${query}`,
                    "_blank"
                  );
                }}
              >
                <Navigation className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Get Directions
              </Button>
            )}
          </div>

          <div className="bg-white rounded-xl shadow-md border border-stone-100 overflow-hidden">
            <div className="aspect-square bg-stone-200 relative min-h-[300px] sm:min-h-[400px]">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="BLOOP Cafe Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

