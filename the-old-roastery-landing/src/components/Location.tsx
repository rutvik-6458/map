import { BUSINESS_DATA } from "@/data";
import { Clock, MapPin, Phone } from "lucide-react";

export function Location() {
    return (
        <section id="location" className="py-24 bg-secondary/20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl font-bold">Find Us in Vesu</h2>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Our Address</h4>
                                    <p className="text-muted-foreground">{BUSINESS_DATA.contact.address}</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Operating Hours</h4>
                                    <p className="text-muted-foreground">{BUSINESS_DATA.contact.hours}</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">Contact Number</h4>
                                    <p className="text-muted-foreground">{BUSINESS_DATA.contact.phone}</p>
                                </div>
                            </div>
                        </div>

                        <a
                            href={BUSINESS_DATA.contact.google_maps_link}
                            target="_blank"
                            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-primary/20 transition-all hover:-translate-y-1"
                        >
                            Get Directions on Maps
                        </a>
                    </div>

                    <div className="h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl border">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14885.54924519998!2d72.766!3d21.135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d92a0000001%3A0x6b4fb4e5d8b67482!2sThe+Old+Roastery!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
