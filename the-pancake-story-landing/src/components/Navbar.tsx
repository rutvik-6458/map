"use client";
import React, { useState, useEffect } from "react";
import { Phone, MapPin, MessageCircle, Menu, X, Navigation } from "lucide-react";
import { cn } from "@/lib/utils";
import { cafeData } from "@/data";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const phoneNumber = cafeData.contact.phone;
    const googleMapsLink = cafeData.contact.google_maps_link || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cafeData.contact.address)}`;

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
                    isScrolled || isMobileMenuOpen
                        ? "bg-white/95 backdrop-blur-xl shadow-lg py-2"
                        : "bg-transparent py-4"
                )}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-200">
                            <span className="text-white font-bold text-xl">🥞</span>
                        </div>
                        <span className={cn(
                            "font-bold text-xl tracking-tight transition-colors",
                            isScrolled || isMobileMenuOpen ? "text-gray-900" : "text-white"
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
                                    "text-sm font-bold uppercase tracking-widest transition-all hover:text-orange-600",
                                    isScrolled ? "text-gray-600" : "text-white/80"
                                )}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 md:gap-4">
                        {/* Desktop Actions */}
                        <div className="hidden md:flex items-center gap-4">
                            {phoneNumber && (
                                <a href={`tel:${phoneNumber}`}>
                                    <button className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-orange-600/20">
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
                        </div>

                        {/* Directions - Visible on most screens */}
                        <a
                            href={googleMapsLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden sm:flex"
                        >
                            <button className={cn(
                                "flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-sm transform hover:scale-105 active:scale-95",
                                isScrolled || isMobileMenuOpen
                                    ? "bg-gray-100 text-gray-900 hover:bg-gray-200 underline decoration-orange-500/30"
                                    : "bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border border-white/20"
                            )}>
                                <MapPin size={16} className={isScrolled || isMobileMenuOpen ? "text-orange-600" : "text-white"} />
                                <span>Directions</span>
                            </button>
                        </a>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={cn(
                                "lg:hidden p-2 rounded-xl transition-colors",
                                isScrolled || isMobileMenuOpen ? "bg-gray-100 text-gray-900" : "bg-white/10 text-white"
                            )}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={cn(
                "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-all duration-300 lg:hidden",
                isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            )}>
                <div className={cn(
                    "absolute top-0 left-0 right-0 bg-white rounded-b-3xl shadow-2xl transition-transform duration-300 max-w-md mx-auto",
                    isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
                )}>
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-100">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-xl">🥞</span>
                            </div>
                            <span className="font-bold text-lg text-gray-900">{cafeData.brand.business_name}</span>
                        </div>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-2 rounded-xl bg-gray-100 text-gray-900 hover:bg-gray-200 transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div className="px-6 py-6">
                        <nav className="space-y-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block py-3 text-gray-700 hover:text-orange-600 font-semibold text-base transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>

                        {/* Action Buttons */}
                        <div className="mt-8 space-y-3">
                            {phoneNumber && (
                                <a href={`tel:${phoneNumber}`} className="block">
                                    <button className="w-full flex items-center justify-center gap-2 bg-orange-600 text-white py-3.5 rounded-xl font-bold text-base shadow-lg shadow-orange-200 hover:bg-orange-700 transition-colors">
                                        <Phone size={18} />
                                        Call Now
                                    </button>
                                </a>
                            )}
                            <a
                                href={googleMapsLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                <button className="w-full flex items-center justify-center gap-2 border-2 border-orange-600 text-orange-600 py-3.5 rounded-xl font-bold text-base hover:bg-orange-50 transition-colors">
                                    <Navigation size={18} />
                                    Get Directions
                                </button>
                            </a>
                            {whatsappLink && (
                                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block">
                                    <button className="w-full flex items-center justify-center gap-2 bg-green-600 text-white py-3.5 rounded-xl font-bold text-base shadow-lg shadow-green-200 hover:bg-green-700 transition-colors">
                                        <MessageCircle size={18} />
                                        WhatsApp
                                    </button>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}




