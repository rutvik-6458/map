"use client";

import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";

export default function Location() {
    const address = "SNS Platina, 108, Vesu Main Road, Surat, Gujarat 395007";
    const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.234567890!2d72.784!3d21.1415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0516d00000001%3A0x0000000000000000!2sMeraki+The+Coffee+House!5e0!3m2!1sen!2sin!4v1600000000000"; // Placeholder URL, need to replace with real if available

    return (
        <section id="location" className="py-24 bg-stone-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col lg:flex-row shadow-stone-200/50 border border-stone-100">
                    <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                        <h2 className="text-3xl md:text-5xl font-outfit font-bold text-stone-900 mb-8">
                            Find Us
                        </h2>

                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <div className="p-3 rounded-2xl bg-stone-50 text-stone-900 h-fit">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-stone-900 mb-1">Our Address</h4>
                                    <p className="text-stone-600 leading-relaxed max-w-xs uppercase text-sm tracking-wide">
                                        SNS Platina, 108, Vesu Main Road, near Reliance Market, Vesu, Surat - 395007
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="p-3 rounded-2xl bg-stone-50 text-stone-900 h-fit">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-stone-900 mb-1">Operating Hours</h4>
                                    <p className="text-stone-600">Open daily until 10:00 PM</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="p-3 rounded-2xl bg-stone-50 text-stone-900 h-fit">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-stone-900 mb-1">Contact</h4>
                                    <p className="text-stone-600">097377 94366</p>
                                </div>
                            </div>
                        </div>

                        <a
                            href="https://www.google.com/maps/search/?api=1&query=Meraki+The+Coffee+House+SNS+Platina+Vesu+Surat"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-12 w-fit px-8 py-4 bg-stone-900 text-white font-bold rounded-full flex items-center gap-2 hover:bg-stone-800 transition-all group"
                        >
                            Get Directions
                            <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-white transition-colors" />
                        </a>
                    </div>

                    <div className="lg:w-1/2 h-[400px] lg:h-auto bg-stone-200 relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.2185566491764!2d72.78183187602047!3d21.14368568393526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be051cdcd9970e7%3A0xc3f58a36c5617a!2sMeraki%20-%20The%20Coffee%20House!5e0!3m2!1sen!2sin!4v1703150000000!5m2!1sen!2sin"
                            className="absolute inset-0 w-full h-full border-0"
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
