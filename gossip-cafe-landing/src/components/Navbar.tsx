"use client";
import React, { useState, useEffect } from "react";
import { Phone, MapPin, MessageCircle, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { cafeData } from "@/data";

const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Menu", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "FAQ", href: "#faq" },
    { name: "Location", href: "#location" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const phoneNumber = cafeData.contact.phone;
    const googleMapsLink = cafeData.contact.google_maps_link || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cafeData.contact.address)}`;

    // Convert phone number to WhatsApp format (remove spaces, leading 0, add country code)
    const whatsappNumber = phoneNumber
        ? `91${phoneNumber.replace(/\s+/g, "").replace(/^0/, "")}`
        : null;
    const whatsappLink = whatsappNumber ? `https://wa.me/${whatsappNumber}` : null;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Detect active section
            const scrollPosition = window.scrollY + 150; // Offset for navbar height

            for (const link of navLinks) {
                const id = link.href.substring(1);
                const element = document.getElementById(id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const elementTop = window.scrollY + rect.top;
                    const elementBottom = elementTop + rect.height;

                    if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
                        setActiveSection(id);
                        return;
                    }
                }
            }

            // If at top of page, clear active section
            if (window.scrollY < 100) {
                setActiveSection("");
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on scroll (separate effect to avoid conflicts)
    useEffect(() => {
        if (!isMobileMenuOpen) return;

        const handleScrollClose = () => {
            setIsMobileMenuOpen(false);
        };

        window.addEventListener("scroll", handleScrollClose, { once: true });
        return () => window.removeEventListener("scroll", handleScrollClose);
    }, [isMobileMenuOpen]);

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-4 py-2 sm:py-3",
                    isScrolled
                        ? "bg-white/90 backdrop-blur-xl shadow-lg"
                        : "bg-transparent py-3 sm:py-4"
                )}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg shadow-purple-200">
                            <span className="text-white font-bold text-lg sm:text-xl">☕</span>
                        </div>
                        <span className={cn(
                            "font-bold text-base sm:text-lg lg:text-xl tracking-tight transition-colors",
                            isScrolled ? "text-gray-900" : "text-white"
                        )}>
                            {cafeData.brand.business_name}
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => {
                            const sectionId = link.href.substring(1);
                            const isActive = activeSection === sectionId;
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "text-sm font-bold uppercase tracking-widest transition-all hover:text-purple-500 relative pb-1",
                                        isScrolled ? "text-gray-600" : "text-white/80",
                                        isActive && "text-purple-500"
                                    )}
                                >
                                    {link.name}
                                    {isActive && (
                                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500 rounded-full"></span>
                                    )}
                                </a>
                            );
                        })}
                    </div>

                    {/* Desktop Action Buttons */}
                    <div className="hidden lg:flex items-center gap-4">
                        {phoneNumber && (
                            <a href={`tel:${phoneNumber}`}>
                                <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-purple-600/20">
                                    <Phone size={16} />
                                    <span>Call Now</span>
                                </button>
                            </a>
                        )}

                        {whatsappLink && (
                            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
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
                                <MapPin size={16} className={isScrolled ? "text-purple-600" : "text-white"} />
                                <span>Directions</span>
                            </button>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsMobileMenuOpen(!isMobileMenuOpen);
                        }}
                        className={cn(
                            "lg:hidden p-2 rounded-lg transition-colors z-50 relative",
                            isScrolled
                                ? "text-gray-900 hover:bg-gray-100"
                                : "text-white hover:bg-white/10"
                        )}
                        aria-label="Toggle menu"
                        type="button"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 z-40 lg:hidden bg-black/50 backdrop-blur-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                ></div>
            )}

            {/* Mobile Menu */}
            <div
                className={cn(
                    "fixed left-0 right-0 z-50 lg:hidden transition-all duration-300 ease-in-out",
                    isMobileMenuOpen
                        ? "translate-y-0 opacity-100 visible"
                        : "-translate-y-full opacity-0 invisible pointer-events-none"
                )}
                style={{ top: isScrolled ? "60px" : "70px" }}
            >
                <div
                    className={cn(
                        "bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-200",
                        !isScrolled && "bg-black/95"
                    )}
                >
                    <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
                        {navLinks.map((link) => {
                            const sectionId = link.href.substring(1);
                            const isActive = activeSection === sectionId;
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={handleLinkClick}
                                    className={cn(
                                        "block text-base font-bold uppercase tracking-widest transition-all py-3 px-4 rounded-lg relative",
                                        isScrolled
                                            ? "text-gray-700 hover:bg-gray-100"
                                            : "text-white hover:bg-white/10",
                                        isActive && "text-purple-500 bg-purple-50"
                                    )}
                                >
                                    {link.name}
                                    {isActive && (
                                        <span className="absolute left-0 bottom-0 top-0 w-1 bg-purple-500 rounded-r-full"></span>
                                    )}
                                </a>
                            );
                        })}
                        <div className="pt-4 border-t border-gray-200 space-y-3">
                            {phoneNumber && (
                                <a href={`tel:${phoneNumber}`} onClick={handleLinkClick}>
                                    <button className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-full font-bold text-sm transition-all shadow-lg shadow-purple-600/20">
                                        <Phone size={18} />
                                        <span>Call Now</span>
                                    </button>
                                </a>
                            )}
                            {whatsappLink && (
                                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
                                    <button className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full font-bold text-sm transition-all shadow-lg shadow-green-600/20">
                                        <MessageCircle size={18} />
                                        <span>WhatsApp</span>
                                    </button>
                                </a>
                            )}
                            <a
                                href={googleMapsLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={handleLinkClick}
                            >
                                <button className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 px-5 py-3 rounded-full font-bold text-sm transition-all">
                                    <MapPin size={18} />
                                    <span>Directions</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
