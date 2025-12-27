"use client";
import React, { useState, useEffect } from "react";
import { Phone, MapPin, MessageCircle, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { cafeData } from "@/data";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const phoneNumber = cafeData.contact.phone;
    const googleMapsLink = cafeData.contact.google_maps_link || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cafeData.contact.address)}`;
    const whatsappLink = phoneNumber ? `https://wa.me/${phoneNumber.replace(/\s+/g, "")}` : null;

    const navLinks = [
        { name: "Features", href: "#features" },
        { name: "Menu", href: "#services" },
        { name: "Gallery", href: "#gallery" },
        { name: "FAQ", href: "#faq" },
        { name: "Location", href: "#location" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
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
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-200">
                            <span className="text-white font-bold text-lg sm:text-xl">☕</span>
                        </div>
                        <span className={cn(
                            "font-bold text-lg sm:text-xl tracking-tight transition-colors",
                            isScrolled ? "text-gray-900" : "text-white"
                        )}>
                            <span className="hidden sm:inline">{cafeData.brand.business_name}</span>
                            <span className="sm:hidden">Cafe Dezire</span>
                        </span>
                    </div>

                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-sm font-bold uppercase tracking-widest transition-all hover:text-amber-500",
                                    isScrolled ? "text-gray-600" : "text-white/80"
                                )}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                        {phoneNumber && (
                            <a href={`tel:${phoneNumber}`} className="hidden md:flex">
                                <button className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-4 md:px-5 py-2 md:py-2.5 rounded-full font-bold text-xs md:text-sm transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-amber-600/20">
                                    <Phone size={14} className="md:w-4 md:h-4" />
                                    <span>Call Now</span>
                                </button>
                            </a>
                        )}

                        {whatsappLink && (
                            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hidden md:flex">
                                <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 md:px-5 py-2 md:py-2.5 rounded-full font-bold text-xs md:text-sm transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-green-500/20">
                                    <MessageCircle size={14} className="md:w-4 md:h-4" />
                                    <span>WhatsApp</span>
                                </button>
                            </a>
                        )}

                        <a
                            href={googleMapsLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:flex"
                        >
                            <button className={cn(
                                "flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full font-bold text-xs md:text-sm transition-all shadow-sm transform hover:scale-105 active:scale-95",
                                isScrolled
                                    ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
                                    : "bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border border-white/20"
                            )}>
                                <MapPin size={14} className={cn(isScrolled ? "text-amber-600" : "text-white", "md:w-4 md:h-4")} />
                                <span>Directions</span>
                            </button>
                        </a>

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={cn(
                                "lg:hidden p-2 rounded-lg transition-all",
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
            </nav>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "fixed inset-0 z-40 lg:hidden transition-all duration-300",
                    isMobileMenuOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                )}
            >
                <div
                    className={cn(
                        "absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300",
                        isMobileMenuOpen ? "opacity-100" : "opacity-0"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                />
                <div
                    className={cn(
                        "absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 overflow-y-auto",
                        isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    )}
                >
                    <div className="p-6 pt-20">
                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-200">
                                    <span className="text-white font-bold text-xl">☕</span>
                                </div>
                                <span className="font-bold text-xl tracking-tight text-gray-900">
                                    {cafeData.brand.business_name}
                                </span>
                            </div>
                        </div>

                        <nav className="space-y-2 mb-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={handleLinkClick}
                                    className="block px-4 py-3 text-gray-900 font-bold uppercase tracking-widest text-sm rounded-xl hover:bg-amber-50 hover:text-amber-600 transition-all"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>

                        <div className="space-y-3 pt-6 border-t border-gray-200">
                            {phoneNumber && (
                                <a href={`tel:${phoneNumber}`} onClick={handleLinkClick} className="block">
                                    <button className="w-full flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-full font-bold text-sm transition-all transform active:scale-95 shadow-lg shadow-amber-600/20">
                                        <Phone size={18} />
                                        <span>Call Now</span>
                                    </button>
                                </a>
                            )}

                            {whatsappLink && (
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={handleLinkClick}
                                    className="block"
                                >
                                    <button className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-bold text-sm transition-all transform active:scale-95 shadow-lg shadow-green-500/20">
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
                                className="block"
                            >
                                <button className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-full font-bold text-sm transition-all transform active:scale-95">
                                    <MapPin size={18} className="text-amber-600" />
                                    <span>Get Directions</span>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

