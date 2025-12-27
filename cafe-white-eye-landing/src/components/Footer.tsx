import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-zinc-900 text-zinc-400 py-8 sm:py-10 md:py-12 border-t border-zinc-800">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
                    <div className="text-center md:text-left">
                        <h2 className="text-xl sm:text-2xl font-serif font-bold text-white mb-1 sm:mb-2">Cafe White Eye</h2>
                        <p className="text-xs sm:text-sm">A Calm & Classy Café in Vesu.</p>
                    </div>

                    <div className="flex gap-4 sm:gap-6">
                        <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram"><Instagram className="w-4 h-4 sm:w-5 sm:h-5" /></a>
                        <a href="#" className="hover:text-primary transition-colors" aria-label="Facebook"><Facebook className="w-4 h-4 sm:w-5 sm:h-5" /></a>
                        <a href="#" className="hover:text-primary transition-colors" aria-label="Twitter"><Twitter className="w-4 h-4 sm:w-5 sm:h-5" /></a>
                    </div>

                    <div className="text-center md:text-right text-xs sm:text-sm">
                        <p>&copy; {new Date().getFullYear()} Cafe White Eye. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
