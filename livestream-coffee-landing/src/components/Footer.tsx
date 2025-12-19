"use client";

import { MessageCircle, Instagram, Facebook, Twitter, ArrowUp } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-stone-50 border-t border-stone-200 pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    <div className="space-y-6">
                        <div className="flex flex-col">
                            <span className="text-2xl font-black italic text-amber-900 tracking-tight">Livestream Coffee</span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-stone-400">Vesu, Surat</span>
                        </div>
                        <p className="text-stone-500 font-medium italic leading-relaxed">
                            Your neighborhood spot for premium coffee, signature cheesecakes, and unforgettable conversations. Open till midnight.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white border border-stone-100 flex items-center justify-center text-stone-400 hover:text-amber-800 hover:border-amber-100 hover:shadow-lg transition-all">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-xs font-black uppercase tracking-[0.4em] text-stone-900">Quick Links</h4>
                        <div className="flex flex-col gap-4">
                            {["Why Us", "Menu", "Reviews", "FAQ", "Location"].map((link) => (
                                <a
                                    key={link}
                                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                                    className="text-stone-500 hover:text-amber-800 font-bold transition-colors uppercase text-sm tracking-widest"
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-xs font-black uppercase tracking-[0.4em] text-stone-900">Contact Us</h4>
                        <div className="flex flex-col gap-4 font-bold text-stone-500 uppercase text-[11px] tracking-widest">
                            <div>C-203, Aagam Viviana,<br /> Vesu, Surat, 395007</div>
                            <a href="tel:09376229229" className="hover:text-amber-800 transition-colors">093762 29229</a>
                            <div>Open Daily: 10AM - 12AM</div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h4 className="text-xs font-black uppercase tracking-[0.4em] text-stone-900">Join the Vibe</h4>
                        <div className="relative group">
                            <a
                                href="https://wa.me/919376229229"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 w-full p-4 rounded-2xl bg-[#25D366] text-white font-bold leading-tight shadow-xl shadow-green-500/10 hover:shadow-green-500/30 transition-all active:scale-95"
                            >
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                    <MessageCircle className="w-5 h-5 fill-current" />
                                </div>
                                <div>
                                    <div className="text-[10px] opacity-80">ORDER NOW</div>
                                    <div className="text-lg">ON WHATSAPP</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-xs font-bold text-stone-400 uppercase tracking-[0.2em]">
                        © {currentYear} Livestream Coffee Vesu. All rights reserved.
                    </div>
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-stone-400 hover:text-amber-900 transition-colors group"
                    >
                        Back to Top
                        <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
                    </button>
                </div>
            </div>
        </footer>
    );
}
