"use client";

import Link from "next/link";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-nature-950 text-white pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-12">
            <div className="container mx-auto px-4">
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-white/10">
                    <div className="sm:col-span-2">
                        <Link href="/" className="inline-block mb-4 sm:mb-6">
                            <span className="text-2xl sm:text-3xl font-bold font-serif">
                                The Birds <span className="text-nature-400">Cafe</span>
                            </span>
                        </Link>
                        <p className="text-nature-300 text-base sm:text-lg max-w-md leading-relaxed mb-6 sm:mb-8">
                            A blissful cafe experience in Vesu, Surat. Nature-inspired ambience, delicious food, and warm service that keeps you coming back.
                        </p>
                        <div className="flex gap-3 sm:gap-4">
                            {[Instagram, Facebook, Twitter, Mail].map((Icon, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-nature-700 hover:border-nature-700 transition-all"
                                >
                                    <Icon size={18} className="sm:w-5 sm:h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6 font-serif">Quick links</h4>
                        <ul className="space-y-3 sm:space-y-4">
                            <li><Link href="#home" className="text-nature-400 hover:text-white transition-colors text-sm sm:text-base">Home</Link></li>
                            <li><Link href="#about" className="text-nature-400 hover:text-white transition-colors text-sm sm:text-base">Our Story</Link></li>
                            <li><Link href="#menu" className="text-nature-400 hover:text-white transition-colors text-sm sm:text-base">Menu Highlights</Link></li>
                            <li><Link href="#vibe" className="text-nature-400 hover:text-white transition-colors text-sm sm:text-base">Gallery</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg sm:text-xl mb-4 sm:mb-6 font-serif">Support</h4>
                        <ul className="space-y-3 sm:space-y-4">
                            <li><Link href="#faq" className="text-nature-400 hover:text-white transition-colors text-sm sm:text-base">FAQ</Link></li>
                            <li><Link href="#location" className="text-nature-400 hover:text-white transition-colors text-sm sm:text-base">Location</Link></li>
                            <li><a href="#" className="text-nature-400 hover:text-white transition-colors text-sm sm:text-base">Order Online</a></li>
                            <li><a href="#" className="text-nature-400 hover:text-white transition-colors text-sm sm:text-base">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-nature-500 text-sm">
                        © {new Date().getFullYear()} The Birds Cafe. All rights reserved.
                    </p>
                    <p className="text-nature-500 text-sm italic">
                        Developed with love for The Birds Cafe
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
