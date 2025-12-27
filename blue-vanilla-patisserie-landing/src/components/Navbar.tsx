"use client";
import React, { useState, useEffect } from "react";
import { Phone, MapPin, MessageCircle, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const phoneNumber = "091047 26042";
  const whatsappNumber = phoneNumber.replace(/\s/g, "");
  const address = "F3, DMD Paccific, Vesu Canal Rd, near Cellestial Dreams, Surat, Gujarat 395007";
  const googleMapsLink = "";
  const getDirectionsUrl = googleMapsLink || `https://www.google.com/maps?q=${encodeURIComponent(address)}`;

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Menu", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "FAQ", href: "#faq" },
    { name: "Location", href: "#location" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
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
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
              <span className="text-white font-bold text-xl">🧁</span>
            </div>
            <span
              className={cn(
                "font-bold text-lg sm:text-xl tracking-tight transition-colors",
                isScrolled ? "text-gray-900" : "text-white"
              )}
            >
              Blue Vanilla
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-bold uppercase tracking-widest transition-all hover:text-blue-600",
                  isScrolled ? "text-gray-600" : "text-white/80"
                )}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            {phoneNumber && (
              <a href={`tel:${phoneNumber}`} className="hidden sm:flex">
                <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-blue-600/20">
                  <Phone size={14} className="sm:w-4 sm:h-4" />
                  <span className="hidden md:inline">Call Now</span>
                </button>
              </a>
            )}

            <a
              href={getDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex"
            >
              <button
                className={cn(
                  "flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all shadow-sm transform hover:scale-105 active:scale-95",
                  isScrolled
                    ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    : "bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border border-white/20"
                )}
              >
                <MapPin
                  size={14}
                  className={cn("sm:w-4 sm:h-4", isScrolled ? "text-blue-600" : "text-white")}
                />
                <span className="hidden md:inline">Directions</span>
              </button>
            </a>

            {whatsappNumber && (
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex"
              >
                <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-3 sm:px-5 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-green-600/20">
                  <MessageCircle size={14} className="sm:w-4 sm:h-4" />
                  <span className="hidden lg:inline">WhatsApp</span>
                </button>
              </a>
            )}

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "lg:hidden p-2 rounded-lg transition-all",
                isScrolled
                  ? "text-gray-900 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              )}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-300 ease-in-out",
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300",
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={cn(
            "absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out overflow-y-auto",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
                  <span className="text-white font-bold text-xl">🧁</span>
                </div>
                <span className="font-bold text-xl text-gray-900">
                  Blue Vanilla
                </span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg text-gray-900 hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex-1 p-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleNavClick}
                  className="block px-4 py-3 text-gray-900 font-bold uppercase tracking-widest text-sm rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="p-4 border-t border-gray-200 space-y-3">
              {phoneNumber && (
                <a
                  href={`tel:${phoneNumber}`}
                  onClick={handleNavClick}
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-bold text-sm transition-all transform active:scale-95 shadow-lg shadow-blue-600/20 w-full"
                >
                  <Phone size={20} />
                  Call Now
                </a>
              )}

              {whatsappNumber && (
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleNavClick}
                  className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-bold text-sm transition-all transform active:scale-95 shadow-lg shadow-green-600/20 w-full"
                >
                  <MessageCircle size={20} />
                  WhatsApp Us
                </a>
              )}

              <a
                href={getDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full font-bold text-sm transition-all transform active:scale-95 shadow-lg w-full"
              >
                <MapPin size={20} />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


