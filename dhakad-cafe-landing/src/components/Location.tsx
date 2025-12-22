"use client";

import { Button } from "@/components/ui/button";
import { Navigation, MapPin, Clock } from "lucide-react";

const Location = () => {
    const address = "Udhana - Magdalla Rd, Someshwara Enclave, Vesu, Surat, Gujarat 395007";
    const hours = "Open daily, closes at 2 am";
    const googleMapsLink = ""; // Empty as per JSON data

    const handleDirections = () => {
        if (googleMapsLink) {
            window.open(googleMapsLink, "_blank");
        } else {
            // Fallback to Google Maps search
            const encodedAddress = encodeURIComponent(address);
            window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, "_blank");
        }
    };

    return (
        <section id="location" className="py-16 bg-gradient-to-b from-amber-50 to-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Find Us
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Visit us in Vesu, Surat
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center shrink-0">
                                    <MapPin className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        Address
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {address}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center shrink-0">
                                    <Clock className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        Hours
                                    </h3>
                                    <p className="text-gray-600">
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

                    <div className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm h-full min-h-[400px]">
                        <iframe
                            src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: "400px" }}
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

