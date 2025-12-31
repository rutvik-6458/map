import Link from 'next/link'
import { Instagram, MapPin } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-zinc-900 text-white py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <Link href="/" className="font-serif text-2xl font-bold text-white mb-4 block">
                            Jerry Cafe
                        </Link>
                        <p className="text-zinc-400 max-w-xs">
                            Celebrate moments that matter. A cozy cafe in Vesu, Surat perfect for couples and small celebrations.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-zinc-400">
                            <li><a href="#hero" className="hover:text-primary transition-colors">Home</a></li>
                            <li><a href="#features" className="hover:text-primary transition-colors">About</a></li>
                            <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
                            <li><a href="#location" className="hover:text-primary transition-colors">Location</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg mb-4">Connect</h3>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all" aria-label="Instagram">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://www.google.com/maps/search/?api=1&query=Jerry+Cafe+Vesu+Surat" target="_blank" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all" aria-label="Google Maps">
                                <MapPin className="w-5 h-5" />
                            </a>
                        </div>
                        <p className="mt-4 text-xs text-zinc-500">
                            Address: Near Chai Bike, Ward 2, Vesu, Surat
                        </p>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center text-zinc-500 text-sm">
                    &copy; {new Date().getFullYear()} Jerry Cafe. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
