"use client";
import React, { useState, useEffect } from "react";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const phoneNumber = ""; // Empty as per JSON data
  const whatsappNumber = phoneNumber ? phoneNumber.replace(/\s/g, "") : "";
  const address = "B-11, VIP Rd, Vesu, Surat, Gujarat 395007";
  const googleMapsLink = ""; // Empty as per JSON data
  const getDirectionsUrl = googleMapsLink || `https://www.google.com/maps?q=${encodeURIComponent(address)}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3",
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-200">
            <span className="text-white font-bold text-xl">🍜</span>
          </div>
          <span
            className={cn(
              "font-bold text-xl tracking-tight transition-colors",
              isScrolled ? "text-gray-900" : "text-white"
            )}
          >
            The Street Cafe
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {[
            { name: "Features", href: "#features" },
            { name: "Menu", href: "#services" },
            { name: "Gallery", href: "#gallery" },
            { name: "FAQ", href: "#faq" },
            { name: "Location", href: "#location" },
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-bold uppercase tracking-widest transition-all hover:text-orange-600",
                isScrolled ? "text-gray-600" : "text-white/80"
              )}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          {phoneNumber && (
            <a href={`tel:${phoneNumber}`} className="hidden md:flex">
              <button className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-orange-600/20">
                <Phone size={16} />
                <span>Call Now</span>
              </button>
            </a>
          )}

          <a
            href={getDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-sm transform hover:scale-105 active:scale-95",
                isScrolled
                  ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  : "bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border border-white/20"
              )}
            >
              <MapPin
                size={16}
                className={isScrolled ? "text-orange-600" : "text-white"}
              />
              <span className="hidden sm:inline">Directions</span>
            </button>
          </a>

          {whatsappNumber && (
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex"
            >
              <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-green-600/20">
                <MessageCircle size={16} />
                <span className="hidden lg:inline">WhatsApp</span>
              </button>
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}


