"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Navigation, Menu, X, MessageCircle } from "lucide-react";
import { cafeData } from "@/data";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const navItems = ["hero", "menu", "gallery", "faq", "location"];
    
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

    navItems.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      navItems.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
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
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-800 to-amber-600 bg-clip-text text-transparent hover:scale-105 transition-transform truncate max-w-[60%] sm:max-w-none"
          >
            {cafeData.brand.business_name}
          </button>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-all duration-200 relative ${
                    isScrolled
                      ? "text-gray-700 hover:text-amber-700"
                      : "text-white hover:text-amber-300 drop-shadow-lg"
                  } ${
                    isActive
                      ? isScrolled
                        ? "text-amber-700"
                        : "text-amber-300"
                      : ""
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                        isScrolled ? "bg-amber-700" : "bg-amber-300"
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-2 xl:gap-3">
            {hasPhone && (
              <Button
                variant="outline"
                size="sm"
                className="border-amber-700 text-amber-700 hover:bg-amber-50 text-xs xl:text-sm"
                onClick={() => window.open(`tel:${phone}`, "_self")}
              >
                <Phone className="w-3 h-3 xl:w-4 xl:h-4 mr-1 xl:mr-2" />
                <span className="hidden xl:inline">Call Now</span>
                <span className="xl:hidden">Call</span>
              </Button>
            )}
            {hasGoogleMaps ? (
              <Button
                size="sm"
                className="bg-gradient-to-r from-amber-800 to-amber-700 hover:from-amber-900 hover:to-amber-800 text-white text-xs xl:text-sm"
                onClick={() => window.open(cafeData.contact.google_maps_link, "_blank")}
              >
                <Navigation className="w-3 h-3 xl:w-4 xl:h-4 mr-1 xl:mr-2" />
                <span className="hidden xl:inline">Directions</span>
                <span className="xl:hidden">Dir</span>
              </Button>
            ) : (
              <Button
                size="sm"
                className="bg-gradient-to-r from-amber-800 to-amber-700 hover:from-amber-900 hover:to-amber-800 text-white text-xs xl:text-sm"
                onClick={() => scrollToSection("location")}
              >
                <Navigation className="w-3 h-3 xl:w-4 xl:h-4 mr-1 xl:mr-2" />
                <span className="hidden xl:inline">Directions</span>
                <span className="xl:hidden">Dir</span>
              </Button>
            )}
            {hasWhatsApp && (
              <Button
                size="sm"
                className="bg-green-600 hover:bg-green-700 text-white text-xs xl:text-sm"
                onClick={() =>
                  window.open(
                    `https://wa.me/${whatsappNumber.replace(/\+/g, "")}`,
                    "_blank"
                  )
                }
              >
                <MessageCircle className="w-3 h-3 xl:w-4 xl:h-4 mr-1 xl:mr-2" />
                <span className="hidden xl:inline">WhatsApp</span>
                <span className="xl:hidden">WA</span>
              </Button>
            )}
          </div>

          <button
            className={`md:hidden p-2 rounded-lg transition-colors z-50 ${
              isScrolled
                ? "hover:bg-gray-100"
                : "hover:bg-white/20"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 transition-colors ${
                isScrolled ? "text-gray-700" : "text-white drop-shadow-lg"
              }`} />
            ) : (
              <Menu className={`w-6 h-6 transition-colors ${
                isScrolled ? "text-gray-700" : "text-white drop-shadow-lg"
              }`} />
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
                    className={`text-left px-4 py-2 rounded-lg transition-all ${
                      isActive
                        ? "text-amber-700 bg-amber-100 font-semibold border-l-4 border-amber-700"
                        : "text-gray-700 hover:bg-amber-100"
                    }`}
                  >
                    {item.label}
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




