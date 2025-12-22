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

  const getGoogleMapsEmbedUrl = (address: string) => {
    const encoded = encodeURIComponent(address);
    return `https://www.google.com/maps?q=${encoded}&output=embed`;
  };

  const mapEmbedUrl = hasGoogleMaps && cafeData.contact.google_maps_link.includes("embed")
    ? cafeData.contact.google_maps_link
    : getGoogleMapsEmbedUrl(cafeData.contact.address);

  return (
    <section id="location" className="py-20 px-4 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Visit Us
          </h2>
          <p className="text-lg text-gray-600">
            We&apos;re located in the heart of {cafeData.brand.city_area}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-700">{cafeData.contact.address}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <Phone className="w-6 h-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                  <a
                    href={`tel:${phone}`}
                    className="text-orange-600 hover:text-orange-700 font-medium"
                  >
                    {cafeData.contact.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">Hours</h3>
                  <p className="text-gray-700">{cafeData.contact.hours}</p>
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
            <div className="aspect-square bg-gray-200 relative">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
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



