"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Navigation, Menu, X, MessageCircle } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["hero", "social-proof", "features", "menu", "gallery", "faq", "location"];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
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
    }
  };

  const phoneNumber = "09081111371";
  const whatsappNumber = phoneNumber.replace(/\s/g, "");
  const whatsappLink = `https://wa.me/91${whatsappNumber}`;
  const telLink = `tel:+91${whatsappNumber}`;
  const googleMapsLink = "https://maps.app.goo.gl/WVdAwdK6GeT9VwR66";

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
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          <button
            onClick={() => scrollToSection("hero")}
            className={`text-xl sm:text-2xl font-bold transition-all duration-200 hover:scale-105 ${
              isScrolled
                ? "bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
                : "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            }`}
          >
            BB Social
          </button>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-200 relative ${
                  isScrolled
                    ? activeSection === item.id
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                    : activeSection === item.id
                    ? "text-blue-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                    : "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] hover:text-blue-300"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${
                      isScrolled ? "bg-blue-600" : "bg-blue-400"
                    }`}
                  />
                )}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2 xl:gap-3 flex-shrink-0">
            <Button
              variant="outline"
              size="sm"
              className={`${
                isScrolled
                  ? "border-blue-600 text-blue-600 hover:bg-blue-50 bg-white"
                  : "border-white/90 text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm"
              }`}
              onClick={() => window.open(telLink, "_self")}
            >
              <Phone className="w-3.5 h-3.5 xl:w-4 xl:h-4 mr-1.5 xl:mr-2" />
              <span className="hidden xl:inline">Call Now</span>
              <span className="xl:hidden">Call</span>
            </Button>
            {whatsappNumber && (
              <Button
                variant="outline"
                size="sm"
                className={`${
                  isScrolled
                    ? "border-green-600 text-green-600 hover:bg-green-50 bg-white"
                    : "border-green-400/90 text-green-100 hover:bg-green-500/20 bg-green-500/10 backdrop-blur-sm"
                }`}
                onClick={() => window.open(whatsappLink, "_blank")}
              >
                <MessageCircle className="w-3.5 h-3.5 xl:w-4 xl:h-4 mr-1.5 xl:mr-2" />
                <span className="hidden xl:inline">WhatsApp</span>
                <span className="xl:hidden">WA</span>
              </Button>
            )}
            {googleMapsLink ? (
              <Button
                size="sm"
                className={`${
                  isScrolled
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
                    : "bg-gradient-to-r from-blue-500/90 to-cyan-500/90 hover:from-blue-600 hover:to-cyan-600 text-white backdrop-blur-sm"
                }`}
                onClick={() => window.open(googleMapsLink, "_blank")}
              >
                <Navigation className="w-3.5 h-3.5 xl:w-4 xl:h-4 mr-1.5 xl:mr-2" />
                <span className="hidden xl:inline">Directions</span>
                <span className="xl:hidden">Map</span>
              </Button>
            ) : (
              <Button
                size="sm"
                className={`${
                  isScrolled
                    ? "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
                    : "bg-gradient-to-r from-blue-500/90 to-cyan-500/90 hover:from-blue-600 hover:to-cyan-600 text-white backdrop-blur-sm"
                }`}
                onClick={() => scrollToSection("location")}
              >
                <Navigation className="w-3.5 h-3.5 xl:w-4 xl:h-4 mr-1.5 xl:mr-2" />
                <span className="hidden xl:inline">Directions</span>
                <span className="xl:hidden">Map</span>
              </Button>
            )}
          </div>

          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "hover:bg-gray-100 text-gray-700"
                : "hover:bg-white/20 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div
            className={`lg:hidden mt-4 pb-4 rounded-lg shadow-lg ${
              isScrolled
                ? "border-t border-gray-200 pt-4 bg-white/95 backdrop-blur-md"
                : "border-t border-white/20 pt-4 bg-black/40 backdrop-blur-md"
            }`}
          >
            <nav className="flex flex-col gap-2 sm:gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-4 py-2.5 rounded-lg transition-all ${
                    isScrolled
                      ? activeSection === item.id
                        ? "bg-blue-100 text-blue-600 font-medium"
                        : "text-gray-700 hover:bg-gray-100"
                      : activeSection === item.id
                      ? "bg-blue-500/30 text-blue-200 font-medium"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col gap-2 mt-2 px-4">
                <Button
                  variant="outline"
                  size="sm"
                  className={`w-full ${
                    isScrolled
                      ? "border-blue-600 text-blue-600 hover:bg-blue-50 bg-white"
                      : "border-white/90 text-white hover:bg-white/20 bg-white/10"
                  }`}
                  onClick={() => {
                    window.open(telLink, "_self");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
                {whatsappNumber && (
                  <Button
                    variant="outline"
                    size="sm"
                    className={`w-full ${
                      isScrolled
                        ? "border-green-600 text-green-600 hover:bg-green-50 bg-white"
                        : "border-green-400/90 text-green-100 hover:bg-green-500/20 bg-green-500/10"
                    }`}
                    onClick={() => {
                      window.open(whatsappLink, "_blank");
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                )}
                {googleMapsLink ? (
                  <Button
                    size="sm"
                    className={`w-full ${
                      isScrolled
                        ? "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
                        : "bg-gradient-to-r from-blue-500/90 to-cyan-500/90 hover:from-blue-600 hover:to-cyan-600 text-white"
                    }`}
                    onClick={() => {
                      window.open(googleMapsLink, "_blank");
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    className={`w-full ${
                      isScrolled
                        ? "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white"
                        : "bg-gradient-to-r from-blue-500/90 to-cyan-500/90 hover:from-blue-600 hover:to-cyan-600 text-white"
                    }`}
                    onClick={() => {
                      scrollToSection("location");
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
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




