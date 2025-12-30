"use client";
import React, { useState, useEffect } from "react";
import { Phone, MapPin, MessageCircle, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const SECTIONS = [
    { name: "Features", href: "#features" },
    { name: "Menu", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "FAQ", href: "#faq" },
    { name: "Location", href: "#location" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const phoneNumber = "099041 81348";
    const whatsappNumber = phoneNumber.replace(/\s/g, "");
    const googleMapsLink = "https://maps.app.goo.gl/KYoK2uASbmt6hhzd9";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
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

        SECTIONS.forEach((section) => {
            const element = document.querySelector(section.href);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            SECTIONS.forEach((section) => {
                const element = document.querySelector(section.href);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, []);

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 py-3",
                    isScrolled
                        ? "bg-white/90 backdrop-blur-xl shadow-lg py-2"
                        : "bg-transparent py-4"
                )}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-pink-600 rounded-xl flex items-center justify-center shadow-lg shadow-pink-200">
                            <span className="text-white font-bold text-lg sm:text-xl">🧋</span>
                        </div>
                        <span className={cn(
                            "font-bold text-lg sm:text-xl tracking-tight transition-colors",
                            isScrolled ? "text-gray-900" : "text-white"
                        )}>
                            Teaspresso
                        </span>
                    </div>

                    <div className="hidden lg:flex items-center gap-8">
                        {SECTIONS.map((link) => {
                            const sectionId = link.href.replace("#", "");
                            const isActive = activeSection === sectionId;
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "text-sm font-bold uppercase tracking-widest transition-all hover:text-pink-500 relative pb-1",
                                        isScrolled ? "text-gray-600" : "text-white/80",
                                        isActive && "text-pink-500"
                                    )}
                                >
                                    {link.name}
                                    {isActive && (
                                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-500 rounded-full" />
                                    )}
                                </a>
                            );
                        })}
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                        {phoneNumber && (
                            <a href={`tel:${phoneNumber}`} className="hidden md:flex">
                                <button className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-pink-600/20">
                                    <Phone size={16} />
                                    <span>Call Now</span>
                                </button>
                            </a>
                        )}

                        {googleMapsLink && (
                            <a
                                href={googleMapsLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden sm:flex"
                            >
                                <button className={cn(
                                    "flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all shadow-sm transform hover:scale-105 active:scale-95",
                                    isScrolled
                                        ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
                                        : "bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border border-white/20"
                                )}>
                                    <MapPin size={16} className={isScrolled ? "text-pink-600" : "text-white"} />
                                    <span className="hidden sm:inline">Directions</span>
                                </button>
                            </a>
                        )}

                        {whatsappNumber && (
                            <a
                                href={`https://wa.me/${whatsappNumber}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden md:flex"
                            >
                                <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-green-600/20">
                                    <MessageCircle size={16} />
                                    <span className="hidden lg:inline">WhatsApp</span>
                                </button>
                            </a>
                        )}

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={cn(
                                "lg:hidden p-2 rounded-xl transition-all",
                                isScrolled
                                    ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
                                    : "bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border border-white/20"
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
                    "fixed top-0 left-0 right-0 z-40 lg:hidden transition-all duration-300 ease-in-out",
                    isMobileMenuOpen
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-full opacity-0 pointer-events-none"
                )}
            >
                <div className={cn(
                    "mt-[73px] bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200",
                    isScrolled ? "mt-[65px]" : "mt-[73px]"
                )}>
                    <div className="max-w-7xl mx-auto px-4 py-6">
                        <div className="flex flex-col gap-4">
                            {SECTIONS.map((link) => {
                                const sectionId = link.href.replace("#", "");
                                const isActive = activeSection === sectionId;
                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={cn(
                                            "text-base font-bold uppercase tracking-widest transition-all py-3 px-4 rounded-xl",
                                            isActive
                                                ? "text-pink-600 bg-pink-50"
                                                : "text-gray-700 hover:text-pink-600 hover:bg-gray-50"
                                        )}
                                    >
                                        {link.name}
                                    </a>
                                );
                            })}
                        </div>
                        <div className="mt-6 pt-6 border-t border-gray-200 flex flex-col gap-3">
                            {phoneNumber && (
                                <a href={`tel:${phoneNumber}`} onClick={() => setIsMobileMenuOpen(false)}>
                                    <button className="w-full flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-lg shadow-pink-600/20">
                                        <Phone size={18} />
                                        <span>Call Now</span>
                                    </button>
                                </a>
                            )}
                            {googleMapsLink && (
                                <a
                                    href={googleMapsLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <button className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-xl font-bold text-sm transition-all">
                                        <MapPin size={18} />
                                        <span>Get Directions</span>
                                    </button>
                                </a>
                            )}
                            {whatsappNumber && (
                                <a
                                    href={`https://wa.me/${whatsappNumber}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <button className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-lg shadow-green-600/20">
                                        <MessageCircle size={18} />
                                        <span>WhatsApp Us</span>
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





