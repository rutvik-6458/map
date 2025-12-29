"use client";
import React, { useState, useEffect } from "react";
import { Phone, MapPin, MessageCircle, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { cafeData } from "@/data";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const phoneNumber = cafeData.contact.phone;
    const googleMapsLink = "https://maps.app.goo.gl/DAAaXGh8XbTNKFkNA";

    // Convert phone number to WhatsApp format (remove spaces, leading 0, add country code)
    const whatsappNumber = phoneNumber
        ? `91${phoneNumber.replace(/\s+/g, "").replace(/^0/, "")}`
        : null;
    const whatsappLink = whatsappNumber ? `https://wa.me/${whatsappNumber}` : null;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Detect active section
            const sections = [
                { id: "features", name: "Features" },
                { id: "services", name: "Menu" },
                { id: "gallery", name: "Gallery" },
                { id: "faq", name: "FAQ" },
                { id: "location", name: "Location" },
            ];

            const scrollPosition = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i].id);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i].name);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        // Close mobile menu on scroll
        const handleScroll = () => {
            if (isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isMobileMenuOpen]);

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
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-amber-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-amber-200">
                        <span className="text-white font-bold text-base sm:text-lg md:text-xl">🍵</span>
                    </div>
                    <span className={cn(
                        "font-bold text-base sm:text-lg md:text-xl tracking-tight transition-colors",
                        isScrolled ? "text-gray-900" : "text-white"
                    )}>
                        {cafeData.brand.business_name}
                    </span>
                </div>

                <div className="hidden lg:flex items-center gap-8">
                    {[
                        { name: "Features", href: "#features" },
                        { name: "Menu", href: "#services" },
                        { name: "Gallery", href: "#gallery" },
                        { name: "FAQ", href: "#faq" },
                        { name: "Location", href: "#location" },
                    ].map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={cn(
                                "text-sm font-bold uppercase tracking-widest transition-all hover:text-amber-500 relative pb-1",
                                isScrolled ? "text-gray-600" : "text-white/80",
                                activeSection === link.name && "text-amber-500"
                            )}
                        >
                            {link.name}
                            {activeSection === link.name && (
                                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500"></span>
                            )}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
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

                <div className="flex items-center gap-2 md:gap-4">
                    {phoneNumber && (
                        <a href={`tel:${phoneNumber}`} className="hidden md:flex">
                            <button className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-amber-600/20">
                                <Phone size={16} />
                                <span>Call Now</span>
                            </button>
                        </a>
                    )}

                    {whatsappLink && (
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hidden md:flex">
                            <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-green-600/20">
                                <MessageCircle size={16} />
                                <span>WhatsApp</span>
                            </button>
                        </a>
                    )}

                    <a
                        href={googleMapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
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
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-lg border-t border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
                        {[
                            { name: "Features", href: "#features" },
                            { name: "Menu", href: "#services" },
                            { name: "Gallery", href: "#gallery" },
                            { name: "FAQ", href: "#faq" },
                            { name: "Location", href: "#location" },
                        ].map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                    "block px-4 py-3 text-sm font-bold uppercase tracking-widest transition-all rounded-lg",
                                    activeSection === link.name
                                        ? "bg-amber-50 text-amber-600"
                                        : "text-gray-600 hover:bg-gray-50 hover:text-amber-500"
                                )}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="pt-4 border-t border-gray-200 space-y-2">
                            {phoneNumber && (
                                <a
                                    href={`tel:${phoneNumber}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-4 py-3 rounded-lg font-bold text-sm transition-all"
                                >
                                    <Phone size={16} />
                                    <span>Call Now</span>
                                </a>
                            )}
                            {whatsappLink && (
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-bold text-sm transition-all"
                                >
                                    <MessageCircle size={16} />
                                    <span>WhatsApp</span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}


