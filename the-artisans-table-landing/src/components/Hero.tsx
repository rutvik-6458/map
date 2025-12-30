"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, Navigation, MessageCircle } from "lucide-react";
import { cafeData } from "@/data";
import heroImage from "@/assets/the artisans.jpg";

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
      className="relative min-h-screen flex items-center justify-center pt-20 md:pt-24 pb-12 md:pb-16 px-4 sm:px-6 overflow-hidden"
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
      <div className="container mx-auto max-w-6xl relative z-10 px-4 sm:px-6">
        <div className="text-center space-y-6 md:space-y-8">
          <div className="space-y-3 md:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight drop-shadow-lg px-2">
              {cafeData.content_blocks.hero_headline_options[0]}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md px-4">
              {cafeData.content_blocks.hero_subheadline_options[0]}
            </p>
          </div>

          <div className="pt-4 md:pt-8">
            <p className="text-xs sm:text-sm text-white/80 drop-shadow-md">
              {cafeData.contact.hours} • {cafeData.brand.city_area}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

