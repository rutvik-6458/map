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
      const offset = 80; // Header height approx
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

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div
          className="text-xl md:text-2xl font-bold font-playfair text-primary cursor-pointer"
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
                activeSection === item.id
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" size="sm" asChild className="rounded-full">
            <a href={businessData.contact.google_maps_link} target="_blank" rel="noopener noreferrer">
              <MapPin className="mr-2 h-4 w-4" /> Directions
            </a>
          </Button>
          <Button size="sm" asChild className="rounded-full shadow-lg shadow-primary/20">
            <a href={`tel:${businessData.contact.phone.replace(/\s+/g, '')}`}>
              <Phone className="mr-2 h-4 w-4" /> Call Now
            </a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
            <Button size="sm" variant="ghost" asChild className="p-2">
                <a href={`tel:${businessData.contact.phone.replace(/\s+/g, '')}`}>
                    <Phone className="h-5 w-5 text-primary" />
                </a>
            </Button>
            <button className="p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X /> : <Menu />}
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
                activeSection === item.id ? "text-primary" : "text-gray-600"
              )}
            >
              {item.label}
            </button>
          ))}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <Button variant="outline" className="rounded-full" asChild>
              <a href={businessData.contact.google_maps_link} target="_blank" rel="noopener noreferrer">
                <MapPin className="mr-2 h-4 w-4" /> Map
              </a>
            </Button>
            <Button className="rounded-full" asChild>
              <a href={`tel:${businessData.contact.phone.replace(/\s+/g, '')}`}>
                <Phone className="mr-2 h-4 w-4" /> Call
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}






