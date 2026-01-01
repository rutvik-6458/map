"use client";

import React from "react";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

export default function Location() {
    return (
        <section id="location" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Visit Us in Vesu</h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                Experience the warmth of freshly baked stories. We are located in the heart of Vesu, Surat.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-amber-100 p-3 rounded-xl text-amber-900">
                                    <MapPin />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Our Address</h4>
                                    <p className="text-slate-600">The Baking Stories, 40, off VIP 2 Road, beside Kothari Granites, behind Bhagwan Mahavir College, Vesu, Surat, Gujarat 395007</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-amber-100 p-3 rounded-xl text-amber-900">
                                    <Clock />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Opening Hours</h4>
                                    <p className="text-slate-600">Open · Closes 11:30 pm</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-amber-100 p-3 rounded-xl text-amber-900">
                                    <Phone />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">Call Us</h4>
                                    <p className="text-slate-600">096627 14166</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <a
                                href="https://maps.app.goo.gl/9pRrvL4Hxa1Yajko8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-3 bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all shadow-xl"
                            >
                                <Navigation size={20} />
                                <span>Get Directions on Google Maps</span>
                            </a>
                        </div>
                    </div>

                    <div className="h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.4225090312816!2d72.79597869999999!3d21.135577599999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be05204cd422433%3A0x5a45dd10fe1fbe83!2sTBS%20%2F%20The%20Baking%20Stories%20%7C%20Cafe%20Bakery%20Patisserie%20%7C!5e0!3m2!1sen!2sin!4v1767245577630!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
