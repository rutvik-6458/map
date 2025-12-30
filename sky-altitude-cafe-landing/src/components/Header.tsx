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

  const phoneNumber = "084693 49116";
  const whatsappNumber = phoneNumber.replace(/\s/g, "");
  const whatsappLink = `https://wa.me/91${whatsappNumber}`;
  const telLink = `tel:+91${whatsappNumber}`;
  const googleMapsLink = "https://maps.app.goo.gl/omzCGqxzbuG3J2Dm7";

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
                ? "bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent"
                : "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            }`}
          >
            Sky Altitude
          </button>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-200 relative ${
                  isScrolled
                    ? activeSection === item.id
                      ? "text-orange-600"
                      : "text-gray-700 hover:text-orange-600"
                    : activeSection === item.id
                    ? "text-orange-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                    : "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] hover:text-orange-400"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${
                    isScrolled ? "bg-orange-600" : "bg-orange-400"
                  }`} />
                )}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2 xl:gap-3">
            <Button
              variant="outline"
              size="sm"
              className="border-orange-600 text-orange-600 hover:bg-orange-50 text-xs xl:text-sm px-2 xl:px-3"
              onClick={() => window.open(telLink, "_self")}
            >
              <Phone className="w-3 h-3 xl:w-4 xl:h-4 mr-1 xl:mr-2" />
              <span className="hidden xl:inline">Call Now</span>
              <span className="xl:hidden">Call</span>
            </Button>
            {whatsappNumber && (
              <Button
                variant="outline"
                size="sm"
                className="border-green-600 text-green-600 hover:bg-green-50 text-xs xl:text-sm px-2 xl:px-3"
                onClick={() => window.open(whatsappLink, "_blank")}
              >
                <MessageCircle className="w-3 h-3 xl:w-4 xl:h-4 mr-1 xl:mr-2" />
                <span className="hidden xl:inline">WhatsApp</span>
                <span className="xl:hidden">WA</span>
              </Button>
            )}
            <Button
              size="sm"
              className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white text-xs xl:text-sm px-2 xl:px-3"
              onClick={() => window.open(googleMapsLink, "_blank")}
            >
              <Navigation className="w-3 h-3 xl:w-4 xl:h-4 mr-1 xl:mr-2" />
              <span className="hidden xl:inline">Directions</span>
              <span className="xl:hidden">Map</span>
            </Button>
          </div>

          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "hover:bg-gray-100"
                : "hover:bg-white/20"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-5 h-5 sm:w-6 sm:h-6 ${
                isScrolled
                  ? "text-gray-700"
                  : "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
              }`} />
            ) : (
              <Menu className={`w-5 h-5 sm:w-6 sm:h-6 ${
                isScrolled
                  ? "text-gray-700"
                  : "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
              }`} />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4 bg-white/95 backdrop-blur-md rounded-lg shadow-lg">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-4 py-2 rounded-lg transition-all ${
                    activeSection === item.id
                      ? "bg-orange-100 text-orange-600 font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col gap-2 mt-2 px-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-orange-600 text-orange-600 hover:bg-orange-50"
                  onClick={() => window.open(telLink, "_self")}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
                {whatsappNumber && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-green-600 text-green-600 hover:bg-green-50"
                    onClick={() => window.open(whatsappLink, "_blank")}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                )}
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white"
                  onClick={() => window.open(googleMapsLink, "_blank")}
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

