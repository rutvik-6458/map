"use client";

import { Button } from "@/components/ui/button";
import { Phone, Navigation, MessageCircle } from "lucide-react";
import Image from "next/image";

const Hero = () => {
    const phoneNumber = ""; // Empty as per JSON data
    const googleMapsLink = ""; // Empty as per JSON data

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
        if (phoneNumber) {
            window.open(`https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}`, "_blank");
        }
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 pb-12 sm:pb-16 px-4 sm:px-6 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/Dhakad Cafe.jpg"
                    alt="Dhakad Cafe"
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60" />
            </div>

            <div className="container mx-auto max-w-4xl text-center relative z-10 px-4 sm:px-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white drop-shadow-lg leading-tight">
                    Late-Night Tea Spot in Vesu
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 max-w-2xl mx-auto drop-shadow-md px-2">
                    Enjoy tea, cheese chilli toast and quick snacks till late night.
                </p>
                <p className="text-base sm:text-lg text-white/90 mb-8 sm:mb-10 max-w-xl mx-auto drop-shadow-md px-2">
                    Perfect stop for late-night tea lovers in Surat.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto">
                    {phoneNumber && (
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg w-full sm:w-auto"
                            onClick={handleCall}
                        >
                            <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                            Call Now
                        </Button>
                    )}
                    <Button
                        variant="outline"
                        size="lg"
                        className="border-2 border-white/90 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg w-full sm:w-auto"
                        onClick={handleDirections}
                    >
                        <Navigation className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        Get Directions
                    </Button>
                    {phoneNumber && (
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-2 border-white/90 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg w-full sm:w-auto"
                            onClick={handleWhatsApp}
                        >
                            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                            WhatsApp
                        </Button>
                    )}
                </div>

                <div className="mt-12 text-sm text-white/90 drop-shadow-md">
                    <p>Open daily, closes at 2 am</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;

