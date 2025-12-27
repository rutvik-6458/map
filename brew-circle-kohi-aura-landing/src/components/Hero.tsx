"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, Navigation, MessageCircle } from "lucide-react";
import { cafeData } from "@/data";
import heroImage from "@/assets/Brew Circle by Kohi Aura.jpg";

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
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Brew Circle by Kohi Aura"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" />
      </div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-amber-800/30 text-amber-200 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-amber-400/30 mb-4 font-semibold text-xs sm:text-sm tracking-widest uppercase">
              <span className="whitespace-nowrap">{cafeData.social_proof.rating}★ Rating • {cafeData.social_proof.review_count}+ Reviews</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight drop-shadow-lg px-2">
              {cafeData.content_blocks.hero_headline_options[0]}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md px-4">
              {cafeData.content_blocks.hero_subheadline_options[0]}
            </p>
          </div>

          {/* <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-4 px-2">
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-amber-950 text-white text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
              onClick={() => window.open(`tel:${phone}`, "_self")}
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Call Now
            </Button>
            {hasGoogleMaps ? (
              <Button
                variant="outline"
                size="lg"
                className="border-amber-300 text-white hover:bg-amber-800/30 text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 backdrop-blur-sm bg-white/10 w-full sm:w-auto"
                onClick={() => window.open(cafeData.contact.google_maps_link, "_blank")}
              >
                <Navigation className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Get Directions
              </Button>
            ) : (
              <Button
                variant="outline"
                size="lg"
                className="border-amber-300 text-white hover:bg-amber-800/30 text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 backdrop-blur-sm bg-white/10 w-full sm:w-auto"
                onClick={() => {
                  const element = document.getElementById("location");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
              >
                <Navigation className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Get Directions
              </Button>
            )}
            {hasWhatsApp && (
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white text-sm sm:text-base px-6 sm:px-8 py-5 sm:py-6 w-full sm:w-auto"
                onClick={() =>
                  window.open(
                    `https://wa.me/${whatsappNumber.replace(/\+/g, "")}`,
                    "_blank"
                  )
                }
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                WhatsApp
              </Button>
            )}
          </div> */}

          <div className="pt-6 sm:pt-8 px-4">
            <p className="text-xs sm:text-sm text-white/80 drop-shadow-md">
              <span className="block sm:inline">{cafeData.contact.hours}</span>
              <span className="hidden sm:inline"> • </span>
              <span className="block sm:inline">{cafeData.contact.address}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

