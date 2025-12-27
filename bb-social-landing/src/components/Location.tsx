"use client";

import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Location = () => {
  const address =
    "Ground Floor, BB Club Bhagban, Party Plot Building, VIP Rd, beside Highfield Ascot Mall, opp. Palm Avenue, Vesu, Surat, Gujarat 395007";
  const phoneNumber = "09081111371";
  const telLink = `tel:+91${phoneNumber.replace(/\s/g, "")}`;
  const hours = "Open daily, closes at 12 am";

  // Google Maps link - specific location link
  const googleMapsLink = "https://maps.app.goo.gl/WVdAwdK6GeT9VwR66";

  // Google Maps embed URL - using the address directly
  const googleMapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    address
  )}&output=embed`;

  return (
    <section
      id="location"
      className="py-16 px-4 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Visit Us
          </h2>
          <p className="text-lg text-gray-600">
            Find us at BB Club Bhagban in Vesu, Surat
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          <Card className="border-gray-200 shadow-lg">
            <CardContent className="p-4 sm:p-6 space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-1 sm:mb-2">
                    Address
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">{address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-1 sm:mb-2">
                    Phone
                  </h3>
                  <a
                    href={telLink}
                    className="text-sm sm:text-base text-blue-600 hover:text-blue-700 font-medium break-all"
                  >
                    {phoneNumber}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-1 sm:mb-2">
                    Hours
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600">{hours}</p>
                </div>
              </div>

              <div className="pt-2 sm:pt-4">
                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-sm sm:text-base"
                  onClick={() => {
                    window.open(googleMapsLink, "_blank");
                  }}
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Get Directions on Google Maps</span>
                  <span className="sm:hidden">Get Directions</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200 h-[300px] sm:h-[400px] md:h-[500px]">
            <iframe
              src={googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BB Social Location Map"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

