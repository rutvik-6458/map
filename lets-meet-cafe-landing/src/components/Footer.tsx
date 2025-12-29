"use client";

import { businessData } from "./data";
import { Coffee, Instagram, Facebook, Twitter, ArrowUp, Heart } from "lucide-react";

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-gray-900 pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-8 sm:pb-12 text-white overflow-hidden relative">
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 md:gap-16 mb-12 sm:mb-16 md:mb-20">
                    <div className="sm:col-span-2">
                        <div className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tighter mb-6 sm:mb-8 text-orange-500 uppercase">
                            {businessData.brand.business_name}
                        </div>
                        <p className="text-base sm:text-lg md:text-xl text-gray-400 font-medium mb-6 sm:mb-8 md:mb-10 max-w-md leading-relaxed">
                            {businessData.brand.short_tagline_options[0]}
                        </p>
                        <div className="flex gap-3 sm:gap-4">
                            {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl sm:rounded-2xl bg-white/5 flex items-center justify-center text-white hover:bg-orange-600 hover:scale-110 transition-all duration-300"
                                >
                                    <Icon size={20} className="sm:w-6 sm:h-6" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <p className="text-xs sm:text-sm font-black text-white/30 uppercase tracking-[0.2em] mb-6 sm:mb-8">Navigation</p>
                        <ul className="space-y-3 sm:space-y-4">
                            {["Home", "Why Us", "Menu", "Reviews", "FAQ", "Location"].map((item) => (
                                <li key={item}>
                                    <button
                                        onClick={() => {
                                            const id = item.toLowerCase().replace(' ', '-');
                                            if (id === 'home') {
                                                document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
                                            } else {
                                                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        }}
                                        className="text-sm sm:text-base md:text-lg font-bold text-gray-400 hover:text-orange-500 transition-colors uppercase tracking-tight"
                                    >
                                        {item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="text-xs sm:text-sm font-black text-white/30 uppercase tracking-[0.2em] mb-6 sm:mb-8">Contact Us</p>
                        <p className="text-sm sm:text-base md:text-lg font-bold text-gray-400 mb-4 sm:mb-6 leading-relaxed uppercase break-words">
                            {businessData.contact.address}
                        </p>
                        <a
                            href={`tel:${businessData.contact.phone.replace(/\s+/g, '')}`}
                            className="text-lg sm:text-xl md:text-2xl font-black text-white hover:text-orange-500 transition-colors tracking-widest break-all"
                        >
                            {businessData.contact.phone}
                        </a>
                    </div>
                </div>

                <div className="pt-8 sm:pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
                    <p className="text-gray-500 font-medium flex items-center gap-2 text-sm sm:text-base text-center md:text-left">
                        © 2024 {businessData.brand.business_name}. Made with <Heart size={14} className="sm:w-4 sm:h-4 text-orange-600 fill-orange-600" /> in Surat
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white/5 hover:bg-white/10 rounded-full text-white font-black text-xs sm:text-sm transition-all"
                    >
                        BACK TO TOP <ArrowUp size={16} className="sm:w-[18px] sm:h-[18px] group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Background Decorative Element */}
            <div className="absolute -bottom-10 sm:-bottom-20 -right-10 sm:-right-20 text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] font-black text-white/5 select-none pointer-events-none transform rotate-12">
                FRIES
            </div>
        </footer>
    );
}
