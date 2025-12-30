"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, MapPin, MessageCircle } from "lucide-react";
import Image from "next/image";
import heroImage from "@/assets/Seeds - The Coffee House.jpg";

export default function Hero() {
  const phoneNumber = "099099 01944";
  const whatsappNumber = phoneNumber.replace(/\s/g, "");
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700">
      <div className="absolute inset-0 z-0">
        {/* Hero image with fallback gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700"></div>
        {!imageError && (
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt="Seeds - The Coffee House Rooftop"
              fill
              className="object-cover"
              priority
              quality={90}
              onError={() => setImageError(true)}
            />
          </div>
        )}
        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-amber-800/20 text-amber-200 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-amber-400/30 mb-6 sm:mb-8 font-bold text-xs sm:text-sm tracking-widest uppercase">
            <Star size={12} className="sm:w-3.5 sm:h-3.5 fill-amber-200" />
            <span className="whitespace-nowrap">4.7★ Rating • 87 Reviews</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black text-white leading-tight mb-6 sm:mb-8 tracking-tighter px-2">
            A Coffee House Built for True Coffee Lovers
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-medium px-4">
            Enjoy expertly brewed coffee made with premium beans. A calm, aesthetic cafe for meaningful conversations and quiet time.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
            {whatsappNumber && (
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-2xl font-black text-base sm:text-lg lg:text-xl transition-all shadow-2xl shadow-green-600/30 flex items-center justify-center gap-2 sm:gap-3 transform hover:scale-105 active:scale-95 group">
                  <MessageCircle size={20} className="sm:w-6 sm:h-6" />
                  <span>WhatsApp Us</span>
                  <ArrowRight
                    size={18}
                    className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </a>
            )}

            <a href="#location" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-2xl font-black text-base sm:text-lg lg:text-xl transition-all flex items-center justify-center gap-2 sm:gap-3 transform hover:scale-105 active:scale-95">
                <MapPin size={20} className="sm:w-6 sm:h-6" />
                <span>Visit Cafe</span>
              </button>
            </a>
          </div>

          <div className="mt-12 sm:mt-16 lg:mt-20 flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-10 items-center opacity-80 px-4">
            <div className="flex items-center gap-2 text-white/70">
              <div className="w-2 h-2 rounded-full bg-amber-300"></div>
              <span className="font-bold text-xs sm:text-sm uppercase tracking-widest">
                Premium Coffee Beans
              </span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <div className="w-2 h-2 rounded-full bg-amber-400"></div>
              <span className="font-bold text-xs sm:text-sm uppercase tracking-widest">
                Expert Baristas
              </span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <div className="w-2 h-2 rounded-full bg-amber-500"></div>
              <span className="font-bold text-xs sm:text-sm uppercase tracking-widest">
                Open Till Midnight
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10"></div> */}
    </section>
  );
}

