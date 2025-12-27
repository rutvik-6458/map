"use client";

import { Button } from "@/components/ui/button";
import { Phone, Navigation, MessageCircle } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const phoneNumber = "09081111371";
  const whatsappNumber = phoneNumber.replace(/\s/g, "");
  const whatsappLink = `https://wa.me/91${whatsappNumber}`;
  const telLink = `tel:+91${whatsappNumber}`;
  const googleMapsLink = "https://maps.app.goo.gl/WVdAwdK6GeT9VwR66";

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

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/BB.jpg"
          alt="BB Social Cafe Interior"
          fill
          className="object-cover"
          priority
          quality={90}
          sizes="100vw"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto max-w-6xl relative z-10 px-4 sm:px-6">
        <div className="text-center space-y-6 sm:space-y-8">
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight drop-shadow-lg px-2">
              A Poolside Cafe Experience in{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Vesu
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md px-4">
              Enjoy coffee, global food and a calm poolside ambience. Perfect
              for casual outings, games and conversations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg"
              onClick={() => window.open(telLink, "_self")}
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Call Now
            </Button>
            {whatsappNumber && (
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-green-600 text-green-600 hover:bg-green-50 bg-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg"
                onClick={() => window.open(whatsappLink, "_blank")}
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                WhatsApp
              </Button>
            )}
            {googleMapsLink ? (
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-blue-600 text-blue-600 hover:bg-blue-50 bg-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg"
                onClick={() => window.open(googleMapsLink, "_blank")}
              >
                <Navigation className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Get Directions
              </Button>
            ) : (
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-blue-600 text-blue-600 hover:bg-blue-50 bg-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg"
                onClick={() => scrollToSection("location")}
              >
                <Navigation className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Get Directions
              </Button>
            )}
          </div>

          <div className="pt-4 sm:pt-8">
            <p className="text-xs sm:text-sm text-white/80 mb-2 sm:mb-4">Located in</p>
            <p className="text-sm sm:text-base font-medium text-white">
              BB Club Bhagban, Vesu, Surat
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

