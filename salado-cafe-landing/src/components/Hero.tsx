"use client";

import { Button } from "@/components/ui/button";
import { Phone, Navigation, MessageCircle } from "lucide-react";

const Hero = () => {
    const phoneNumber = "08347552200";
    const formattedPhone = `+91${phoneNumber.replace(/\s/g, "")}`;
    const whatsappNumber = formattedPhone;
    const googleMapsLink = ""; // Empty as per JSON data

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
            });
        }
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 overflow-hidden"
        >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-green-900/40 z-10" />
                <img
                    src="/assets/SaladO Cafe.jpg"
                    alt="SaladO Cafe"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Floating Badge */}
            <div className="absolute top-32 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-2xl">
                    ✨ Healthy Bites Made Delicious
                </div>
            </div>

            {/* Content */}
            <div className="relative z-20 max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                    Eat Healthy Without
                    <span className="block bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mt-2">
                        Compromising Taste
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                    Enjoy wholesome salads, wraps and healthy bowls made fresh. Perfect place for clean eating and balanced meals.
                </p>

                {/* Rating Badge */}
                <div className="flex items-center justify-center gap-2 mb-10">
                    <div className="bg-white/90 backdrop-blur-md border border-green-200 rounded-full px-6 py-3 flex items-center gap-3 shadow-lg">
                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    className="w-5 h-5 text-green-500 fill-current"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-gray-900 font-semibold">4.8</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-600">62 reviews</span>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-6 text-lg shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105"
                        onClick={() => window.open(`tel:${formattedPhone}`, "_self")}
                    >
                        <Phone className="w-5 h-5 mr-2" />
                        Call Now
                    </Button>

                    {googleMapsLink ? (
                        <Button
                            size="lg"
                            variant="outline"
                            className="bg-white/90 backdrop-blur-md border-2 border-green-600 text-green-700 hover:bg-green-50 px-8 py-6 text-lg shadow-2xl transition-all duration-300 hover:scale-105"
                            onClick={() => window.open(googleMapsLink, "_blank")}
                        >
                            <Navigation className="w-5 h-5 mr-2" />
                            Get Directions
                        </Button>
                    ) : (
                        <Button
                            size="lg"
                            variant="outline"
                            className="bg-white/90 backdrop-blur-md border-2 border-green-600 text-green-700 hover:bg-green-50 px-8 py-6 text-lg shadow-2xl transition-all duration-300 hover:scale-105"
                            onClick={() => scrollToSection("location")}
                        >
                            <Navigation className="w-5 h-5 mr-2" />
                            Get Directions
                        </Button>
                    )}

                    <Button
                        size="lg"
                        variant="outline"
                        className="bg-green-600/90 backdrop-blur-md border-2 border-green-500 text-white hover:bg-green-700 px-8 py-6 text-lg shadow-2xl transition-all duration-300 hover:scale-105"
                        onClick={() => window.open(`https://wa.me/${whatsappNumber}`, "_blank")}
                    >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        WhatsApp
                    </Button>
                </div>

                {/* Info Pills */}
                <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
                    <div className="bg-white/90 backdrop-blur-md border border-green-200 rounded-full px-5 py-2 text-gray-700 text-sm shadow-md">
                        📍 Vesu, Surat
                    </div>
                    <div className="bg-white/90 backdrop-blur-md border border-green-200 rounded-full px-5 py-2 text-gray-700 text-sm shadow-md">
                        🕐 Open daily, closes at 12 am
                    </div>
                    <div className="bg-white/90 backdrop-blur-md border border-green-200 rounded-full px-5 py-2 text-gray-700 text-sm shadow-md">
                        🚗 Drive-through available
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                <button
                    onClick={() => scrollToSection("social-proof")}
                    className="text-white/80 hover:text-white transition-colors"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default Hero;

