import { MapPin, Clock } from "lucide-react";

const Footer = () => {
    const businessName = "Eatalio's Cafe";
    const address = "Ground Floor, Prime Shoppers, Opposite Safal Square, Udhna–Magdalla Road, Althan, Surat, Gujarat 395007";
    const hours = "Open daily, closes at 11:30 pm";
    const tagline = "Italian Flavours with a Cozy Cafe Vibe";

    return (
        <footer className="bg-gray-900 text-gray-300 py-8 sm:py-12">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
                    <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                            {businessName}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-400">{tagline}</p>
                    </div>

                    <div>
                        <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Location</h4>
                        <div className="flex items-start gap-2 mb-2">
                            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 mt-1 flex-shrink-0" />
                            <p className="text-sm sm:text-base text-gray-400 break-words">{address}</p>
                        </div>
                        <div className="flex items-start gap-2">
                            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 mt-1 flex-shrink-0" />
                            <p className="text-sm sm:text-base text-gray-400">{hours}</p>
                        </div>
                    </div>

                    <div className="sm:col-span-2 lg:col-span-1">
                        <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">About</h4>
                        <p className="text-sm sm:text-base text-gray-400">
                            A cozy Italian cafe in Vesu–Althan, Surat, appreciated for its Italian-style food and calm ambience.
                            Known for pasta, pizza, and cafe drinks.
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center">
                    <p className="text-gray-400 text-xs sm:text-sm">
                        © {new Date().getFullYear()} {businessName}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;



