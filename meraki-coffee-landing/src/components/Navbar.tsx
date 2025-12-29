"use client";

import { Phone, MapPin, MessageCircle, Menu as MenuIcon, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string>("");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Track active section
            const sections = ["why-us", "menu", "reviews", "faq", "location"];
            const scrollPosition = window.scrollY + 150; // Offset for navbar height

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        setActiveSection(sections[i]);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Check on mount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const phone = "097377 94366";
    const mapsLink = "https://maps.app.goo.gl/6tzgiB7RWJiyaeS77";
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
                    {navLinks.map((link) => {
                        const sectionId = link.href.replace("#", "");
                        const isActive = activeSection === sectionId;
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleScrollTo(e, link.href)}
                                className={cn(
                                    "text-sm font-semibold uppercase tracking-wider transition-all hover:scale-105 relative pb-1",
                                    scrolled ? "text-stone-600 hover:text-stone-900" : "text-stone-100 hover:text-white drop-shadow-md",
                                    isActive && "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#D4A373] after:transition-all"
                                )}
                            >
                                {link.name}
                            </a>
                        );
                    })}
                </nav>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <a
                        href={mapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                            "flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-bold text-xs sm:text-sm transition-all hover:shadow-lg",
                            scrolled ? "bg-stone-100 text-stone-900 hover:bg-stone-200" : "bg-white/20 text-white backdrop-blur-md hover:bg-white/30"
                        )}
                    >
                        <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span className="hidden md:inline">Directions</span>
                    </a>
                    <a
                        href={`tel:${phone.replace(/\s+/g, '')}`}
                        className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-[#D4A373] text-stone-950 font-bold text-xs sm:text-sm hover:bg-[#c49363] transition-all hover:shadow-lg"
                    >
                        <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span className="hidden sm:inline">Call Now</span>
                    </a>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden p-1.5 sm:p-2 flex-shrink-0"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <X className={cn("w-5 h-5 sm:w-6 sm:h-6", !scrolled && "text-white")} />
                        ) : (
                            <MenuIcon className={cn("w-5 h-5 sm:w-6 sm:h-6", !scrolled && "text-white")} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            {mobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-stone-100 p-4 sm:p-6 animate-in slide-in-from-top duration-300 max-h-[calc(100vh-80px)] overflow-y-auto">
                    <nav className="flex flex-col gap-3 sm:gap-4">
                        {navLinks.map((link) => {
                            const sectionId = link.href.replace("#", "");
                            const isActive = activeSection === sectionId;
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleScrollTo(e, link.href)}
                                    className={cn(
                                        "text-stone-800 text-base sm:text-lg font-bold uppercase tracking-widest py-2 sm:py-3 border-b transition-all relative",
                                        isActive ? "border-[#D4A373] text-[#D4A373]" : "border-stone-50"
                                    )}
                                >
                                    {link.name}
                                </a>
                            );
                        })}
                    </nav>
                    <div className="mt-6 sm:mt-8 flex flex-col gap-3 sm:gap-4">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-3 sm:py-4 rounded-xl bg-[#25D366] text-white font-bold text-sm sm:text-base"
                        >
                            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                            Order on WhatsApp
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
