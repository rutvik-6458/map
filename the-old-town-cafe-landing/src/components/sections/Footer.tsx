"use client";

import { Instagram, Facebook, Twitter, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white pt-20 pb-10">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center">
                                <span className="text-white font-playfair font-bold text-xl">OT</span>
                            </div>
                            <span className="font-outfit font-bold text-2xl tracking-tight">
                                The Old Town Cafe
                            </span>
                        </div>
                        <p className="text-slate-400 leading-relaxed mb-8">
                            Surat's favorite budget-friendly cafe in Vesu. We serve delicious food with a side of cozy vibes and warm service.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-amber-600 hover:border-amber-600 transition-colors">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {["Home", "Highlights", "Menu", "Gallery", "FAQ", "Location"].map((link) => (
                                <li key={link}>
                                    <a href={`#${link.toLowerCase()}`} className="text-slate-400 hover:text-amber-500 transition-colors">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-slate-400">
                                <Phone className="w-5 h-5 text-amber-600" />
                                084607 07091
                            </li>
                            <li className="flex items-start gap-3 text-slate-400">
                                <MapPin className="w-5 h-5 text-amber-600 shrink-0" />
                                Times Corner, G-19, Vesu,<br />Surat, Gujarat 395007
                            </li>
                            <li className="flex items-center gap-3 text-slate-400">
                                <Mail className="w-5 h-5 text-amber-600" />
                                hello@theoldtowncafe.com
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Newsletter</h4>
                        <p className="text-slate-400 mb-6">Get updates on our weekly specials and new menu items.</p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full bg-slate-800 border-none rounded-full py-4 px-6 focus:ring-2 focus:ring-amber-600 outline-none text-white"
                            />
                            <button className="absolute right-2 top-2 bg-amber-600 text-white px-4 py-2 rounded-full hover:bg-amber-700 transition-colors">
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-slate-800 text-center text-slate-500 text-sm">
                    <p>© {new Date().getFullYear()} The Old Town Cafe. All rights reserved. Designed for excellence.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
