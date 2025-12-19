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

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

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
            setActiveSection(current || (window.scrollY < 100 ? "" : activeSection));
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
                    : "bg-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold text-orange-900">
                    Moonstruck<span className="text-orange-600"> Coffee</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => scrollToSection(e, item.href)}
                            className={cn(
                                "nav-link text-sm font-medium transition-colors",
                                activeSection === item.href.replace("#", "")
                                    ? "active text-orange-600"
                                    : "text-gray-700 hover:text-orange-600"
                            )}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                <div className="hidden md:flex items-center space-x-3">
                    <a
                        href="https://maps.app.goo.gl/3Xp8i3YmF6fXz8L39"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-4 py-2 border border-orange-200 rounded-full text-sm font-medium text-orange-900 bg-white hover:bg-orange-50 transition-colors"
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
                    className="md:hidden text-gray-700"
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
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => scrollToSection(e, item.href)}
                            className={cn(
                                "text-lg font-medium py-2",
                                activeSection === item.href.replace("#", "")
                                    ? "text-orange-600"
                                    : "text-gray-700"
                            )}
                        >
                            {item.name}
                        </a>
                    ))}
                    <div className="flex flex-col w-full gap-3 pt-4 border-t border-gray-100">
                        <a
                            href="https://maps.app.goo.gl/3Xp8i3YmF6fXz8L39"
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
