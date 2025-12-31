"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, MapPin, MessageCircle } from "lucide-react";
import Image from "next/image";
import heroImage from "@/assets/the-street-cafe.jpg";

export default function Hero() {
  const phoneNumber = ""; // Empty as per JSON data
  const whatsappNumber = phoneNumber ? phoneNumber.replace(/\s/g, "") : "";
  const address = "B-11, VIP Rd, Vesu, Surat, Gujarat 395007";
  const googleMapsLink = ""; // Empty as per JSON data
  const getDirectionsUrl = googleMapsLink || `https://www.google.com/maps?q=${encodeURIComponent(address)}`;
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-600 via-orange-500 to-orange-700">
      <div className="absolute inset-0 z-0">
        {/* Hero image with fallback gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-orange-500 to-orange-700"></div>
        {!imageError && (
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt="The Street Cafe by Ab's Kitchen"
              fill
              className="object-cover"
              priority
              quality={90}
              onError={() => setImageError(true)}
            />
          </div>
        )}
        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center py-20 sm:py-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-orange-700/20 text-orange-100 px-3 sm:px-4 py-2 rounded-full border border-orange-300/30 mb-6 sm:mb-8 font-bold text-xs sm:text-sm tracking-widest uppercase">
            <Star size={14} className="fill-orange-200" />
            <span>4.7★ Rating • 15 Reviews</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-black text-white leading-tight mb-6 sm:mb-8 tracking-tighter px-2">
            Pocket-Friendly Street Cafe in Vesu
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-medium px-4">
            Enjoy momos, fries and sandwiches without burning your wallet. Fast service, friendly staff and comforting street food.
          </p>

          {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {whatsappNumber && (
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-green-600/30 flex items-center gap-3 transform hover:scale-105 active:scale-95 group">
                  <MessageCircle size={24} />
                  WhatsApp Us
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </a>
            )}

            <a href={getDirectionsUrl} target="_blank" rel="noopener noreferrer">
              <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all flex items-center gap-3 transform hover:scale-105 active:scale-95">
                <MapPin size={24} />
                Get Directions
              </button>
            </a>
          </div> */}

          <div className="mt-12 sm:mt-20 flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-10 items-center opacity-80 px-4">
            <div className="flex items-center gap-2 text-white/70">
              <div className="w-2 h-2 rounded-full bg-orange-300"></div>
              <span className="font-bold text-xs sm:text-sm uppercase tracking-widest">
                Very Affordable Prices
              </span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <div className="w-2 h-2 rounded-full bg-orange-400"></div>
              <span className="font-bold text-xs sm:text-sm uppercase tracking-widest">
                Fast Service
              </span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <div className="w-2 h-2 rounded-full bg-orange-500"></div>
              <span className="font-bold text-xs sm:text-sm uppercase tracking-widest">
                Warm & Friendly Staff
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

