"use client";

import { useState, useEffect } from "react";
import { businessData } from "./data";
import { Phone, MapPin, Menu as MenuIcon, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    const navLinks = [
        { name: "Why Us", id: "features" },
        { name: "Menu", id: "menu" },
        { name: "Reviews", id: "reviews" },
        { name: "FAQ", id: "faq" },
        { name: "Location", id: "location" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Detect active section
            const scrollPosition = window.scrollY + 150; // Offset for header height

            for (const link of navLinks) {
                const element = document.getElementById(link.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(link.id);
                        break;
                    }
                }
            }

            // Check if we're at the top (hero section)
            if (window.scrollY < 100) {
                setActiveSection("");
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check
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

    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
            isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-2 sm:py-3" : "bg-transparent py-3 sm:py-4 md:py-5"
        )}>
            <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
                <div
                    className={cn(
                        "text-lg sm:text-xl md:text-2xl font-black tracking-tighter cursor-pointer transition-colors",
                        isScrolled ? "text-orange-600" : "text-white"
                    )}
                    onClick={() => scrollTo('hero')}
                >
                    {businessData.brand.business_name.toUpperCase()}
                </div>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollTo(link.id)}
                            className={cn(
                                "text-sm font-bold uppercase tracking-widest transition-all relative pb-1",
                                isScrolled
                                    ? activeSection === link.id
                                        ? "text-orange-600"
                                        : "text-gray-700 hover:text-orange-500"
                                    : activeSection === link.id
                                        ? "text-orange-500"
                                        : "text-white/90 hover:text-white"
                            )}
                        >
                            {link.name}
                            <span
                                className={cn(
                                    "absolute bottom-0 left-0 right-0 h-0.5 bg-orange-600 transition-all duration-300",
                                    activeSection === link.id ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                                )}
                            />
                        </button>
                    ))}
                </nav>

                {/* CTA Buttons */}
                <div className="hidden lg:flex items-center gap-3 xl:gap-4">
                    <a
                        href={businessData.contact.google_maps_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                            "flex items-center gap-2 px-3 xl:px-4 py-1.5 xl:py-2 rounded-full text-xs xl:text-sm font-bold transition-all border-2 whitespace-nowrap",
                            isScrolled
                                ? "border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                                : "border-white text-white hover:bg-white hover:text-orange-600"
                        )}
                    >
                        <MapPin size={16} className="xl:w-[18px] xl:h-[18px]" /> <span className="hidden xl:inline">DIRECTIONS</span>
                    </a>
                    <a
                        href={`tel:${businessData.contact.phone.replace(/\s+/g, '')}`}
                        className="flex items-center gap-2 px-4 xl:px-6 py-1.5 xl:py-2 rounded-full text-xs xl:text-sm font-bold bg-orange-600 text-white hover:bg-orange-700 transition-all shadow-lg hover:shadow-orange-500/20 whitespace-nowrap"
                    >
                        <Phone size={16} className="xl:w-[18px] xl:h-[18px]" /> <span className="hidden xl:inline">CALL NOW</span>
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={cn(
                        "lg:hidden p-2 rounded-lg",
                        isScrolled ? "text-gray-900" : "text-white"
                    )}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} className="sm:w-7 sm:h-7" /> : <MenuIcon size={24} className="sm:w-7 sm:h-7" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-4 sm:p-6 flex flex-col gap-4 sm:gap-6 shadow-2xl lg:hidden animate-in slide-in-from-top duration-300 max-h-[calc(100vh-80px)] overflow-y-auto">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => scrollTo(link.id)}
                            className={cn(
                                "text-left text-lg font-bold transition-all relative pb-2",
                                activeSection === link.id
                                    ? "text-orange-600"
                                    : "text-gray-800 hover:text-orange-600"
                            )}
                        >
                            {link.name}
                            <span
                                className={cn(
                                    "absolute bottom-0 left-0 w-12 h-0.5 bg-orange-600 transition-all duration-300",
                                    activeSection === link.id ? "opacity-100" : "opacity-0"
                                )}
                            />
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
