"use client";

import { MessageCircle, Instagram, Facebook, Twitter, ArrowUp } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-stone-50 border-t border-stone-200 pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-8 sm:pb-10 md:pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-20">
                    <div className="space-y-4 sm:space-y-6">
                        <div className="flex flex-col">
                            <span className="text-xl sm:text-2xl font-black italic text-amber-900 tracking-tight">Livestream Coffee</span>
                            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400">Vesu, Surat</span>
                        </div>
                        <p className="text-sm sm:text-base text-stone-500 font-medium italic leading-relaxed">
                            Your neighborhood spot for premium coffee, signature cheesecakes, and unforgettable conversations. Open till midnight.
                        </p>
                        <div className="flex gap-3 sm:gap-4">
                            {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white border border-stone-100 flex items-center justify-center text-stone-400 hover:text-amber-800 hover:border-amber-100 hover:shadow-lg transition-all">
                                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4 sm:space-y-6">
                        <h4 className="text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] text-stone-900">Quick Links</h4>
                        <div className="flex flex-col gap-3 sm:gap-4">
                            {["Why Us", "Menu", "Reviews", "FAQ", "Location"].map((link) => (
                                <a
                                    key={link}
                                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                                    className="text-stone-500 hover:text-amber-800 font-bold transition-colors uppercase text-xs sm:text-sm tracking-widest"
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4 sm:space-y-6">
                        <h4 className="text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] text-stone-900">Contact Us</h4>
                        <div className="flex flex-col gap-3 sm:gap-4 font-bold text-stone-500 uppercase text-[10px] sm:text-[11px] tracking-widest">
                            <div>C-203, Aagam Viviana,<br /> Vesu, Surat, 395007</div>
                            <a href="tel:09376229229" className="hover:text-amber-800 transition-colors break-all">093762 29229</a>
                            <div>Open Daily: 10AM - 12AM</div>
                        </div>
                    </div>

                    {/* <div className="space-y-4 sm:space-y-6">
                        <h4 className="text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] text-stone-900">Join the Vibe</h4>
                        <div className="relative group">
                            <a
                                href="https://wa.me/919376229229"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 sm:gap-3 w-full p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#25D366] text-white font-bold leading-tight shadow-xl shadow-green-500/10 hover:shadow-green-500/30 transition-all active:scale-95"
                            >
                                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                                </div>
                                <div className="min-w-0">
                                    <div className="text-[9px] sm:text-[10px] opacity-80">ORDER NOW</div>
                                    <div className="text-sm sm:text-base md:text-lg">ON WHATSAPP</div>
                                </div>
                            </a>
                        </div>
                    </div> */}
                </div>

                <div className="pt-8 sm:pt-10 md:pt-12 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 md:gap-8">
                    <div className="text-[10px] sm:text-xs font-bold text-stone-400 uppercase tracking-[0.2em] text-center md:text-left">
                        © {currentYear} Livestream Coffee Vesu. All rights reserved.
                    </div>
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex items-center gap-2 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-stone-400 hover:text-amber-900 transition-colors group"
                    >
                        Back to Top
                        <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:-translate-y-1" />
                    </button>
                </div>
            </div>
        </footer>
    );
}
