"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);

        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

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
        const sections = ["hero", "about", "features", "menu", "faq", "location"];
        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
        };
    }, []);

    const navLinks = [
        { name: "Home", href: "#hero", id: "hero" },
        { name: "About", href: "#about", id: "about" },
        { name: "Features", href: "#features", id: "features" },
        { name: "Menu", href: "#menu", id: "menu" },
        { name: "FAQ", href: "#faq", id: "faq" },
        { name: "Location", href: "#location", id: "location" },
    ];

    const directionsUrl = "https://maps.app.goo.gl/mxku3nUznWqxdtg28";
    const phone = ""; // Empty as per JSON
    const whatsappUrl = phone ? `https://wa.me/${phone}` : null;

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6 py-4",
                (scrolled || isOpen) ? "bg-white shadow-sm" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold font-outfit text-primary tracking-tight">
                        Jerry Cafe
                    </span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-all duration-300 relative py-2",
                                activeSection === link.id
                                    ? "text-primary"
                                    : "text-foreground/80 hover:text-primary"
                            )}
                        >
                            {link.name}
                            {activeSection === link.id && (
                                <motion.div
                                    layoutId="activeNav"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                        </a>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-4">
                    {whatsappUrl && (
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors"
                        >
                            <MessageCircle size={20} />
                        </a>
                    )}
                    <a
                        href={directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
                    >
                        <MapPin size={16} />
                        Get Directions
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <div
                className={cn(
                    "fixed inset-0 top-[76px] bg-white z-[100] md:hidden transition-transform duration-500 ease-in-out h-screen",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <div className="flex flex-col p-8 gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                                "text-xl font-semibold border-b border-border pb-4 transition-colors",
                                activeSection === link.id ? "text-primary" : "text-foreground"
                            )}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex flex-col gap-4 mt-4">
                        {whatsappUrl && (
                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full py-4 bg-green-500 text-white rounded-xl font-bold shadow-lg"
                            >
                                <MessageCircle size={20} />
                                WhatsApp Us
                            </a>
                        )}
                        <a
                            href={directionsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-white rounded-xl font-bold shadow-lg"
                        >
                            <MapPin size={20} />
                            Get Directions
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
