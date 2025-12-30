import { BUSINESS_DATA } from "@/data";
import { Clock, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Location() {
    return (
        <section id="location" className="py-20 md:py-24 bg-secondary/20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
                    <div className="space-y-6 md:space-y-8">
                        <h2 className="text-3xl md:text-4xl font-bold">Find Us in Vesu</h2>

                        <div className="space-y-5 md:space-y-6">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <MapPin size={20} className="md:w-6 md:h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-base md:text-lg mb-0.5 md:mb-1">Our Address</h4>
                                    <p className="text-sm md:text-base text-muted-foreground">{BUSINESS_DATA.contact.address}</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Clock size={20} className="md:w-6 md:h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-base md:text-lg mb-0.5 md:mb-1">Operating Hours</h4>
                                    <p className="text-sm md:text-base text-muted-foreground">{BUSINESS_DATA.contact.hours}</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                    <Phone size={20} className="md:w-6 md:h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-base md:text-lg mb-0.5 md:mb-1">Contact Number</h4>
                                    <p className="text-sm md:text-base text-muted-foreground">{BUSINESS_DATA.contact.phone}</p>
                                </div>
                            </div>
                        </div>

                        <Button size="lg" asChild className="rounded-xl h-14 px-8 font-bold bg-primary shadow-lg shadow-primary/20 w-full sm:w-auto">
                            <a href={BUSINESS_DATA.contact.google_maps_link} target="_blank">
                                Get Directions on Maps
                            </a>
                        </Button>
                    </div>

                    <div className="h-[300px] sm:h-[400px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border bg-muted">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.286389685299!2d72.7731596!3d21.140998099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be05300549bd0db%3A0x64b43b8fe390909c!2sThe%20Old%20Roastery!5e0!3m2!1sen!2sin!4v1767099118532!5m2!1sen!2sin"
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
