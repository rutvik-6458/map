"use client";

import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";

export default function Location() {
    const address = "SNS Platina, 108, Vesu Main Road, Surat, Gujarat 395007";
    const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.234567890!2d72.784!3d21.1415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0516d00000001%3A0x0000000000000000!2sMeraki+The+Coffee+House!5e0!3m2!1sen!2sin!4v1600000000000"; // Placeholder URL, need to replace with real if available

    return (
        <section id="location" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-stone-50 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="bg-white rounded-2xl sm:rounded-3xl md:rounded-[40px] shadow-2xl overflow-hidden flex flex-col lg:flex-row shadow-stone-200/50 border border-stone-100">
                    <div className="lg:w-1/2 p-6 sm:p-8 md:p-10 lg:p-16 flex flex-col justify-center">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-outfit font-bold text-stone-900 mb-6 sm:mb-8">
                            Find Us
                        </h2>

                        <div className="space-y-6 sm:space-y-8">
                            <div className="flex gap-3 sm:gap-4">
                                <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-stone-50 text-stone-900 h-fit flex-shrink-0">
                                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-stone-900 mb-1 text-sm sm:text-base">Our Address</h4>
                                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed uppercase tracking-wide">
                                        SNS Platina, 108, Vesu Main Road, near Reliance Market, Vesu, Surat - 395007
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3 sm:gap-4">
                                <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-stone-50 text-stone-900 h-fit flex-shrink-0">
                                    <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-stone-900 mb-1 text-sm sm:text-base">Operating Hours</h4>
                                    <p className="text-xs sm:text-sm text-stone-600">Open daily until 10:00 PM</p>
                                </div>
                            </div>

                            <div className="flex gap-3 sm:gap-4">
                                <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-stone-50 text-stone-900 h-fit flex-shrink-0">
                                    <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-stone-900 mb-1 text-sm sm:text-base">Contact</h4>
                                    <p className="text-xs sm:text-sm text-stone-600">097377 94366</p>
                                </div>
                            </div>
                        </div>

                        <a
                            href="https://maps.app.goo.gl/6tzgiB7RWJiyaeS77"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 sm:mt-12 w-full sm:w-fit px-6 sm:px-8 py-3 sm:py-4 bg-stone-900 text-white font-bold rounded-full flex items-center justify-center sm:justify-start gap-2 hover:bg-stone-800 transition-all group text-sm sm:text-base"
                        >
                            Get Directions
                            <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-white transition-colors" />
                        </a>
                    </div>

                    <div className="lg:w-1/2 h-[300px] sm:h-[400px] md:h-[450px] lg:h-auto bg-stone-200 relative min-h-[300px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.2185566491764!2d72.78183187602047!3d21.14368568393526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be051cdcd9970e7%3A0xc3f58a36c5617a!2sMeraki%20The%20Coffee%20House!5e0!3m2!1sen!2sin!4v1735123456789!5m2!1sen!2sin"
                            className="absolute inset-0 w-full h-full border-0"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Meraki The Coffee House Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
