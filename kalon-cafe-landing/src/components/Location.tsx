"use client";

import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cafeData } from "@/data";

export default function Location() {
  const formatPhoneForTel = (phone: string) => {
    if (!phone) return "";
    return phone.replace(/\s+/g, "").replace(/^0/, "+91");
  };

  const phone = formatPhoneForTel(cafeData.contact.phone);
  const telLink = phone ? `tel:+91${phone.replace(/\+91/g, "")}` : "";

  // Specific Google Maps link for directions button
  const googleMapsDirectionsLink = "https://maps.app.goo.gl/pHi8ccaqjjujXSZb6";

  const googleMapsLink = cafeData.contact.google_maps_link ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cafeData.contact.address)}`;

  const mapEmbedUrl = googleMapsLink.includes("/embed/")
    ? googleMapsLink
    : googleMapsLink.includes("/dir/")
    ? googleMapsLink.replace("/dir/", "/embed/")
    : `https://www.google.com/maps?q=${encodeURIComponent(cafeData.contact.address)}&output=embed&hl=en`;

  return (
    <section id="location" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3 sm:mb-4">
            Visit Us
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Find us at {cafeData.brand.city_area}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-start">
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white border-2 border-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Address</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">
                    {cafeData.contact.address}
                  </p>
                </div>
              </div>

              {phone && (
                <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6 pt-4 sm:pt-6 border-t border-gray-100">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Phone</h3>
                    <a
                      href={telLink}
                      className="text-sm sm:text-base text-amber-600 hover:text-amber-700 font-semibold break-all sm:break-normal"
                    >
                      {cafeData.contact.phone}
                    </a>
                  </div>
                </div>
              )}

              {cafeData.contact.hours && (
                <div className="flex items-start sm:items-center gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-gray-100">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-amber-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">Hours</h3>
                    <p className="text-sm sm:text-base text-gray-600 break-words">{cafeData.contact.hours}</p>
                  </div>
                </div>
              )}

              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-100">
                <Button
                  size="lg"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white text-sm sm:text-base py-2 sm:py-3"
                  onClick={() => window.open(googleMapsDirectionsLink, "_blank")}
                >
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <span className="whitespace-nowrap">Get Directions on Google Maps</span>
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-gray-300 aspect-[4/3] min-h-[250px] sm:min-h-[300px] md:min-h-0 flex items-center justify-center">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
              title={`${cafeData.brand.business_name} Location`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

