"use client";

import { useState, useEffect } from "react";
import { businessData } from "./data";
import { Phone, MapPin, Menu as MenuIcon, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            const headerOffset = 80;
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setMobileMenuOpen(false);
        }
    };

    const navLinks = [
        { name: "Why Us", id: "features" },
        { name: "Menu", id: "menu" },
        { name: "Reviews", id: "reviews" },
        { name: "FAQ", id: "faq" },
        { name: "Location", id: "location" },
    ];

    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
            isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-3" : "bg-transparent py-5"
        )}>
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div
                    className={cn(
                        "text-2xl font-black tracking-tighter cursor-pointer transition-colors",
                        isScrolled ? "text-orange-600" : "text-white"
                    )}
                    onClick={() => scrollTo('hero')}
                >
                    {businessData.brand.business_name.toUpperCase()}
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollTo(link.id)}
                            className={cn(
                                "text-sm font-bold uppercase tracking-widest hover:text-orange-500 transition-colors",
                                isScrolled ? "text-gray-700" : "text-white/90"
                            )}
                        >
                            {link.name}
                        </button>
                    ))}
                </nav>

                {/* CTA Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <a
                        href={businessData.contact.google_maps_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                            "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold transition-all border-2",
                            isScrolled
                                ? "border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                                : "border-white text-white hover:bg-white hover:text-orange-600"
                        )}
                    >
                        <MapPin size={18} /> DIRECTIONS
                    </a>
                    <a
                        href={`tel:${businessData.contact.phone.replace(/\s+/g, '')}`}
                        className="flex items-center gap-2 px-6 py-2 rounded-full text-sm font-bold bg-orange-600 text-white hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-500/20"
                    >
                        <Phone size={18} /> CALL NOW
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={cn(
                        "md:hidden p-2 rounded-lg",
                        isScrolled ? "text-gray-900" : "text-white"
                    )}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-6 flex flex-col gap-6 shadow-2xl md:hidden animate-in slide-in-from-top duration-300">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollTo(link.id)}
                            className="text-left text-lg font-bold text-gray-800 hover:text-orange-600 transition-colors"
                        >
                            {link.name}
                        </button>
                    ))}
                    <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
                        <a
                            href={businessData.contact.google_maps_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border-2 border-orange-600 text-orange-600 font-bold"
                        >
                            <MapPin size={20} /> DIRECTIONS
                        </a>
                        <a
                            href={`tel:${businessData.contact.phone.replace(/\s+/g, '')}`}
                            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-orange-600 text-white font-bold"
                        >
                            <Phone size={20} /> CALL NOW
                        </a>
                        {businessData.contact.phone && (
                            <a
                                href={`https://wa.me/${businessData.contact.phone.replace(/\D/g, '')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-green-600 text-white font-bold"
                            >
                                <MessageCircle size={20} /> WHATSAPP
                            </a>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
}
