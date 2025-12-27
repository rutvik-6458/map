"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Navigation, Phone } from "lucide-react";
import { cafeData } from "@/data";

export default function Location() {
    const address = cafeData.contact.address;
    const hours = cafeData.contact.hours;
    const phoneNumber = cafeData.contact.phone;
    const googleMapsLink = cafeData.contact.google_maps_link || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    const googleMapsIframe = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white" id="location">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gray-950 rounded-2xl sm:rounded-3xl lg:rounded-[3.5rem] overflow-hidden flex flex-col lg:flex-row border border-gray-800"
                >
                    <div className="lg:w-1/2 p-6 sm:p-8 md:p-12 lg:p-20 text-white flex flex-col justify-center">
                        <div className="mb-8 sm:mb-10 md:mb-12">
                            <div className="inline-flex items-center gap-2 bg-amber-600/20 text-amber-400 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 sm:mb-6">
                                <Navigation size={12} className="sm:w-3.5 sm:h-3.5" />
                                <span>Find Us</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 md:mb-8 tracking-tight">Visit {cafeData.brand.business_name}</h2>
                            <p className="text-gray-400 text-sm sm:text-base md:text-lg font-medium leading-relaxed">
                                {cafeData.content_blocks.about_paragraph}
                            </p>
                        </div>

                        <div className="space-y-8 sm:space-y-10 md:space-y-12">
                            <div className="flex gap-4 sm:gap-6 md:gap-8 group">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-amber-600 rounded-2xl sm:rounded-3xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:rotate-6">
                                    <MapPin size={22} className="sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                                </div>
                                <div>
                                    <p className="text-amber-500 font-black uppercase tracking-widest text-[10px] sm:text-xs mb-1 sm:mb-2">Our Address</p>
                                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-tight text-gray-100">{address}</p>
                                </div>
                            </div>

                            <div className="flex gap-4 sm:gap-6 md:gap-8 group">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-green-500 rounded-2xl sm:rounded-3xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:-rotate-6">
                                    <Clock size={22} className="sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                                </div>
                                <div>
                                    <p className="text-green-500 font-black uppercase tracking-widest text-[10px] sm:text-xs mb-1 sm:mb-2">Opening Hours</p>
                                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-tight text-gray-100">{hours}</p>
                                </div>
                            </div>

                            {phoneNumber && (
                                <div className="flex gap-4 sm:gap-6 md:gap-8 group">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-500 rounded-2xl sm:rounded-3xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:rotate-6">
                                        <Phone size={22} className="sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-blue-500 font-black uppercase tracking-widest text-[10px] sm:text-xs mb-1 sm:mb-2">Contact</p>
                                        <a href={`tel:${phoneNumber}`} className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-tight text-gray-100 hover:text-amber-400 transition-colors">
                                            {phoneNumber}
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="mt-12 sm:mt-16 md:mt-20 flex flex-col sm:flex-row gap-4">
                            <a
                                href={googleMapsLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto"
                            >
                                <button className="bg-white text-gray-950 px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-2xl sm:rounded-3xl font-black text-base sm:text-lg md:text-xl flex items-center justify-center gap-3 sm:gap-4 hover:bg-amber-600 hover:text-white transition-all active:scale-95 group w-full sm:w-auto">
                                    Get Directions
                                    <Navigation size={20} className="sm:w-6 sm:h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className="lg:w-1/2 h-[400px] sm:h-[500px] md:h-[600px] lg:h-auto lg:min-h-[600px] relative bg-gray-900 rounded-t-2xl sm:rounded-t-3xl lg:rounded-t-none lg:rounded-r-[3.5rem] overflow-hidden">
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

                        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-950 to-transparent hidden lg:block pointer-events-none"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

