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
    const whatsappLink = phoneNumber ? `https://wa.me/${phoneNumber.replace(/\s/g, "")}` : null;

    return (
        <section className="py-24 bg-white" id="location">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gray-950 rounded-[3.5rem] overflow-hidden flex flex-col lg:flex-row border border-gray-800"
                >
                    <div className="lg:w-1/2 p-12 lg:p-20 text-white flex flex-col justify-center">
                        <div className="mb-12">
                            <div className="inline-flex items-center gap-2 bg-amber-600/20 text-amber-400 px-4 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-6">
                                <Navigation size={14} />
                                <span>Find Us</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tight">Visit {cafeData.brand.business_name}</h2>
                            <p className="text-gray-400 text-lg font-medium leading-relaxed">
                                {cafeData.content_blocks.about_paragraph}
                            </p>
                        </div>

                        <div className="space-y-12">
                            <div className="flex gap-8 group">
                                <div className="w-16 h-16 bg-amber-600 rounded-3xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:rotate-6">
                                    <MapPin size={30} className="text-white" />
                                </div>
                                <div>
                                    <p className="text-amber-500 font-black uppercase tracking-widest text-[10px] mb-2">Our Address</p>
                                    <p className="text-xl md:text-2xl font-bold leading-tight text-gray-100">{address}</p>
                                </div>
                            </div>

                            <div className="flex gap-8 group">
                                <div className="w-16 h-16 bg-green-500 rounded-3xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:-rotate-6">
                                    <Clock size={30} className="text-white" />
                                </div>
                                <div>
                                    <p className="text-green-500 font-black uppercase tracking-widest text-[10px] mb-2">Opening Hours</p>
                                    <p className="text-xl md:text-2xl font-bold leading-tight text-gray-100">{hours}</p>
                                </div>
                            </div>

                            {phoneNumber && (
                                <div className="flex gap-8 group">
                                    <div className="w-16 h-16 bg-blue-500 rounded-3xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:rotate-6">
                                        <Phone size={30} className="text-white" />
                                    </div>
                                    <div>
                                        <p className="text-blue-500 font-black uppercase tracking-widest text-[10px] mb-2">Contact</p>
                                        <a href={`tel:${phoneNumber}`} className="text-xl md:text-2xl font-bold leading-tight text-gray-100 hover:text-amber-400 transition-colors">
                                            {phoneNumber}
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="mt-20 flex flex-col sm:flex-row gap-4">
                            <a
                                href={googleMapsLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="bg-white text-gray-950 px-12 py-6 rounded-3xl font-black text-xl flex items-center gap-4 hover:bg-amber-600 hover:text-white transition-all active:scale-95 group w-full sm:w-auto justify-center">
                                    Get Directions
                                    <Navigation size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </a>
                            {whatsappLink && (
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <button className="bg-green-600 text-white px-12 py-6 rounded-3xl font-black text-xl flex items-center gap-4 hover:bg-green-700 transition-all active:scale-95 group w-full sm:w-auto justify-center">
                                        <MessageCircle size={24} />
                                        WhatsApp Us
                                    </button>
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="lg:w-1/2 h-[500px] lg:h-auto min-h-[600px] relative bg-gray-900 rounded-r-[3.5rem] overflow-hidden">
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

