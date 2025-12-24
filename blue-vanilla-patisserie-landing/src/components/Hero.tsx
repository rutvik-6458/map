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

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-100 px-4 py-2 rounded-full border border-blue-400/30 mb-8 font-bold text-sm tracking-widest uppercase">
            <Star size={14} className="fill-blue-200" />
            <span>4.5★ Rating • 133 Reviews</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black text-white leading-tight mb-8 tracking-tighter">
            A Dessert Lover's <span className="text-blue-300">Favourite in Vesu</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Indulge in cheesecakes, brownies and handcrafted cafe drinks. Perfect for celebrations, coffee dates and sweet cravings.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
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

            {phoneNumber && (
              <a href={`tel:${phoneNumber}`}>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-blue-600/30 flex items-center gap-3 transform hover:scale-105 active:scale-95 group">
                  <Phone size={24} />
                  Call Now
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
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-10 items-center opacity-80">
            <div className="flex items-center gap-2 text-white/70">
              <div className="w-2 h-2 rounded-full bg-blue-300"></div>
              <span className="font-bold text-sm uppercase tracking-widest">
                Premium Cheesecakes
              </span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              <span className="font-bold text-sm uppercase tracking-widest">
                Elegant Ambience
              </span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span className="font-bold text-sm uppercase tracking-widest">
                Perfect for Celebrations
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

