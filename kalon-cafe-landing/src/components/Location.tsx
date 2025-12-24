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

  const googleMapsLink = cafeData.contact.google_maps_link ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cafeData.contact.address)}`;

  const mapEmbedUrl = googleMapsLink.includes("/embed/")
    ? googleMapsLink
    : googleMapsLink.includes("/dir/")
    ? googleMapsLink.replace("/dir/", "/embed/")
    : `https://www.google.com/maps?q=${encodeURIComponent(cafeData.contact.address)}&output=embed&hl=en`;

  return (
    <section id="location" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Visit Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find us at {cafeData.brand.city_area}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {cafeData.contact.address}
                  </p>
                </div>
              </div>

              {phone && (
                <div className="flex items-center gap-4 mb-6 pt-6 border-t border-gray-100">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                    <a
                      href={telLink}
                      className="text-amber-600 hover:text-amber-700 font-semibold"
                    >
                      {cafeData.contact.phone}
                    </a>
                  </div>
                </div>
              )}

              {cafeData.contact.hours && (
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Hours</h3>
                    <p className="text-gray-600">{cafeData.contact.hours}</p>
                  </div>
                </div>
              )}

              <div className="mt-8 pt-6 border-t border-gray-100">
                <Button
                  size="lg"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                  onClick={() => window.open(googleMapsLink, "_blank")}
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Get Directions on Google Maps
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 rounded-2xl overflow-hidden border-2 border-gray-300 aspect-[4/3] flex items-center justify-center">
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

