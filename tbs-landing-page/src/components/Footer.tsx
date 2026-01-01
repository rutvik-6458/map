"use client";

import React from "react";
import { Instagram, Facebook, Twitter, Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-16">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold text-white mb-6 tracking-tighter">TBS / The Baking Stories</h3>
                        <p className="max-w-sm mb-8 leading-relaxed">
                            The Baking Stories (TBS) is a popular bakery, cafe, and patisserie in Vesu, Surat,
                            loved for its high-quality bakes, delicious cafe food, and welcoming atmosphere.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="p-3 bg-slate-800 rounded-full hover:bg-amber-800 transition-colors text-white">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="p-3 bg-slate-800 rounded-full hover:bg-amber-800 transition-colors text-white">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="p-3 bg-slate-800 rounded-full hover:bg-amber-800 transition-colors text-white">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><a href="#home" className="hover:text-amber-500 transition-colors">Home</a></li>
                            <li><a href="#menu" className="hover:text-amber-500 transition-colors">Menu</a></li>
                            <li><a href="#gallery" className="hover:text-amber-500 transition-colors">Gallery</a></li>
                            <li><a href="#location" className="hover:text-amber-500 transition-colors">Location</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact</h4>
                        <ul className="space-y-4 text-sm">
                            <li>40, off VIP 2 Road, beside Kothari Granites, Vesu, Surat</li>
                            <li>096627 14166</li>
                            <li>Open until 11:30 PM</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm">
                        © {new Date().getFullYear()} TBS / The Baking Stories. All rights reserved.
                    </p>
                    <p className="text-sm flex items-center gap-1">
                        Made with <Heart size={14} className="text-rose-500 fill-rose-500" /> in Surat
                    </p>
                </div>
            </div>
        </footer>
    );
}
