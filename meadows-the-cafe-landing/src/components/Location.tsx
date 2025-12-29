"use client";

import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { cafeData } from "@/data";

const Location = () => {
  const formatPhoneForTel = (phone: string) => {
    return phone.replace(/\s+/g, "").replace(/^0/, "+91");
  };

  const phone = formatPhoneForTel(cafeData.contact.phone);
  const hasGoogleMaps = cafeData.contact.google_maps_link.length > 0;

  const getGoogleMapsEmbedUrl = () => {
    const businessName = cafeData.brand.business_name;
    const address = cafeData.contact.address;
    const query = `${businessName}, ${address}`;
    const encoded = encodeURIComponent(query);
    return `https://www.google.com/maps?q=${encoded}&output=embed&hl=en&z=16`;
  };

  const mapEmbedUrl = hasGoogleMaps && cafeData.contact.google_maps_link.includes("embed")
    ? cafeData.contact.google_maps_link
    : getGoogleMapsEmbedUrl();

  return (
    <section id="location" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Visit Us
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            We&apos;re located in the heart of {cafeData.brand.city_area}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-orange-100 rounded-lg shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Address</h3>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{cafeData.contact.address}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-orange-100 rounded-lg shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Phone</h3>
                  <a
                    href={`tel:${phone}`}
                    className="text-orange-600 hover:text-orange-700 font-medium text-sm sm:text-base break-all"
                  >
                    {cafeData.contact.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-orange-100 rounded-lg shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Hours</h3>
                  <p className="text-gray-700 text-sm sm:text-base">{cafeData.contact.hours}</p>
                </div>
              </div>
            </div>

            {hasGoogleMaps ? (
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white"
                onClick={() => window.open(cafeData.contact.google_maps_link, "_blank")}
              >
                <Navigation className="w-5 h-5 mr-2" />
                Open in Google Maps
              </Button>
            ) : (
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white"
                onClick={() => {
                  const query = encodeURIComponent(cafeData.contact.address);
                  window.open(
                    `https://www.google.com/maps/search/?api=1&query=${query}`,
                    "_blank"
                  );
                }}
              >
                <Navigation className="w-5 h-5 mr-2" />
                Get Directions
              </Button>
            )}
          </div>

          <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
            <div className="aspect-[4/3] bg-gray-200 relative min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px]">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
                title={`${cafeData.brand.business_name} Location`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;





