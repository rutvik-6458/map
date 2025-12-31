"use client";

import { Heart, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-foreground text-background py-16">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-12 text-center md:text-left">
                    <div className="md:col-span-2">
                        <h2 className="text-3xl font-bold font-outfit mb-6 text-primary">Jerry Cafe</h2>
                        <p className="text-muted/60 max-w-sm mx-auto md:mx-0">
                            Your favorite spot in Vesu for celebrations, quality coffee, and memorable moments with loved ones.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6">Quick Links</h3>
                        <ul className="space-y-4 text-muted/60">
                            <li><a href="#hero" className="hover:text-primary transition-colors">Home</a></li>
                            <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                            <li><a href="#menu" className="hover:text-primary transition-colors">Services</a></li>
                            <li><a href="#gallery" className="hover:text-primary transition-colors">Gallery</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-6">Socials</h3>
                        <div className="flex gap-4 justify-center md:justify-start">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-muted/40 text-sm">
                        © {new Date().getFullYear()} Jerry Cafe. All rights reserved.
                    </p>
                    <div className="flex items-center gap-1 text-sm text-muted/40">
                        Made with <Heart size={14} className="text-red-500 fill-red-500" /> in Surat
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
