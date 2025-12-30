"use client";

import { Button } from "@/components/ui/button";
import { Navigation, Phone, MessageCircle } from "lucide-react";

const Location = () => {
  const phoneNumber = "09327639226";
  const telLink = `tel:+91${phoneNumber.replace(/\D/g, "")}`;
  const whatsappLink = `https://wa.me/91${phoneNumber.replace(/\D/g, "")}`;
  const address = "G-47, Ambrosia Business Hub, VIP Rd, Vesu, Surat, Gujarat 395007";

  // Google Maps embed URL - using place name format for better map view
  const placeQuery = "Rasta Street Cafe, G-47, Ambrosia Business Hub, VIP Rd, Vesu, Surat, Gujarat 395007";
  const googleMapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(placeQuery)}&output=embed`;

  const handleDirections = () => {
    const googleMapsLink = "https://maps.app.goo.gl/4rpMbYCdKJdmsHWu9";
    window.open(googleMapsLink, "_blank");
  };

  return (
    <section
      id="location"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-amber-50"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Visit Us
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-2">
            Located at Ambrosia Business Hub on VIP Road, Vesu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-lg border-2 border-amber-200 order-2 md:order-1 h-[300px] sm:h-[400px]">
            <iframe
              src={googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rasta Street Cafe Location"
            />
          </div>

          {/* Contact Info */}
          <div className="bg-white border-2 border-amber-200 rounded-lg p-6 sm:p-8 shadow-lg order-1 md:order-2">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              Contact Information
            </h3>

            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              <div>
                <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span>📍</span> Address
                </h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{address}</p>
              </div>

              <div>
                <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span>📞</span> Phone
                </h4>
                <a
                  href={telLink}
                  className="text-sm sm:text-base text-amber-600 hover:text-amber-700 font-medium"
                >
                  {phoneNumber}
                </a>
              </div>

              <div>
                <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <span>🕐</span> Hours
                </h4>
                <p className="text-sm sm:text-base text-gray-600">Opens at 11:30 am</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-2 sm:gap-3">
              <Button
                size="lg"
                className="w-full text-sm sm:text-base bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white"
                onClick={handleDirections}
              >
                <Navigation className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Get Directions
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full text-sm sm:text-base border-amber-600 text-amber-600 hover:bg-amber-50"
                onClick={() => window.open(telLink, "_self")}
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Call Now
              </Button>
              <Button
                size="lg"
                className="w-full text-sm sm:text-base bg-green-600 hover:bg-green-700 text-white"
                onClick={() => window.open(whatsappLink, "_blank")}
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;







