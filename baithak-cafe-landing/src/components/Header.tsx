"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Navigation, Menu, X, MessageCircle } from "lucide-react";
import { cafeData } from "@/data";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section
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
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className={`text-xl sm:text-2xl font-bold hover:scale-105 transition-transform ${
              isScrolled
                ? "bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent"
                : "text-orange-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
            }`}
          >
            {cafeData.brand.business_name}
          </button>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-xs lg:text-sm font-medium transition-all duration-200 relative ${
                  activeSection === item.id
                    ? "text-orange-600"
                    : isScrolled
                    ? "text-gray-700 hover:text-orange-600"
                    : "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] hover:text-orange-300"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-600 rounded-full" />
                )}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            <Button
              variant="outline"
              size="sm"
              className="border-orange-600 text-orange-600 hover:bg-orange-50 text-xs lg:text-sm px-3 lg:px-4"
              onClick={() => window.open(`tel:${phone}`, "_self")}
            >
              <Phone className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
              <span className="hidden lg:inline">Call Now</span>
              <span className="lg:hidden">Call</span>
            </Button>
            {hasGoogleMaps ? (
              <Button
                size="sm"
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white text-xs lg:text-sm px-3 lg:px-4"
                onClick={() => window.open(cafeData.contact.google_maps_link, "_blank")}
              >
                <Navigation className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                <span className="hidden lg:inline">Directions</span>
                <span className="lg:hidden">Map</span>
              </Button>
            ) : (
              <Button
                size="sm"
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white text-xs lg:text-sm px-3 lg:px-4"
                onClick={() => scrollToSection("location")}
              >
                <Navigation className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                <span className="hidden lg:inline">Directions</span>
                <span className="lg:hidden">Map</span>
              </Button>
            )}
            {hasWhatsApp && (
              <Button
                size="sm"
                className="bg-green-600 hover:bg-green-700 text-white text-xs lg:text-sm px-3 lg:px-4"
                onClick={() =>
                  window.open(
                    `https://wa.me/${whatsappNumber.replace(/\+/g, "")}`,
                    "_blank"
                  )
                }
              >
                <MessageCircle className="w-3 h-3 lg:w-4 lg:h-4 mr-1 lg:mr-2" />
                <span className="hidden lg:inline">WhatsApp</span>
                <span className="lg:hidden">WA</span>
              </Button>
            )}
          </div>

          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "hover:bg-gray-100"
                : "hover:bg-white/20"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-gray-700" : "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-gray-700" : "text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-[600px] opacity-100 mt-4"
              : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <div className="pb-4 border-t border-gray-200 pt-4 bg-white/95 backdrop-blur-md rounded-lg shadow-lg">
            <nav className="flex flex-col gap-2 px-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-4 py-3 rounded-lg transition-all text-base ${
                    activeSection === item.id
                      ? "bg-orange-100 text-orange-600 font-medium"
                      : "text-gray-700 hover:bg-orange-100"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col gap-2 mt-2 px-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-orange-600 text-orange-600 hover:bg-orange-50 py-6 text-base"
                  onClick={() => window.open(`tel:${phone}`, "_self")}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
                {hasGoogleMaps ? (
                  <Button
                    size="sm"
                    className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-6 text-base"
                    onClick={() => window.open(cafeData.contact.google_maps_link, "_blank")}
                  >
                    <Navigation className="w-5 h-5 mr-2" />
                    Get Directions
                  </Button>
                ) : (
                  <Button
                    size="sm"
                    className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-6 text-base"
                    onClick={() => scrollToSection("location")}
                  >
                    <Navigation className="w-5 h-5 mr-2" />
                    Get Directions
                  </Button>
                )}
                {hasWhatsApp && (
                  <Button
                    size="sm"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-base"
                    onClick={() =>
                      window.open(
                        `https://wa.me/${whatsappNumber.replace(/\+/g, "")}`,
                        "_blank"
                      )
                    }
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp
                  </Button>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;




