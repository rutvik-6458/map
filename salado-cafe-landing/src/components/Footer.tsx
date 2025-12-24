"use client";

import { Phone, Navigation, MessageCircle } from "lucide-react";

const Footer = () => {
    const phoneNumber = "08347552200";
    const formattedPhone = `+91${phoneNumber.replace(/\s/g, "")}`;
    const whatsappNumber = formattedPhone;
    const address = "G5, Ground Floor, Cannon Street, opposite Aagam Shopping Center, near Jolly Residency, Vesu, Surat, Gujarat 395007";
    const hours = "Open daily, closes at 12 am";

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
        <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Section */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                            SaladO Cafe
                        </h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Healthy Bites Made Delicious. Fresh, nutritious and flavorful cafe in Vesu, Surat.
                        </p>
                        <div className="flex items-center gap-2 text-gray-400">
                            <span>⭐</span>
                            <span className="font-semibold text-white">4.8</span>
                            <span>•</span>
                            <span>62 reviews</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <button
                                    onClick={() => scrollToSection("hero")}
                                    className="text-gray-300 hover:text-green-400 transition-colors"
                                >
                                    Home
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection("menu")}
                                    className="text-gray-300 hover:text-green-400 transition-colors"
                                >
                                    Menu
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection("gallery")}
                                    className="text-gray-300 hover:text-green-400 transition-colors"
                                >
                                    Gallery
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection("faq")}
                                    className="text-gray-300 hover:text-green-400 transition-colors"
                                >
                                    FAQ
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => scrollToSection("location")}
                                    className="text-gray-300 hover:text-green-400 transition-colors"
                                >
                                    Location
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-start gap-3">
                                <span>📍</span>
                                <span className="text-sm">{address}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-4 h-4" />
                                <a
                                    href={`tel:${formattedPhone}`}
                                    className="hover:text-green-400 transition-colors"
                                >
                                    {phoneNumber}
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <span>🕐</span>
                                <span>{hours}</span>
                            </li>
                        </ul>

                        {/* Social Links */}
                        <div className="flex gap-3 mt-6">
                            <button
                                onClick={() => window.open(`tel:${formattedPhone}`, "_self")}
                                className="bg-green-600 hover:bg-green-700 p-3 rounded-lg transition-colors"
                                aria-label="Call"
                            >
                                <Phone className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => window.open(`https://wa.me/${whatsappNumber}`, "_blank")}
                                className="bg-green-600 hover:bg-green-700 p-3 rounded-lg transition-colors"
                                aria-label="WhatsApp"
                            >
                                <MessageCircle className="w-5 h-5" />
                            </button>
                            <button
                                onClick={() => {
                                    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
                                    window.open(mapsUrl, "_blank");
                                }}
                                className="bg-green-600 hover:bg-green-700 p-3 rounded-lg transition-colors"
                                aria-label="Directions"
                            >
                                <Navigation className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
                    <p>
                        © {new Date().getFullYear()} SaladO Cafe. All rights reserved. | Vesu, Surat, Gujarat
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;




