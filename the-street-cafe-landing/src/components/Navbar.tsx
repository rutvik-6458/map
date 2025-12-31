"use client";
import React, { useState, useEffect } from "react";
import { Phone, MapPin, MessageCircle, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const phoneNumber = ""; // Empty as per JSON data
  const whatsappNumber = phoneNumber ? phoneNumber.replace(/\s/g, "") : "";
  const address = "B-11, VIP Rd, Vesu, Surat, Gujarat 395007";
  const googleMapsLink = ""; // Empty as per JSON data
  const getDirectionsUrl = googleMapsLink || `https://www.google.com/maps?q=${encodeURIComponent(address)}`;

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["features", "services", "gallery", "faq", "location"];
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: "Features", href: "#features", id: "features" },
    { name: "Menu", href: "#services", id: "services" },
    { name: "Gallery", href: "#gallery", id: "gallery" },
    { name: "FAQ", href: "#faq", id: "faq" },
    { name: "Location", href: "#location", id: "location" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3",
          isScrolled
            ? "bg-white/90 backdrop-blur-xl shadow-lg py-2"
            : "bg-transparent py-4 text-white"
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

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "relative text-sm font-bold uppercase tracking-widest transition-all hover:text-orange-600 pb-1",
                  isScrolled ? "text-gray-600" : "text-white/80",
                  activeSection === link.id && "text-orange-600"
                )}
              >
                {link.name}
                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-0.5 bg-orange-600 transition-all duration-300",
                    activeSection === link.id ? "w-full" : "w-0"
                  )}
                />
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

            <div className="hidden sm:flex">
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
                  <span>Directions</span>
                </button>
              </a>
            </div>

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

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "p-2 rounded-lg lg:hidden transition-colors",
                isScrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"
              )}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-300",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={cn(
            "absolute right-0 top-0 bottom-0 w-full max-w-[400px] bg-white shadow-2xl transition-transform duration-300 transform",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-2xl">🍜</span>
                </div>
                <span className="font-black text-xl text-gray-900">The Street Cafe</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} className="text-gray-600" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 px-6 py-8">
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "text-lg font-semibold py-4 px-4 rounded-xl transition-all",
                      activeSection === link.id
                        ? "text-orange-600 bg-orange-50"
                        : "text-gray-700 hover:bg-gray-50"
                    )}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Action Buttons */}
            <div className="p-6 space-y-3 border-t border-gray-100">
              {phoneNumber && (
                <a
                  href={`tel:${phoneNumber}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-700 text-white w-full py-4 rounded-2xl font-bold shadow-lg shadow-orange-600/20 transition-all"
                >
                  <Phone size={20} />
                  Call Now
                </a>
              )}
              <a
                href={getDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-3 bg-white border-2 border-orange-600 text-orange-600 hover:bg-orange-50 w-full py-4 rounded-2xl font-bold transition-all"
              >
                <MapPin size={20} />
                Get Directions
              </a>
              {whatsappNumber && (
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white w-full py-4 rounded-2xl font-bold shadow-lg shadow-green-600/20 transition-all"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}





