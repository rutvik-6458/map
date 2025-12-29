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
    const googleMapsLink = "https://maps.app.goo.gl/DAAaXGh8XbTNKFkNA";
    const whatsappNumber = phoneNumber
        ? `91${phoneNumber.replace(/\s+/g, "").replace(/^0/, "")}`
        : null;
    const whatsappLink = whatsappNumber ? `https://wa.me/${whatsappNumber}` : null;

    return (
        <footer className="bg-gray-950 text-white py-12 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-4 sm:mb-6">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-amber-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-base sm:text-xl">🍵</span>
                            </div>
                            <span className="font-bold text-lg sm:text-xl tracking-tight">{cafeData.brand.business_name}</span>
                        </div>
                        <p className="text-gray-400 font-medium leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
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
                                <MapPin size={18} className="sm:w-5 sm:h-5 text-amber-400 mt-1 flex-shrink-0" />
                                <span className="text-gray-400 font-medium text-xs sm:text-sm leading-relaxed">{address}</span>
                            </li>
                            {phoneNumber && (
                                <li className="flex items-center gap-2 sm:gap-3">
                                    <Phone size={18} className="sm:w-5 sm:h-5 text-amber-400 flex-shrink-0" />
                                    <a href={`tel:${phoneNumber}`} className="text-gray-400 hover:text-amber-400 font-medium transition-colors text-xs sm:text-sm">
                                        {phoneNumber}
                                    </a>
                                </li>
                            )}
                            <li className="flex items-center gap-2 sm:gap-3">
                                <Clock size={18} className="sm:w-5 sm:h-5 text-amber-400 flex-shrink-0" />
                                <span className="text-gray-400 font-medium text-xs sm:text-sm">{hours}</span>
                            </li>
                        </ul>
                    </div>

                    {/* <div>
                        <h3 className="font-bold text-lg mb-6 uppercase tracking-widest">Connect</h3>
                        <div className="flex flex-col gap-4">
                            {whatsappLink && (
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 text-gray-400 hover:text-green-400 font-medium transition-colors"
                                >
                                    <MessageCircle size={20} />
                                    <span>WhatsApp Us</span>
                                </a>
                            )}
                            <a
                                href={googleMapsLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-gray-400 hover:text-amber-400 font-medium transition-colors"
                            >
                                <Navigation size={20} />
                                <span>Get Directions</span>
                            </a>
                        </div>
                    </div> */}
                </div>

                <div className="pt-8 sm:pt-12 border-t border-gray-800">
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


