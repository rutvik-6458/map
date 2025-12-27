"use client";
import React, { useState, useEffect } from "react";
import { Phone, MapPin, MessageCircle, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const phoneNumber = ""; // Empty as per JSON data
  const whatsappNumber = phoneNumber.replace(/\s/g, "");
  const googleMapsLink = ""; // Empty as per JSON data - will be updated when available

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
    const sections = ["hero", "features", "services", "gallery", "faq", "location"];
    const observerOptions = {
      root: null,
      rootMargin: "-100px 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  const scrollToSection = (href: string) => {
    const sectionId = href.replace("#", "");
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-4 py-2 sm:py-3",
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-lg"
          : "bg-transparent py-3 sm:py-4"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#hero");
          }}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <div className="w-10 h-10 bg-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-200">
            <span className="text-white font-bold text-xl">☕</span>
          </div>
          <span
            className={cn(
              "font-bold text-lg sm:text-xl tracking-tight transition-colors",
              isScrolled ? "text-gray-900" : "text-white"
            )}
          >
            Cafetrio
          </span>
        </button>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <button
                key={link.name}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={cn(
                  "text-sm font-bold uppercase tracking-widest transition-all relative pb-1",
                  isActive
                    ? isScrolled
                      ? "text-amber-600"
                      : "text-white"
                    : isScrolled
                    ? "text-gray-600 hover:text-amber-600"
                    : "text-white/80 hover:text-white"
                )}
              >
                {link.name}
                {isActive && (
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 right-0 h-0.5 transition-all",
                      isScrolled ? "bg-amber-600" : "bg-white"
                    )}
                  />
                )}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          {phoneNumber && (
            <a href={`tel:${phoneNumber}`} className="hidden md:flex">
              <button className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-amber-600/20">
                <Phone size={16} />
                <span>Call Now</span>
              </button>
            </a>
          )}

          {googleMapsLink && (
            <a
              href={googleMapsLink}
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
                  className={isScrolled ? "text-amber-600" : "text-white"}
                />
                <span className="hidden sm:inline">Directions</span>
              </button>
            </a>
          )}

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
              "lg:hidden p-2 rounded-lg transition-colors",
              isScrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            )}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200/20 bg-white/95 backdrop-blur-xl shadow-xl">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <button
                    key={link.name}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className={cn(
                      "text-left px-4 py-3 rounded-lg transition-all font-bold uppercase tracking-widest text-sm",
                      isActive
                        ? "bg-amber-600 text-white"
                        : "text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                    )}
                  >
                    {link.name}
                  </button>
                );
              })}
            </nav>
            <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col gap-2">
              {phoneNumber && (
                <a
                  href={`tel:${phoneNumber}`}
                  className="flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-5 py-3 rounded-full font-bold text-sm transition-all"
                >
                  <Phone size={16} />
                  <span>Call Now</span>
                </a>
              )}
              {googleMapsLink && (
                <a
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 px-5 py-3 rounded-full font-bold text-sm transition-all"
                >
                  <MapPin size={16} />
                  <span>Directions</span>
                </a>
              )}
              {whatsappNumber && (
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full font-bold text-sm transition-all"
                >
                  <MessageCircle size={16} />
                  <span>WhatsApp</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

