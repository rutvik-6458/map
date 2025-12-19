"use client";

import { Pin, Phone, Clock, Navigation, Copy, Check } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Location() {
    const [copied, setCopied] = useState(false);
    const address = "C-203, Aagam Viviana, Opp. Florence, Vesu, Surat, Gujarat 395007";
    const mapsUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyA_NOT_REAL_KEY&q=Livestream+Coffee+Vesu+Aagam+Viviana+Surat`;
    // Using a standard embed link for demo
    const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.144445892543!2d72.7686523!3d21.1466657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be053b28aaaaaab%3A0xe9f798150c9f8753!2sAagam%20Viviana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

    const handleCopy = () => {
        navigator.clipboard.writeText(address);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="location" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-stretch">
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-sm font-bold text-amber-800 uppercase tracking-[0.3em]">Visit Us</h2>
                            <h3 className="text-4xl md:text-5xl font-serif font-black text-stone-900 leading-tight italic">
                                In the heart of <br />
                                <span className="text-amber-800">Vesu, Surat</span>
                            </h3>
                        </div>

                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center">
                                    <Pin className="w-6 h-6" />
                                </div>
                                <div className="space-y-2">
                                    <div className="text-stone-400 font-bold uppercase tracking-widest text-xs">Address</div>
                                    <p className="text-xl font-bold italic text-stone-800 leading-relaxed max-w-sm">
                                        {address}
                                    </p>
                                    <button
                                        onClick={handleCopy}
                                        className="flex items-center gap-2 text-amber-800 font-bold text-sm uppercase tracking-wider hover:opacity-70 transition-opacity"
                                    >
                                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                        {copied ? "Copied!" : "Copy Address"}
                                    </button>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-100 text-blue-900 flex items-center justify-center">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div className="space-y-2">
                                    <div className="text-stone-400 font-bold uppercase tracking-widest text-xs">Hours</div>
                                    <p className="text-xl font-bold italic text-stone-800">
                                        Open Daily: 10:00 AM - 12:00 AM
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-green-100 text-green-900 flex items-center justify-center">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div className="space-y-2">
                                    <div className="text-stone-400 font-bold uppercase tracking-widest text-xs">Contact</div>
                                    <a href="tel:09376229229" className="text-xl font-bold italic text-stone-800 hover:text-amber-800 transition-colors">
                                        +91 93762 29229
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4">
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Livestream+Coffee+Vesu+Aagam+Viviana"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-stone-900 text-white font-bold text-lg hover:bg-stone-800 transition-all active:scale-95 shadow-xl shadow-stone-900/10"
                            >
                                <Navigation className="w-5 h-5 fill-current" />
                                Get Real-Time Directions
                            </a>
                        </div>
                    </div>

                    <div className="min-h-[400px] lg:min-h-full rounded-[3rem] overflow-hidden border-8 border-stone-50 shadow-2xl relative group">
                        <iframe
                            src={embedUrl}
                            className="w-full h-full grayscale-[50%] group-hover:grayscale-0 transition-all duration-1000"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-stone-900/80 to-transparent flex justify-between items-end">
                            <div className="text-white space-y-1">
                                <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">Location Hub</div>
                                <div className="text-xl font-black italic">Aagam Viviana</div>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                                <Pin className="w-6 h-6" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
