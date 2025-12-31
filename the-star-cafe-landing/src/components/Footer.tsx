"use client";
import React from "react";
import { Phone, MapPin, Clock, MessageCircle, Star } from "lucide-react";

export default function Footer() {
    const phoneNumber = "063562 61212";
    const whatsappNumber = phoneNumber.replace(/\s/g, "");
    const address = "G-47, J9 High Street, Near L. P. Savani School, Canal Road, VIP Rd, Vesu, Surat, Gujarat 395007";
    const hours = "Open daily, closes at 10:45 pm";

    return (
        <footer className="bg-gray-950 text-white py-12 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 bg-amber-600 rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-xl">★</span>
                            </div>
                            <span className="font-bold text-xl tracking-tight">The Star Cafe</span>
                        </div>
                        <p className="text-gray-400 font-medium leading-relaxed mb-6">
                            A cozy neighborhood cafe in Vesu, Surat, perfect for small gatherings, celebrations, and casual meetups.
                        </p>
                        <div className="flex items-center gap-2 text-amber-400">
                            <Star size={16} className="fill-amber-400" />
                            <span className="font-bold text-sm">4.5 Rating • 92 Reviews</span>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-6 uppercase tracking-widest">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { name: "Features", href: "#features" },
                                { name: "Menu", href: "#services" },
                                { name: "Gallery", href: "#gallery" },
                                { name: "FAQ", href: "#faq" },
                                { name: "Location", href: "#location" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-amber-400 font-medium transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-6 uppercase tracking-widest">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="text-amber-400 mt-1 flex-shrink-0" />
                                <span className="text-gray-400 font-medium text-sm leading-relaxed">{address}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={20} className="text-amber-400 flex-shrink-0" />
                                <a href={`tel:${phoneNumber}`} className="text-gray-400 hover:text-amber-400 font-medium transition-colors">
                                    {phoneNumber}
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Clock size={20} className="text-amber-400 flex-shrink-0" />
                                <span className="text-gray-400 font-medium">{hours}</span>
                            </li>
                        </ul>
                    </div>

                    {/* <div>
                        <h3 className="font-bold text-lg mb-6 uppercase tracking-widest">Connect</h3>
                        <div className="space-y-4">
                            {whatsappNumber && (
                                <a
                                    href={`https://wa.me/${whatsappNumber}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl font-bold transition-all transform hover:scale-105 active:scale-95 w-fit"
                                >
                                    <MessageCircle size={20} />
                                    <span>WhatsApp Us</span>
                                </a>
                            )}
                            <a
                                href="https://www.google.com/maps/dir/?api=1&destination=G-47+J9+High+Street+Near+L.+P.+Savani+School+Canal+Road+VIP+Rd+Vesu+Surat+Gujarat+395007"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-2xl font-bold transition-all transform hover:scale-105 active:scale-95 w-fit border border-white/20"
                            >
                                <MapPin size={20} />
                                <span>Get Directions</span>
                            </a>
                        </div>
                    </div> */}
                </div>

                <div className="pt-12 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm font-medium">
                            © {new Date().getFullYear()} The Star Cafe. All rights reserved.
                        </p>
                        <p className="text-gray-500 text-sm font-medium">
                            Vesu, Surat • A Cozy Cafe for Small Gatherings
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

