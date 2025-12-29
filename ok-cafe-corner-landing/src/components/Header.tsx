"use client";

import { useState, useEffect } from "react";
import { businessData } from "../data";
import { Button } from "./ui/button";
import { Phone, MapPin, Menu, X, MessageCircle } from "lucide-react";
import { cn } from "../lib/utils";

const NAV_ITEMS = [
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

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

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
  // Use the specific Google Maps link provided
  const directionsLink = "https://maps.app.goo.gl/TESMjyzDw4g21rDTA";

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div
          className={cn(
            "text-xl md:text-2xl font-bold font-playfair cursor-pointer transition-colors",
            isScrolled ? "text-primary" : "text-white"
          )}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {businessData.brand.business_name}
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
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
                    ? "text-white"
                    : "text-white/90 hover:text-white"
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
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            asChild
            className={cn(
              "rounded-full",
              !isScrolled && "border-white/30 text-white hover:bg-white/10 hover:border-white/50"
            )}
          >
            <a href={directionsLink} target="_blank" rel="noopener noreferrer">
              <MapPin className="mr-2 h-4 w-4" /> Directions
            </a>
          </Button>
          {phoneNumber && (
            <Button
              size="sm"
              asChild
              className={cn(
                "rounded-full shadow-lg",
                isScrolled ? "shadow-primary/20" : "bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 shadow-white/10"
              )}
            >
              <a href={`tel:${phoneNumber}`}>
                <Phone className="mr-2 h-4 w-4" /> Call Now
              </a>
            </Button>
          )}
          {whatsappNumber && (
            <Button size="sm" variant="secondary" asChild className="rounded-full bg-green-600 hover:bg-green-700 text-white">
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
              </a>
            </Button>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <Button size="sm" variant="ghost" asChild className="p-2">
            <a href={directionsLink} target="_blank" rel="noopener noreferrer">
              <MapPin className={cn("h-5 w-5", isScrolled ? "text-primary" : "text-white")} />
            </a>
          </Button>
          {phoneNumber && (
            <Button size="sm" variant="ghost" asChild className="p-2">
              <a href={`tel:${phoneNumber}`}>
                <Phone className={cn("h-5 w-5", isScrolled ? "text-primary" : "text-white")} />
              </a>
            </Button>
          )}
          {whatsappNumber && (
            <Button size="sm" variant="ghost" asChild className="p-2">
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className={cn("h-5 w-5", isScrolled ? "text-primary" : "text-white")} />
              </a>
            </Button>
          )}
          <button
            className="p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className={cn(isScrolled ? "text-gray-900" : "text-white")} />
            ) : (
              <Menu className={cn(isScrolled ? "text-gray-900" : "text-white")} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-6 flex flex-col gap-6 shadow-xl md:hidden animate-in slide-in-from-top duration-300">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={cn(
                "text-left text-lg font-medium",
                activeSection === item.id ? "text-primary" : "text-gray-700"
              )}
            >
              {item.label}
            </button>
          ))}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <Button variant="outline" className="rounded-full" asChild>
              <a href={directionsLink} target="_blank" rel="noopener noreferrer">
                <MapPin className="mr-2 h-4 w-4" /> Directions
              </a>
            </Button>
            {phoneNumber && (
              <Button className="rounded-full" asChild>
                <a href={`tel:${phoneNumber}`}>
                  <Phone className="mr-2 h-4 w-4" /> Call
                </a>
              </Button>
            )}
            {whatsappNumber && (
              <Button className="rounded-full bg-green-600 hover:bg-green-700 text-white col-span-2" asChild>
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
                </a>
              </Button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}



