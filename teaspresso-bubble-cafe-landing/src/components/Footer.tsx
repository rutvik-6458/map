"use client";
import React from "react";
import { Phone, MapPin, Clock, MessageCircle, Star } from "lucide-react";

export default function Footer() {
    const phoneNumber = "099041 81348";
    const whatsappNumber = phoneNumber.replace(/\s/g, "");
    const address = "9, Aagam Emporio, University Rd, near Vatsalya Bungalows, opposite Balaji Hero, Vesu, Surat, Gujarat 395007";
    const hours = "Open daily, closes at 12:30 am";
    const googleMapsLink = "https://www.google.com/maps/dir/?api=1&destination=9+Aagam+Emporio+University+Rd+near+Vatsalya+Bungalows+opposite+Balaji+Hero+Vesu+Surat+Gujarat+395007";

    return (
        <footer className="bg-gray-950 text-white py-12 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-10 sm:mb-12">
                    <div className="sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-2 mb-4 sm:mb-6">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-pink-600 rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-lg sm:text-xl">🧋</span>
                            </div>
                            <span className="font-bold text-lg sm:text-xl tracking-tight">Teaspresso</span>
                        </div>
                        <p className="text-gray-400 font-medium leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                            A popular bubble tea and waffle cafe in Vesu, Surat, loved by locals for its wide variety of bubble tea flavours and customisable options.
                        </p>
                        <div className="flex items-center gap-2 text-pink-400">
                            <Star size={14} className="sm:w-4 sm:h-4 fill-pink-400" />
                            <span className="font-bold text-xs sm:text-sm">4.3 Rating • 779 Reviews</span>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 uppercase tracking-widest">Quick Links</h3>
                        <ul className="space-y-2 sm:space-y-3">
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
                                        className="text-gray-400 hover:text-pink-400 font-medium transition-colors text-sm sm:text-base"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 uppercase tracking-widest">Contact</h3>
                        <ul className="space-y-3 sm:space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="sm:w-5 sm:h-5 text-pink-400 mt-0.5 sm:mt-1 flex-shrink-0" />
                                <span className="text-gray-400 font-medium text-xs sm:text-sm leading-relaxed">{address}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="sm:w-5 sm:h-5 text-pink-400 flex-shrink-0" />
                                <a href={`tel:${phoneNumber}`} className="text-gray-400 hover:text-pink-400 font-medium transition-colors text-sm sm:text-base">
                                    {phoneNumber}
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Clock size={18} className="sm:w-5 sm:h-5 text-pink-400 flex-shrink-0" />
                                <span className="text-gray-400 font-medium text-sm sm:text-base">{hours}</span>
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
                            {googleMapsLink && (
                                <a
                                    href={googleMapsLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-2xl font-bold transition-all transform hover:scale-105 active:scale-95 w-fit border border-white/20"
                                >
                                    <MapPin size={20} />
                                    <span>Get Directions</span>
                                </a>
                            )}
                        </div>
                    </div> */}
                </div>

                <div className="pt-8 sm:pt-12 border-t border-gray-800">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
                        <p className="text-gray-500 text-xs sm:text-sm font-medium">
                            © {new Date().getFullYear()} Teaspresso Bubble Cafe. All rights reserved.
                        </p>
                        <p className="text-gray-500 text-xs sm:text-sm font-medium">
                            Vesu, Surat • Bubble Tea, Waffles & Late-Night Vibes
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}





