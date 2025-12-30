"use client";

import { Button } from "@/components/ui/button";
import { Phone, Navigation, MessageCircle } from "lucide-react";
import Image from "next/image";
import heroBg from "@/assets/Rasta Street Cafe-Vip Road.jpg";

const Hero = () => {
  const phoneNumber = "09327639226";
  const telLink = `tel:+91${phoneNumber.replace(/\D/g, "")}`;
  const whatsappLink = `https://wa.me/91${phoneNumber.replace(/\D/g, "")}`;
  const googleMapsLink = "https://maps.app.goo.gl/4rpMbYCdKJdmsHWu9";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleDirections = () => {
    if (googleMapsLink) {
      window.open(googleMapsLink, "_blank");
    } else {
      scrollToSection("location");
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 pb-12 sm:pb-16 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-amber-900/40 z-10" />
        <Image
          src={heroBg}
          alt="Rasta Street Cafe"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>

      {/* Floating Badge */}
      <div className="absolute top-24 sm:top-32 left-1/2 -translate-x-1/2 z-20 animate-bounce px-4">
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-2xl whitespace-nowrap">
          ☕ Casual Cafe for Coffee & Street-Style Bites
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto text-center px-2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          A Casual Cafe Spot on
          <span className="block bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mt-1 sm:mt-2">
            VIP Road
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
          Stop by for coffee, hot chocolate and quick bites. A simple cafe for
          relaxed hangouts with friends.
        </p>

        {/* Rating Badge */}
        <div className="flex items-center justify-center gap-2 mb-8 sm:mb-10 px-2">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 flex items-center gap-2 sm:gap-3 shadow-lg">
            <div className="flex items-center gap-0.5 sm:gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 sm:w-5 sm:h-5 ${
                    i < 4 ? "text-amber-400 fill-current" : "text-gray-400"
                  }`}
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-white font-semibold text-sm sm:text-base">4.2</span>
            <span className="text-gray-300 hidden sm:inline">•</span>
            <span className="text-gray-300 text-xs sm:text-sm">343 reviews</span>
          </div>
        </div>

        {/* CTA Buttons */}
        {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-6 text-lg shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105"
            onClick={() => window.open(telLink, "_self")}
          >
            <Phone className="w-5 h-5 mr-2" />
            Call Now
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg shadow-2xl transition-all duration-300 hover:scale-105"
            onClick={handleDirections}
          >
            <Navigation className="w-5 h-5 mr-2" />
            Get Directions
          </Button>

          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg shadow-2xl transition-all duration-300 hover:scale-105"
            onClick={() => window.open(whatsappLink, "_blank")}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp
          </Button>
        </div> */}

        {/* Info Pills */}
        <div className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-2">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 sm:px-5 py-1.5 sm:py-2 text-white text-xs sm:text-sm shadow-md">
            📍 Vesu, Surat
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 sm:px-5 py-1.5 sm:py-2 text-white text-xs sm:text-sm shadow-md">
            🕐 Opens at 11:30 am
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 sm:px-5 py-1.5 sm:py-2 text-white text-xs sm:text-sm shadow-md whitespace-nowrap">
            🚗 Drive-through available
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <button
          onClick={() => scrollToSection("social-proof")}
          className="text-white/80 hover:text-white transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;

