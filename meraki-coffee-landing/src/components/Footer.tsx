import { Instagram, Facebook, Twitter, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-stone-900 border-t border-stone-800 pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 text-stone-300">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-14 md:mb-16">
                    <div className="col-span-1 sm:col-span-2 lg:col-span-2">
                        <div className="flex flex-col mb-4 sm:mb-6">
                            <span className="text-xl sm:text-2xl font-outfit font-bold text-white tracking-tight">
                                Meraki
                            </span>
                            <span className="text-[10px] sm:text-xs uppercase tracking-widest font-medium text-stone-500">
                                The Coffee House
                            </span>
                        </div>
                        <p className="text-sm sm:text-base text-stone-400 max-w-sm leading-relaxed mb-6 sm:mb-8">
                            Where coffee is made with love. Meraki is Vesu's favorite destination for craft coffee, handcrafted desserts, and a relaxed modern vibe.
                        </p>
                        <div className="flex gap-3 sm:gap-4">
                            {[Instagram, Facebook, Twitter, Mail].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:bg-[#D4A373] hover:text-white transition-all"
                                >
                                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4 sm:mb-6 font-outfit uppercase tracking-wider text-xs sm:text-sm">Navigation</h4>
                        <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="#menu" className="hover:text-white transition-colors">Speciality Menu</a></li>
                            <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#location" className="hover:text-white transition-colors">Find Location</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4 sm:mb-6 font-outfit uppercase tracking-wider text-xs sm:text-sm">Visit Us</h4>
                        <p className="text-xs sm:text-sm leading-relaxed text-stone-400">
                            SNS Platina, 108,<br />
                            Vesu Main Road,<br />
                            Surat, Gujarat 395007
                        </p>
                        <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-[#D4A373] font-bold">
                            097377 94366
                        </p>
                    </div>
                </div>

                <div className="pt-8 sm:pt-10 border-t border-stone-800 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-[10px] sm:text-xs tracking-widest uppercase font-medium text-stone-600">
                    <p className="text-center sm:text-left">© 2024 Meraki The Coffee House. All rights reserved.</p>
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                        <a href="#" className="hover:text-stone-400">Privacy Policy</a>
                        <a href="#" className="hover:text-stone-400">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
