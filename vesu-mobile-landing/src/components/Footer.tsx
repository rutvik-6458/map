"use client";
import React from "react";
import { Facebook, Instagram, Twitter, Smartphone, Send } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white pt-24 pb-12 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                {/* Newsletter / CTA Section */}
                <div className="bg-blue-600 rounded-[3rem] p-8 md:p-16 mb-24 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-900/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

                    <div className="relative z-10 max-w-xl text-center md:text-left">
                        <h3 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">Need a quick fix?</h3>
                        <p className="text-blue-100 text-xl font-medium">Visit us today and get your mobile device repaired by Vesu's most trusted technician.</p>
                    </div>

                    <div className="relative z-10">
                        <a href="#location">
                            <button className="bg-white text-blue-600 px-12 py-6 rounded-3xl font-black text-xl hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.3)] transition-all active:scale-95 whitespace-nowrap">
                                Visit Us Now
                            </button>
                        </a>
                    </div>
                </div>

                <div className="grid md:grid-cols-12 gap-16 mb-24">
                    <div className="md:col-span-5">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-200">V</div>
                            <span className="text-3xl font-black text-gray-900 tracking-tighter">Vesu Mobile</span>
                        </div>
                        <p className="text-gray-500 text-xl leading-relaxed font-medium mb-10 max-w-md">
                            Known for reliable and knowledgeable mobile repair services in Surat. Expert handling of water damage and technical troubleshooting.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: <Facebook size={22} />, label: "Facebook" },
                                { icon: <Instagram size={22} />, label: "Instagram" },
                                { icon: <Twitter size={22} />, label: "Twitter" }
                            ].map((social, i) => (
                                <a key={i} href="#" className="w-14 h-14 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center text-gray-400 hover:text-blue-600 hover:bg-white hover:shadow-xl hover:shadow-blue-100 transition-all duration-300">
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="text-gray-900 font-black uppercase tracking-widest text-xs mb-8">Navigation</h4>
                        <ul className="space-y-6 text-gray-500 font-bold text-lg">
                            <li><a href="#" className="hover:text-blue-600 transition-colors">Home</a></li>
                            <li><a href="#services" className="hover:text-blue-600 transition-colors">Services</a></li>
                            <li><a href="#gallery" className="hover:text-blue-600 transition-colors">Gallery</a></li>
                            <li><a href="#location" className="hover:text-blue-600 transition-colors">Location</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="text-gray-900 font-black uppercase tracking-widest text-xs mb-8">Specialties</h4>
                        <ul className="space-y-6 text-gray-500 font-bold text-lg">
                            <li className="flex items-center gap-2">iPhone Repair</li>
                            <li className="flex items-center gap-2">Water Damage</li>
                            <li className="flex items-center gap-2">Android Service</li>
                            <li className="flex items-center gap-2">Screen Fix</li>
                        </ul>
                    </div>

                    <div className="md:col-span-3">
                        <h4 className="text-gray-900 font-black uppercase tracking-widest text-xs mb-8">Find Us</h4>
                        <p className="text-gray-500 font-bold text-lg leading-relaxed">
                            Someshwar Square, Vesu<br />
                            Surat, Gujarat 395007
                        </p>
                        <div className="mt-8 pt-8 border-t border-gray-100">
                            <p className="text-blue-600 font-black text-xl tracking-tight">Open Daily</p>
                            <p className="text-gray-400 font-medium">Until 9:30 PM</p>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-gray-400 font-bold text-sm">© 2025 Vesu Mobile. All rights reserved.</p>
                    <div className="flex gap-8 text-gray-400 font-bold text-sm">
                        <a href="#" className="hover:text-gray-900">Privacy</a>
                        <a href="#" className="hover:text-gray-900">Terms</a>
                        <a href="#" className="hover:text-gray-900">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
