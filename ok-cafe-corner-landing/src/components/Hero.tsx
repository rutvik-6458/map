"use client";

import { businessData } from "../data";
import { Button } from "./ui/button";
import { MessageCircle, MapPin, Phone } from "lucide-react";
import heroImage from "../assets/OK Café Corner.jpg";

export function Hero() {
  const headline = businessData.content_blocks.hero_headline_options[0];
  const subheadline = businessData.content_blocks.hero_subheadline_options[0];
  const phoneNumber = businessData.contact.phone;
  const whatsappNumber = phoneNumber ? phoneNumber.replace(/\s+/g, '') : '';
  // Use the specific Google Maps link provided
  const directionsLink = "https://maps.app.goo.gl/TESMjyzDw4g21rDTA";

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0  from-amber-900/80 via-amber-800/70 to-orange-700/80 z-10" />
        <img
          src={typeof heroImage === 'string' ? heroImage : heroImage.src}
          alt="OK Café Corner Ambience"
          className="w-full h-full object-cover scale-105"
        />
      </div>

      <div className="container relative z-20 mx-auto px-4 text-center text-white">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary-foreground text-sm font-medium animate-in fade-in slide-in-from-bottom-4 duration-700">
          {businessData.brand.short_tagline_options[0]}
        </div>

        <h1 className="text-4xl md:text-7xl font-bold font-playfair mb-6 max-w-4xl mx-auto leading-tight animate-in fade-in slide-in-from-bottom-6 duration-1000">
          {headline}
        </h1>

        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          {subheadline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
          {whatsappNumber && (
            <Button size="lg" className="rounded-full px-8 h-14 text-base font-semibold group shadow-xl shadow-primary/20 bg-green-600 hover:bg-green-700" asChild>
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                WhatsApp Us
              </a>
            </Button>
          )}
          {phoneNumber && !whatsappNumber && (
            <Button size="lg" className="rounded-full px-8 h-14 text-base font-semibold group shadow-xl shadow-primary/20" asChild>
              <a href={`tel:${phoneNumber}`}>
                <Phone className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Call Now
              </a>
            </Button>
          )}
          <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base font-semibold bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 text-white" asChild>
            <a href={directionsLink} target="_blank" rel="noopener noreferrer">
              <MapPin className="mr-2 h-5 w-5" /> Get Directions
            </a>
          </Button>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 text-white/80 text-sm font-medium animate-in fade-in duration-1000 delay-700">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {businessData.social_proof.rating}/5 Rating
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Budget-Friendly
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Great Hangout Spot
          </div>
        </div>
      </div>
    </section>
  );
}

