"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, Coffee, MapPin, MessageCircle } from "lucide-react";
import Image from "next/image";
import heroImage from "@/assets/Driftt Cafe.jpg";

export default function Hero() {
  const phoneNumber = ""; // Empty as per JSON data
  const whatsappNumber = phoneNumber.replace(/\s/g, "");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-900 via-amber-800 to-amber-700">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Driftt Cafe Exterior"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0  from-amber-900/80 via-amber-800/70 to-amber-700/80"></div>
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-amber-600/20 text-amber-200 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-amber-400/30 mb-6 sm:mb-8 font-bold text-xs sm:text-sm tracking-widest uppercase">
            <Star size={12} className="sm:w-[14px] sm:h-[14px] fill-amber-200" />
            <span>4.2★ Rating • 39 Reviews</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white leading-tight mb-6 sm:mb-8 tracking-tighter px-2">
            A Premium Cafe Experience in <span className="text-amber-300">Vesu</span>
          </h1>

          <p className="text-base sm:text-xl md:text-2xl text-gray-200 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-medium px-2">
            Enjoy coffee, pizzas and cafe food in a relaxed setting. A peaceful cafe for quality conversations and good food.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-2">
            {whatsappNumber && (
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-black text-lg sm:text-xl transition-all shadow-2xl shadow-green-600/30 flex items-center justify-center gap-3 transform hover:scale-105 active:scale-95 group">
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
              <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-black text-lg sm:text-xl transition-all flex items-center justify-center gap-3 transform hover:scale-105 active:scale-95">
                <MapPin size={20} className="sm:w-6 sm:h-6" />
                <span>Visit Cafe</span>
              </button>
            </a>
          </div>

          <div className="mt-12 sm:mt-20 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 items-center opacity-80 px-2">
            <div className="flex items-center gap-2 text-white/70">
              <div className="w-2 h-2 rounded-full bg-amber-300"></div>
              <span className="font-bold text-xs sm:text-sm uppercase tracking-widest">
                Premium Coffee
              </span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              <span className="font-bold text-xs sm:text-sm uppercase tracking-widest">
                Calm Ambience
              </span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              <span className="font-bold text-xs sm:text-sm uppercase tracking-widest">
                Quality Food
              </span>
            </div>
          </div>
        </motion.div>
      </div>


    </section>
  );
}

