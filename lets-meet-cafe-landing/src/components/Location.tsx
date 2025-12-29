"use client";

import { businessData } from "./data";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";

export function Location() {
    return (
        <section id="location" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="bg-white p-6 sm:p-8 md:p-12 lg:p-16 rounded-3xl sm:rounded-[3rem] lg:rounded-[4rem] shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-orange-600/5 rounded-full -translate-y-1/2 translate-x-1/2" />

                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-8 md:mb-10 uppercase leading-tight">
                                Find Us In <br />
                                <span className="text-orange-600">The City</span>
                            </h2>

                            <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
                                <div className="flex gap-4 sm:gap-6">
                                    <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl sm:rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                                        <MapPin size={24} className="sm:w-7 sm:h-7" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Our Location</p>
                                        <p className="text-base sm:text-lg md:text-xl font-bold text-gray-900 leading-tight uppercase break-words">{businessData.contact.address}</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 sm:gap-6">
                                    <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl sm:rounded-2xl bg-gray-50 flex items-center justify-center text-gray-900 shrink-0">
                                        <Clock size={24} className="sm:w-7 sm:h-7" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Opening Hours</p>
                                        <p className="text-base sm:text-lg md:text-xl font-bold text-gray-900 leading-tight uppercase">{businessData.contact.hours}</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 sm:gap-6">
                                    <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl sm:rounded-2xl bg-gray-50 flex items-center justify-center text-gray-900 shrink-0">
                                        <Phone size={24} className="sm:w-7 sm:h-7" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Call Us</p>
                                        <p className="text-base sm:text-lg md:text-xl font-bold text-gray-900 leading-tight uppercase tracking-widest break-all">{businessData.contact.phone}</p>
                                    </div>
                                </div>
                            </div>

                            <a
                                href={businessData.contact.google_maps_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center gap-2 sm:gap-3 w-full py-4 sm:py-5 md:py-6 bg-orange-600 text-white rounded-2xl sm:rounded-3xl font-black text-base sm:text-lg md:text-xl hover:bg-orange-700 transition-all shadow-xl shadow-orange-600/20"
                            >
                                <Navigation size={20} className="sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform" />
                                <span className="whitespace-nowrap">GET DIRECTIONS</span>
                            </a>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 h-[300px] sm:h-[400px] md:h-[500px] lg:h-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] rounded-2xl sm:rounded-3xl lg:rounded-[4rem] overflow-hidden shadow-2xl border-4 sm:border-6 lg:border-8 border-white">
                        <iframe
                            src={`https://maps.google.com/maps?q=${encodeURIComponent(`${businessData.brand.business_name} ${businessData.contact.address}`)}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
