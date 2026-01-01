"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";

const Location = () => {
    return (
        <section id="location" className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6 sm:space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-4 sm:mb-6 text-nature-950">
                                Find Your Way to <br />
                                <span className="text-nature-600 italic">Serenity</span>
                            </h2>
                            <p className="text-base sm:text-lg text-nature-800/70 mb-6 sm:mb-8 leading-relaxed">
                                Located in the heart of Vesu, we're easy to find and hard to leave. Come experience the bliss in person.
                            </p>
                        </div>

                        <div className="space-y-4 sm:space-y-6">
                            <div className="flex gap-3 sm:gap-4 p-4 sm:p-6 rounded-[24px] sm:rounded-[32px] bg-nature-50 border border-nature-100">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center text-nature-600 shadow-sm shrink-0">
                                    <MapPin size={20} className="sm:w-6 sm:h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-nature-900 mb-1 text-sm sm:text-base">Our Address</h4>
                                    <p className="text-nature-800/70 text-sm sm:text-base">
                                        Beside Pooja Abhishek Residency, <br />
                                        opp. Central Market, Vesu, Surat, <br />
                                        Gujarat 395007
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3 sm:gap-4 p-4 sm:p-6 rounded-[24px] sm:rounded-[32px] bg-nature-50 border border-nature-100">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center text-nature-600 shadow-sm shrink-0">
                                    <Clock size={20} className="sm:w-6 sm:h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-nature-900 mb-1 text-sm sm:text-base">Operating Hours</h4>
                                    <p className="text-nature-800/70 text-sm sm:text-base">Open Daily: 11:00 AM – 1:00 AM</p>
                                    <p className="text-nature-500 text-xs sm:text-sm font-medium mt-1">Perfect for late-night coffee</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                            <a
                                href="https://maps.app.goo.gl/2qH6osSxRqVz59Tz5"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-nature-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-nature-800 transition-all shadow-lg shadow-nature-100"
                            >
                                <Navigation size={18} className="sm:w-5 sm:h-5" />
                                Get Directions
                            </a>
                            <a
                                href="tel:+910000000000" // Placeholder
                                className="inline-flex items-center justify-center gap-2 bg-white text-nature-800 border-2 border-nature-200 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-nature-50 transition-all"
                            >
                                <Phone size={18} className="sm:w-5 sm:h-5" />
                                Call Us
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="h-[400px] sm:h-[450px] md:h-[500px] rounded-[32px] sm:rounded-[40px] md:rounded-[48px] overflow-hidden shadow-2xl border-4 sm:border-6 md:border-8 border-nature-50"
                    >
                        {/* Google Maps Embed for "The birds cafe" in Vesu, Surat */}
                        <iframe
                            src="https://maps.google.com/maps?q=The+birds+cafe,+Beside+Pooja+Abhishek+Residency,+opp.+Central+Market,+Vesu,+Surat,+Gujarat+395007&t=&z=16&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Location;
