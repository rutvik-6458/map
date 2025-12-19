"use client";
import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Droplets, Settings, ShieldCheck, ArrowRight } from "lucide-react";

export default function Services() {
    const services = [
        {
            title: "Mobile Phone Repair",
            desc: "Expert screen replacements, battery changes, and hardware fixes for all major smartphone brands including Apple, Samsung, and more.",
            icon: <Smartphone className="w-8 h-8" />
        },
        {
            title: "Water Damage Repair",
            desc: "Advanced ultrasonic cleaning and component-level repair for devices affected by liquid exposure.",
            icon: <Droplets className="w-8 h-8" />
        },
        {
            title: "System Troubleshooting",
            desc: "Comprehensive diagnostics for software glitches, charging issues, and general phone performance problems.",
            icon: <Settings className="w-8 h-8" />
        },
    ];

    return (
        <section className="py-24 bg-gray-950 text-white relative overflow-hidden" id="services">
            {/* Abstract background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-800/5 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <div className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">What we do</div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-8">Professional <br /><span className="text-blue-500">Service Solutions</span></h2>
                        <p className="text-gray-400 text-xl leading-relaxed">
                            We specialize in high-precision mobile repairs using state-of-the-art equipment to ensure your device is restored to perfect condition.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <a href="#location">
                            <button className="bg-white hover:bg-blue-600 hover:text-white text-gray-950 px-10 py-5 rounded-[1.5rem] font-bold transition-all duration-300 shadow-xl shadow-white/5 active:scale-95 group flex items-center gap-3">
                                Get a Quote
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </a>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-gray-900/50 backdrop-blur-sm p-12 rounded-[3.5rem] border border-gray-800/50 hover:border-blue-500/50 transition-all duration-500 group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 text-gray-800/20 font-black text-6xl group-hover:text-blue-500/10 transition-colors">
                                0{idx + 1}
                            </div>

                            <div className="w-20 h-20 bg-blue-600/10 text-blue-500 rounded-[2rem] flex items-center justify-center mb-10 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-2xl group-hover:shadow-blue-600/40 transition-all duration-500">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-6 group-hover:text-blue-400 transition-colors">{service.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-lg mb-10 font-medium">{service.desc}</p>

                            <div className="flex items-center gap-3 py-4 border-t border-gray-800/50 group-hover:border-blue-500/20 transition-colors">
                                <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                                    <ShieldCheck size={18} />
                                </div>
                                <span className="text-sm font-bold text-gray-500 group-hover:text-gray-300 uppercase tracking-widest transition-colors">Service Warranty Included</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
