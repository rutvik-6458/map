import { DATA } from '@/lib/data'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-white py-12 border-t border-slate-900">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold font-heading mb-2">{DATA.brand.business_name}</h3>
                        <p className="text-slate-400 max-w-sm">{DATA.brand.short_tagline_options[2]}</p>
                    </div>

                    <div className="flex gap-4">
                        {/* Social Placeholders */}
                        <a href="#" className="p-2 bg-slate-900 rounded-full hover:bg-primary hover:text-white transition-colors" aria-label="Instagram">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-2 bg-slate-900 rounded-full hover:bg-primary hover:text-white transition-colors" aria-label="Facebook">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-2 bg-slate-900 rounded-full hover:bg-primary hover:text-white transition-colors" aria-label="Twitter">
                            <Twitter className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div className="border-t border-slate-900 mt-8 pt-8 text-center text-slate-500 text-sm">
                    <p>© {new Date().getFullYear()} {DATA.brand.business_name}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
