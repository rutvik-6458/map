"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, MapPin, MessageCircle } from "lucide-react";
import Image from "next/image";
import heroImage from "@/assets/Kenny's Kitchen.jpg";

export default function Hero() {
  const phoneNumber = "0261 356 4038";
  const whatsappNumber = phoneNumber.replace(/\s/g, "");
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-900 via-orange-800 to-orange-700 pt-16 sm:pt-20">
      <div className="absolute inset-0 z-0">
        {/* Hero image with fallback gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-orange-800 to-orange-700"></div>
        {!imageError && (
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt="Kenny's Kitchen Interior"
              fill
              className="object-cover"
              priority
              quality={90}
              onError={() => setImageError(true)}
            />
          </div>
        )}
        {/* Light overlay only for text readability - dark overlay removed */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-orange-600/20 text-orange-200 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-orange-400/30 mb-6 sm:mb-8 font-bold text-xs sm:text-sm tracking-widest uppercase">
            <Star size={12} className="sm:w-3.5 sm:h-3.5 fill-orange-200" />
            <span>4.6★ Rating • 157 Reviews</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight mb-4 sm:mb-6 md:mb-8 tracking-tighter px-2">
            Comfort Food Done Right
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed font-medium px-2">
            Enjoy fusion comfort food, coffee and snacks in a relaxed setting. Known for unique dishes, warm service and great value.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20">
            {whatsappNumber && (
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl font-black text-base sm:text-lg md:text-xl transition-all shadow-2xl shadow-green-600/30 flex items-center justify-center gap-2 sm:gap-3 transform hover:scale-105 active:scale-95 group">
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
              <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl font-black text-base sm:text-lg md:text-xl transition-all flex items-center justify-center gap-2 sm:gap-3 transform hover:scale-105 active:scale-95">
                <MapPin size={20} className="sm:w-6 sm:h-6" />
                <span>Visit Cafe</span>
              </button>
            </a>
          </div>

          <div className="mt-12 sm:mt-16 md:mt-20 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 items-center opacity-80">
            <div className="flex items-center gap-2 text-white/70">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-300"></div>
              <span className="font-bold text-xs sm:text-sm uppercase tracking-widest">
                Unique Fusion Dishes
              </span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400"></div>
              <span className="font-bold text-xs sm:text-sm uppercase tracking-widest">
                Relaxing Ambience
              </span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-400"></div>
              <span className="font-bold text-xs sm:text-sm uppercase tracking-widest">
                Affordable Prices
              </span>
            </div>
          </div>
        </motion.div>
      </div>


    </section>
  );
}

