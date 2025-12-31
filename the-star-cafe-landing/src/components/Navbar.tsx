"use client";
import React, { useState, useEffect } from "react";
import { Phone, MapPin, MessageCircle, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const phoneNumber = "063562 61212";
    const whatsappNumber = phoneNumber.replace(/\s/g, "");
    const googleMapsLink = "https://www.google.com/maps/dir/?api=1&destination=G-47+J9+High+Street+Near+L.+P.+Savani+School+Canal+Road+VIP+Rd+Vesu+Surat+Gujarat+395007";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -70% 0px",
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const sections = ["features", "services", "gallery", "faq", "location"];
        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
        };
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: "Features", href: "#features", id: "features" },
        { name: "Menu", href: "#services", id: "services" },
        { name: "Gallery", href: "#gallery", id: "gallery" },
        { name: "FAQ", href: "#faq", id: "faq" },
        { name: "Location", href: "#location", id: "location" },
    ];

    const handleMobileLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3",
                    isScrolled
                        ? "bg-white/90 backdrop-blur-xl shadow-lg py-2"
                        : "bg-transparent py-4"
                )}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-200">
                            <span className="text-white font-bold text-xl">★</span>
                        </div>
                        <span className={cn(
                            "font-bold text-lg sm:text-xl tracking-tight transition-colors",
                            isScrolled ? "text-gray-900" : "text-white"
                        )}>
                            The Star Cafe
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-sm font-bold uppercase tracking-widest transition-all relative py-2",
                                    isScrolled
                                        ? (activeSection === link.id ? "text-amber-600" : "text-gray-600 hover:text-amber-500")
                                        : (activeSection === link.id ? "text-amber-500" : "text-white/80 hover:text-white")
                                )}
                            >
                                {link.name}
                                {activeSection === link.id && (
                                    <motion.div
                                        layoutId="navUnderline"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600"
                                        initial={false}
                                        transition={{
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 30
                                        }}
                                    />
                                )}
                            </a>
                        ))}
                    </div>

                    {/* Desktop Action Buttons */}
                    <div className="hidden lg:flex items-center gap-4">
                        {phoneNumber && (
                            <a href={`tel:${phoneNumber}`}>
                                <button className="flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-amber-600/20">
                                    <Phone size={16} />
                                    <span>Call Now</span>
                                </button>
                            </a>
                        )}

                        <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
                            <button className={cn(
                                "flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm transition-all shadow-sm transform hover:scale-105 active:scale-95",
                                isScrolled
                                    ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
                                    : "bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border border-white/20"
                            )}>
                                <MapPin size={16} className={isScrolled ? "text-amber-600" : "text-white"} />
                                <span>Directions</span>
                            </button>
                        </a>

                        {whatsappNumber && (
                            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                                <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-full font-bold text-sm transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-green-600/20">
                                    <MessageCircle size={16} />
                                    <span>WhatsApp</span>
                                </button>
                            </a>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={cn(
                            "lg:hidden p-2 rounded-xl transition-colors",
                            isScrolled ? "text-gray-900 hover:bg-gray-100" : "text-white hover:bg-white/10"
                        )}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="bg-white rounded-b-[2rem] shadow-2xl mx-4 mt-20 p-6 max-h-[85vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Mobile Navigation Links */}
                            <nav className="flex flex-col gap-2 mb-6">
                                {navLinks.map((link, idx) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.1 + idx * 0.05 }}
                                        onClick={handleMobileLinkClick}
                                        className="text-lg font-semibold py-3 px-4 text-gray-800 hover:text-amber-600 transition-colors"
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}
                            </nav>

                            {/* Mobile Action Buttons */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="space-y-3"
                            >
                                {phoneNumber && (
                                    <a href={`tel:${phoneNumber}`} className="block" onClick={handleMobileLinkClick}>
                                        <button className="w-full flex items-center justify-center gap-3 bg-amber-600 hover:bg-amber-700 text-white px-6 py-4 rounded-2xl font-bold text-base transition-all active:scale-95 shadow-lg shadow-amber-600/20">
                                            <Phone size={20} />
                                            <span>Call Now</span>
                                        </button>
                                    </a>
                                )}

                                <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="block" onClick={handleMobileLinkClick}>
                                    <button className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-amber-600 border-2 border-amber-600 px-6 py-4 rounded-2xl font-bold text-base transition-all active:scale-95">
                                        <MapPin size={20} />
                                        <span>Get Directions</span>
                                    </button>
                                </a>

                                {whatsappNumber && (
                                    <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="block" onClick={handleMobileLinkClick}>
                                        <button className="w-full flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-2xl font-bold text-base transition-all active:scale-95 shadow-lg shadow-green-600/20">
                                            <MessageCircle size={20} />
                                            <span>WhatsApp</span>
                                        </button>
                                    </a>
                                )}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
