"use client";

import { businessData } from "./data";
import { CheckCircle2, Clock, MapPin, Truck, Users, Coffee } from "lucide-react";

export function Features() {
    const icons = [<Coffee />, <CheckCircle2 />, <Users />, <Clock />, <Truck />, <Clock />];

    return (
        <section id="features" className="py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="relative">
                        <div className="absolute -top-20 -left-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl" />

                        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                            <img
                                src="/assets/lets meet cafe1.jpg"
                                alt="Cafe Interior"
                                className="w-full aspect-[4/5] object-cover"
                            />
                            <div className="absolute bottom-10 left-10 p-8 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl max-w-xs">
                                <p className="text-3xl font-black text-orange-600 mb-1 tracking-tighter">SINCE LONG</p>
                                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest leading-none">The Vesu Original</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 uppercase leading-tight">
                            More Than Just <br />
                            <span className="text-orange-600">A Fast Food Joint</span>
                        </h2>
                        <p className="text-xl text-gray-600 mb-12 leading-relaxed font-medium">
                            {businessData.content_blocks.about_paragraph}
                        </p>

                        <div className="grid gap-6">
                            {businessData.content_blocks.features_bullets.map((feature, i) => (
                                <div key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white transition-all cursor-default group">
                                    <div className="p-3 bg-orange-100 text-orange-600 rounded-xl group-hover:bg-orange-600 group-hover:text-white transition-colors">
                                        {i < icons.length ? icons[i] : <CheckCircle2 />}
                                    </div>
                                    <div>
                                        <p className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors uppercase tracking-tight">{feature}</p>
                                        <p className="text-sm text-gray-400 font-medium">Premium Service Guaranteed</p>
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
