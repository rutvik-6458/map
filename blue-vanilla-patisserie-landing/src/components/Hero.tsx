"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, MapPin, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import heroImage from "@/assets/Blue Vanilla Patisserie & Cafe.jpg";

export default function Hero() {
  const phoneNumber = "091047 26042";
  const whatsappNumber = phoneNumber.replace(/\s/g, "");
  const googleMapsLink = "";
  const address = "F3, DMD Paccific, Vesu Canal Rd, near Cellestial Dreams, Surat, Gujarat 395007";
  const getDirectionsUrl = googleMapsLink || `https://www.google.com/maps?q=${encodeURIComponent(address)}`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Blue Vanilla Patisserie & Cafe"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-blue-800/35 to-indigo-900/40"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-20 sm:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-100 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-blue-400/30 mb-6 sm:mb-8 font-bold text-xs sm:text-sm tracking-widest uppercase">
            <Star size={12} className="sm:w-3.5 sm:h-3.5 fill-blue-200" />
            <span>4.5★ Rating • 133 Reviews</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-tight mb-6 sm:mb-8 tracking-tighter px-2">
            A Dessert Lover's <span className="text-blue-300">Favourite in Vesu</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed font-medium px-2">
            Indulge in cheesecakes, brownies and handcrafted cafe drinks. Perfect for celebrations, coffee dates and sweet cravings.
          </p>

          {/* <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6 px-2"> */}
            {/* {whatsappNumber && (
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-2xl font-black text-base sm:text-lg md:text-xl transition-all shadow-2xl shadow-green-600/30 flex items-center justify-center gap-2 sm:gap-3 transform hover:scale-105 active:scale-95 group">
                  <MessageCircle size={20} className="sm:w-6 sm:h-6" />
                  WhatsApp Us
                  <ArrowRight
                    size={18}
                    className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </a>
            )} */}

            {/* {phoneNumber && (
              <a href={`tel:${phoneNumber}`} className="w-full sm:w-auto">
                <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-2xl font-black text-base sm:text-lg md:text-xl transition-all shadow-2xl shadow-blue-600/30 flex items-center justify-center gap-2 sm:gap-3 transform hover:scale-105 active:scale-95 group">
                  <Phone size={20} className="sm:w-6 sm:h-6" />
                  Call Now
                  <ArrowRight
                    size={18}
                    className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </a>
            )} */}
{/*
            <a href={getDirectionsUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-6 sm:px-8 md:px-10 py-4 sm:py-5 rounded-2xl font-black text-base sm:text-lg md:text-xl transition-all flex items-center justify-center gap-2 sm:gap-3 transform hover:scale-105 active:scale-95">
                <MapPin size={20} className="sm:w-6 sm:h-6" />
                Get Directions
              </button>
            </a> */}
          {/* </div> */}

          <div className="mt-12 sm:mt-16 md:mt-20 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 items-center opacity-80 px-2">
            <div className="flex items-center gap-2 text-white/70">
              <div className="w-2 h-2 rounded-full bg-blue-300"></div>
              <span className="font-bold text-xs sm:text-sm uppercase tracking-widest">
                Premium Cheesecakes
              </span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              <span className="font-bold text-xs sm:text-sm uppercase tracking-widest">
                Elegant Ambience
              </span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span className="font-bold text-xs sm:text-sm uppercase tracking-widest">
                Perfect for Celebrations
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

