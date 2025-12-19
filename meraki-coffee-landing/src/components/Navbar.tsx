"use client";

import { Phone, MapPin, MessageCircle, Menu as MenuIcon, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const phone = "097377 94366";
    const mapsLink = "https://www.google.com/maps/search/?api=1&query=Meraki+The+Coffee+House+SNS+Platina+Vesu+Surat";
    const whatsappLink = `https://wa.me/919737794366`;

    const navLinks = [
        { name: "Why Us", href: "#why-us" },
        { name: "Menu", href: "#menu" },
        { name: "Reviews", href: "#reviews" },
        { name: "FAQ", href: "#faq" },
        { name: "Location", href: "#location" },
    ];

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const offset = 80; // height of navbar
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
        setMobileMenuOpen(false);
    };

    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3 md:px-8",
            scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
        )}>
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo Section */}
                <div className="flex flex-col cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <span className={cn(
                        "text-xl md:text-2xl font-outfit font-bold tracking-tight transition-colors",
                        scrolled ? "text-[#D4A373]" : "text-[#D4A373] drop-shadow-lg"
                    )}>
                        Meraki
                    </span>
                    <span className={cn(
                        "text-[10px] uppercase tracking-widest font-bold opacity-80 transition-colors",
                        scrolled ? "text-stone-600" : "text-stone-100 drop-shadow-md"
                    )}>
                        The Coffee House
                    </span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleScrollTo(e, link.href)}
                            className={cn(
                                "text-sm font-semibold uppercase tracking-wider transition-all hover:scale-105",
                                scrolled ? "text-stone-600 hover:text-stone-900" : "text-stone-100 hover:text-white drop-shadow-md"
                            )}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 md:gap-4">
                    <a
                        href={mapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                            "hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-all hover:shadow-lg",
                            scrolled ? "bg-stone-100 text-stone-900 hover:bg-stone-200" : "bg-white/20 text-white backdrop-blur-md hover:bg-white/30"
                        )}
                    >
                        <MapPin className="w-4 h-4" />
                        <span>Directions</span>
                    </a>
                    <a
                        href={`tel:${phone.replace(/\s+/g, '')}`}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#D4A373] text-stone-950 font-bold text-sm hover:bg-[#c49363] transition-all hover:shadow-lg"
                    >
                        <Phone className="w-4 h-4" />
                        <span className="hidden xs:inline">Call Now</span>
                    </a>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden p-2 text-stone-900"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <X className={cn("w-6 h-6", !scrolled && "text-white")} />
                        ) : (
                            <MenuIcon className={cn("w-6 h-6", !scrolled && "text-white")} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            {mobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-stone-100 p-6 animate-in slide-in-from-top duration-300">
                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleScrollTo(e, link.href)}
                                className="text-stone-800 text-lg font-bold uppercase tracking-widest py-2 border-b border-stone-50"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                    <div className="mt-8 flex flex-col gap-4">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-[#25D366] text-white font-bold"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Order on WhatsApp
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
