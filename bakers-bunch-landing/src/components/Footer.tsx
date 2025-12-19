import { businessData } from "../data";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 border-b border-gray-800 pb-8">
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-2xl font-bold text-white mb-4">{businessData.brand.business_name}</h3>
                        <p className="text-sm text-gray-400">
                            {businessData.positioning.unique_selling_points[0]}
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#hero" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="#menu" className="hover:text-white transition-colors">Menu</a></li>
                            <li><a href="#features" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Contact</h4>
                        <ul className="space-y-2 text-sm">
                            <li>{businessData.contact.phone}</li>
                            <li>{businessData.contact.address}</li>
                            <li>{businessData.contact.hours}</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
                        </div>
                    </div>
                </div>

                <div className="text-center text-xs text-gray-500">
                    &copy; {currentYear} {businessData.brand.business_name}. All rights reserved.
                    <span className="ml-2">Designed with ❤️ in Surat.</span>
                </div>
            </div>
        </footer>
    );
}
