"use client";

import { CheckCircle2, Heart, Award, Zap, Package, Truck, User } from "lucide-react";

// Wait, let's use the JSON features exactly
const featuresList = [
    { title: "4.9-Star Rated Bakery", icon: Award },
    { title: "Custom & Designer Cakes", icon: Heart },
    { title: "Wide Variety of Flavours", icon: Zap },
    { title: "Reasonable Pricing", icon: CheckCircle2 },
    { title: "Drive-through & Delivery", icon: Truck },
    { title: "Women-owned Business", icon: User },
];

const Highlights = () => {
    return (
        <section id="features" className="py-16 md:py-24 px-4 bg-[#F1E9E2]">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-[#2D241E] mb-6 md:mb-8">
                            Why Customers <span className="text-[#DB2777]">Choose Us</span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-[#6B5E55] mb-8 md:mb-12 leading-relaxed">
                            Shades On Cake is more than just a bakery; it's where creativity meets taste. We specialize in making your special moments even more memorable with our handcrafted designer cakes.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                            {featuresList.map((f, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow text-left">
                                    <div className="w-10 h-10 rounded-full bg-[#DB2777]/10 flex items-center justify-center text-[#DB2777] shrink-0">
                                        <f.icon size={20} />
                                    </div>
                                    <span className="font-semibold text-[#2D241E] text-sm sm:text-base">{f.title}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative mt-8 md:mt-0">
                        <div className="aspect-[4/5] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&w=1587&auto=format&fit=crop"
                                alt="Cake Decoration"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 right-4 sm:-right-6 md:-right-12 bg-[#DB2777] text-white p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-xl max-w-[150px] md:max-w-[200px] rotate-3">
                            <p className="text-xl md:text-2xl font-bold font-playfair mb-1">Reasonable</p>
                            <p className="text-xs md:text-sm opacity-90">Premium designs without the premium price tag.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Highlights;
