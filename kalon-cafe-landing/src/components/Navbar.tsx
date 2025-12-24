"use client";

import { Phone, MapPin, MessageCircle, Menu as MenuIcon, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { cafeData } from "@/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const formatPhoneForTel = (phone: string) => {
    if (!phone) return "";
    return phone.replace(/\s+/g, "").replace(/^0/, "+91");
  };

  const phone = formatPhoneForTel(cafeData.contact.phone);
  const whatsappNumber = phone ? `91${phone.replace(/\+91/g, "")}` : "";
  const whatsappLink = whatsappNumber ? `https://wa.me/${whatsappNumber}` : "";
  const telLink = phone ? `tel:+91${phone.replace(/\+91/g, "")}` : "";

  const googleMapsLink = cafeData.contact.google_maps_link ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cafeData.contact.address)}`;

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Features", href: "#features" },
    { name: "Menu", href: "#menu" },
    { name: "Gallery", href: "#gallery" },
    { name: "FAQ", href: "#faq" },
    { name: "Location", href: "#location" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3 md:px-8",
      scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-white/90 backdrop-blur-sm py-3"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className={cn(
            "text-xl md:text-2xl font-bold tracking-tight transition-colors",
            scrolled ? "text-gray-900" : "text-gray-900"
          )}>
            {cafeData.brand.business_name}
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className={cn(
                "text-sm font-semibold uppercase tracking-wider transition-all hover:scale-105",
                scrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-700 hover:text-gray-900"
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 md:gap-4">
          {googleMapsLink && (
            <a
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-all hover:shadow-lg",
                scrolled ? "bg-gray-100 text-gray-900 hover:bg-gray-200" : "bg-gray-100 text-gray-900 hover:bg-gray-200"
              )}
            >
              <MapPin className="w-4 h-4" />
              <span>Directions</span>
            </a>
          )}
          {telLink && (
            <a
              href={telLink}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-600 text-white font-bold text-sm hover:bg-amber-700 transition-all hover:shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xs:inline">Call Now</span>
            </a>
          )}

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 p-6 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-gray-800 text-lg font-bold uppercase tracking-widest py-2 border-b border-gray-50"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="mt-8 flex flex-col gap-4">
            {whatsappLink && (
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-green-600 text-white font-bold"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            )}
            {googleMapsLink && (
              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-gray-900 text-white font-bold"
              >
                <MapPin className="w-5 h-5" />
                Get Directions
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

