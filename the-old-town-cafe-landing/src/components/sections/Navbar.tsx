"use client";

import { useState, useEffect } from "react";
import { Phone, MapPin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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

    useEffect(() => {
        const options = {
            rootMargin: "-20% 0px -70% 0px",
            threshold: 0,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        const sections = document.querySelectorAll("section[id]");
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Highlights", href: "#highlights" },
        { name: "Menu", href: "#services" },
        { name: "Gallery", href: "#gallery" },
        { name: "FAQ", href: "#faq" },
        { name: "Location", href: "#location" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3",
                isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center gap-2 group cursor-pointer z-[70] relative">
                    <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center transition-transform group-hover:rotate-12">
                        <span className="text-white font-playfair font-bold text-xl">OT</span>
                    </div>
                    <span className={cn(
                        "font-outfit font-bold text-xl transition-colors",
                        (isScrolled || isMobileMenuOpen) ? "text-slate-900" : "text-white"
                    )}>
                        The Old Town Cafe
                    </span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    <div className="flex items-center gap-8 mr-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-sm font-semibold transition-all relative py-1",
                                    isScrolled ? "text-slate-600 hover:text-amber-600" : "text-white/80 hover:text-white",
                                    activeSection === link.href.substring(1) && (isScrolled ? "text-amber-600" : "text-amber-400")
                                )}
                            >
                                {link.name}
                                {activeSection === link.href.substring(1) && (
                                    <motion.div
                                        layoutId="underline"
                                        className={cn(
                                            "absolute left-0 right-0 -bottom-1 h-0.5 rounded-full",
                                            isScrolled ? "bg-amber-600" : "bg-amber-400"
                                        )}
                                    />
                                )}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        <Button
                            size="sm"
                            className={cn(
                                "font-bold transition-all shadow-sm h-9 px-4 rounded-full",
                                isScrolled
                                    ? "bg-slate-900 text-white hover:bg-slate-800"
                                    : "bg-white text-slate-900 hover:bg-slate-100"
                            )}
                            asChild
                        >
                            <a href="tel:08460707091">
                                <Phone className="w-4 h-4 mr-2" />
                                Call Now
                            </a>
                        </Button>
                        <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white font-bold h-9 px-4 rounded-full shadow-lg shadow-amber-600/20" asChild>
                            <a href="#location">
                                <MapPin className="w-4 h-4 mr-2" />
                                Directions
                            </a>
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 rounded-full hover:bg-black/5 z-[70] relative"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className="w-6 h-6 text-slate-900" />
                    ) : (
                        <Menu className={cn("w-6 h-6", isScrolled ? "text-slate-900" : "text-white")} />
                    )}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence mode="wait">
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
                        className="fixed top-0 left-0 right-0 bottom-0 bg-white z-[60] md:hidden"
                        style={{ height: "100vh", width: "100vw" }}
                    >
                        <div className="h-full w-full flex flex-col pt-32 px-8 overflow-y-auto">
                            <div className="flex flex-col gap-8">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className={cn(
                                            "text-2xl font-bold transition-colors py-2 border-b border-slate-100",
                                            activeSection === link.href.substring(1) ? "text-amber-600" : "text-slate-900"
                                        )}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>

                            <div className="flex flex-col gap-4 mt-12 pb-8">
                                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold h-14 rounded-2xl shadow-lg shadow-amber-600/20 text-lg" asChild>
                                    <a href="tel:08460707091">
                                        <Phone className="w-5 h-5 mr-3" />
                                        Call Now
                                    </a>
                                </Button>
                                <Button variant="outline" className="w-full border-amber-600 text-amber-600 font-bold h-14 rounded-2xl text-lg" asChild>
                                    <a href="#location" onClick={() => setIsMobileMenuOpen(false)}>
                                        <MapPin className="w-5 h-5 mr-3" />
                                        Get Directions
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
