import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-zinc-900 text-zinc-400 py-12 border-t border-zinc-800">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-serif font-bold text-white mb-2">Cafe White Eye</h2>
                        <p className="text-sm">A Calm & Classy Café in Vesu.</p>
                    </div>

                    <div className="flex gap-6">
                        <a href="#" className="hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
                        <a href="#" className="hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
                    </div>

                    <div className="text-center md:text-right text-sm">
                        <p>&copy; {new Date().getFullYear()} Cafe White Eye. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
