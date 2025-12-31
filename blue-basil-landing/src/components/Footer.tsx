import Link from "next/link";
import { Facebook, Instagram, Twitter, MessageCircle, MapPin, Phone } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-50 pt-12 pb-8 md:pt-20 md:pb-10 border-t border-slate-200">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="lg:col-span-1">
                        <Link href="/" className="text-2xl font-bold tracking-tight text-primary flex items-center gap-2 mb-6">
                            <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-xs">BB</span>
                            <span>Blue <span className="text-secondary">Basil</span></span>
                        </Link>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            Surat's favorite multicuisine destination for family moments and authentic flavors. North Indian, Chinese, and delightful memories.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all shadow-sm">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all shadow-sm">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://wa.me/917284890007" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-green-500 hover:border-green-500 transition-all shadow-sm">
                                <MessageCircle className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link href="#home" className="text-slate-600 hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="#trust" className="text-slate-600 hover:text-primary transition-colors">Reviews</Link></li>
                            <li><Link href="#features" className="text-slate-600 hover:text-primary transition-colors">Why Us</Link></li>
                            <li><Link href="#menu" className="text-slate-600 hover:text-primary transition-colors">Our Menu</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">Support</h4>
                        <ul className="space-y-4">
                            <li><Link href="#faq" className="text-slate-600 hover:text-primary transition-colors">FAQ</Link></li>
                            <li><Link href="#location" className="text-slate-600 hover:text-primary transition-colors">Location</Link></li>
                            <li><Link href="tel:07284890007" className="text-slate-600 hover:text-primary transition-colors">Order Online</Link></li>
                            <li><Link href="tel:07284890007" className="text-slate-600 hover:text-primary transition-colors">Reservations</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">Contact Info</h4>
                        <ul className="space-y-4">
                            <li className="flex gap-3">
                                <MapPin className="w-5 h-5 text-primary shrink-0" />
                                <span className="text-sm text-slate-600">Aakash Retail, Magdalla, Surat, 395007</span>
                            </li>
                            <li className="flex gap-3">
                                <Phone className="w-5 h-5 text-secondary shrink-0" />
                                <span className="text-sm text-slate-600">072848 90007</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-slate-500">
                        © {currentYear} Blue Basil Restaurant. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-slate-400">
                        <a href="#" className="hover:text-slate-600">Privacy Policy</a>
                        <a href="#" className="hover:text-slate-600">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
