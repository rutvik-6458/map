"use client";
import React, { useState, useEffect } from "react";
import { Phone, MapPin, MessageCircle, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { cafeData } from "@/data";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const phoneNumber = cafeData.contact.phone;
    const googleMapsLink = cafeData.contact.google_maps_link || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cafeData.contact.address)}`;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(`#${entry.target.id}`);
                    }
                });
            },
            {
                rootMargin: "-20% 0px -70% 0px",
                threshold: 0,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const whatsappLink = phoneNumber
        ? `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}`
        : null;

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
                            "font-bold text-lg sm:text-xl tracking-tight transition-colors",
                            isScrolled ? "text-gray-900" : "text-white"
                        )}>
                            {cafeData.brand.business_name}
                        </span>
                    </div>

                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-sm font-bold uppercase tracking-widest transition-all hover:text-amber-500 relative pb-1",
                                    isScrolled ? "text-gray-600" : "text-white/80",
                                    activeSection === link.href && "text-amber-500"
                                )}
                            >
                                {link.name}
                                {activeSection === link.href && (
                                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 rounded-full animate-in fade-in slide-in-from-bottom-1 duration-300" />
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

                        {whatsappLink && (
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden md:flex"
                            >
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
                            className="hidden sm:block"
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
                                "lg:hidden p-2 rounded-xl transition-colors",
                                isScrolled ? "text-gray-900" : "text-white"
                            )}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={cn(
                "fixed inset-0 z-40 lg:hidden transition-all duration-300",
                isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}>
                <div
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
                <div className={cn(
                    "absolute top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-2xl transition-transform duration-300 p-8 flex flex-col gap-8",
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                )}>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-200">
                                <span className="text-white font-bold text-xl">☕</span>
                            </div>
                            <span className="font-bold text-xl text-gray-900">
                                {cafeData.brand.business_name}
                            </span>
                        </div>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-gray-900 p-2 hover:bg-gray-100 rounded-xl"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                    "text-lg font-bold uppercase tracking-widest py-3 border-b border-gray-100",
                                    activeSection === link.href ? "text-amber-600" : "text-gray-600"
                                )}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="mt-auto flex flex-col gap-4">
                        {phoneNumber && (
                            <a href={`tel:${phoneNumber}`} className="w-full">
                                <button className="w-full flex items-center justify-center gap-3 bg-amber-600 text-white px-6 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-amber-600/20">
                                    <Phone size={20} />
                                    Call Now
                                </button>
                            </a>
                        )}
                        {whatsappLink && (
                            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full">
                                <button className="w-full flex items-center justify-center gap-3 bg-green-600 text-white px-6 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-green-600/20">
                                    <MessageCircle size={20} />
                                    WhatsApp
                                </button>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}




