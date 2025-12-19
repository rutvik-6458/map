"use client";

import { businessData } from "./data";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";

export function Location() {
    return (
        <section id="location" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/5 rounded-full -translate-y-1/2 translate-x-1/2" />

                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-10 uppercase leading-tight">
                                Find Us In <br />
                                <span className="text-orange-600">The City</span>
                            </h2>

                            <div className="space-y-8 mb-12">
                                <div className="flex gap-6">
                                    <div className="h-14 w-14 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0">
                                        <MapPin size={28} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Our Location</p>
                                        <p className="text-xl font-bold text-gray-900 leading-tight uppercase">{businessData.contact.address}</p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="h-14 w-14 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-900 shrink-0">
                                        <Clock size={28} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Opening Hours</p>
                                        <p className="text-xl font-bold text-gray-900 leading-tight uppercase">{businessData.contact.hours}</p>
                                    </div>
                                </div>

                                <div className="flex gap-6">
                                    <div className="h-14 w-14 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-900 shrink-0">
                                        <Phone size={28} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Call Us</p>
                                        <p className="text-xl font-bold text-gray-900 leading-tight uppercase tracking-widest">{businessData.contact.phone}</p>
                                    </div>
                                </div>
                            </div>

                            <a
                                href={businessData.contact.google_maps_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center gap-3 w-full py-6 bg-orange-600 text-white rounded-3xl font-black text-xl hover:bg-orange-700 transition-all shadow-xl shadow-orange-600/20"
                            >
                                <Navigation size={24} className="group-hover:rotate-12 transition-transform" /> GET DIRECTIONS
                            </a>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 h-[500px] lg:h-full min-h-[500px] rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119066.41700543663!2d72.71383377771746!3d21.15934030616999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04df064375b47%3A0x6734e5695026c483!2sLet's%20Meet%20Caf%C3%A9!5e0!3m2!1sen!2sin!4v1703000000000!5m2!1sen!2sin"
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
