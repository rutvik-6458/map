"use client";

import { MapPin, Phone, Clock, Navigation } from "lucide-react";

const Location = () => {
    const handleDirections = () => {
        window.open("https://www.google.com/maps/dir/?api=1&destination=Shades+On+Cake+Vesu+Surat", "_blank");
    };


    return (
        <section id="location" className="py-16 md:py-24 px-4 bg-[#FFFAF5]">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-10 md:gap-12 items-center">
                    <div className="text-center md:text-left flex flex-col items-center md:items-start">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-[#2D241E] mb-6 md:mb-8">
                            Visit Our <span className="text-[#DB2777]">Savoury Studio</span>
                        </h2>

                        <div className="space-y-6 md:space-y-8 mb-10 md:mb-12 w-full text-left">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-[#DB2777]/10 flex items-center justify-center text-[#DB2777] shrink-0">
                                    <MapPin size={20} className="md:w-6 md:h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg md:text-xl text-[#2D241E] mb-1">Our Address</h3>
                                    <p className="text-[#6B5E55] text-sm md:text-lg leading-relaxed">
                                        Vastugram Apartment, VIP Road, NM Mavani Rd, Vesu, Surat, Gujarat 395007
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-[#DB2777]/10 flex items-center justify-center text-[#DB2777] shrink-0">
                                    <Phone size={20} className="md:w-6 md:h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg md:text-xl text-[#2D241E] mb-1">Call Us</h3>
                                    <p className="text-[#6B5E55] text-sm md:text-lg">084695 20030</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-[#DB2777]/10 flex items-center justify-center text-[#DB2777] shrink-0">
                                    <Clock size={20} className="md:w-6 md:h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg md:text-xl text-[#2D241E] mb-1">Hours</h3>
                                    <p className="text-[#6B5E55] text-sm md:text-lg">Open · Closes 10:00 pm</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                            <button
                                onClick={handleDirections}
                                className="flex items-center justify-center gap-3 bg-[#2D241E] text-white px-8 py-4 rounded-full font-bold text-base md:text-lg hover:bg-black transition-all shadow-lg w-full sm:w-auto"
                            >
                                <Navigation size={18} />
                                Get Directions
                            </button>
                            <a
                                href="tel:08469520030"
                                className="flex items-center justify-center gap-3 bg-white text-[#DB2777] border-2 border-[#DB2777] px-8 py-4 rounded-full font-bold text-base md:text-lg hover:bg-[#DB2777]/5 transition-all shadow-sm w-full sm:w-auto"
                            >
                                <Phone size={18} />
                                Call Now
                            </a>
                        </div>
                    </div>

                    <div className="rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white h-[300px] sm:h-[400px] md:h-[500px] relative mt-8 md:mt-0">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.2975758055145!2d72.7648722!3d21.1405527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be05378340f2f8d%3A0xce1de77896e8334!2sShades%20On%20Cake!5e0!3m2!1sen!2sin!4v1767267230972!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Location;
