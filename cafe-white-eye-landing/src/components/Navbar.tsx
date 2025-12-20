"use client";

import { useState, useEffect } from "react";

import { Menu, X, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/use-active-section";

const navLinks = [
    { name: "Home", href: "hero" },
    { name: "Reviews", href: "reviews" },
    { name: "Features", href: "features" },
    { name: "Menu", href: "menu" },
    { name: "Gallery", href: "gallery" },
    { name: "FAQ", href: "faq" },
    { name: "Location", href: "location" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const activeSection = useActiveSection(navLinks.map(link => link.href));

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80; // height of navbar
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
        setIsOpen(false);
    };

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-white/80 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <div
                    className="text-2xl font-bold font-serif cursor-pointer text-primary"
                    onClick={() => scrollToSection("hero")}
                >
                    Cafe White Eye
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => scrollToSection(link.href)}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary",
                                activeSection === link.href
                                    ? "text-primary font-bold"
                                    : "text-muted-foreground"
                            )}
                        >
                            {link.name}
                        </button>
                    ))}
                </div>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-2">
                    <Button variant="outline" size="sm" asChild>
                        <a href="https://maps.google.com/?q=Cafe+White+Eye+Vesu+Surat" target="_blank" rel="noopener noreferrer">
                            <MapPin className="w-4 h-4 mr-2" />
                            Directions
                        </a>
                    </Button>
                    <Button size="sm" asChild>
                        <a href="tel:06356353531">
                            <Phone className="w-4 h-4 mr-2" />
                            Call
                        </a>
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => scrollToSection(link.href)}
                            className={cn(
                                "text-left py-2 px-4 rounded-md transition-colors",
                                activeSection === link.href
                                    ? "bg-primary/10 text-primary font-bold"
                                    : "text-foreground hover:bg-muted"
                            )}
                        >
                            {link.name}
                        </button>
                    ))}
                    <div className="flex flex-col gap-2 mt-2 pt-4 border-t">
                        <Button variant="outline" asChild className="w-full justify-start">
                            <a href="https://maps.google.com/?q=Cafe+White+Eye+Vesu+Surat" target="_blank" rel="noopener noreferrer">
                                <MapPin className="w-4 h-4 mr-2" />
                                Get Directions
                            </a>
                        </Button>
                        <Button asChild className="w-full justify-start">
                            <a href="tel:06356353531">
                                <Phone className="w-4 h-4 mr-2" />
                                Call Now
                            </a>
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
}
