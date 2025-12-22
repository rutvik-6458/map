"use client";

import { Button } from "@/components/ui/button";
import { Phone, Navigation, MessageCircle } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const phoneNumber = "09081111371";
  const whatsappNumber = phoneNumber.replace(/\s/g, "");
  const whatsappLink = `https://wa.me/91${whatsappNumber}`;
  const telLink = `tel:+91${whatsappNumber}`;
  const googleMapsLink = "";

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
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
              A Poolside Cafe Experience in{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Vesu
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
              Enjoy coffee, global food and a calm poolside ambience. Perfect
              for casual outings, games and conversations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 text-lg"
              onClick={() => window.open(telLink, "_self")}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
            {whatsappNumber && (
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-6 text-lg"
                onClick={() => window.open(whatsappLink, "_blank")}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
            )}
            {googleMapsLink ? (
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg"
                onClick={() => window.open(googleMapsLink, "_blank")}
              >
                <Navigation className="w-5 h-5 mr-2" />
                Get Directions
              </Button>
            ) : (
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg"
                onClick={() => scrollToSection("location")}
              >
                <Navigation className="w-5 h-5 mr-2" />
                Get Directions
              </Button>
            )}
          </div>

          <div className="pt-8">
            <p className="text-sm text-white/80 mb-4">Located in</p>
            <p className="text-base font-medium text-white">
              BB Club Bhagban, Vesu, Surat
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

