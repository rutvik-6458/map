"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

const Location = () => {
    const address = "G/5, DMD Pacific, Vesu Canal Rd, Opp. L. P. Savani School, Bharthana, Surat, Gujarat 395007";
    const phone = "+91-78020-01555";
    const hours = "Open daily, closes at 11 pm";

    // Google Maps embed URL (you can customize the coordinates)
    const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.5!2d72.8311!3d21.1702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDEwJzEyLjciTiA3MsKwNDknNTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890";

    const openGoogleMaps = () => {
        // Open Google Maps with the address
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
        window.open(mapsUrl, "_blank");
    };

    return (
        <section id="location" className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-b from-white to-amber-50">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                        📍 Location
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                        Visit Us Today
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-2">
                        Located in the heart of Vesu, Surat
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    {/* Map */}
                    <Card className="overflow-hidden border-2 border-amber-200 shadow-xl order-2 lg:order-1">
                        <div className="relative h-64 sm:h-80 md:h-96 lg:h-full min-h-[300px] sm:min-h-[400px] bg-gradient-to-br from-amber-100 to-orange-100">
                            <iframe
                                src={mapEmbedUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0"
                            />
                        </div>
                    </Card>

                    {/* Contact Info */}
                    <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
                        {/* Address Card */}
                        <Card className="p-4 sm:p-6 bg-white border-2 border-gray-100 hover:border-amber-300 hover:shadow-lg transition-all duration-300">
                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">Address</h3>
                                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed break-words">{address}</p>
                                </div>
                            </div>
                        </Card>

                        {/* Phone Card */}
                        <Card className="p-4 sm:p-6 bg-white border-2 border-gray-100 hover:border-amber-300 hover:shadow-lg transition-all duration-300">
                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">Phone</h3>
                                    <a
                                        href={`tel:${phone}`}
                                        className="text-sm sm:text-base text-gray-700 hover:text-amber-600 transition-colors break-all"
                                    >
                                        {phone}
                                    </a>
                                </div>
                            </div>
                        </Card>

                        {/* Hours Card */}
                        <Card className="p-4 sm:p-6 bg-white border-2 border-gray-100 hover:border-amber-300 hover:shadow-lg transition-all duration-300">
                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 sm:mb-2">Hours</h3>
                                    <p className="text-sm sm:text-base text-gray-700">{hours}</p>
                                </div>
                            </div>
                        </Card>

                        {/* Directions Button */}
                        <Button
                            size="lg"
                            className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white py-5 sm:py-6 text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                            onClick={openGoogleMaps}
                        >
                            <Navigation className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                            <span className="hidden sm:inline">Get Directions on Google Maps</span>
                            <span className="sm:hidden">Get Directions</span>
                        </Button>

                        {/* Additional Info */}
                        <Card className="p-4 sm:p-6 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200">
                            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                                Easy to Find
                            </h3>
                            <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-gray-700">
                                <li className="flex items-start gap-2">
                                    <span className="text-amber-600 mt-1 flex-shrink-0">•</span>
                                    <span>Located at DMD Pacific, Vesu Canal Road</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-amber-600 mt-1 flex-shrink-0">•</span>
                                    <span>Opposite L. P. Savani School</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-amber-600 mt-1 flex-shrink-0">•</span>
                                    <span>Drive-through available for quick pickup</span>
                                </li>
                            </ul>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
