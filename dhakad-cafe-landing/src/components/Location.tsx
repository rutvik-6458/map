"use client";

import { Button } from "@/components/ui/button";
import { Navigation, MapPin, Clock } from "lucide-react";

const Location = () => {
    const address = "Udhana - Magdalla Rd, Someshwara Enclave, Vesu, Surat, Gujarat 395007";
    const hours = "Open daily, closes at 2 am";
    const googleMapsLink = "https://maps.app.goo.gl/4tZuG4navEWyTskZ7";

    const handleDirections = () => {
        window.open(googleMapsLink, "_blank");
    };

    return (
        <section id="location" className="py-12 sm:py-16 bg-gradient-to-b from-amber-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                        Find Us
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
                        Visit us in Vesu, Surat
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                    <div className="space-y-4 sm:space-y-6">
                        <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-200 shadow-sm">
                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                                        Address
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">
                                        {address}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-200 shadow-sm">
                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center shrink-0">
                                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                                        Hours
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-600">
                                        {hours}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Button
                            size="lg"
                            className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white"
                            onClick={handleDirections}
                        >
                            <Navigation className="w-5 h-5 mr-2" />
                            Get Directions
                        </Button>
                    </div>

                    <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm h-full min-h-[300px] sm:min-h-[400px]">
                        <iframe
                            src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: "300px" }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;

