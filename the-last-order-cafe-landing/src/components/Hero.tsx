"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, Navigation, MessageCircle } from "lucide-react";
import { cafeData } from "@/data";
import heroImage from "@/assets/the last order.jpg";

const Hero = () => {
  const formatPhoneForTel = (phone: string) => {
    if (!phone) return "";
    return phone.replace(/\s+/g, "").replace(/^0/, "+91");
  };

  const phone = formatPhoneForTel(cafeData.contact.phone);
  const whatsappNumber = phone;
  const hasPhone = phone.length > 0;
  const hasWhatsApp = hasPhone;
  const hasGoogleMaps = cafeData.contact.google_maps_link.length > 0;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt={`${cafeData.brand.business_name} - ${cafeData.content_blocks.hero_headline_options[0]}`}
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
              {cafeData.content_blocks.hero_headline_options[0]}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
              {cafeData.content_blocks.hero_subheadline_options[0]}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            {hasPhone && (
              <Button
                size="lg"
                className="bg-white text-amber-900 hover:bg-amber-50 text-base px-8 py-6 shadow-lg z-20 relative"
                onClick={() => window.open(`tel:${phone}`, "_self")}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            )}
            {hasGoogleMaps ? (
              <Button
                size="lg"
                className="bg-amber-800 hover:bg-amber-900 text-white text-base px-8 py-6 shadow-lg z-20 relative border-2 border-white"
                onClick={() => window.open(cafeData.contact.google_maps_link, "_blank")}
              >
                <Navigation className="w-5 h-5 mr-2" />
                Get Directions
              </Button>
            ) : (
              <Button
                size="lg"
                className="bg-amber-800 hover:bg-amber-900 text-white text-base px-8 py-6 shadow-lg z-20 relative border-2 border-white"
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
                className="bg-green-600 hover:bg-green-700 text-white text-base px-8 py-6 shadow-lg z-20 relative"
                onClick={() =>
                  window.open(
                    `https://wa.me/${whatsappNumber.replace(/\+/g, "")}`,
                    "_blank"
                  )
                }
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
            )}
          </div>

          <div className="pt-8">
            <p className="text-sm text-white/80 drop-shadow-md">
              {cafeData.contact.hours} • {cafeData.brand.city_area}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

