"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Navigation, Phone, MessageCircle } from "lucide-react";
import { cafeData } from "@/data";

export default function Location() {
    const address = cafeData.contact.address;
    const hours = cafeData.contact.hours;
    const phoneNumber = cafeData.contact.phone;
    const googleMapsLink = cafeData.contact.google_maps_link || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    const googleMapsIframe = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
    const whatsappNumber = phoneNumber
        ? `91${phoneNumber.replace(/\s+/g, "").replace(/^0/, "")}`
        : null;
    const whatsappLink = whatsappNumber ? `https://wa.me/${whatsappNumber}` : null;

    return (
        <section className="py-24 bg-white" id="location">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gray-950 rounded-2xl sm:rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden flex flex-col lg:flex-row border border-gray-800"
                >
                    <div className="lg:w-1/2 p-6 sm:p-8 md:p-12 lg:p-20 text-white flex flex-col justify-center">
                        <div className="mb-8 sm:mb-12">
                            <div className="inline-flex items-center gap-2 bg-purple-600/20 text-purple-400 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 sm:mb-6">
                                <Navigation size={12} className="sm:w-[14px] sm:h-[14px]" />
                                <span>Find Us</span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 lg:mb-8 tracking-tight">Visit {cafeData.brand.business_name}</h2>
                            <p className="text-gray-400 text-sm sm:text-base lg:text-lg font-medium leading-relaxed">
                                {cafeData.content_blocks.about_paragraph}
                            </p>
                        </div>

                        <div className="space-y-6 sm:space-y-8 lg:space-y-12">
                            <div className="flex gap-4 sm:gap-6 lg:gap-8 group">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-purple-600 rounded-2xl sm:rounded-3xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:rotate-6">
                                    <MapPin size={20} className="sm:w-[24px] sm:h-[24px] lg:w-[30px] lg:h-[30px] text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-purple-500 font-black uppercase tracking-widest text-[10px] mb-1 sm:mb-2">Our Address</p>
                                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-tight text-gray-100 break-words">{address}</p>
                                </div>
                            </div>

                            <div className="flex gap-4 sm:gap-6 lg:gap-8 group">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-green-500 rounded-2xl sm:rounded-3xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:-rotate-6">
                                    <Clock size={20} className="sm:w-[24px] sm:h-[24px] lg:w-[30px] lg:h-[30px] text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-green-500 font-black uppercase tracking-widest text-[10px] mb-1 sm:mb-2">Opening Hours</p>
                                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-tight text-gray-100">{hours}</p>
                                </div>
                            </div>

                            {phoneNumber && (
                                <div className="flex gap-4 sm:gap-6 lg:gap-8 group">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-500 rounded-2xl sm:rounded-3xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:rotate-6">
                                        <Phone size={20} className="sm:w-[24px] sm:h-[24px] lg:w-[30px] lg:h-[30px] text-white" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-blue-500 font-black uppercase tracking-widest text-[10px] mb-1 sm:mb-2">Contact</p>
                                        <a href={`tel:${phoneNumber}`} className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-tight text-gray-100 hover:text-purple-400 transition-colors break-all">
                                            {phoneNumber}
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="mt-12 sm:mt-16 lg:mt-20 flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <a
                                href={googleMapsLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto"
                            >
                                <button className="bg-white text-gray-950 px-6 py-4 sm:px-8 sm:py-5 lg:px-12 lg:py-6 rounded-2xl sm:rounded-3xl font-black text-base sm:text-lg lg:text-xl flex items-center gap-3 sm:gap-4 hover:bg-purple-600 hover:text-white transition-all active:scale-95 group w-full sm:w-auto justify-center">
                                    Get Directions
                                    <Navigation size={20} className="sm:w-6 sm:h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </a>
                            {whatsappLink && (
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto"
                                >
                                    <button className="bg-green-600 text-white px-6 py-4 sm:px-8 sm:py-5 lg:px-12 lg:py-6 rounded-2xl sm:rounded-3xl font-black text-base sm:text-lg lg:text-xl flex items-center gap-3 sm:gap-4 hover:bg-green-700 transition-all active:scale-95 group w-full sm:w-auto justify-center">
                                        <MessageCircle size={20} className="sm:w-6 sm:h-6" />
                                        WhatsApp Us
                                    </button>
                                </a>
                            )}
                            {/* {phoneNumber && (
                                <a href={`tel:${phoneNumber}`}>
                                    <button className="bg-purple-600 text-white px-12 py-6 rounded-3xl font-black text-xl flex items-center gap-4 hover:bg-purple-700 transition-all active:scale-95 w-full sm:w-auto justify-center">
                                        <Phone size={24} />
                                        Call Now
                                    </button>
                                </a>
                            )} */}
                        </div>
                    </div>

                    <div className="lg:w-1/2 h-[400px] sm:h-[500px] lg:h-auto min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] relative bg-gray-900 rounded-b-2xl sm:rounded-b-[2.5rem] lg:rounded-r-[3.5rem] lg:rounded-bl-none overflow-hidden">
                        <iframe
                            src={googleMapsIframe}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={`${cafeData.brand.business_name} Location`}
                            className="absolute inset-0 w-full h-full"
                        ></iframe>

                        <div className="absolute inset-y-0 left-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-gray-950 to-transparent hidden lg:block pointer-events-none"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
