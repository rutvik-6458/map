"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MapPin, Menu as MenuIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Track active section
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-50% 0px -50% 0px",
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

        // Observe all sections
        const sections = ["home", "about", "vibe", "faq", "location"];
        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Our Vibe", href: "#vibe" },
        { name: "FAQ", href: "#faq" },
        { name: "Location", href: "#location" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass py-3 shadow-md" : "bg-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-2xl font-bold font-serif text-nature-800">
                        The Birds <span className="text-nature-500">Cafe</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.substring(1);
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`font-medium transition-colors relative pb-1 ${isActive ? "text-nature-500" : "text-nature-900 hover:text-nature-500"
                                    }`}
                            >
                                {link.name}
                                {isActive && (
                                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-nature-500 rounded-full transition-all duration-300" />
                                )}
                            </Link>
                        );
                    })}
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <a
                        href="tel:+910000000000" // Placeholder
                        className="flex items-center gap-2 bg-nature-600 text-white px-4 py-2 rounded-full hover:bg-nature-700 transition-colors shadow-sm"
                    >
                        <Phone size={18} />
                        <span className="font-medium">Call Now</span>
                    </a>
                    <a
                        href="https://maps.app.goo.gl/2qH6osSxRqVz59Tz5"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 border-2 border-nature-600 text-nature-600 px-4 py-2 rounded-full hover:bg-nature-50 transition-colors font-medium"
                    >
                        <MapPin size={18} />
                        <span>Directions</span>
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-nature-900 p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-full left-0 right-0 glass border-t border-nature-100 shadow-xl"
                    >
                        <div className="flex flex-col p-6 gap-6">
                            {navLinks.map((link) => {
                                const isActive = activeSection === link.href.substring(1);
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`text-lg font-medium relative pb-1 inline-block ${isActive ? "text-nature-500" : "text-nature-900"
                                            }`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                        {isActive && (
                                            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-nature-500 rounded-full transition-all duration-300" />
                                        )}
                                    </Link>
                                );
                            })}
                            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-nature-100">
                                <a
                                    href="tel:+910000000000"
                                    className="flex items-center justify-center gap-2 bg-nature-600 text-white px-4 py-3 rounded-xl"
                                >
                                    <Phone size={18} />
                                    <span>Call</span>
                                </a>
                                <a
                                    href="https://maps.app.goo.gl/2qH6osSxRqVz59Tz5"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 bg-nature-100 text-nature-800 px-4 py-3 rounded-xl"
                                >
                                    <MapPin size={18} />
                                    <span>Map</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
