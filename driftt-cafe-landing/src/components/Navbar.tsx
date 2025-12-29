"use client";
import React, { useState, useEffect } from "react";
import { Phone, MapPin, MessageCircle, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const phoneNumber = ""; // Empty as per JSON data
  const whatsappNumber = phoneNumber.replace(/\s/g, "");
  const googleMapsLink = "https://maps.app.goo.gl/x9rsVmbNNZnTwHjbA";

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

      // Detect active section
      const sectionIds = ["features", "services", "gallery", "faq", "location"];
      const offset = 120; // Offset from top (navbar height + padding)

      let currentActive = "";

      // Check sections in reverse order to prioritize the one currently at the top
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top;
          const elementBottom = rect.bottom;

          // Section is active if:
          // 1. Its top is at or above the offset line, AND
          // 2. Its bottom is below the offset line (section is visible)
          if (elementTop <= offset && elementBottom > offset) {
            currentActive = id;
            break; // Use the first (topmost) matching section
          }
        }
      }

      // If no section is in the active zone, find the one closest to the offset
      if (!currentActive) {
        let closestId = "";
        let closestDistance = Infinity;

        sectionIds.forEach((id) => {
          const element = document.getElementById(id);
          if (element) {
            const rect = element.getBoundingClientRect();

            // Only consider sections that are visible in viewport
            if (rect.bottom > 0 && rect.top < window.innerHeight) {
              // Calculate how close the section top is to the offset line
              const distance = Math.abs(rect.top - offset);

              // Prefer sections that are above or just below the offset
              if (distance < closestDistance) {
                closestDistance = distance;
                closestId = id;
              }
            }
          }
        });

        if (closestId) {
          currentActive = closestId;
        }
      }

      setActiveSection(currentActive);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    handleScroll(); // Initial check

    // Also check on resize
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
      window.removeEventListener("resize", handleScroll);
    };
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
          <div className="w-10 h-10 bg-amber-700 rounded-xl flex items-center justify-center shadow-lg shadow-amber-200">
            <span className="text-white font-bold text-xl">☕</span>
          </div>
          <span
            className={cn(
              "font-bold text-xl tracking-tight transition-colors",
              isScrolled ? "text-gray-900" : "text-white"
            )}
          >
            Driftt Cafe
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-bold uppercase tracking-widest transition-all hover:text-amber-600 relative pb-1.5",
                  isScrolled ? "text-gray-600" : "text-white/80",
                  isActive && "text-amber-600"
                )}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-1 bg-amber-600 rounded-full transition-all duration-300"></span>
                )}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          {phoneNumber && (
            <a href={`tel:${phoneNumber}`} className="hidden md:flex">
              <button className="flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-amber-700/20">
                <Phone size={16} />
                <span>Call Now</span>
              </button>
            </a>
          )}

          <a
            href={googleMapsLink}
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
                className={isScrolled ? "text-amber-700" : "text-white"}
              />
              <span className="hidden md:inline">Directions</span>
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
          "lg:hidden fixed inset-x-0 top-[73px] bg-white/95 backdrop-blur-xl shadow-xl transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "block text-gray-900 font-bold text-lg py-3 px-4 rounded-xl hover:bg-amber-50 hover:text-amber-600 transition-all relative",
                  isActive && "bg-amber-50 text-amber-600"
                )}
              >
                {link.name}
                {isActive && (
                  <span className="absolute left-0 top-0 bottom-0 w-1 bg-amber-600 rounded-r-full"></span>
                )}
              </a>
            );
          })}
          <div className="pt-4 border-t border-gray-200 space-y-3">
            <a
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-xl font-bold transition-all"
            >
              <MapPin size={20} />
              Get Directions
            </a>
            {phoneNumber && (
              <a
                href={`tel:${phoneNumber}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-xl font-bold transition-all"
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
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold transition-all"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}


