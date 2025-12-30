"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Navigation, Menu, X, MessageCircle } from "lucide-react";
import { cafeData } from "@/data";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Determine active section based on scroll position
      const sections = ["hero", "menu", "gallery", "faq", "location"];
      const scrollPosition = window.scrollY + 150; // Offset for header height
      
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  const formatPhoneForTel = (phone: string) => {
    if (!phone) return "";
    return phone.replace(/\s+/g, "").replace(/^0/, "+91");
  };

  const phone = formatPhoneForTel(cafeData.contact.phone);
  const whatsappNumber = phone;
  const hasPhone = phone.length > 0;
  const hasWhatsApp = hasPhone;
  const hasGoogleMaps = cafeData.contact.google_maps_link.length > 0;

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "menu", label: "Menu" },
    { id: "gallery", label: "Gallery" },
    { id: "faq", label: "FAQ" },
    { id: "location", label: "Location" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-black/20 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className={`text-lg sm:text-xl md:text-2xl font-bold hover:scale-105 transition-transform ${
              isScrolled
                ? "bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text text-transparent"
                : "bg-gradient-to-r from-amber-400 to-amber-300 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            }`}
          >
            {cafeData.brand.business_name}
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all duration-200 relative pb-1 ${
                    isScrolled
                      ? isActive
                        ? "text-amber-700"
                        : "text-gray-700 hover:text-amber-700"
                      : isActive
                      ? "text-amber-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                      : "text-white hover:text-amber-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-200 ${
                        isScrolled ? "bg-amber-700" : "bg-amber-300"
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            {hasPhone && (
              <Button
                variant="outline"
                size="sm"
                className="border-amber-700 text-amber-700 hover:bg-amber-50"
                onClick={() => window.open(`tel:${phone}`, "_self")}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            )}
            {hasGoogleMaps ? (
              <Button
                size="sm"
                className="bg-gradient-to-r from-amber-800 to-amber-700 hover:from-amber-900 hover:to-amber-800 text-white"
                onClick={() => window.open(cafeData.contact.google_maps_link, "_blank")}
              >
                <Navigation className="w-4 h-4 mr-2" />
                Directions
              </Button>
            ) : (
              <Button
                size="sm"
                className="bg-gradient-to-r from-amber-800 to-amber-700 hover:from-amber-900 hover:to-amber-800 text-white"
                onClick={() => scrollToSection("location")}
              >
                <Navigation className="w-4 h-4 mr-2" />
                Directions
              </Button>
            )}
            {hasWhatsApp && (
              <Button
                size="sm"
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={() =>
                  window.open(
                    `https://wa.me/${whatsappNumber.replace(/\+/g, "")}`,
                    "_blank"
                  )
                }
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            )}
          </div>

          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "hover:bg-gray-100 text-gray-700"
                : "hover:bg-white/20 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4 bg-white/95 backdrop-blur-md rounded-lg shadow-lg">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left px-4 py-2 rounded-lg transition-all relative ${
                      isActive
                        ? "text-amber-700 bg-amber-50 font-semibold"
                        : "text-gray-700 hover:bg-amber-100"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute left-0 top-0 bottom-0 w-1 bg-amber-700 rounded-r" />
                    )}
                  </button>
                );
              })}
              <div className="flex flex-col gap-2 mt-2 px-4">
                {hasPhone && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-amber-700 text-amber-700 hover:bg-amber-50"
                    onClick={() => window.open(`tel:${phone}`, "_self")}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                )}
                {hasGoogleMaps ? (
                  <Button
                    size="sm"
                    className="w-full bg-gradient-to-r from-amber-800 to-amber-700 hover:from-amber-900 hover:to-amber-800 text-white"
                    onClick={() => window.open(cafeData.contact.google_maps_link, "_blank")}
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    className="w-full bg-gradient-to-r from-amber-800 to-amber-700 hover:from-amber-900 hover:to-amber-800 text-white"
                    onClick={() => scrollToSection("location")}
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                )}
                {hasWhatsApp && (
                  <Button
                    size="sm"
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    onClick={() =>
                      window.open(
                        `https://wa.me/${whatsappNumber.replace(/\+/g, "")}`,
                        "_blank"
                      )
                    }
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;




