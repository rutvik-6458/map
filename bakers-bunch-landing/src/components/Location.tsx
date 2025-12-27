import { businessData } from "../data";
import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "./ui/button";

export function Location() {
    const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(businessData.contact.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

    return (
        <section id="location" className="py-12 sm:py-16 md:py-20 bg-secondary/30">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                    <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
                        <div>
                            <span className="text-primary font-medium tracking-wider uppercase text-xs sm:text-sm">Visit Us</span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">Find Us in Vesu</h2>
                            <p className="text-muted-foreground mt-3 sm:mt-4 text-base sm:text-lg">
                                Come smell the fresh bread and see our beautiful cake displays handled with care.
                            </p>
                        </div>

                        <div className="space-y-4 sm:space-y-6">
                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="p-2 sm:p-3 bg-white rounded-full shadow-sm text-primary flex-shrink-0">
                                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <h3 className="font-semibold text-base sm:text-lg">Address</h3>
                                    <p className="text-muted-foreground text-sm sm:text-base mt-1">{businessData.contact.address}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="p-2 sm:p-3 bg-white rounded-full shadow-sm text-primary flex-shrink-0">
                                    <Clock className="h-5 w-5 sm:h-6 sm:w-6" />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <h3 className="font-semibold text-base sm:text-lg">Opening Hours</h3>
                                    <p className="text-muted-foreground text-sm sm:text-base mt-1">{businessData.contact.hours}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="p-2 sm:p-3 bg-white rounded-full shadow-sm text-primary flex-shrink-0">
                                    <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <h3 className="font-semibold text-base sm:text-lg">Contact</h3>
                                    <p className="text-muted-foreground text-sm sm:text-base mt-1">{businessData.contact.phone}</p>
                                </div>
                            </div>
                        </div>

                        <Button size="lg" className="w-full sm:w-auto" asChild>
                            <a href={businessData.contact.google_maps_link} target="_blank" rel="noopener noreferrer">
                                Get Directions
                            </a>
                        </Button>
                    </div>

                    <div className="bg-white p-2 rounded-xl sm:rounded-2xl shadow-xl overflow-hidden h-[300px] sm:h-[350px] md:h-[400px] w-full order-1 lg:order-2">
                        <iframe
                            src={mapSrc}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Bakers Bunch Location"
                            className="rounded-lg sm:rounded-xl h-full w-full"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
