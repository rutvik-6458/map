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
    const googleMapsLink = "https://maps.app.goo.gl/u2gLhVBkJnSiB1pu5";
    const whatsappLink = phoneNumber ? `https://wa.me/${phoneNumber.replace(/\s/g, "")}` : null;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const sections = ["features", "services", "gallery", "faq", "location"];
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

        sections.forEach((sectionId) => {
            const element = document.getElementById(sectionId);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            sections.forEach((sectionId) => {
                const element = document.getElementById(sectionId);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, []);

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
                    <div className="w-10 h-10 bg-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-200">
                        <span className="text-white font-bold text-xl">☕</span>
                    </div>
                    <span className={cn(
                        "font-bold text-xl tracking-tight transition-colors",
                        isScrolled ? "text-gray-900" : "text-white"
                    )}>
                        {cafeData.brand.business_name}
                    </span>
                </div>

                <div className="hidden lg:flex items-center gap-8">
                    {[
                        { name: "Features", href: "#features", id: "features" },
                        { name: "Menu", href: "#services", id: "services" },
                        { name: "Gallery", href: "#gallery", id: "gallery" },
                        { name: "FAQ", href: "#faq", id: "faq" },
                        { name: "Location", href: "#location", id: "location" },
                    ].map((link) => {
                        const isActive = activeSection === link.id;
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-sm font-bold uppercase tracking-widest transition-all hover:text-amber-500 relative pb-1",
                                    isScrolled ? "text-gray-600" : "text-white/80",
                                    isActive && "text-amber-500"
                                )}
                            >
                                {link.name}
                                {isActive && (
                                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 rounded-full" />
                                )}
                            </a>
                        );
                    })}
                </div>

                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    {phoneNumber && (
                        <a href={`tel:${phoneNumber}`} className="hidden sm:flex">
                            <button className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-amber-600/20">
                                <Phone size={14} className="sm:w-4 sm:h-4" />
                                <span className="hidden md:inline">Call Now</span>
                            </button>
                        </a>
                    )}

                    {whatsappLink && (
                        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hidden sm:flex">
                            <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-green-600/20">
                                <MessageCircle size={14} className="sm:w-4 sm:h-4" />
                                <span className="hidden md:inline">WhatsApp</span>
                            </button>
                        </a>
                    )}

                    <a
                        href={googleMapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className={cn(
                            "flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all shadow-sm transform hover:scale-105 active:scale-95",
                            isScrolled
                                ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
                                : "bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border border-white/20"
                        )}>
                            <MapPin size={14} className={cn("sm:w-4 sm:h-4", isScrolled ? "text-amber-600" : "text-white")} />
                            <span className="hidden sm:inline">Directions</span>
                        </button>
                    </a>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={cn(
                            "lg:hidden p-2 rounded-lg transition-colors",
                            isScrolled
                                ? "text-gray-900 hover:bg-gray-100"
                                : "text-white hover:bg-white/10"
                        )}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-xl border-t border-gray-200 transition-all duration-300 overflow-hidden",
                    isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <div className="px-4 py-6 space-y-4">
                    {[
                        { name: "Features", href: "#features", id: "features" },
                        { name: "Menu", href: "#services", id: "services" },
                        { name: "Gallery", href: "#gallery", id: "gallery" },
                        { name: "FAQ", href: "#faq", id: "faq" },
                        { name: "Location", href: "#location", id: "location" },
                    ].map((link) => {
                        const isActive = activeSection === link.id;
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                    "block py-3 px-4 text-sm font-bold uppercase tracking-widest transition-all rounded-lg",
                                    isActive
                                        ? "text-amber-600 bg-amber-50"
                                        : "text-gray-700 hover:text-amber-600 hover:bg-gray-50"
                                )}
                            >
                                {link.name}
                            </a>
                        );
                    })}
                    <div className="pt-4 border-t border-gray-200 space-y-3">
                        {phoneNumber && (
                            <a
                                href={`tel:${phoneNumber}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-4 py-3 rounded-full font-bold text-sm transition-all"
                            >
                                <Phone size={18} />
                                <span>Call Now</span>
                            </a>
                        )}
                        {whatsappLink && (
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-full font-bold text-sm transition-all"
                            >
                                <MessageCircle size={18} />
                                <span>WhatsApp</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}


