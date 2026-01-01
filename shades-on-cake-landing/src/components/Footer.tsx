"use client";

import { Instagram, Facebook, Twitter, Heart } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#2D241E] text-white py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-3xl font-playfair font-bold text-[#DB2777] mb-6">Shades On Cake</h2>
                        <p className="text-gray-400 text-lg max-w-md leading-relaxed">
                            Shades On Cake is a highly rated bakery in Vesu, Surat, known for its beautiful designer cakes and delicious flavours. We make every celebration special.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#hero" className="hover:text-[#DB2777] transition-colors">Home</a></li>
                            <li><a href="#services" className="hover:text-[#DB2777] transition-colors">Flavours</a></li>
                            <li><a href="#gallery" className="hover:text-[#DB2777] transition-colors">Gallery</a></li>
                            <li><a href="#location" className="hover:text-[#DB2777] transition-colors">Location</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-6">Connect</h3>
                        <div className="flex gap-4 mb-8">
                            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#DB2777] transition-all">
                                <Instagram size={24} />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#DB2777] transition-all">
                                <Facebook size={24} />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#DB2777] transition-all">
                                <Twitter size={24} />
                            </a>
                        </div>
                        <p className="text-gray-400">
                            084695 20030<br />
                            Vesu, Surat
                        </p>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-gray-500 text-sm">
                    <p>© 2026 Shades On Cake. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Made with <Heart size={14} className="text-[#DB2777] fill-[#DB2777]" /> in Surat
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
