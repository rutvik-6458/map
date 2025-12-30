"use client";

import { Button } from "@/components/ui/button";
import { Phone, Navigation, MessageCircle } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const phoneNumber = "084693 49116";
  const whatsappNumber = phoneNumber.replace(/\s/g, "");
  const whatsappLink = `https://wa.me/91${whatsappNumber}`;
  const telLink = `tel:+91${whatsappNumber}`;
  const address = "6th Floor, Cannon Street 1, opposite Agam Arcade, Vesu, Surat, Gujarat 395007";
  const googleMapsLink = "https://maps.app.goo.gl/omzCGqxzbuG3J2Dm7";

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
      className="relative min-h-screen flex items-center justify-center pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/sky altitude cafe.jpg"
          alt="Sky Altitude Cafe Rooftop"
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
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-6 sm:space-y-8">
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight drop-shadow-lg px-2">
              A Rooftop Dining Experience in{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Vesu
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md px-4">
              Enjoy delicious food with stunning rooftop views. A popular restro lounge for parties, dinners, and celebrations.
            </p>
          </div>

          {/* <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 pt-4 px-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg shadow-lg w-full sm:w-auto"
              onClick={() => window.open(telLink, "_self")}
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Call Now
            </Button>
            {whatsappNumber && (
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg bg-white/90 backdrop-blur-sm w-full sm:w-auto"
                onClick={() => window.open(whatsappLink, "_blank")}
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                WhatsApp
              </Button>
            )}
            <Button
              size="lg"
              variant="outline"
              className="border-orange-600 text-orange-600 hover:bg-orange-50 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg bg-white/90 backdrop-blur-sm w-full sm:w-auto"
              onClick={() => window.open(googleMapsLink, "_blank")}
            >
              <Navigation className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Get Directions
            </Button>
          </div> */}

          <div className="pt-6 sm:pt-8 px-4">
            <p className="text-xs sm:text-sm text-white/80 mb-2 sm:mb-4">Located in</p>
            <p className="text-sm sm:text-base font-medium text-white drop-shadow-md leading-relaxed">
              6th Floor, Cannon Street 1, opposite Agam Arcade, Vesu, Surat, Gujarat 395007
            </p>
            <p className="text-xs sm:text-sm text-white/80 mt-2 drop-shadow-md">Open daily · Closes 11:30 pm</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

