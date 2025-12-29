"use client";

import { Pin, Phone, Clock, Navigation, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function Location() {
    const [copied, setCopied] = useState(false);
    const address = "C-203, Aagam Viviana, Opp. Florence, Vesu, Surat, Gujarat 395007";
    const locationName = "Livestream Coffee Vesu";

    // Google Maps embed URL for Livestream Coffee Vesu location
    // Using search query format that works without API key
    const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(locationName + " Vesu Surat")}&output=embed`;

    // Google Maps directions link
    const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(locationName + " " + address)}`;

    const handleCopy = () => {
        navigator.clipboard.writeText(address);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="location" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-stretch">
                    {/* Left Section - Contact Information */}
                    <div className="space-y-8 sm:space-y-10 lg:space-y-12 order-2 lg:order-1">
                        <div className="space-y-3 sm:space-y-4">
                            <h2 className="text-xs sm:text-sm font-bold text-amber-800 uppercase tracking-[0.3em]">Visit Us</h2>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-black text-stone-900 leading-tight italic">
                                In the heart of <br />
                                <span className="text-amber-800">Vesu, Surat</span>
                            </h3>
                        </div>

                        <div className="space-y-6 sm:space-y-8">
                            {/* Address Section */}
                            <div className="flex gap-4 sm:gap-6">
                                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center">
                                    <Pin className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <div className="space-y-2 flex-1 min-w-0">
                                    <div className="text-stone-400 font-bold uppercase tracking-widest text-[10px] sm:text-xs">Address</div>
                                    <p className="text-base sm:text-lg md:text-xl font-bold italic text-stone-800 leading-relaxed">
                                        {address}
                                    </p>
                                    <button
                                        onClick={handleCopy}
                                        className="flex items-center gap-2 text-amber-800 font-bold text-xs sm:text-sm uppercase tracking-wider hover:opacity-70 transition-opacity mt-1"
                                    >
                                        {copied ? <Check className="w-3 h-3 sm:w-4 sm:h-4" /> : <Copy className="w-3 h-3 sm:w-4 sm:h-4" />}
                                        {copied ? "Copied!" : "Copy Address"}
                                    </button>
                                </div>
                            </div>

                            {/* Hours Section */}
                            <div className="flex gap-4 sm:gap-6">
                                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-100 text-blue-900 flex items-center justify-center">
                                    <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <div className="space-y-2 flex-1 min-w-0">
                                    <div className="text-stone-400 font-bold uppercase tracking-widest text-[10px] sm:text-xs">Hours</div>
                                    <p className="text-base sm:text-lg md:text-xl font-bold italic text-stone-800">
                                        Open Daily: 10:00 AM - 12:00 AM
                                    </p>
                                </div>
                            </div>

                            {/* Contact Section */}
                            <div className="flex gap-4 sm:gap-6">
                                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-green-100 text-green-900 flex items-center justify-center">
                                    <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <div className="space-y-2 flex-1 min-w-0">
                                    <div className="text-stone-400 font-bold uppercase tracking-widest text-[10px] sm:text-xs">Contact</div>
                                    <a
                                        href="tel:09376229229"
                                        className="text-base sm:text-lg md:text-xl font-bold italic text-stone-800 hover:text-amber-800 transition-colors break-all"
                                    >
                                        +91 93762 29229
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Directions Button */}
                        <div className="pt-2 sm:pt-4">
                            <a
                                href={directionsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-stone-900 text-white font-bold text-sm sm:text-base md:text-lg hover:bg-stone-800 transition-all active:scale-95 shadow-xl shadow-stone-900/10 w-full sm:w-auto justify-center"
                            >
                                <Navigation className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                                <span className="whitespace-nowrap">Get Real-Time Directions</span>
                            </a>
                        </div>
                    </div>

                    {/* Right Section - Map */}
                    <div className="min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-full rounded-2xl sm:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden border-4 sm:border-6 lg:border-8 border-stone-50 shadow-2xl relative group order-1 lg:order-2">
                        <iframe
                            src={embedUrl}
                            className="w-full h-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-full grayscale-[50%] group-hover:grayscale-0 transition-all duration-1000"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                            title="Livestream Coffee Vesu Location"
                        ></iframe>
                        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 lg:p-8 bg-gradient-to-t from-stone-900/80 to-transparent flex justify-between items-end">
                            <div className="text-white space-y-1">
                                <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">Location Hub</div>
                                <div className="text-base sm:text-lg md:text-xl font-black italic">{locationName}</div>
                            </div>
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white flex-shrink-0">
                                <Pin className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
