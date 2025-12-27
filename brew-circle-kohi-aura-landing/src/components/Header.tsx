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

      // Detect active section
      const sections = ["hero", "menu", "gallery", "faq", "location"];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
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
      setIsMobileMenuOpen(false);
      setActiveSection(sectionId);
    }
  };

  const formatPhoneForTel = (phone: string) => {
    return phone.replace(/\s+/g, "").replace(/^0/, "+91");
  };

  const phone = formatPhoneForTel(cafeData.contact.phone);
  const whatsappNumber = phone;
  const hasWhatsApp = whatsappNumber.length > 0;
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
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className={`text-xl sm:text-2xl font-bold bg-gradient-to-r from-amber-700 to-amber-900 bg-clip-text text-transparent hover:scale-105 transition-transform ${
              !isScrolled ? "drop-shadow-lg" : ""
            }`}
          >
            {cafeData.brand.business_name}
          </button>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-sm font-medium transition-all duration-200 px-2 py-1 ${
                    isScrolled
                      ? "text-gray-700 hover:text-amber-700"
                      : "text-white drop-shadow-md hover:text-amber-200"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300 ${
                        isScrolled
                          ? "bg-amber-700"
                          : "bg-white"
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-2 xl:gap-3">
            <Button
              variant="outline"
              size="sm"
              className={`${
                isScrolled
                  ? "border-amber-700 text-amber-700 hover:bg-amber-50"
                  : "border-gray-300 bg-white text-gray-900 hover:bg-gray-50 shadow-md"
              }`}
              onClick={() => window.open(`tel:${phone}`, "_self")}
            >
              <Phone className="w-4 h-4 mr-2" />
              <span className="hidden xl:inline">Call Now</span>
              <span className="xl:hidden">Call</span>
            </Button>
            {hasGoogleMaps ? (
              <Button
                size="sm"
                className="bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-amber-950 text-white"
                onClick={() => window.open(cafeData.contact.google_maps_link, "_blank")}
              >
                <Navigation className="w-4 h-4 mr-2" />
                <span className="hidden xl:inline">Directions</span>
                <span className="xl:hidden">Map</span>
              </Button>
            ) : (
              <Button
                size="sm"
                className="bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-amber-950 text-white"
                onClick={() => scrollToSection("location")}
              >
                <Navigation className="w-4 h-4 mr-2" />
                <span className="hidden xl:inline">Directions</span>
                <span className="xl:hidden">Map</span>
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
                <span className="hidden xl:inline">WhatsApp</span>
                <span className="xl:hidden">WA</span>
              </Button>
            )}
          </div>

          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "hover:bg-gray-100"
                : "hover:bg-white/20 backdrop-blur-sm"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-gray-700" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-gray-700" : "text-white"}`} />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div
            className={`lg:hidden mt-4 pb-4 border-t pt-4 rounded-lg shadow-lg backdrop-blur-md ${
              isScrolled
                ? "border-gray-200 bg-white/95"
                : "border-white/20 bg-black/40"
            }`}
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left px-4 py-2.5 rounded-lg transition-all relative ${
                      isScrolled
                        ? "text-gray-700 hover:bg-amber-100"
                        : "text-white hover:bg-white/20"
                    } ${isActive ? "font-semibold" : ""}`}
                  >
                    {item.label}
                    {isActive && (
                      <span
                        className={`absolute left-0 top-0 bottom-0 w-1 rounded-r ${
                          isScrolled ? "bg-amber-700" : "bg-white"
                        }`}
                      />
                    )}
                  </button>
                );
              })}
              <div className="flex flex-col gap-2 mt-2 px-4">
                <Button
                  variant="outline"
                  size="sm"
                  className={`w-full ${
                    isScrolled
                      ? "border-amber-700 text-amber-700 hover:bg-amber-50"
                      : "border-gray-300 bg-white text-gray-900 hover:bg-gray-50 shadow-md"
                  }`}
                  onClick={() => window.open(`tel:${phone}`, "_self")}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
                {hasGoogleMaps ? (
                  <Button
                    size="sm"
                    className="w-full bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-amber-950 text-white"
                    onClick={() => window.open(cafeData.contact.google_maps_link, "_blank")}
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    className="w-full bg-gradient-to-r from-amber-700 to-amber-900 hover:from-amber-800 hover:to-amber-950 text-white"
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


