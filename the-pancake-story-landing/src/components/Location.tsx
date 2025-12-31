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
    const googleMapsIframe = (cafeData.contact as any).google_maps_embed_link || `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
    const whatsappNumber = phoneNumber
        ? `91${phoneNumber.replace(/\s+/g, "").replace(/^0/, "")}`
        : null;
    const whatsappLink = whatsappNumber ? `https://wa.me/${whatsappNumber}` : null;

    return (
        <section className="py-12 md:py-24 bg-white" id="location">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gray-950 rounded-2xl md:rounded-[3.5rem] overflow-hidden flex flex-col lg:flex-row border border-gray-800"
                >
                    <div className="lg:w-1/2 p-6 md:p-12 lg:p-20 text-white flex flex-col justify-center">
                        <div className="mb-8 md:mb-12">
                            <div className="inline-flex items-center gap-2 bg-orange-600/20 text-orange-400 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-bold tracking-widest uppercase mb-4 md:mb-6">
                                <Navigation size={14} />
                                <span>Find Us</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-8 tracking-tight">Visit {cafeData.brand.business_name}</h2>
                            <p className="text-gray-400 text-base md:text-lg font-medium leading-relaxed">
                                {cafeData.content_blocks.about_paragraph}
                            </p>
                        </div>

                        <div className="space-y-8 md:space-y-12">
                            <div className="flex gap-4 md:gap-8 group">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-orange-600 rounded-2xl md:rounded-3xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:rotate-6">
                                    <MapPin size={24} className="text-white md:w-[30px] md:h-[30px]" />
                                </div>
                                <div>
                                    <p className="text-orange-500 font-black uppercase tracking-widest text-[10px] mb-2">Our Address</p>
                                    <p className="text-lg md:text-xl lg:text-2xl font-bold leading-tight text-gray-100">{address}</p>
                                </div>
                            </div>

                            <div className="flex gap-4 md:gap-8 group">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-pink-500 rounded-2xl md:rounded-3xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:-rotate-6">
                                    <Clock size={24} className="text-white md:w-[30px] md:h-[30px]" />
                                </div>
                                <div>
                                    <p className="text-pink-500 font-black uppercase tracking-widest text-[10px] mb-2">Opening Hours</p>
                                    <p className="text-lg md:text-xl lg:text-2xl font-bold leading-tight text-gray-100">{hours}</p>
                                </div>
                            </div>

                            {phoneNumber && (
                                <div className="flex gap-4 md:gap-8 group">
                                    <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-500 rounded-2xl md:rounded-3xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:rotate-6">
                                        <Phone size={24} className="text-white md:w-[30px] md:h-[30px]" />
                                    </div>
                                    <div>
                                        <p className="text-blue-500 font-black uppercase tracking-widest text-[10px] mb-2">Contact</p>
                                        <a href={`tel:${phoneNumber}`} className="text-lg md:text-xl lg:text-2xl font-bold leading-tight text-gray-100 hover:text-orange-400 transition-colors">
                                            {phoneNumber}
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="mt-8 md:mt-20 flex flex-col sm:flex-row gap-3 md:gap-4">
                            <a
                                href={googleMapsLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto"
                            >
                                <button className="bg-white text-gray-950 px-6 md:px-8 lg:px-12 py-4 md:py-5 lg:py-6 rounded-2xl md:rounded-3xl font-black text-base md:text-lg lg:text-xl flex items-center justify-center gap-3 md:gap-4 hover:bg-orange-600 hover:text-white transition-all active:scale-95 group w-full">
                                    Get Directions
                                    <Navigation size={20} className="md:w-6 md:h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </a>
                            {whatsappLink && (
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto"
                                >
                                    <button className="bg-green-600 text-white px-6 md:px-8 lg:px-12 py-4 md:py-5 lg:py-6 rounded-2xl md:rounded-3xl font-black text-base md:text-lg lg:text-xl flex items-center justify-center gap-3 md:gap-4 hover:bg-green-700 transition-all active:scale-95 group w-full">
                                        <MessageCircle size={20} className="md:w-6 md:h-6" />
                                        WhatsApp Us
                                    </button>
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="lg:w-1/2 h-[350px] md:h-[450px] lg:h-auto lg:min-h-[600px] relative bg-gray-900 lg:rounded-r-[3.5rem] overflow-hidden">
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




