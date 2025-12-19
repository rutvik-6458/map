import { businessData } from "../data";
import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "./ui/button";

export function Location() {
    const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(businessData.contact.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

    return (
        <section id="location" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div>
                            <span className="text-primary font-medium tracking-wider uppercase text-sm">Visit Us</span>
                            <h2 className="text-3xl md:text-4xl font-bold mt-2">Find Us in Vesu</h2>
                            <p className="text-muted-foreground mt-4 text-lg">
                                Come smell the fresh bread and see our beautiful cake displays handled with care.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-full shadow-sm text-primary">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Address</h3>
                                    <p className="text-muted-foreground">{businessData.contact.address}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-full shadow-sm text-primary">
                                    <Clock className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Opening Hours</h3>
                                    <p className="text-muted-foreground">{businessData.contact.hours}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-full shadow-sm text-primary">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Contact</h3>
                                    <p className="text-muted-foreground">{businessData.contact.phone}</p>
                                </div>
                            </div>
                        </div>

                        <Button size="lg" className="w-full sm:w-auto" asChild>
                            <a href={businessData.contact.google_maps_link} target="_blank" rel="noopener noreferrer">
                                Get Directions
                            </a>
                        </Button>
                    </div>

                    <div className="bg-white p-2 rounded-2xl shadow-xl overflow-hidden h-[400px] w-full">
                        <iframe
                            src={mapSrc}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Bakers Bunch Location"
                            className="rounded-xl h-full w-full"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
