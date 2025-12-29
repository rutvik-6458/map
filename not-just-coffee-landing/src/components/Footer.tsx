"use client";
import React from "react";
import { Phone, MapPin, Clock, Navigation, Star, MessageCircle } from "lucide-react";
import { cafeData } from "@/data";

export default function Footer() {
    const phoneNumber = cafeData.contact.phone;
    const address = cafeData.contact.address;
    const hours = cafeData.contact.hours;
    const rating = cafeData.social_proof.rating;
    const reviewCount = cafeData.social_proof.review_count;
    const googleMapsLink = cafeData.contact.google_maps_link || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    const whatsappLink = phoneNumber ? `https://wa.me/${phoneNumber.replace(/\s/g, "")}` : null;

    return (
        <footer className="bg-gray-950 text-white py-10 sm:py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-4 sm:mb-6">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-amber-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-lg sm:text-xl">☕</span>
                            </div>
                            <span className="font-bold text-lg sm:text-xl tracking-tight">{cafeData.brand.business_name}</span>
                        </div>
                        <p className="text-gray-400 text-sm sm:text-base font-medium leading-relaxed mb-4 sm:mb-6">
                            {cafeData.content_blocks.about_paragraph}
                        </p>
                        <div className="flex items-center gap-2 text-amber-400">
                            <Star size={14} className="sm:w-4 sm:h-4 fill-amber-400" />
                            <span className="font-bold text-xs sm:text-sm">{rating} Rating • {reviewCount} Reviews</span>
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
                                        className="text-gray-400 hover:text-amber-400 font-medium transition-colors"
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
                            <li className="flex items-start gap-2 sm:gap-3">
                                <MapPin size={18} className="sm:w-5 sm:h-5 text-amber-400 mt-0.5 sm:mt-1 flex-shrink-0" />
                                <span className="text-gray-400 font-medium text-xs sm:text-sm leading-relaxed">{address}</span>
                            </li>
                            {phoneNumber && (
                                <li className="flex items-center gap-2 sm:gap-3">
                                    <Phone size={18} className="sm:w-5 sm:h-5 text-amber-400 flex-shrink-0" />
                                    <a href={`tel:${phoneNumber}`} className="text-gray-400 hover:text-amber-400 text-xs sm:text-sm font-medium transition-colors">
                                        {phoneNumber}
                                    </a>
                                </li>
                            )}
                            <li className="flex items-center gap-2 sm:gap-3">
                                <Clock size={18} className="sm:w-5 sm:h-5 text-amber-400 flex-shrink-0" />
                                <span className="text-gray-400 text-xs sm:text-sm font-medium">{hours}</span>
                            </li>
                        </ul>
                    </div>
{/*
                    <div>
                        <h3 className="font-bold text-lg mb-6 uppercase tracking-widest">Connect</h3>
                        <div className="space-y-4">
                            <a
                                href={googleMapsLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-2xl font-bold transition-all transform hover:scale-105 active:scale-95 w-fit border border-white/20"
                            >
                                <Navigation size={20} />
                                <span>Get Directions</span>
                            </a>
                            {whatsappLink && (
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl font-bold transition-all transform hover:scale-105 active:scale-95 w-fit"
                                >
                                    <MessageCircle size={20} />
                                    <span>WhatsApp</span>
                                </a>
                            )}
                        </div>
                    </div> */}
                </div>

                <div className="pt-8 sm:pt-10 md:pt-12 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-center md:text-left">
                        <p className="text-gray-500 text-xs sm:text-sm font-medium">
                            © {new Date().getFullYear()} {cafeData.brand.business_name}. All rights reserved.
                        </p>
                        <p className="text-gray-500 text-xs sm:text-sm font-medium">
                            {cafeData.brand.city_area} • {cafeData.brand.short_tagline_options[0]}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}


