"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MapPin, Menu, X, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("#hero");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);

        // Intersection Observer to track active section
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(`#${entry.target.id}`);
                    }
                });
            },
            { threshold: 0.5 }
        );

        const sections = ["hero", "services", "gallery", "faq", "location"];
        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    const navLinks = [
        { name: "Home", href: "#hero" },
        { name: "Flavours", href: "#services" },
        { name: "Gallery", href: "#gallery" },
        { name: "FAQ", href: "#faq" },
        { name: "Location", href: "#location" },
    ];

    const handleDirections = () => {
        window.open("https://www.google.com/maps/dir/?api=1&destination=Shades+On+Cake+Vesu+Surat", "_blank");
    };



    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3",
                scrolled || isOpen
                    ? "bg-white/90 backdrop-blur-md shadow-sm py-2"
                    : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2 relative z-50">
                    <div className="font-playfair text-xl md:text-2xl font-bold text-[#DB2777]">
                        Shades On Cake
                    </div>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="font-medium text-sm text-[#2D241E] hover:text-[#DB2777] transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <a
                        href="tel:08469520030"
                        className="flex items-center gap-2 bg-[#DB2777] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#BE185D] transition-all shadow-md active:scale-95"
                    >
                        <Phone size={16} />
                        Call Now
                    </a>
                    <button
                        onClick={handleDirections}
                        className="flex items-center gap-2 bg-white text-[#2D241E] border border-[#E5E7EB] px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-50 transition-all shadow-sm active:scale-95"
                    >
                        <MapPin size={16} />
                        Directions
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 relative z-50 text-[#2D241E]"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed inset-0 bg-white z-[9999] md:hidden flex flex-col"
                    >
                        {/* Mobile Menu Header */}
                        <div className="flex items-center justify-between px-6 py-6 bg-white">
                            <div className="font-playfair text-2xl font-bold text-[#DB2777]">
                                Shades On Cake
                            </div>
                            <button
                                className="p-2 text-[#2D241E] border-2 border-gray-200 rounded-lg"
                                onClick={() => setIsOpen(false)}
                                aria-label="Close Menu"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Menu Links */}
                        <div className="flex-1 flex flex-col px-8 py-4 bg-white">
                            <nav className="flex flex-col gap-6">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="relative group w-fit"
                                    >
                                        <span className={cn(
                                            "text-[#2D241E] text-2xl font-bold transition-colors",
                                            activeSection === link.href ? "text-[#DB2777]" : "hover:text-[#DB2777]"
                                        )}>
                                            {link.name}
                                        </span>
                                        {activeSection === link.href && (
                                            <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#DB2777] rounded-full" />
                                        )}
                                    </a>
                                ))}

                            </nav>

                            {/* Action Buttons at the bottom */}
                            <div className="flex gap-4 mt-12 mb-10">
                                <a
                                    href="tel:08469520030"
                                    className="flex-1 flex items-center justify-center gap-2 bg-[#DB2777] text-white py-4 rounded-2xl font-bold text-lg shadow-lg active:scale-95 transition-all"
                                >
                                    <Phone size={20} />
                                    Call
                                </a>
                                <button
                                    onClick={() => {
                                        handleDirections();
                                        setIsOpen(false);
                                    }}
                                    className="flex-1 flex items-center justify-center gap-2 bg-[#DB2777]/10 text-[#DB2777] py-4 rounded-2xl font-bold text-lg active:scale-95 transition-all"
                                >
                                    <MapPin size={20} />
                                    Map
                                </button>
                            </div>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>


        </nav>

    );
};

export default Navbar;
