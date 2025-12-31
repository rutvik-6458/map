"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Navigation, MessageCircle } from "lucide-react";

export default function Location() {
    const address = "G-47, J9 High Street, Near L. P. Savani School, Canal Road, VIP Rd, Vesu, Surat, Gujarat 395007";
    const hours = "Open daily, closes at 10:45 pm";
    const phoneNumber = "063562 61212";
    const whatsappNumber = phoneNumber.replace(/\s/g, "");
    const googleMapsLink = "https://www.google.com/maps/dir/?api=1&destination=G-47+J9+High+Street+Near+L.+P.+Savani+School+Canal+Road+VIP+Rd+Vesu+Surat+Gujarat+395007";
    // Google Maps embed URL - using search query format for better reliability
    const googleMapsIframe = "https://maps.google.com/maps?q=The+Star+Cafe+G-47+J9+High+Street+Near+L.+P.+Savani+School+Canal+Road+VIP+Rd+Vesu+Surat+Gujarat+395007&t=&z=15&ie=UTF8&iwloc=&output=embed";

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white" id="location">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gray-950 rounded-[2rem] sm:rounded-[3rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-gray-800"
                >
                    <div className="lg:w-1/2 p-6 sm:p-10 md:p-14 lg:p-20 text-white flex flex-col justify-center">
                        <div className="mb-10 sm:mb-12">
                            <div className="inline-flex items-center gap-2 bg-amber-600/20 text-amber-400 px-4 py-2 rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 sm:mb-6">
                                <Navigation size={14} />
                                <span>Find Us</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-8 tracking-tight">Visit The Star Cafe</h2>
                            <p className="text-gray-400 text-base sm:text-lg font-medium leading-relaxed">
                                Located in the heart of Vesu, Surat. A cozy neighborhood cafe perfect for small gatherings and casual meetups.
                            </p>
                        </div>

                        <div className="space-y-6 sm:space-y-10 md:space-y-12">
                            <div className="flex gap-4 sm:gap-6 md:gap-8 group">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-amber-600 rounded-2xl md:rounded-3xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-amber-500/20 transition-transform group-hover:rotate-6">
                                    <MapPin size={24} className="text-white sm:hidden" />
                                    <MapPin size={30} className="text-white hidden sm:block" />
                                </div>
                                <div>
                                    <p className="text-amber-500 font-black uppercase tracking-widest text-[10px] mb-1 sm:mb-2 text-opacity-80">Our Address</p>
                                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-tight text-gray-100">{address}</p>
                                </div>
                            </div>

                            <div className="flex gap-4 sm:gap-6 md:gap-8 group">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-green-500 rounded-2xl md:rounded-3xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/20 transition-transform group-hover:-rotate-6">
                                    <Clock size={24} className="text-white sm:hidden" />
                                    <Clock size={30} className="text-white hidden sm:block" />
                                </div>
                                <div>
                                    <p className="text-green-500 font-black uppercase tracking-widest text-[10px] mb-1 sm:mb-2 text-opacity-80">Opening Hours</p>
                                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-tight text-gray-100">{hours}</p>
                                </div>
                            </div>

                            <div className="flex gap-4 sm:gap-6 md:gap-8 group">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-500 rounded-2xl md:rounded-3xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/20 transition-transform group-hover:rotate-6">
                                    <Phone size={24} className="text-white sm:hidden" />
                                    <Phone size={30} className="text-white hidden sm:block" />
                                </div>
                                <div>
                                    <p className="text-blue-500 font-black uppercase tracking-widest text-[10px] mb-1 sm:mb-2 text-opacity-80">Contact</p>
                                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-tight text-gray-100">{phoneNumber}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 sm:mt-16 md:mt-20 flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <a
                                href={googleMapsLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto"
                            >
                                <button className="bg-white text-gray-950 px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-xl sm:rounded-2xl md:rounded-3xl font-black text-base sm:text-lg md:text-xl flex items-center gap-3 sm:gap-4 hover:bg-amber-600 hover:text-white transition-all shadow-2xl active:scale-95 group w-full justify-center">
                                    Get Directions
                                    <Navigation size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </button>
                            </a>
                            {whatsappNumber && (
                                <a
                                    href={`https://wa.me/${whatsappNumber}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-auto"
                                >
                                    <button className="bg-green-600 text-white px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-xl sm:rounded-2xl md:rounded-3xl font-black text-base sm:text-lg md:text-xl flex items-center gap-3 sm:gap-4 hover:bg-green-700 transition-all shadow-2xl active:scale-95 group w-full justify-center">
                                        <MessageCircle size={20} />
                                        WhatsApp
                                    </button>
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="lg:w-1/2 h-[350px] sm:h-[450px] md:h-[500px] lg:h-auto min-h-[400px] lg:min-h-[600px] relative bg-gray-900 overflow-hidden lg:rounded-r-[3.5rem]">
                        <iframe
                            src={googleMapsIframe}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="The Star Cafe Location"
                            className="absolute inset-0 w-full h-full"
                        ></iframe>

                        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-950 to-transparent hidden lg:block pointer-events-none"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

