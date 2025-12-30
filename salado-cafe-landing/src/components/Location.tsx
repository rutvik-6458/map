"use client";

import { Button } from "@/components/ui/button";
import { Navigation, Phone, MessageCircle } from "lucide-react";

const Location = () => {
    const address = "G5, Ground Floor, Cannon Street, opposite Aagam Shopping Center, near Jolly Residency, Vesu, Surat, Gujarat 395007";
    const phoneNumber = "08347552200";
    const formattedPhone = `+91${phoneNumber.replace(/\s/g, "")}`;
    const whatsappNumber = formattedPhone;
    const googleMapsLink = "https://maps.app.goo.gl/9CBgVYsT1sr36L1N6";
    const hours = "Open daily, closes at 12 am";

    // Google Maps embed URL using the address - works without API key
    const mapsEmbedUrl = googleMapsLink
        ? `https://www.google.com/maps/embed?pb=${googleMapsLink}`
        : `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.5!2d72.8311!3d21.1702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDEwJzEyLjciTiA3MsKwNDknNTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin&q=${encodeURIComponent(address)}`;

    return (
        <section id="location" className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b from-green-50 to-white">
            <div className="container mx-auto max-w-6xl">
                {/* Section Header */}
                <div className="text-center mb-10 sm:mb-12 md:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
                        Visit <span className="text-green-600">Us</span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
                        Find us in Vesu, Surat
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                    {/* Address & Info */}
                    <div className="space-y-4 sm:space-y-6">
                        <div className="bg-white border border-green-200 rounded-xl p-4 sm:p-6 md:p-8 shadow-sm">
                            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Location Details</h3>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="text-2xl">📍</div>
                                    <div>
                                        <p className="font-semibold text-gray-900 mb-1">Address</p>
                                        <p className="text-gray-600 leading-relaxed">{address}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="text-2xl">🕐</div>
                                    <div>
                                        <p className="font-semibold text-gray-900 mb-1">Hours</p>
                                        <p className="text-gray-600">{hours}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="text-2xl">📞</div>
                                    <div>
                                        <p className="font-semibold text-gray-900 mb-1">Phone</p>
                                        <p className="text-gray-600">{phoneNumber}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col gap-3">
                            <Button
                                size="lg"
                                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
                                onClick={() => window.open(`tel:${formattedPhone}`, "_self")}
                            >
                                <Phone className="w-5 h-5 mr-2" />
                                Call Now
                            </Button>

                            <Button
                                size="lg"
                                variant="outline"
                                className="w-full border-green-600 text-green-600 hover:bg-green-50"
                                onClick={() => {
                                    window.open(googleMapsLink, "_blank");
                                }}
                            >
                                <Navigation className="w-5 h-5 mr-2" />
                                Get Directions
                            </Button>

                            <Button
                                size="lg"
                                variant="outline"
                                className="w-full border-green-600 text-green-600 hover:bg-green-50"
                                onClick={() => window.open(`https://wa.me/${whatsappNumber}`, "_blank")}
                            >
                                <MessageCircle className="w-5 h-5 mr-2" />
                                WhatsApp
                            </Button>
                        </div>
                    </div>

                    {/* Map Embed */}
                    <div className="bg-white border border-green-200 rounded-xl overflow-hidden shadow-sm">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.5!2d72.8311!3d21.1702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDEwJzEyLjciTiA3MsKwNDknNTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin&q=SaladO+Cafe,+G5+Ground+Floor+Cannon+Street+opposite+Aagam+Shopping+Center+near+Jolly+Residency+Vesu+Surat+Gujarat+395007"
                            width="100%"
                            height="400"
                            style={{ border: 0, minHeight: '300px' }}
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

