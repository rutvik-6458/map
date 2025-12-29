"use client";

import { businessData } from "./data";
import { Utensils, MessageCircle, ArrowUpRight } from "lucide-react";

export function Menu() {
    return (
        <section id="menu" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white relative">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter mb-4 sm:mb-6 uppercase">
                        Signature <span className="text-orange-600">Menu</span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-gray-500 font-medium px-2">
                        The widest variety of chips, fries, and snacks in Vesu. Freshly made, every single time.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                    {businessData.positioning.signature_items_or_services.map((item, i) => {
                        const itemImages: Record<string, string> = {
                            "Maggie Fries": "/assets/Maggie Fries.jpg",
                            "Pizza Fries": "https://images.unsplash.com/photo-1585109649139-366815a0d713?q=80&w=800&auto=format&fit=crop",
                            "Loaded Fries varieties": "https://images.unsplash.com/photo-1606755456206-b25206cde27e?q=80&w=800&auto=format&fit=crop"
                        };
                        return (
                            <div key={i} className="group relative">
                                <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] mb-4 sm:mb-6 overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem]">
                                    <img
                                        src={itemImages[item] || "https://images.unsplash.com/photo-1576102143521-3fc751aeda3b?q=80&w=800&auto=format&fit=crop"}
                                        alt={item}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <button className="w-full py-2.5 sm:py-3 bg-white text-gray-900 rounded-lg sm:rounded-xl font-bold flex items-center justify-center gap-2 text-sm sm:text-base">
                                            ORDER IT NOW <ArrowUpRight size={16} className="sm:w-[18px] sm:h-[18px]" />
                                        </button>
                                    </div>
                                </div>
                                <div className="flex justify-between items-start gap-2">
                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-lg sm:text-xl md:text-2xl font-black uppercase tracking-tight mb-1 group-hover:text-orange-600 transition-colors">{item}</h3>
                                        <p className="text-gray-400 font-medium tracking-wide uppercase text-xs">Our Best Seller</p>
                                    </div>
                                    <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all shrink-0">
                                        <Utensils size={16} className="sm:w-[18px] sm:h-[18px]" />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl lg:rounded-[3.5rem] bg-orange-600 relative overflow-hidden text-center text-white">
                    <div className="absolute top-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-64 sm:h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 tracking-tighter uppercase relative z-10 px-2">
                        Want To See The Full Menu?
                    </h3>
                    <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto font-medium relative z-10 px-2">
                        We have over 50+ varieties of fries, shakes, and quick bites waiting for you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center relative z-10 px-2">
                        <a
                            href={`https://wa.me/${businessData.contact.phone.replace(/\D/g, '')}?text=Hi, can I see the full menu?`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-white text-orange-600 rounded-xl sm:rounded-2xl font-black text-sm sm:text-base md:text-lg hover:bg-gray-100 transition-all shadow-xl w-full sm:w-auto"
                        >
                            <MessageCircle size={18} className="sm:w-5 sm:h-5" /> <span className="whitespace-nowrap">WHATSAPP FOR MENU</span>
                        </a>
                        <a
                            href={`tel:${businessData.contact.phone.replace(/\s+/g, '')}`}
                            className="flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-black text-white rounded-xl sm:rounded-2xl font-black text-sm sm:text-base md:text-lg hover:bg-gray-900 transition-all shadow-xl w-full sm:w-auto"
                        >
                            <span className="whitespace-nowrap">CALL TO INQUIRE</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
