"use client";

import { businessData } from "./data";
import { Coffee, Instagram, Facebook, Twitter, ArrowUp, Heart } from "lucide-react";

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-gray-900 pt-24 pb-12 text-white overflow-hidden relative">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-4 gap-16 mb-20">
                    <div className="lg:col-span-2">
                        <div className="text-4xl font-black tracking-tighter mb-8 text-orange-500 uppercase">
                            {businessData.brand.business_name}
                        </div>
                        <p className="text-xl text-gray-400 font-medium mb-10 max-w-md leading-relaxed">
                            {businessData.brand.short_tagline_options[0]}
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center text-white hover:bg-orange-600 hover:scale-110 transition-all duration-300"
                                >
                                    <Icon size={24} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="text-sm font-black text-white/30 uppercase tracking-[0.2em] mb-8">Navigation</p>
                        <ul className="space-y-4">
                            {["Home", "Why Us", "Menu", "Reviews", "FAQ", "Location"].map((item) => (
                                <li key={item}>
                                    <button
                                        onClick={() => document.getElementById(item.toLowerCase().replace(' ', '-'))?.scrollIntoView({ behavior: 'smooth' })}
                                        className="text-lg font-bold text-gray-400 hover:text-orange-500 transition-colors uppercase tracking-tight"
                                    >
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="text-sm font-black text-white/30 uppercase tracking-[0.2em] mb-8">Contact Us</p>
                        <p className="text-lg font-bold text-gray-400 mb-6 leading-relaxed uppercase">
                            {businessData.contact.address}
                        </p>
                        <a
                            href={`tel:${businessData.contact.phone.replace(/\s+/g, '')}`}
                            className="text-2xl font-black text-white hover:text-orange-500 transition-colors tracking-widest"
                        >
                            {businessData.contact.phone}
                        </a>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                    <p className="text-gray-500 font-medium flex items-center gap-2">
                        © 2024 {businessData.brand.business_name}. Made with <Heart size={16} className="text-orange-600 fill-orange-600" /> in Surat
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-full text-white font-black text-sm transition-all"
                    >
                        BACK TO TOP <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute -bottom-20 -right-20 text-[20rem] font-black text-white/5 select-none pointer-events-none transform rotate-12">
                FRIES
            </div>
        </footer>
    );
}
