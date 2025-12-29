"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Menu", href: "#menu" },
    { name: "Gallery", href: "#gallery" },
    { name: "FAQ", href: "#faq" },
    { name: "Location", href: "#location" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrollY(currentScrollY);
            setIsScrolled(currentScrollY > 50);

            // Simple active section detection
            const sections = navItems
                .map((item) => item.href.replace("#", ""))
                .filter((id) => id !== "");

            let current = "";
            for (const id of sections) {
                const element = document.getElementById(id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100) {
                        current = id;
                    }
                }
            }
            setActiveSection(current || (currentScrollY < 100 ? "" : activeSection));
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [activeSection]);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const id = href.replace("#", "");
        if (!id) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
        setIsOpen(false);
    };

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/80 backdrop-blur-md shadow-md py-3"
                    : "bg-black/30 backdrop-blur-sm py-5"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link
                    href="/"
                    className={cn(
                        "text-2xl font-bold transition-colors",
                        isScrolled
                            ? "text-orange-900"
                            : "text-white drop-shadow-lg"
                    )}
                >
                    Moonstruck<span className="text-orange-600"> Coffee</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => {
                        const itemId = item.href.replace("#", "");
                        const isActive = item.href === "#"
                            ? scrollY < 100 && activeSection === ""
                            : activeSection === itemId;

                        return (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className={cn(
                                    "nav-link text-sm font-medium transition-colors relative pb-1",
                                    isActive
                                        ? isScrolled
                                            ? "text-orange-600 border-b-2 border-orange-600"
                                            : "text-orange-600 border-b-2 border-orange-600 drop-shadow-md"
                                        : isScrolled
                                            ? "text-gray-700 hover:text-orange-600"
                                            : "text-white/90 hover:text-orange-400 drop-shadow-md"
                                )}
                            >
                                {item.name}
                            </a>
                        );
                    })}
                </div>

                <div className="hidden md:flex items-center space-x-3">
                    <a
                        href="https://maps.app.goo.gl/c5QyVGGJqfriCeQ36"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                            "flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors",
                            isScrolled
                                ? "border border-orange-200 text-orange-900 bg-white hover:bg-orange-50"
                                : "border border-white/30 text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                        )}
                    >
                        <MapPin className="w-4 h-4" />
                        Directions
                    </a>
                    <a
                        href="tel:09664721479"
                        className="flex items-center gap-1.5 px-4 py-2 bg-orange-600 text-white rounded-full text-sm font-medium hover:bg-orange-700 transition-colors"
                    >
                        <Phone className="w-4 h-4" />
                        Call Now
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={cn(
                        "md:hidden transition-colors",
                        isScrolled ? "text-gray-700" : "text-white"
                    )}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            <div
                className={cn(
                    "md:hidden absolute top-full left-0 right-0 bg-white shadow-lg overflow-hidden transition-all duration-300",
                    isOpen ? "max-height-screen py-6" : "max-h-0 py-0"
                )}
            >
                <div className="flex flex-col items-center space-y-4 px-4">
                    {navItems.map((item) => {
                        const itemId = item.href.replace("#", "");
                        const isActive = item.href === "#"
                            ? scrollY < 100 && activeSection === ""
                            : activeSection === itemId;

                        return (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => scrollToSection(e, item.href)}
                                className={cn(
                                    "text-lg font-medium py-2 relative w-full text-center pb-2",
                                    isActive
                                        ? "text-orange-600 border-b-2 border-orange-600"
                                        : "text-gray-700"
                                )}
                            >
                                {item.name}
                            </a>
                        );
                    })}
                    <div className="flex flex-col w-full gap-3 pt-4 border-t border-gray-100">
                        <a
                            href="https://maps.app.goo.gl/c5QyVGGJqfriCeQ36"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-3 border border-orange-200 rounded-lg text-orange-900 font-medium"
                        >
                            <MapPin className="w-5 h-5" />
                            Directions
                        </a>
                        <a
                            href="tel:09664721479"
                            className="flex items-center justify-center gap-2 w-full py-3 bg-orange-600 text-white rounded-lg font-medium"
                        >
                            <Phone className="w-5 h-5" />
                            Call Now
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
