import { MapPin, Clock } from "lucide-react";

const Footer = () => {
    const businessName = "Eatalio's Cafe";
    const address = "Ground Floor, Prime Shoppers, Opposite Safal Square, Udhna–Magdalla Road, Althan, Surat, Gujarat 395007";
    const hours = "Open daily, closes at 11:30 pm";
    const tagline = "Italian Flavours with a Cozy Cafe Vibe";

    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                            {businessName}
                        </h3>
                        <p className="text-gray-400">{tagline}</p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Location</h4>
                        <div className="flex items-start gap-2 mb-2">
                            <MapPin className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                            <p className="text-gray-400">{address}</p>
                        </div>
                        <div className="flex items-start gap-2">
                            <Clock className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                            <p className="text-gray-400">{hours}</p>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">About</h4>
                        <p className="text-gray-400">
                            A cozy Italian cafe in Vesu–Althan, Surat, appreciated for its Italian-style food and calm ambience.
                            Known for pasta, pizza, and cafe drinks.
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 text-center">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} {businessName}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

