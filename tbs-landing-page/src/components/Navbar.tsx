"use client";

import React, { useState, useEffect } from "react";
import { Phone, MapPin, Menu, X, Instagram, Facebook } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Gallery", href: "#gallery" },
    { name: "FAQ", href: "#faq" },
    { name: "Location", href: "#location" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -60% 0px",
            threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    setActiveSection(sectionId);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe all sections
        navLinks.forEach((link) => {
            const sectionId = link.href.replace("#", "");
            const element = document.getElementById(sectionId);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-4",
                scrolled ? "glass shadow-md py-2" : "bg-transparent",
                isOpen && "bg-slate-900 md:bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <a href="#home" className="flex flex-col">
                    <span className={cn(
                        "text-xl md:text-2xl font-bold tracking-tighter transition-colors",
                        isOpen ? "text-white md:text-amber-800" : "text-amber-800"
                    )}>
                        TBS
                    </span>
                    <span className={cn(
                        "text-[10px] uppercase tracking-[0.2em] font-medium opacity-80 transition-colors",
                        isOpen ? "text-white md:text-current" : ""
                    )}>
                        The Baking Stories
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.replace("#", "");
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium hover:text-amber-600 transition-colors relative pb-1",
                                    isActive && "text-amber-800"
                                )}
                            >
                                {link.name}
                                {isActive && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-800"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </a>
                        );
                    })}
                </div>

                <div className="hidden md:flex items-center space-x-4">
                    <a
                        href="tel:09662714166"
                        className="p-2 rounded-full bg-amber-100 text-amber-800 hover:bg-amber-200 transition-colors"
                        title="Call Us"
                    >
                        <Phone size={20} />
                    </a>
                    <a
                        href="https://maps.app.goo.gl/9pRrvL4Hxa1Yajko8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-amber-800 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-amber-900 transition-all shadow-lg shadow-amber-900/20"
                    >
                        <MapPin size={18} />
                        <span>Directions</span>
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={cn(
                        "md:hidden p-2 transition-colors",
                        isOpen ? "text-white" : "text-amber-900"
                    )}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-slate-900 shadow-2xl border-t border-slate-700 md:hidden flex flex-col p-6 space-y-4"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-lg font-semibold py-2 border-b border-slate-700 text-white hover:text-amber-400 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <a
                                href="tel:09662714166"
                                className="flex items-center justify-center space-x-2 bg-amber-100 text-amber-900 py-3 rounded-xl font-bold"
                            >
                                <Phone size={20} />
                                <span>Call</span>
                            </a>
                            <a
                                href="https://maps.app.goo.gl/9pRrvL4Hxa1Yajko8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center space-x-2 bg-amber-800 text-white py-3 rounded-xl font-bold"
                            >
                                <MapPin size={20} />
                                <span>Directions</span>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
