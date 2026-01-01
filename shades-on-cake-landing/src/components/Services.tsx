"use client";

import { Cake, Cookie, Coffee, Star } from "lucide-react";

const services = [
    {
        title: "Designer Cakes",
        description: "Visually stunning custom cakes tailors to your theme and celebration.",
        icon: Cake,
        price: "Custom",
    },
    {
        title: "Custom Flavours",
        description: "Choose from our wide range of unique and delicious cake flavour combinations.",
        icon: Star,
        price: "Reasonable",
    },
    {
        title: "Cupcakes & Mousse",
        description: "Perfectly portioned desserts for picking up, gifting or events.",
        icon: Cookie,
        price: "Daily Fresh",
    },
];

const Services = () => {
    return (
        <section id="services" className="py-24 px-4 bg-white">
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#2D241E] mb-6">
                    Our Special <span className="text-[#DB2777]">Offerings</span>
                </h2>
                <p className="text-xl text-[#6B5E55] max-w-2xl mx-auto">
                    From multi-tier designer cakes to delightful daily treats, we bake happiness into every bite.
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                {services.map((s, i) => (
                    <div
                        key={i}
                        className="group p-8 rounded-[2.5rem] bg-[#FFFAF5] border border-[#F1E9E2] hover:border-[#DB2777]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#DB2777]/10"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-[#DB2777] mb-8 shadow-sm group-hover:scale-110 group-hover:bg-[#DB2777] group-hover:text-white transition-all duration-300">
                            <s.icon size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-[#2D241E] mb-4">{s.title}</h3>
                        <p className="text-[#6B5E55] leading-relaxed mb-8">{s.description}</p>
                        <div className="pt-6 border-t border-[#F1E9E2] flex items-center justify-between">
                            <span className="font-bold text-[#DB2777] uppercase text-sm tracking-widest">{s.price}</span>
                            <a href="#location" className="text-[#2D241E] font-bold flex items-center gap-2 hover:gap-3 transition-all">
                                Order Now
                                <div className="w-6 h-6 rounded-full bg-[#2D241E] text-white flex items-center justify-center">
                                    <span className="text-xs">→</span>
                                </div>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
