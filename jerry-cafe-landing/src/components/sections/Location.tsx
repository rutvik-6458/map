"use client";

import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";

const Location = () => {
    const address = "Near Chai Bike, Ward 2, Vesu, Surat, Gujarat 395007";
    const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.2880924814676!2d72.76872759999999!3d21.140930299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0539166b6ff45%3A0x2e9f97ae270b0197!2sJerry%20cafe!5e0!3m2!1sen!2sin!4v1767174199285!5m2!1sen!2sin";
    const directionsUrl = "https://www.google.com/maps/search/?api=1&query=Jerry+Cafe+Near+Chai+Bike+Ward+2+Vesu+Surat";
    const googleMapsLink = "https://maps.app.goo.gl/mxku3nUznWqxdtg28";

    return (
        <section id="location" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-4xl font-bold font-outfit mb-8">Visit Us</h2>
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Our Address</h3>
                                    <p className="text-muted-foreground">Near Chai Bike, Ward 2, Vesu, Surat, Gujarat 395007</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Opening Hours</h3>
                                    <p className="text-muted-foreground">Monday – Sunday: 11:00 AM – 11:00 PM</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Contact</h3>
                                    <p className="text-muted-foreground italic">Available for walk-ins and table bookings.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <a
                                href={googleMapsLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold shadow-lg hover:shadow-primary/30 transition-all active:scale-95"
                            >
                                Get Directions <ExternalLink size={20} />
                            </a>
                        </div>
                    </div>

                    <div className="relative group">
                        <div className="absolute inset-0 bg-primary/5 rounded-[2rem] -rotate-3 transition-transform group-hover:rotate-0" />
                        <div className="relative h-[450px] bg-muted rounded-[2rem] overflow-hidden border-2 border-white shadow-2xl">
                            <iframe
                                title="Jerry Cafe Location"
                                src={mapUrl}
                                className="w-full h-full grayscale hover:grayscale-0 transition-all"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
