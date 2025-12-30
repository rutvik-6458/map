"use client";
import React, { useState, useEffect } from "react";
import { Phone, MapPin, MessageCircle, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const phoneNumber = "099099 01944";
  const whatsappNumber = phoneNumber.replace(/\s/g, "");
  const address = "International Wealth Center, 312, VIP Rd, Vesu, Surat, Gujarat 395007";
  const googleMapsLink = "https://maps.app.goo.gl/EhUDH3oqC8CHjzk39";
  const getDirectionsUrl = googleMapsLink || `https://www.google.com/maps?q=${encodeURIComponent(address)}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Detect active section based on scroll position
      const sections = [
        { id: "features", name: "Features" },
        { id: "services", name: "Menu" },
        { id: "gallery", name: "Gallery" },
        { id: "faq", name: "FAQ" },
        { id: "location", name: "Location" },
      ];

      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
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
          <div className="w-10 h-10 bg-amber-800 rounded-xl flex items-center justify-center shadow-lg shadow-amber-200">
            <span className="text-white font-bold text-xl">☕</span>
          </div>
          <span
            className={cn(
              "font-bold text-lg sm:text-xl tracking-tight transition-colors",
              isScrolled ? "text-gray-900" : "text-white"
            )}
          >
            <span className="hidden sm:inline">Seeds Coffee House</span>
            <span className="sm:hidden">Seeds</span>
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {[
            { name: "Features", href: "#features", id: "features" },
            { name: "Menu", href: "#services", id: "services" },
            { name: "Gallery", href: "#gallery", id: "gallery" },
            { name: "FAQ", href: "#faq", id: "faq" },
            { name: "Location", href: "#location", id: "location" },
          ].map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "relative text-sm font-bold uppercase tracking-widest transition-all hover:text-amber-700",
                  "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-amber-700 after:transition-all after:duration-300",
                  isActive ? "after:w-full" : "after:w-0 hover:after:w-full",
                  isScrolled ? "text-gray-600" : "text-white/80"
                )}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          {phoneNumber && (
            <a href={`tel:${phoneNumber}`} className="hidden md:flex">
              <button className="flex items-center gap-2 bg-amber-800 hover:bg-amber-900 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-amber-800/20">
                <Phone size={16} />
                <span>Call Now</span>
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
                "flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-sm transform hover:scale-105 active:scale-95",
                isScrolled
                  ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  : "bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border border-white/20"
              )}
            >
              <MapPin
                size={16}
                className={isScrolled ? "text-amber-800" : "text-white"}
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

          {/* Mobile Menu Button */}
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
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300",
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div
          className={cn(
            "px-4 py-6 space-y-4 border-t",
            isScrolled
              ? "bg-white border-gray-200"
              : "bg-white/95 backdrop-blur-xl border-white/20"
          )}
        >
          {[
            { name: "Features", href: "#features", id: "features" },
            { name: "Menu", href: "#services", id: "services" },
            { name: "Gallery", href: "#gallery", id: "gallery" },
            { name: "FAQ", href: "#faq", id: "faq" },
            { name: "Location", href: "#location", id: "location" },
          ].map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "block py-3 px-4 rounded-lg font-bold text-sm uppercase tracking-widest transition-all",
                  isActive
                    ? "bg-amber-100 text-amber-700"
                    : "text-gray-700 hover:bg-gray-100"
                )}
              >
                {link.name}
              </a>
            );
          })}

          <div className="pt-4 space-y-3 border-t border-gray-200">
            {phoneNumber && (
              <a
                href={`tel:${phoneNumber}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-amber-800 hover:bg-amber-900 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-lg"
              >
                <Phone size={18} />
                <span>Call Now</span>
              </a>
            )}

            <a
              href={getDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-xl font-bold text-sm transition-all"
            >
              <MapPin size={18} />
              <span>Directions</span>
            </a>

            {whatsappNumber && (
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-lg"
              >
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}





