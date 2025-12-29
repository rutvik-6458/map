"use client";
import React, { useState, useEffect } from "react";
import { Phone, MapPin, MessageCircle, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const phoneNumber = "0261 356 4038";
  const whatsappNumber = phoneNumber.replace(/\s/g, "");
  const address = "New VIP Rd, Vesu, Surat, Gujarat 395007";
  const googleMapsLink = "https://maps.app.goo.gl/6Xevfp8geKHHPS11A";
  const getDirectionsUrl = googleMapsLink || `https://www.google.com/maps?q=${encodeURIComponent(address)}`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section
      const sections = ["features", "services", "gallery", "faq", "location"];
      const scrollPosition = window.scrollY + 150; // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features", id: "features" },
    { name: "Menu", href: "#services", id: "services" },
    { name: "Gallery", href: "#gallery", id: "gallery" },
    { name: "FAQ", href: "#faq", id: "faq" },
    { name: "Location", href: "#location", id: "location" },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-4 py-2 sm:py-3",
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg py-2"
          : "bg-transparent py-3 sm:py-4"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
        <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 flex-1 lg:flex-initial overflow-hidden">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-200 flex-shrink-0">
            <span className="text-white font-bold text-base sm:text-xl">🍽️</span>
          </div>
          <span
            className={cn(
              "font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl tracking-tight transition-colors truncate",
              isScrolled ? "text-gray-900" : "text-white"
            )}
          >
            Kenny's Kitchen
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-bold uppercase tracking-widest transition-all hover:text-orange-600 relative pb-1",
                  isScrolled ? "text-gray-600" : "text-white/80",
                  isActive && "text-orange-600"
                )}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600 rounded-full"></span>
                )}
              </a>
            );
          })}
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-2 md:gap-4">
          {phoneNumber && (
            <a href={`tel:${phoneNumber}`}>
              <button className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 md:px-5 py-2 md:py-2.5 rounded-full font-bold text-xs md:text-sm transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-orange-600/20">
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
                "flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full font-bold text-xs md:text-sm transition-all shadow-sm transform hover:scale-105 active:scale-95",
                isScrolled
                  ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  : "bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border border-white/20"
              )}
            >
              <MapPin
                size={16}
                className={isScrolled ? "text-orange-600" : "text-white"}
              />
              <span>Directions</span>
            </button>
          </a>

          {whatsappNumber && (
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 md:px-5 py-2 md:py-2.5 rounded-full font-bold text-xs md:text-sm transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-green-600/20">
                <MessageCircle size={16} />
                <span className="hidden xl:inline">WhatsApp</span>
              </button>
            </a>
          )}
        </div>

        {/* Mobile Menu Button - Always visible on screens < lg */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            "lg:hidden p-2.5 sm:p-3 rounded-lg transition-all flex-shrink-0 z-50 relative min-w-[44px] min-h-[44px] flex items-center justify-center",
            isScrolled
              ? "text-gray-900 hover:bg-gray-100 bg-white/80 shadow-sm"
              : "text-white hover:bg-white/30 bg-white/15 backdrop-blur-sm border border-white/20"
          )}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X size={24} className="w-6 h-6 flex-shrink-0" />
          ) : (
            <Menu size={24} className="w-6 h-6 flex-shrink-0" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-xl border-t border-gray-200 transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 py-6 space-y-3 sm:space-y-4">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className={cn(
                  "block py-3 sm:py-4 px-4 rounded-lg font-bold text-base sm:text-sm uppercase tracking-widest transition-all",
                  isActive
                    ? "bg-orange-50 text-orange-600 border-l-4 border-orange-600"
                    : "text-gray-700 hover:bg-gray-50 hover:text-orange-600"
                )}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-4 border-t border-gray-200 space-y-3">
            {phoneNumber && (
              <a
                href={`tel:${phoneNumber}`}
                onClick={handleLinkClick}
                className="flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-3 rounded-xl font-bold text-sm transition-all shadow-lg shadow-orange-600/20"
              >
                <Phone size={18} />
                <span>Call Now</span>
              </a>
            )}
            <a
              href={getDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-4 py-3 rounded-xl font-bold text-sm transition-all shadow-lg"
            >
              <MapPin size={18} />
              <span>Get Directions</span>
            </a>
            {whatsappNumber && (
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-xl font-bold text-sm transition-all shadow-lg shadow-green-600/20"
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

