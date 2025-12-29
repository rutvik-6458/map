"use client";

import { Button } from "@/components/ui/button";
import { Phone, Navigation, MessageCircle } from "lucide-react";
import Image from "next/image";
import heroImage from "@/assets/eatalios.jpg";

const Hero = () => {
    const phoneNumber = ""; // Add phone number when available
    const whatsappNumber = ""; // Add WhatsApp number when available
    const googleMapsLink = ""; // Add Google Maps link when available

    const handleCall = () => {
        if (phoneNumber) {
            window.open(`tel:${phoneNumber}`, "_self");
        }
    };

    const handleDirections = () => {
        if (googleMapsLink) {
            window.open(googleMapsLink, "_blank");
        } else {
            const locationSection = document.getElementById("location");
            if (locationSection) {
                locationSection.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    const handleWhatsApp = () => {
        if (whatsappNumber) {
            window.open(`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`, "_blank");
        }
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 overflow-hidden"
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={heroImage}
                    alt="Eatalio's Cafe"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40"></div>
            </div>
            <div className="container mx-auto max-w-4xl text-center relative z-10 px-4 sm:px-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white drop-shadow-lg">
                    A Cozy Italian Cafe in Vesu
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 max-w-2xl mx-auto drop-shadow-md px-2">
                    Known for its pasta and relaxed cafe atmosphere. A calm spot near Safal Square for Italian food lovers.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                    {phoneNumber && (
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-red-600 text-red-600 hover:bg-red-50 text-base px-6"
                            onClick={handleCall}
                        >
                            <Phone className="w-5 h-5 mr-2" />
                            Call Now
                        </Button>
                    )}
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-sm sm:text-base px-4 sm:px-6 w-full sm:w-auto"
                        onClick={handleDirections}
                    >
                        <Navigation className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        Get Directions
                    </Button>
                    {whatsappNumber && (
                        <Button
                            size="lg"
                            className="bg-green-600 hover:bg-green-700 text-sm sm:text-base px-4 sm:px-6 w-full sm:w-auto"
                            onClick={handleWhatsApp}
                        >
                            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                            WhatsApp
                        </Button>
                    )}
                </div>
                <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-white drop-shadow-md">
                    Open daily, closes at 11:30 pm
                </p>
            </div>
        </section>
    );
};

export default Hero;

