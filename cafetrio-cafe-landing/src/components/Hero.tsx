"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, MapPin, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import heroImage from "@/assets/Cafetrio.jpg";

export default function Hero() {
  const phoneNumber = ""; // Empty as per JSON data
  const whatsappNumber = phoneNumber.replace(/\s/g, "");
  const googleMapsLink = ""; // Empty as per JSON data

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Cafetrio Cafe Exterior"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-gray-800/80 to-gray-900/85"></div>
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,191,36,0.15),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-100 px-4 py-2 rounded-full border border-amber-400/30 mb-8 font-bold text-sm tracking-widest uppercase">
            <Star size={14} className="fill-amber-200" />
            <span>4.8★ Rating • 47 Reviews</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-6 sm:mb-8 tracking-tighter px-2">
            Pocket-Friendly Cafe <span className="text-amber-300">Loved by Locals</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-medium px-2">
            Enjoy delicious food and relaxed ambience without spending much. A cozy cafe known for hospitality, taste and value.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            {whatsappNumber && (
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-2xl font-black text-lg sm:text-xl transition-all shadow-2xl shadow-green-600/30 flex items-center justify-center gap-3 transform hover:scale-105 active:scale-95 group">
                  <MessageCircle size={20} className="sm:w-6 sm:h-6" />
                  WhatsApp Us
                  <ArrowRight
                    size={18}
                    className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </a>
            )}

            {phoneNumber && (
              <a href={`tel:${phoneNumber}`}>
                <button className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-2xl font-black text-lg sm:text-xl transition-all shadow-2xl shadow-amber-600/30 flex items-center justify-center gap-3 transform hover:scale-105 active:scale-95 group">
                  <Phone size={20} className="sm:w-6 sm:h-6" />
                  Call Now
                  <ArrowRight
                    size={18}
                    className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </a>
            )}

            {googleMapsLink ? (
              <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
                <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-2xl font-black text-lg sm:text-xl transition-all flex items-center justify-center gap-3 transform hover:scale-105 active:scale-95">
                  <MapPin size={20} className="sm:w-6 sm:h-6" />
                  Get Directions
                </button>
              </a>
            ) : (
              <a href="#location">
                <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-2xl font-black text-lg sm:text-xl transition-all flex items-center justify-center gap-3 transform hover:scale-105 active:scale-95">
                  <MapPin size={20} className="sm:w-6 sm:h-6" />
                  Visit Cafe
                </button>
              </a>
            )}
          </div>

          <div className="mt-12 sm:mt-20 flex flex-wrap justify-center gap-6 sm:gap-10 items-center opacity-80">
            <div className="flex items-center gap-2 text-white/70">
              <div className="w-2 h-2 rounded-full bg-amber-300"></div>
              <span className="font-bold text-sm uppercase tracking-widest">
                Pocket-Friendly
              </span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <div className="w-2 h-2 rounded-full bg-amber-400"></div>
              <span className="font-bold text-sm uppercase tracking-widest">
                Warm Hospitality
              </span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <div className="w-2 h-2 rounded-full bg-amber-500"></div>
              <span className="font-bold text-sm uppercase tracking-widest">
                Delicious Food
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

