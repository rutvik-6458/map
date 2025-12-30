"use client";
import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Navigation, MessageCircle } from "lucide-react";

export default function Location() {
    const address = "9, Aagam Emporio, University Rd, near Vatsalya Bungalows, opposite Balaji Hero, Vesu, Surat, Gujarat 395007";
    const hours = "Open daily, closes at 12:30 am";
    const phoneNumber = "099041 81348";
    const whatsappNumber = phoneNumber.replace(/\s/g, "");
    const googleMapsLink = "https://maps.app.goo.gl/KYoK2uASbmt6hhzd9";
    // Google Maps embed URL - showing Teaspresso Bubble Cafe location in Vesu, Surat with proper zoom
    // Using the place name to ensure the correct location is displayed
    const googleMapsIframe = "https://www.google.com/maps?q=Teaspresso+Bubble+Cafe,+University+Road,+Vesu,+Surat,+Gujarat+395007&hl=en&t=m&z=16&output=embed";

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white" id="location">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gray-950 rounded-[2rem] sm:rounded-[3rem] lg:rounded-[3.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-gray-800"
                >
                    <div className="lg:w-1/2 p-6 sm:p-8 md:p-12 lg:p-20 text-white flex flex-col justify-center">
                        <div className="mb-8 sm:mb-12">
                            <div className="inline-flex items-center gap-2 bg-pink-600/20 text-pink-400 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase mb-4 sm:mb-6">
                                <Navigation size={12} className="sm:w-3.5 sm:h-3.5" />
                                <span>Find Us</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 md:mb-8 tracking-tight">Visit Teaspresso Bubble Cafe</h2>
                            <p className="text-gray-400 text-base sm:text-lg font-medium leading-relaxed">
                                Located in the heart of Vesu, Surat. A popular bubble tea and waffle cafe perfect for late-night hangouts and quick bites.
                            </p>
                        </div>

                        <div className="space-y-8 sm:space-y-12">
                            <div className="flex gap-4 sm:gap-6 md:gap-8 group">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-pink-600 rounded-2xl sm:rounded-3xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-pink-500/20 transition-transform group-hover:rotate-6">
                                    <MapPin size={22} className="sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-pink-500 font-black uppercase tracking-widest text-[10px] sm:text-xs mb-1 sm:mb-2">Our Address</p>
                                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-tight text-gray-100 break-words">{address}</p>
                                </div>
                            </div>

                            <div className="flex gap-4 sm:gap-6 md:gap-8 group">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-green-500 rounded-2xl sm:rounded-3xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-500/20 transition-transform group-hover:-rotate-6">
                                    <Clock size={22} className="sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-green-500 font-black uppercase tracking-widest text-[10px] sm:text-xs mb-1 sm:mb-2">Opening Hours</p>
                                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-tight text-gray-100">{hours}</p>
                                </div>
                            </div>

                            <div className="flex gap-4 sm:gap-6 md:gap-8 group">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-500 rounded-2xl sm:rounded-3xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/20 transition-transform group-hover:rotate-6">
                                    <Phone size={22} className="sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-blue-500 font-black uppercase tracking-widest text-[10px] sm:text-xs mb-1 sm:mb-2">Contact</p>
                                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-tight text-gray-100">{phoneNumber}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 sm:mt-16 md:mt-20 flex flex-col sm:flex-row gap-3 sm:gap-4">
                            {googleMapsLink && (
                                <a
                                    href={googleMapsLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:flex-1 lg:w-auto"
                                >
                                    <button className="w-full bg-white text-gray-950 px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-2xl sm:rounded-3xl font-black text-base sm:text-lg md:text-xl flex items-center justify-center gap-3 sm:gap-4 hover:bg-pink-600 hover:text-white transition-all shadow-2xl active:scale-95 group">
                                        Get Directions
                                        <Navigation size={20} className="sm:w-6 sm:h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </button>
                                </a>
                            )}
                            {whatsappNumber && (
                                <a
                                    href={`https://wa.me/${whatsappNumber}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:flex-1 lg:w-auto"
                                >
                                    <button className="w-full bg-green-600 text-white px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 rounded-2xl sm:rounded-3xl font-black text-base sm:text-lg md:text-xl flex items-center justify-center gap-3 sm:gap-4 hover:bg-green-700 transition-all shadow-2xl active:scale-95 group">
                                        <MessageCircle size={20} className="sm:w-6 sm:h-6" />
                                        WhatsApp
                                    </button>
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="lg:w-1/2 h-[400px] sm:h-[500px] md:h-[550px] lg:h-auto lg:min-h-[600px] relative bg-gray-900 lg:rounded-r-[3.5rem] overflow-hidden order-first lg:order-last">
                        <iframe
                            src={googleMapsIframe}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Teaspresso Bubble Cafe Location"
                            className="absolute inset-0 w-full h-full"
                        ></iframe>

                        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-950 to-transparent hidden lg:block pointer-events-none"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}





