import { MapPin, Phone, Clock, Navigation, CornerDownRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Location() {
    return (
        <section id="location" className="py-16 md:py-24 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="rounded-3xl overflow-hidden h-[300px] sm:h-[400px] lg:h-[500px] shadow-2xl border-4 border-white relative group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.278551230424!2d72.7650255!3d21.1413102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0527962bf9b0f%3A0xfb9c537103110ef2!2sBlue%20Basil!5e0!3m2!1sen!2sin!4v1767164306652!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="transition-all duration-500"
                            ></iframe>
                            <div className="absolute top-4 left-4">
                                <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/20">
                                    <div className="flex items-center gap-2 text-primary font-bold mb-1">
                                        <MapPin className="w-4 h-4" />
                                        <span>Blue Basil</span>
                                    </div>
                                    <p className="text-xs text-slate-500">Magdalla, Surat</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 animate-fade-up">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold mb-6 tracking-wider uppercase">
                            <MapPin className="w-3 h-3" />
                            Visit Our Restaurant
                        </div>
                        <h2 className="text-2xl md:text-5xl font-bold mb-8">Conveniently Located in <span className="text-primary tracking-tight">Vesu Area</span></h2>

                        <div className="space-y-4 md:space-y-6 mb-8">
                            {/* Address Card */}
                            <div className="flex items-start gap-3 md:gap-4 p-4 md:p-5 rounded-2xl bg-slate-50 border border-slate-100">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm text-primary">
                                    <CornerDownRight className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <div className="min-w-0">
                                    <h4 className="font-bold text-slate-900 mb-1 text-sm md:text-base">Address</h4>
                                    <p className="text-sm md:text-base text-slate-600 leading-relaxed break-words">
                                        GF/8-12, Aakash Retail, Opp. Safal Square, NM Mavani Rd, Magdalla, Gujarat 395007
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                                {/* Call Card */}
                                <a href="tel:07284890007" className="flex items-center gap-3 md:gap-4 p-4 md:p-5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/30 transition-colors">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm text-primary">
                                        <Phone className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                    <div className="min-w-0">
                                        <h4 className="font-bold text-slate-900 mb-1 text-sm md:text-base">Call Us</h4>
                                        <p className="text-sm md:text-base text-slate-600 truncate">072848 90007</p>
                                    </div>
                                </a>

                                {/* Hours Card */}
                                <div className="flex items-center gap-3 md:gap-4 p-4 md:p-5 rounded-2xl bg-slate-50 border border-slate-100">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm text-secondary">
                                        <Clock className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                    <div className="min-w-0">
                                        <h4 className="font-bold text-slate-900 mb-1 text-sm md:text-base">Hours</h4>
                                        <p className="text-sm md:text-base text-slate-600 leading-tight">11 AM - 3 PM <br /> 7 PM - 11 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Button size="lg" className="w-full sm:w-auto h-14 px-6 md:px-10 rounded-full" asChild>
                            <a href="https://www.google.com/maps/dir//Blue+Basil+Restaurant+GF%2F8-12+Aakash+Retail+NM+Mavani+Rd+Magdalla+Surat" target="_blank">
                                <Navigation className="w-5 h-5 mr-3" />
                                Get Directions on Google Maps
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
