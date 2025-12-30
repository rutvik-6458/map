"use client";
import React, { useState, useEffect } from "react";
import { Phone, MapPin, MessageCircle, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { cafeData } from "@/data";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Features", href: "#features" },
        { name: "Menu", href: "#services" },
        { name: "Gallery", href: "#gallery" },
        { name: "FAQ", href: "#faq" },
        { name: "Location", href: "#location" },
    ];

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3",
                    isScrolled || isMenuOpen
                        ? "bg-white/90 backdrop-blur-xl shadow-lg py-2"
                        : "bg-transparent py-4"
                )}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-amber-800 rounded-xl flex items-center justify-center shadow-lg shadow-amber-200">
                            <span className="text-white font-bold text-xl">☕</span>
                        </div>
                        <span className={cn(
                            "font-bold text-xl tracking-tight transition-colors",
                            isScrolled || isMenuOpen ? "text-gray-900" : "text-white"
                        )}>
                            {cafeData.brand.business_name}
                        </span>
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-sm font-bold uppercase tracking-widest transition-all hover:text-amber-700",
                                    isScrolled ? "text-gray-600" : "text-white/80"
                                )}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="hidden md:flex items-center gap-4">
                            {phoneNumber && (
                                <a href={`tel:${phoneNumber}`}>
                                    <button className="flex items-center gap-2 bg-amber-800 hover:bg-amber-900 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-amber-800/20">
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
                                    <MapPin size={16} className={isScrolled ? "text-amber-800" : "text-white"} />
                                    <span className="hidden sm:inline">Directions</span>
                                </button>
                            </a>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className={cn(
                                "lg:hidden p-2 rounded-xl transition-colors",
                                isScrolled || isMenuOpen ? "text-gray-900 bg-gray-100" : "text-white bg-white/10"
                            )}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    "fixed inset-0 z-[100] bg-white transition-all duration-300 lg:hidden",
                    isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
                )}
            >
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gray-50/50">
                    <span className="text-xl font-bold text-amber-600">
                        {cafeData.brand.business_name}
                    </span>
                    <div className="flex items-center gap-4">
                        <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="text-amber-600">
                            <MapPin size={22} />
                        </a>
                        {phoneNumber && (
                            <a href={`tel:${phoneNumber}`} className="text-amber-600">
                                <Phone size={22} />
                            </a>
                        )}
                        {whatsappLink && (
                            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-amber-600">
                                <MessageCircle size={22} />
                            </a>
                        )}
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="p-1 border-2 border-amber-600 rounded-lg text-gray-900"
                        >
                            <X size={32} strokeWidth={2.5} />
                        </button>
                    </div>
                </div>

                <div className="flex flex-col h-[calc(100vh-70px)]">
                    {/* Navigation Links */}
                    <div className="px-6 py-10 flex flex-col gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-2xl font-bold text-gray-700 hover:text-amber-600 transition-colors"
                            >
                                {link.name === "Features" ? "Why Us" : link.name}
                            </a>
                        ))}
                    </div>

                    {/* Bottom Action Section - Matching Image Exactly */}
                    <div className="mt-auto p-6 space-y-4 bg-gray-50/50 pb-10">
                        <div className="grid grid-cols-2 gap-4">
                            <a
                                href={googleMapsLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 border-2 border-gray-100 bg-white text-gray-900 py-4 rounded-full font-bold shadow-sm"
                            >
                                <MapPin size={20} />
                                <span>Directions</span>
                            </a>
                            {phoneNumber && (
                                <a
                                    href={`tel:${phoneNumber}`}
                                    className="flex items-center justify-center gap-2 bg-orange-600 text-white py-4 rounded-full font-bold shadow-lg shadow-orange-600/20"
                                >
                                    <Phone size={20} />
                                    <span>Call Now</span>
                                </a>
                            )}
                        </div>
                        {whatsappLink && (
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 bg-green-600 text-white py-5 rounded-full font-bold shadow-lg shadow-green-600/20 w-full"
                            >
                                <MessageCircle size={24} />
                                <span>WhatsApp</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}




