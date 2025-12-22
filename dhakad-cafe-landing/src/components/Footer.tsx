"use client";

import { Phone, Navigation, MessageCircle, MapPin, Clock } from "lucide-react";

const Footer = () => {
    const phoneNumber = ""; // Empty as per JSON data
    const googleMapsLink = ""; // Empty as per JSON data
    const address = "Udhana - Magdalla Rd, Someshwara Enclave, Vesu, Surat, Gujarat 395007";
    const hours = "Open daily, closes at 2 am";

    const handleCall = () => {
        if (phoneNumber) {
            window.open(`tel:${phoneNumber}`, "_self");
        }
    };

    const handleDirections = () => {
        if (googleMapsLink) {
            window.open(googleMapsLink, "_blank");
        } else {
            const encodedAddress = encodeURIComponent(address);
            window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, "_blank");
        }
    };

    const handleWhatsApp = () => {
        if (phoneNumber) {
            window.open(`https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}`, "_blank");
        }
    };

    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                            Dhakad Cafe
                        </h3>
                        <p className="text-gray-400 mb-4">
                            Late-night tea spot in Vesu, Surat. Enjoy unique tea taste, cheese chilli toast, and quick snacks till 2 AM.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                                <p className="text-gray-400 text-sm">{address}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                                <p className="text-gray-400 text-sm">{hours}</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                        <div className="flex flex-col gap-3">
                            {phoneNumber && (
                                <button
                                    onClick={handleCall}
                                    className="flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors text-left"
                                >
                                    <Phone className="w-4 h-4" />
                                    <span>Call Now</span>
                                </button>
                            )}
                            <button
                                onClick={handleDirections}
                                className="flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors text-left"
                            >
                                <Navigation className="w-4 h-4" />
                                <span>Get Directions</span>
                            </button>
                            {phoneNumber && (
                                <button
                                    onClick={handleWhatsApp}
                                    className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors text-left"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    <span>WhatsApp</span>
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Dhakad Cafe (25Tea). All rights reserved.
                    </p>
                    <p className="text-gray-600 text-xs mt-2">
                        Vesu, Surat, Gujarat 395007
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


