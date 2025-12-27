"use client";
import React, { useState, useEffect } from "react";
import { Phone, MapPin, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { cafeData } from "@/data";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const phoneNumber = cafeData.contact.phone;
    const googleMapsLink = cafeData.contact.google_maps_link || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cafeData.contact.address)}`;

    const navLinks = [
        { name: "Features", href: "#features", id: "features" },
        { name: "Menu", href: "#services", id: "services" },
        { name: "Gallery", href: "#gallery", id: "gallery" },
        { name: "FAQ", href: "#faq", id: "faq" },
        { name: "Location", href: "#location", id: "location" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            const sections = ["hero", "features", "services", "gallery", "faq", "location"];
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
        handleScroll(); // Initial check
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
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

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3",
                isScrolled
                    ? "bg-white/90 backdrop-blur-xl shadow-lg py-2"
                    : "bg-transparent py-4"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="flex items-center gap-2"
                >
                    <div className="w-10 h-10 bg-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-200">
                        <span className="text-white font-bold text-xl">☕</span>
                    </div>
                    <span className={cn(
                        "font-bold text-xl tracking-tight transition-colors",
                        isScrolled ? "text-gray-900" : "text-white"
                    )}>
                        {cafeData.brand.business_name}
                    </span>
                </button>

                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.id)}
                            className={cn(
                                "text-sm font-bold uppercase tracking-widest transition-all relative pb-1",
                                activeSection === link.id
                                    ? isScrolled ? "text-amber-600" : "text-amber-400"
                                    : isScrolled ? "text-gray-600 hover:text-amber-600" : "text-white/80 hover:text-white"
                            )}
                        >
                            {link.name}
                            {activeSection === link.id && (
                                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600 rounded-full" />
                            )}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-2 md:gap-4">
                    {phoneNumber && (
                        <a href={`tel:${phoneNumber}`} className="hidden md:flex">
                            <button className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-amber-600/20">
                                <Phone size={16} />
                                <span>Call Now</span>
                            </button>
                        </a>
                    )}

                    <a
                        href={googleMapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:flex"
                    >
                        <button className={cn(
                            "flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-sm transform hover:scale-105 active:scale-95",
                            isScrolled
                                ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
                                : "bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border border-white/20"
                        )}>
                            <MapPin size={16} className={isScrolled ? "text-amber-600" : "text-white"} />
                            <span className="hidden sm:inline">Directions</span>
                        </button>
                    </a>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={cn(
                            "lg:hidden p-2 rounded-lg transition-colors",
                            isScrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"
                        )}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-xl border-t border-gray-200">
                    <div className="px-4 py-4 space-y-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.id)}
                                className={cn(
                                    "block px-4 py-3 rounded-lg text-sm font-bold uppercase tracking-widest transition-colors",
                                    activeSection === link.id
                                        ? "text-amber-600 bg-amber-50"
                                        : "text-gray-600 hover:text-amber-600 hover:bg-gray-50"
                                )}
                            >
                                {link.name}
                            </a>
                        ))}
                        {phoneNumber && (
                            <a
                                href={`tel:${phoneNumber}`}
                                className="block px-4 py-3 rounded-lg bg-amber-600 text-white text-center font-bold text-sm hover:bg-amber-700 transition-colors"
                            >
                                <Phone size={16} className="inline mr-2" />
                                Call Now
                            </a>
                        )}
                        <a
                            href={googleMapsLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-3 rounded-lg border border-gray-200 text-gray-900 text-center font-bold text-sm hover:bg-gray-50 transition-colors"
                        >
                            <MapPin size={16} className="inline mr-2" />
                            Directions
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}

