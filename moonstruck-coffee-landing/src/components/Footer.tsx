"use client";

import Link from "next/link";
import { Coffee, Instagram, Facebook, Twitter, Mail, Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-20 pb-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="lg:col-span-1">
                        <Link href="/" className="text-2xl font-bold mb-6 block">
                            Moonstruck<span className="text-orange-600"> Coffee</span>
                        </Link>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            A well-loved café in Vesu, Surat, known for its calm ambience, quality coffee and welcoming vibe. Your peaceful escape in the city.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-600 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-600 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-600 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-white transition-colors">Our Story</a></li>
                            <li><a href="#menu" className="hover:text-white transition-colors">Menu</a></li>
                            <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
                            <li><a href="#location" className="hover:text-white transition-colors">Visit Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Explore</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors">Cold Brews</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Desserts</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Brunch Special</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Work Friendly Spaces</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Newsletter</h4>
                        <p className="text-gray-400 mb-6 text-sm">Join our community and get updates on new menu items and events.</p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="bg-gray-800 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-2 focus:ring-orange-600 outline-none"
                            />
                            <button className="bg-orange-600 px-4 py-2 rounded-lg font-bold text-sm hover:bg-orange-700 transition-colors">
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Moonstruck Coffee. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-sm flex items-center gap-1">
                        Made with <Heart className="w-4 h-4 text-red-500" /> in Surat
                    </p>
                </div>
            </div>
        </footer>
    );
}
