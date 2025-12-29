"use client";

import { businessData } from "./data";
import { CheckCircle2, Clock, MapPin, Truck, Users, Coffee } from "lucide-react";

export function Features() {
    const icons = [<Coffee />, <CheckCircle2 />, <Users />, <Clock />, <Truck />, <Clock />];

    return (
        <section id="features" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
                    <div className="relative">
                        <div className="absolute -top-10 sm:-top-20 -left-10 sm:-left-20 w-32 h-32 sm:w-64 sm:h-64 bg-orange-500/10 rounded-full blur-3xl" />
                        <div className="absolute -bottom-10 sm:-bottom-20 -right-10 sm:-right-20 w-32 h-32 sm:w-64 sm:h-64 bg-orange-600/10 rounded-full blur-3xl" />

                        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="/assets/lets meet cafe1.jpg"
                                alt="Cafe Interior"
                                className="w-full aspect-[4/5] object-cover"
                            />
                            <div className="absolute bottom-4 left-4 sm:bottom-10 sm:left-10 p-4 sm:p-6 md:p-8 bg-white/90 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-xl max-w-[200px] sm:max-w-xs">
                                <p className="text-xl sm:text-2xl md:text-3xl font-black text-orange-600 mb-1 tracking-tighter">SINCE LONG</p>
                                <p className="text-xs sm:text-sm font-bold text-gray-400 uppercase tracking-widest leading-none">The Vesu Original</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6 sm:mb-8 uppercase leading-tight">
                            More Than Just <br />
                            <span className="text-orange-600">A Fast Food Joint</span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 leading-relaxed font-medium">
                            {businessData.content_blocks.about_paragraph}
                        </p>

                        <div className="grid gap-4 sm:gap-6">
                            {businessData.content_blocks.features_bullets.map((feature, i) => (
                                <div key={i} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:bg-white transition-all cursor-default group">
                                    <div className="p-2 sm:p-3 bg-orange-100 text-orange-600 rounded-lg sm:rounded-xl group-hover:bg-orange-600 group-hover:text-white transition-colors shrink-0">
                                        <div className="w-5 h-5 sm:w-6 sm:h-6">
                                            {i < icons.length ? icons[i] : <CheckCircle2 size={20} className="sm:w-6 sm:h-6" />}
                                        </div>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-sm sm:text-base md:text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors uppercase tracking-tight">{feature}</p>
                                        <p className="text-xs sm:text-sm text-gray-400 font-medium">Premium Service Guaranteed</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
