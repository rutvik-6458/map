import { Instagram, Facebook, Twitter, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-stone-900 border-t border-stone-800 pt-20 pb-10 text-stone-300">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 lg:col-span-2">
                        <div className="flex flex-col mb-6">
                            <span className="text-2xl font-outfit font-bold text-white tracking-tight">
                                Meraki
                            </span>
                            <span className="text-xs uppercase tracking-widest font-medium text-stone-500">
                                The Coffee House
                            </span>
                        </div>
                        <p className="text-stone-400 max-w-sm leading-relaxed mb-8">
                            Where coffee is made with love. Meraki is Vesu's favorite destination for craft coffee, handcrafted desserts, and a relaxed modern vibe.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Facebook, Twitter, Mail].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:bg-[#D4A373] hover:text-white transition-all"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 font-outfit uppercase tracking-wider text-sm">Navigation</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="#menu" className="hover:text-white transition-colors">Speciality Menu</a></li>
                            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#location" className="hover:text-white transition-colors">Find Location</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 font-outfit uppercase tracking-wider text-sm">Visit Us</h4>
                        <p className="text-sm leading-relaxed text-stone-400">
                            SNS Platina, 108,<br />
                            Vesu Main Road,<br />
                            Surat, Gujarat 395007
                        </p>
                        <p className="mt-4 text-sm text-[#D4A373] font-bold">
                            097377 94366
                        </p>
                    </div>
                </div>

                <div className="pt-10 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-widest uppercase font-medium text-stone-600">
                    <p>© 2024 Meraki The Coffee House. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-stone-400">Privacy Policy</a>
                        <a href="#" className="hover:text-stone-400">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
