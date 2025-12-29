"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Navigation, Clock } from "lucide-react";

const Location = () => {
    const address = "Ground Floor, Prime Shoppers, Opposite Safal Square, Udhna–Magdalla Road, Althan, Surat, Gujarat 395007";
    const hours = "Open daily, closes at 11:30 pm";

    // Generate Google Maps URLs
    const encodedAddress = encodeURIComponent(address);
    // Using Google Maps embed with search query (works without API key)
    const googleMapsEmbedUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;
    // Specific Google Maps short URL as requested
    const googleMapsLink = "https://maps.app.goo.gl/8zErytiHTVKjhMAQ6";

    const handleDirections = () => {
        window.open(googleMapsLink, "_blank");
    };

    return (
        <section id="location" className="py-12 sm:py-16 bg-gradient-to-b from-white to-red-50">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-8 sm:mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">
                            Visit Us
                        </h2>
                        <p className="text-base sm:text-lg text-gray-600 px-2">
                            Find us in the heart of Vesu–Althan
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                        <Card className="border-gray-200">
                            <CardContent className="pt-4 sm:pt-6 p-4 sm:p-6">
                                <div className="space-y-4 sm:space-y-6">
                                    <div className="flex items-start gap-3 sm:gap-4">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2 text-gray-900">Address</h3>
                                            <p className="text-sm sm:text-base text-gray-600 break-words">{address}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-3 sm:gap-4">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                                            <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-red-600" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2 text-gray-900">Hours</h3>
                                            <p className="text-sm sm:text-base text-gray-600">{hours}</p>
                                        </div>
                                    </div>

                                    <Button
                                        size="lg"
                                        className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-sm sm:text-base"
                                        onClick={handleDirections}
                                    >
                                        <Navigation className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                        Get Directions
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="relative w-full h-full min-h-[300px] sm:min-h-[400px] rounded-lg overflow-hidden border border-gray-200 bg-gray-100">
                            <iframe
                                src={googleMapsEmbedUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0"
                                title="Eatalio's Cafe Location"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;

