"use client";

import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";

const Footer = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
            });
        }
    };

    return (
        <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <h3 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-4">
                            Apetito
                        </h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Aesthetic Café for Coffee & Comfort Food in Vesu, Surat
                        </p>
                        <div className="flex items-center gap-4">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-amber-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-amber-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="https://wa.me/917802001555"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-green-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                            >
                                <MessageCircle className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            {[
                                { id: "hero", label: "Home" },
                                { id: "menu", label: "Menu" },
                                { id: "gallery", label: "Gallery" },
                                { id: "faq", label: "FAQ" },
                                { id: "location", label: "Location" },
                            ].map((link) => (
                                <li key={link.id}>
                                    <button
                                        onClick={() => scrollToSection(link.id)}
                                        className="text-gray-400 hover:text-amber-400 transition-colors"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Contact</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                                <a
                                    href="tel:+917802001555"
                                    className="text-gray-400 hover:text-amber-400 transition-colors"
                                >
                                    078020 01555
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                                <span className="text-gray-400">
                                    G/5, DMD Pacific, Vesu Canal Rd, Bharthana, Surat
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Opening Hours</h4>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center text-gray-400">
                                <span>Monday - Sunday</span>
                            </div>
                            <div className="text-amber-400 font-semibold">
                                Open Daily
                            </div>
                            <div className="text-gray-400">
                                Closes at 11:00 PM
                            </div>
                        </div>
                        <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
                            <p className="text-sm text-gray-400">
                                🚗 Drive-through available
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            © {new Date().getFullYear()} Apetito. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6 text-sm text-gray-400">
                            <span>⭐ Rated 4.6/5 by 292+ customers</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
