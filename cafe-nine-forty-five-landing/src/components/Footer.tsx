"use client";
import React from "react";
import { Phone, MapPin, Clock, Navigation, Star } from "lucide-react";
import { cafeData } from "@/data";

export default function Footer() {
    const phoneNumber = cafeData.contact.phone;
    const address = cafeData.contact.address;
    const hours = cafeData.contact.hours;
    const rating = cafeData.social_proof.rating;
    const reviewCount = cafeData.social_proof.review_count;
    const googleMapsLink = cafeData.contact.google_maps_link || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

    return (
        <footer className="bg-gray-950 text-white py-12 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">
                    <div className="sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-2 mb-4 sm:mb-6">
                            <div className="w-10 h-10 bg-amber-600 rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-xl">☕</span>
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
                                        className="text-gray-400 hover:text-amber-400 text-sm sm:text-base font-medium transition-colors"
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
                                <MapPin size={18} className="sm:w-5 sm:h-5 text-amber-400 mt-1 flex-shrink-0" />
                                <span className="text-gray-400 font-medium text-xs sm:text-sm leading-relaxed">{address}</span>
                            </li>
                            {phoneNumber && (
                                <li className="flex items-center gap-3">
                                    <Phone size={18} className="sm:w-5 sm:h-5 text-amber-400 flex-shrink-0" />
                                    <a href={`tel:${phoneNumber}`} className="text-gray-400 hover:text-amber-400 text-sm sm:text-base font-medium transition-colors">
                                        {phoneNumber}
                                    </a>
                                </li>
                            )}
                            <li className="flex items-center gap-3">
                                <Clock size={18} className="sm:w-5 sm:h-5 text-amber-400 flex-shrink-0" />
                                <span className="text-gray-400 text-sm sm:text-base font-medium">{hours}</span>
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
                        </div>
                    </div> */}
                </div>

                <div className="pt-8 sm:pt-12 border-t border-gray-800">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
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

