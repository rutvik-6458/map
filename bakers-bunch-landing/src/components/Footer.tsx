import { businessData } from "../data";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300 py-8 sm:py-10 md:py-12">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8 border-b border-gray-800 pb-6 sm:pb-8">
                    <div className="col-span-1 sm:col-span-2 lg:col-span-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{businessData.brand.business_name}</h3>
                        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                            {businessData.positioning.unique_selling_points[0]}
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
                        <ul className="space-y-2 text-xs sm:text-sm">
                            <li><a href="#hero" className="hover:text-white transition-colors inline-block">Home</a></li>
                            <li><a href="#menu" className="hover:text-white transition-colors inline-block">Menu</a></li>
                            <li><a href="#features" className="hover:text-white transition-colors inline-block">About Us</a></li>
                            <li><a href="#location" className="hover:text-white transition-colors inline-block">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact</h4>
                        <ul className="space-y-2 text-xs sm:text-sm leading-relaxed">
                            <li className="break-words">{businessData.contact.phone}</li>
                            <li className="break-words">{businessData.contact.address}</li>
                            <li>{businessData.contact.hours}</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Follow Us</h4>
                        <div className="flex gap-3 sm:gap-4">
                            <a href="#" className="hover:text-white transition-colors" aria-label="Instagram">
                                <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
                            </a>
                            <a href="#" className="hover:text-white transition-colors" aria-label="Facebook">
                                <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
                            </a>
                            <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
                                <Twitter className="h-5 w-5 sm:h-6 sm:w-6" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="text-center text-xs text-gray-500 px-4">
                    <p>&copy; {currentYear} {businessData.brand.business_name}. All rights reserved.</p>
                    <p className="mt-1 sm:inline sm:mt-0 sm:ml-2">Designed with ❤️ in Surat.</p>
                </div>
            </div>
        </footer>
    );
}
