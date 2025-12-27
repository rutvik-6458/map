"use client";

import { useState, useEffect } from "react";
import { businessData } from "../data";
import { Button } from "./ui/button";
import { Phone, MapPin, Menu, X, MessageCircle } from "lucide-react";
import { cn } from "../lib/utils";

const NAV_ITEMS = [
  { label: "Home", id: "hero" },
  { label: "Why Us", id: "features" },
  { label: "Menu", id: "menu" },
  { label: "Gallery", id: "gallery" },
  { label: "FAQ", id: "faq" },
  { label: "Location", id: "location" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
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

    // Observe all sections including hero
    const sections = ["hero", ...NAV_ITEMS.map(item => item.id)];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setMobileMenuOpen(false);
    }
  };

  const phoneNumber = businessData.contact.phone;
  const whatsappNumber = phoneNumber ? phoneNumber.replace(/\s+/g, '') : '';
  const hasGoogleMaps = businessData.contact.google_maps_link && businessData.contact.google_maps_link.trim() !== '';

  // Generate Google Maps directions link from address
  const directionsLink = hasGoogleMaps
    ? businessData.contact.google_maps_link
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessData.contact.address)}`;

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full overflow-x-hidden",
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-4 md:py-5"
    )}>
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between min-h-[60px] sm:min-h-[70px] max-w-full">
        <div
          className={cn(
            "text-base sm:text-lg md:text-xl lg:text-2xl font-bold font-playfair cursor-pointer transition-colors truncate max-w-[60%] sm:max-w-none",
            isScrolled ? "text-primary" : "text-white drop-shadow-lg"
          )}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          title={businessData.brand.business_name}
        >
          {businessData.brand.business_name}
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={cn(
                "text-sm font-medium transition-all relative py-1",
                isScrolled
                  ? activeSection === item.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                  : activeSection === item.id
                    ? "text-white drop-shadow-md"
                    : "text-white/90 hover:text-white drop-shadow-md"
              )}
            >
              {item.label}
              {activeSection === item.id && (
                <span className={cn(
                  "absolute bottom-0 left-0 w-full h-0.5 rounded-full",
                  isScrolled ? "bg-primary" : "bg-white"
                )} />
              )}
            </button>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-3">
          <Button
            variant="outline"
            size="sm"
            asChild
            className={cn(
              "rounded-full text-xs xl:text-sm",
              isScrolled
                ? "border-gray-300 text-gray-700 hover:bg-gray-50"
                : "border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20"
            )}
          >
            <a href={directionsLink} target="_blank" rel="noopener noreferrer">
              <MapPin className="mr-1.5 xl:mr-2 h-3.5 w-3.5 xl:h-4 xl:w-4" />
              <span className="hidden xl:inline">Directions</span>
              <span className="xl:hidden">Dir</span>
            </a>
          </Button>
          {phoneNumber && (
            <Button
              size="sm"
              asChild
              className={cn(
                "rounded-full shadow-lg text-xs xl:text-sm",
                isScrolled
                  ? "shadow-primary/20"
                  : "bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border-white/30"
              )}
            >
              <a href={`tel:${phoneNumber}`}>
                <Phone className="mr-1.5 xl:mr-2 h-3.5 w-3.5 xl:h-4 xl:w-4" />
                <span className="hidden xl:inline">Call Now</span>
                <span className="xl:hidden">Call</span>
              </a>
            </Button>
          )}
          {whatsappNumber && (
            <Button
              size="sm"
              variant="secondary"
              asChild
              className={cn(
                "rounded-full text-white text-xs xl:text-sm",
                isScrolled
                  ? "bg-green-600 hover:bg-green-700"
                  : "bg-green-600/90 hover:bg-green-600 backdrop-blur-md border-green-500/30"
              )}
            >
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-1.5 xl:mr-2 h-3.5 w-3.5 xl:h-4 xl:w-4" />
                <span className="hidden xl:inline">WhatsApp</span>
                <span className="xl:hidden">WA</span>
              </a>
            </Button>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
          <Button
            size="sm"
            variant="ghost"
            asChild
            className={cn(
              "p-1.5 sm:p-2 min-w-[40px]",
              !isScrolled && "text-white hover:bg-white/10"
            )}
          >
            <a href={directionsLink} target="_blank" rel="noopener noreferrer" aria-label="Directions">
              <MapPin className={cn(
                "h-4 w-4 sm:h-5 sm:w-5",
                isScrolled ? "text-primary" : "text-white"
              )} />
            </a>
          </Button>
          {phoneNumber && (
            <Button
              size="sm"
              variant="ghost"
              asChild
              className={cn(
                "p-1.5 sm:p-2 min-w-[40px]",
                !isScrolled && "text-white hover:bg-white/10"
              )}
            >
              <a href={`tel:${phoneNumber}`} aria-label="Call">
                <Phone className={cn(
                  "h-4 w-4 sm:h-5 sm:w-5",
                  isScrolled ? "text-primary" : "text-white"
                )} />
              </a>
            </Button>
          )}
          <button
            className={cn(
              "p-1.5 sm:p-2 transition-colors rounded-md min-w-[40px] flex items-center justify-center",
              isScrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          {/* Menu Content */}
          <div className="fixed top-[60px] sm:top-[70px] left-0 right-0 bg-white border-t border-gray-200 p-4 sm:p-6 flex flex-col gap-4 sm:gap-6 shadow-2xl z-50 lg:hidden max-h-[calc(100vh-70px)] overflow-y-auto w-full">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "text-left text-base sm:text-lg font-medium py-3 px-2 transition-colors rounded-lg hover:bg-gray-50",
                  activeSection === item.id
                    ? "text-primary bg-primary/5 font-semibold"
                    : "text-gray-700 hover:text-primary"
                )}
              >
                {item.label}
              </button>
            ))}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-4 border-t border-gray-100">
              <Button variant="outline" className="rounded-full w-full" asChild>
                <a href={directionsLink} target="_blank" rel="noopener noreferrer">
                  <MapPin className="mr-2 h-4 w-4" /> Directions
                </a>
              </Button>
              {phoneNumber && (
                <Button className="rounded-full w-full bg-primary hover:bg-primary/90" asChild>
                  <a href={`tel:${phoneNumber}`}>
                    <Phone className="mr-2 h-4 w-4" /> Call Now
                  </a>
                </Button>
              )}
              {whatsappNumber && (
                <Button className="rounded-full bg-green-600 hover:bg-green-700 text-white w-full sm:col-span-2" asChild>
                  <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
                  </a>
                </Button>
              )}
            </div>
          </div>
        </>
      )}
    </header>
  );
}


