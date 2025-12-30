"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Navigation, Menu, X, MessageCircle } from "lucide-react";
import { cafeData } from "@/data";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "menu", label: "Menu" },
    { id: "gallery", label: "Gallery" },
    { id: "faq", label: "FAQ" },
    { id: "location", label: "Location" },
  ];

  /* ---------------- Scroll + Section Observer ---------------- */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

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

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  /* ---------------- Scroll to section ---------------- */
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

  /* ---------------- Contact helpers ---------------- */
  const formatPhoneForTel = (phone: string) =>
    phone ? phone.replace(/\s+/g, "").replace(/^0/, "+91") : "";

  const phone = formatPhoneForTel(cafeData.contact.phone);
  const whatsappNumber = phone.replace(/\+/g, "");

  const hasPhone = phone.length > 0;
  const hasWhatsApp = hasPhone;
  const hasGoogleMaps = cafeData.contact.google_maps_link.length > 0;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-gradient-to-b from-black/50 via-black/20 to-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${
              isScrolled
                ? "from-amber-800 to-amber-600"
                : "from-amber-400 to-orange-300 drop-shadow-lg"
            } bg-clip-text text-transparent transition-transform hover:scale-105`}
          >
            {cafeData.brand.business_name}
          </button>

          {/* ---------------- Desktop Nav ---------------- */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-sm font-semibold py-1 transition-all ${
                  isScrolled
                    ? "text-gray-700"
                    : "text-white drop-shadow-lg"
                } hover:text-amber-500`}
              >
                {item.label}

                {/* Active underline (desktop) */}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 transition-transform origin-left ${
                    activeSection === item.id
                      ? "scale-x-100"
                      : "scale-x-0"
                  } ${isScrolled ? "bg-amber-700" : "bg-amber-400"}`}
                />
              </button>
            ))}
          </nav>

          {/* ---------------- Desktop Actions ---------------- */}
          <div className="hidden md:flex items-center gap-3">
            {hasPhone && (
              <Button
                variant="outline"
                size="sm"
                className={`${
                  isScrolled
                    ? "border-amber-700 text-amber-700 hover:bg-amber-50"
                    : "border-white text-white bg-transparent hover:bg-white/10 backdrop-blur-sm"
                }`}
                onClick={() => window.open(`tel:${phone}`, "_self")}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            )}

            <Button
              size="sm"
              className="bg-gradient-to-r from-amber-800 to-amber-700 hover:from-amber-900 hover:to-amber-800 text-white"
              onClick={() =>
                hasGoogleMaps
                  ? window.open(cafeData.contact.google_maps_link, "_blank")
                  : scrollToSection("location")
              }
            >
              <Navigation className="w-4 h-4 mr-2" />
              Directions
            </Button>

            {hasWhatsApp && (
              <Button
                size="sm"
                className="bg-green-600 hover:bg-green-700 text-white"
                onClick={() =>
                  window.open(`https://wa.me/${whatsappNumber}`, "_blank")
                }
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            )}
          </div>

          {/* ---------------- Mobile Toggle ---------------- */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "hover:bg-gray-100" : "hover:bg-white/10"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X
                className={`w-6 h-6 ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${
                  isScrolled ? "text-gray-700" : "text-white"
                }`}
              />
            )}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 pb-4 border-t bg-white/95 backdrop-blur-md rounded-lg shadow-lg">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-left px-4 py-2 rounded-lg transition-all ${
                    activeSection === item.id
                      ? "text-amber-700 font-semibold bg-amber-50"
                      : "text-gray-700 hover:bg-amber-100"
                  }`}
                >
                  {item.label}

                  {/* Active underline (mobile) */}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-0.5 bg-amber-700 transition-transform origin-left ${
                      activeSection === item.id
                        ? "scale-x-100"
                        : "scale-x-0"
                    }`}
                  />
                </button>
              ))}

              {/* Mobile Actions */}
              <div className="flex flex-col gap-2 mt-3 px-4">
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

                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-amber-800 to-amber-700 hover:from-amber-900 hover:to-amber-800 text-white"
                  onClick={() =>
                    hasGoogleMaps
                      ? window.open(
                          cafeData.contact.google_maps_link,
                          "_blank"
                        )
                      : scrollToSection("location")
                  }
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>

                {hasWhatsApp && (
                  <Button
                    size="sm"
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    onClick={() =>
                      window.open(`https://wa.me/${whatsappNumber}`, "_blank")
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
