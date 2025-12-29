"use client";

import { useState, useEffect } from "react";
import { Phone, MapPin, MessageCircle, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Why Us", href: "#why-us" },
    { name: "Menu", href: "#menu" },
    { name: "Reviews", href: "#reviews" },
    { name: "FAQ", href: "#faq" },
    { name: "Location", href: "#location" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Improved active section detection
            const scrollPosition = window.scrollY + 150; // Offset for navbar height

            for (const link of navLinks) {
                const sectionId = link.href.slice(1);
                const element = document.getElementById(sectionId);
                if (element) {
                    const top = element.offsetTop;
                    const height = element.offsetHeight;

                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(sectionId);
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (href: string) => {
        setMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setActiveSection(href.slice(1));
        }
    };

    const phone = "093762 29229";
    const mapsLink = "https://www.google.com/maps/search/?api=1&query=Livestream+Coffee+Vesu+Aagam+Viviana+Surat";

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-4 md:px-6 lg:px-8",
                scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-2 sm:py-3" : "bg-transparent py-3 sm:py-4 md:py-5"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
                {/* Logo */}
                <div
                    className="flex flex-col cursor-pointer flex-shrink-0"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <span className={cn(
                        "text-base sm:text-lg md:text-xl lg:text-2xl font-bold tracking-tight transition-colors",
                        scrolled ? "text-amber-900" : "text-white"
                    )}>
                        Livestream Coffee
                    </span>
                    <span className={cn(
                        "text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-widest font-medium opacity-80",
                        scrolled ? "text-stone-600" : "text-stone-300"
                    )}>
                        Vesu, Surat
                    </span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => scrollTo(link.href)}
                            className={cn(
                                "text-xs xl:text-sm font-semibold transition-all hover:scale-105 relative py-1",
                                scrolled ? "text-stone-600 hover:text-amber-900" : "text-stone-100 hover:text-white",
                                activeSection === link.href.slice(1) && (scrolled ? "text-amber-900" : "text-white")
                            )}
                        >
                            {link.name}
                            {activeSection === link.href.slice(1) && (
                                <span className={cn(
                                    "absolute bottom-0 left-0 w-full h-0.5 rounded-full transition-all duration-300",
                                    scrolled ? "bg-amber-900" : "bg-white"
                                )} />
                            )}
                        </button>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-2 sm:gap-3">
                    <a
                        href={mapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                            "flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm transition-all",
                            scrolled ? "bg-amber-50 text-amber-900 hover:bg-amber-100" : "bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
                        )}
                        aria-label="Get directions"
                    >
                        <MapPin className="w-4 h-4 sm:w-4 sm:h-4" />
                        <span className="hidden sm:inline">Directions</span>
                    </a>
                    <a
                        href={`tel:${phone.replace(/\s+/g, '')}`}
                        className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full bg-amber-800 text-white font-bold text-xs sm:text-sm hover:bg-amber-900 transition-all shadow-md active:scale-95"
                        aria-label="Call now"
                    >
                        <Phone className="w-4 h-4 sm:w-4 sm:h-4" />
                        <span className="hidden sm:inline">Call Now</span>
                    </a>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden p-1.5 sm:p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <X className={cn("w-5 h-5 sm:w-6 sm:h-6", !scrolled && "text-white")} />
                        ) : (
                            <Menu className={cn("w-5 h-5 sm:w-6 sm:h-6", !scrolled && "text-white")} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-stone-100 shadow-xl p-4 sm:p-6 max-h-[calc(100vh-80px)] overflow-y-auto">
                    <nav className="flex flex-col gap-3 sm:gap-4">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollTo(link.href)}
                                className={cn(
                                    "text-left text-base sm:text-lg font-bold py-2 sm:py-3 border-b border-stone-50 transition-colors",
                                    activeSection === link.href.slice(1) ? "text-amber-900" : "text-stone-800 hover:text-amber-800"
                                )}
                            >
                                {link.name}
                            </button>
                        ))}
                    </nav>
                    <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:gap-4">
                        <a
                            href={`https://wa.me/${phone.replace(/\s+/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-3 sm:py-4 rounded-2xl bg-[#25D366] text-white font-bold text-base sm:text-lg shadow-lg active:scale-95 transition-transform"
                        >
                            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
