"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, Navigation, MessageCircle } from "lucide-react";
import { cafeData } from "@/data";
import heroImage from "@/assets/Meadows The Cafe.jpg";

const Hero = () => {
  const formatPhoneForTel = (phone: string) => {
    return phone.replace(/\s+/g, "").replace(/^0/, "+91");
  };

  const phone = formatPhoneForTel(cafeData.contact.phone);
  const whatsappNumber = phone;
  const hasWhatsApp = whatsappNumber.length > 0;
  const hasGoogleMaps = cafeData.contact.google_maps_link.length > 0;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 pb-12 sm:pb-16 px-4 sm:px-6 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Meadows The Cafe"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-6 sm:space-y-8">
          <div className="space-y-3 sm:space-y-4 px-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight drop-shadow-lg">
              {cafeData.content_blocks.hero_headline_options[0]}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md px-2">
              {cafeData.content_blocks.hero_subheadline_options[0]}
            </p>
          </div>

          {/* <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white text-base px-8 py-6"
              onClick={() => window.open(`tel:${phone}`, "_self")}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
            {hasGoogleMaps ? (
              <Button
                variant="outline"
                size="lg"
                className="border-orange-600 text-orange-600 hover:bg-orange-50 text-base px-8 py-6"
                onClick={() => window.open(cafeData.contact.google_maps_link, "_blank")}
              >
                <Navigation className="w-5 h-5 mr-2" />
                Get Directions
              </Button>
            ) : (
              <Button
                variant="outline"
                size="lg"
                className="border-orange-600 text-orange-600 hover:bg-orange-50 text-base px-8 py-6"
                onClick={() => {
                  const element = document.getElementById("location");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
              >
                <Navigation className="w-5 h-5 mr-2" />
                Get Directions
              </Button>
            )}
            {hasWhatsApp && (
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white text-base px-8 py-6"
                onClick={() =>
                  window.open(
                    `https://wa.me/${whatsappNumber.replace(/\+/g, "")}`,
                    "_blank"
                  )
                }
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsAppsss
              </Button>
            )}
          </div> */}

          <div className="pt-6 sm:pt-8 px-2">
            <p className="text-xs sm:text-sm text-white/80 drop-shadow-md leading-relaxed">
              <span className="block sm:inline">{cafeData.contact.hours}</span>
              <span className="hidden sm:inline"> • </span>
              <span className="block sm:inline sm:ml-1">{cafeData.contact.address}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

