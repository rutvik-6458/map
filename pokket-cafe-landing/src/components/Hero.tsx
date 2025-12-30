"use client";

import { businessData } from "../data";
import { Button } from "./ui/button";
import { MessageCircle, MapPin } from "lucide-react";

export function Hero() {
  const headline = businessData.content_blocks.hero_headline_options[0];
  const subheadline = businessData.content_blocks.hero_subheadline_options[0];
  const whatsappNumber = businessData.contact.phone.replace(/\s+/g, '');
  const hasGoogleMaps = businessData.contact.google_maps_link && businessData.contact.google_maps_link.trim() !== '';

  return (
    <section id="hero" className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-12 sm:pb-0">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop"
          alt="Cafe Ambience"
          className="w-full h-full object-cover scale-105 animate-pulse-slow"
        />
      </div>

      <div className="container relative z-20 mx-auto px-4 sm:px-6 text-center text-white">
        <div className="inline-block px-3 sm:px-4 py-1.5 mb-4 sm:mb-6 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary-foreground text-xs sm:text-sm font-medium animate-in fade-in slide-in-from-bottom-4 duration-700">
          {businessData.brand.short_tagline_options[0]}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold font-playfair mb-4 sm:mb-6 max-w-4xl mx-auto leading-tight px-2 sm:px-0 animate-in fade-in slide-in-from-bottom-6 duration-1000">
          {headline}
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto px-2 sm:px-0 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          {subheadline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
          <Button size="lg" className="rounded-full px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base font-semibold group shadow-xl shadow-primary/20 w-full sm:w-auto" asChild>
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
              Order on WhatsApp
            </a>
          </Button>
          {hasGoogleMaps && (
            <Button size="lg" variant="outline" className="rounded-full px-6 sm:px-8 h-12 sm:h-14 text-sm sm:text-base font-semibold bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 text-white w-full sm:w-auto" asChild>
              <a href={businessData.contact.google_maps_link} target="_blank" rel="noopener noreferrer">
                <MapPin className="mr-2 h-4 w-4 sm:h-5 sm:w-5" /> Visit Us
              </a>
            </Button>
          )}
        </div>

        <div className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 text-white/80 text-xs sm:text-sm font-medium animate-in fade-in duration-1000 delay-700 px-4">
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
            Open Daily
          </div>
        </div>
      </div>
    </section>
  );
}







