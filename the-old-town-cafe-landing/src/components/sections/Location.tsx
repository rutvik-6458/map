"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const Location = () => {
    return (
        <section id="location" className="py-24 bg-[#FDFCF0]">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-center lg:text-left"
                    >
                        <h2 className="font-playfair text-3xl md:text-5xl font-bold text-slate-900 mb-8">
                            Find Us In <span className="text-amber-600">Vesu</span>
                        </h2>

                        <div className="space-y-8 mb-10 text-left max-w-max mx-auto lg:mx-0">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center shrink-0">
                                    <MapPin className="w-6 h-6 text-amber-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Our Address</h3>
                                    <p className="text-slate-600 leading-relaxed text-lg">
                                        Times Corner, G-19, near Ambrosia,<br />
                                        Vesu, Surat, Gujarat 395007
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center shrink-0">
                                    <Clock className="w-6 h-6 text-amber-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Opening Hours</h3>
                                    <p className="text-slate-600 leading-relaxed text-lg">
                                        Open Daily: 11:00 AM – 11:00 PM
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center shrink-0">
                                    <Phone className="w-6 h-6 text-amber-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Contact</h3>
                                    <p className="text-slate-600 leading-relaxed text-lg">
                                        084607 07091
                                    </p>
                                </div>
                            </div>
                        </div>

                        <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white h-14 px-8 rounded-full text-lg w-full sm:w-auto" asChild>
                            <a href="https://maps.app.goo.gl/oZCMNvDCkMVyYqFV7" target="_blank">
                                <Navigation className="w-5 h-5 mr-2" />
                                Get Directions
                            </a>
                        </Button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-amber-900/10 border-4 sm:border-8 border-white"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3721.2880924814676!2d72.763964!3d21.1409303!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be05396cfd8a4db%3A0x7313f649eea8ea01!2sThe%20Old%20Town%20Cafe!5e0!3m2!1sen!2sin!4v1767179160235!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
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
