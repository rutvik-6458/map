"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone, MapPin, Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Reviews", href: "#trust" },
        { name: "Features", href: "#features" },
        { name: "Menu", href: "#menu" },
        { name: "FAQ", href: "#faq" },
        { name: "Location", href: "#location" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Active section detection
            const currentPos = window.scrollY + 100; // Offset for sticky navbar

            for (const link of navLinks) {
                const sectionId = link.href.substring(1);
                const element = document.getElementById(sectionId);

                if (element) {
                    const top = element.offsetTop;
                    const height = element.offsetHeight;

                    if (currentPos >= top && currentPos < top + height) {
                        setActiveSection(sectionId);
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-lg shadow-sm py-3" : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tight text-primary flex items-center gap-2">
                    <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-xs">BB</span>
                    <span>Blue <span className="text-secondary">Basil</span></span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium transition-all relative py-1
                                ${activeSection === link.href.substring(1)
                                    ? "text-primary font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                                    : "text-slate-600 hover:text-primary"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="hidden lg:flex items-center gap-3">
                    <Button variant="outline" size="sm" asChild>
                        <a href="tel:07284890007">
                            <Phone className="w-4 h-4 mr-2" />
                            Call Now
                        </a>
                    </Button>
                    <Button size="sm" asChild>
                        <a href="https://www.google.com/maps/dir//Blue+Basil+Restaurant+GF%2F8-12+Aakash+Retail+NM+Mavani+Rd+Magdalla+Surat" target="_blank">
                            <MapPin className="w-4 h-4 mr-2" />
                            Directions
                        </a>
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden p-2 text-slate-700"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b animate-fade-up shadow-xl h-screen overflow-y-auto pb-20">
                    <div className="flex flex-col p-4 gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-lg font-medium p-2 border-b last:border-0 ${activeSection === link.href.substring(1) ? "text-primary" : "text-slate-800"
                                    }`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex flex-col gap-3 pt-4">
                            <Button variant="outline" className="w-full justify-start py-6" asChild>
                                <a href="tel:07284890007">
                                    <Phone className="w-5 h-5 mr-3 text-primary" />
                                    <div className="flex flex-col items-start">
                                        <span className="text-xs uppercase text-slate-500 font-bold">Call Us</span>
                                        <span className="text-base">072848 90007</span>
                                    </div>
                                </a>
                            </Button>
                            <Button className="w-full justify-start py-6" asChild>
                                <a href="https://www.google.com/maps/dir//Blue+Basil+Restaurant+GF%2F8-12+Aakash+Retail+NM+Mavani+Rd+Magdalla+Surat" target="_blank">
                                    <MapPin className="w-5 h-5 mr-3" />
                                    <div className="flex flex-col items-start">
                                        <span className="text-xs uppercase text-white/80 font-bold">Navigate</span>
                                        <span className="text-base">Get Directions</span>
                                    </div>
                                </a>
                            </Button>
                            <Button className="w-full justify-start bg-green-500 hover:bg-green-600 border-none py-6" asChild>
                                <a href="https://wa.me/917284890007" target="_blank">
                                    <MessageCircle className="w-5 h-5 mr-3" />
                                    <div className="flex flex-col items-start">
                                        <span className="text-xs uppercase text-white/80 font-bold">Chat</span>
                                        <span className="text-base">WhatsApp Us</span>
                                    </div>
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
