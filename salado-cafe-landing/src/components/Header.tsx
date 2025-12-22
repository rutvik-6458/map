"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Navigation, Menu, X, MessageCircle } from "lucide-react";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    const phoneNumber = "08347552200";
    const formattedPhone = `+91${phoneNumber.replace(/\s/g, "")}`;
    const whatsappNumber = formattedPhone;
    const googleMapsLink = ""; // Empty as per JSON data

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Detect active section
            const sections = ["hero", "social-proof", "features", "menu", "gallery", "faq", "location"];
            const scrollPosition = window.scrollY + 100;

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
            });
            setIsMobileMenuOpen(false);
        }
    };

    const navItems = [
        { id: "hero", label: "Home" },
        { id: "menu", label: "Menu" },
        { id: "gallery", label: "Gallery" },
        { id: "faq", label: "FAQ" },
        { id: "location", label: "Location" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-white/95 backdrop-blur-md shadow-lg"
                    : "bg-transparent"
            }`}
        >
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <button
                        onClick={() => scrollToSection("hero")}
                        className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent hover:scale-105 transition-transform"
                    >
                        SaladO Cafe
                    </button>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`text-sm font-medium transition-all duration-200 hover:text-green-600 relative ${
                                    activeSection === item.id ? "text-green-600" : "text-gray-700"
                                }`}
                            >
                                {item.label}
                                {activeSection === item.id && (
                                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-600 rounded-full" />
                                )}
                            </button>
                        ))}
                    </nav>

                    {/* CTA Buttons */}
                    <div className="hidden md:flex items-center gap-3">
                        <Button
                            variant="outline"
                            size="sm"
                            className="border-green-600 text-green-600 hover:bg-green-50"
                            onClick={() => window.open(`tel:${formattedPhone}`, "_self")}
                        >
                            <Phone className="w-4 h-4 mr-2" />
                            Call Now
                        </Button>
                        {googleMapsLink ? (
                            <Button
                                size="sm"
                                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                                onClick={() => window.open(googleMapsLink, "_blank")}
                            >
                                <Navigation className="w-4 h-4 mr-2" />
                                Directions
                            </Button>
                        ) : (
                            <Button
                                size="sm"
                                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                                onClick={() => scrollToSection("location")}
                            >
                                <Navigation className="w-4 h-4 mr-2" />
                                Directions
                            </Button>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6 text-gray-700" />
                        ) : (
                            <Menu className="w-6 h-6 text-gray-700" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4 bg-white/95 backdrop-blur-md rounded-lg shadow-lg">
                        <nav className="flex flex-col gap-3">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={`text-left px-4 py-2 rounded-lg transition-all ${
                                        activeSection === item.id
                                            ? "bg-green-100 text-green-600 font-medium"
                                            : "text-gray-700 hover:bg-gray-100"
                                    }`}
                                >
                                    {item.label}
                                </button>
                            ))}
                            <div className="flex flex-col gap-2 mt-2 px-4">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full border-green-600 text-green-600 hover:bg-green-50"
                                    onClick={() => window.open(`tel:${formattedPhone}`, "_self")}
                                >
                                    <Phone className="w-4 h-4 mr-2" />
                                    Call Now
                                </Button>
                                {googleMapsLink ? (
                                    <Button
                                        size="sm"
                                        className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                                        onClick={() => window.open(googleMapsLink, "_blank")}
                                    >
                                        <Navigation className="w-4 h-4 mr-2" />
                                        Get Directions
                                    </Button>
                                ) : (
                                    <Button
                                        size="sm"
                                        className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                                        onClick={() => scrollToSection("location")}
                                    >
                                        <Navigation className="w-4 h-4 mr-2" />
                                        Get Directions
                                    </Button>
                                )}
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;

