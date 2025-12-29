"use client";

import { MapPin, Phone, Clock, Mail, Navigation } from "lucide-react";

export default function Location() {
    return (
        <section id="location" className="section-padding">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-1/2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-bold mb-6">
                            <MapPin className="w-4 h-4" />
                            Find Us
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 font-serif leading-tight">
                            Visit Us in Vesu
                        </h2>

                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6 text-orange-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Our Address</h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        SNS Atria, Besides Happy Excelencia, <br />
                                        Opp. Jolly Party Plot, Vesu, <br />
                                        Surat, Gujarat 395007
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-6 h-6 text-orange-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Opening Hours</h4>
                                    <p className="text-gray-600">Open daily: 10:00 AM – 11:00 PM</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-6 h-6 text-orange-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-1">Contact</h4>
                                    <p className="text-gray-600">096647 21479</p>
                                </div>
                            </div>

                            <div className="pt-4">
                                <a
                                    href="https://maps.app.goo.gl/c5QyVGGJqfriCeQ36"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition-colors"
                                >
                                    <Navigation className="w-5 h-5" />
                                    Get Live Directions
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 h-[450px] lg:h-auto min-h-[400px] relative rounded-3xl overflow-hidden shadow-2xl">
                        <iframe
                            src={`https://www.google.com/maps?q=${encodeURIComponent("Moonstruck Coffee Vesu Surat")}&output=embed`}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale contrast-125"
                            title="Moonstruck Coffee Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
