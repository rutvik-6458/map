"use client";
import React, { useState, useEffect } from "react";
import { Phone, MapPin, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { cafeData } from "@/data";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
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
                    <div className="w-10 h-10 bg-amber-800 rounded-xl flex items-center justify-center shadow-lg shadow-amber-200">
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
                        { name: "Features", href: "#features" },
                        { name: "Menu", href: "#services" },
                        { name: "Gallery", href: "#gallery" },
                        { name: "FAQ", href: "#faq" },
                        { name: "Location", href: "#location" },
                    ].map((link) => (
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

                <div className="flex items-center gap-2 md:gap-4">
                    {phoneNumber && (
                        <a href={`tel:${phoneNumber}`} className="hidden md:flex">
                            <button className="flex items-center gap-2 bg-amber-800 hover:bg-amber-900 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-amber-800/20">
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
                            <MapPin size={16} className={isScrolled ? "text-amber-800" : "text-white"} />
                            <span className="hidden sm:inline">Directions</span>
                        </button>
                    </a>
                </div>
            </div>
        </nav>
    );
}



