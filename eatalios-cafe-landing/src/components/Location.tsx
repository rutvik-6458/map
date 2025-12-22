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
    const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

    const handleDirections = () => {
        window.open(googleMapsSearchUrl, "_blank");
    };

    return (
        <section id="location" className="py-16 bg-gradient-to-b from-white to-red-50">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                            Visit Us
                        </h2>
                        <p className="text-lg text-gray-600">
                            Find us in the heart of Vesu–Althan
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="border-gray-200">
                            <CardContent className="pt-6">
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-6 h-6 text-red-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-2 text-gray-900">Address</h3>
                                            <p className="text-gray-600">{address}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                                            <Clock className="w-6 h-6 text-red-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-2 text-gray-900">Hours</h3>
                                            <p className="text-gray-600">{hours}</p>
                                        </div>
                                    </div>

                                    <Button
                                        size="lg"
                                        className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700"
                                        onClick={handleDirections}
                                    >
                                        <Navigation className="w-5 h-5 mr-2" />
                                        Get Directions
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        <div className="relative w-full h-full min-h-[400px] rounded-lg overflow-hidden border border-gray-200 bg-gray-100">
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

