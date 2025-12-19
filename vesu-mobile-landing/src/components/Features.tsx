"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Award, Zap, Truck, Users, MapPin } from "lucide-react";

export default function Features() {
    const features = [
        {
            title: "Expert Repair",
            desc: "Highly knowledgeable technician with years of experience handling all major brands.",
            icon: <Award className="w-7 h-7" />,
            color: "bg-blue-100 text-blue-600"
        },
        {
            title: "Water Damage Fix",
            desc: "Successful repairs for phones dipped in water, with quick recovery results.",
            icon: <Zap className="w-7 h-7" />,
            color: "bg-amber-100 text-amber-600"
        },
        {
            title: "Fast Turnaround",
            desc: "Efficiency is our priority, with most repairs completed same-day.",
            icon: <CheckCircle2 className="w-7 h-7" />,
            color: "bg-green-100 text-green-600"
        },
        {
            title: "Delivery Option",
            desc: "We offer delivery services for your convenience to get you back online faster.",
            icon: <Truck className="w-7 h-7" />,
            color: "bg-purple-100 text-purple-600"
        },
        {
            title: "Trusted Local Shop",
            desc: "A neighborhood favorite in Vesu with consistent 5-star reliability.",
            icon: <Users className="w-7 h-7" />,
            color: "bg-pink-100 text-pink-600"
        },
        {
            title: "Convenient Hub",
            desc: "Easily located at Someshwar Square with ample parking nearby.",
            icon: <MapPin className="w-7 h-7" />,
            color: "bg-cyan-100 text-cyan-600"
        },
    ];

    return (
        <section className="py-24 bg-white overflow-hidden" id="features">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-1 grid sm:grid-cols-2 gap-x-10 gap-y-16"
                    >
                        {features.map((feature, idx) => (
                            <div key={idx} className="group flex flex-col items-start gap-6">
                                <div className={`flex-shrink-0 w-16 h-16 ${feature.color} rounded-[1.25rem] flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm border border-white`}>
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                                    <p className="text-gray-600 leading-relaxed font-medium">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 lg:order-2"
                    >
                        <div className="mb-12">
                            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-8 tracking-tight leading-tight">
                                Why Vesu Mobile is Your <br />
                                <span className="text-blue-600 italic">No. 1 Choice</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-10 leading-relaxed font-medium">
                                Vesu Mobile is a local cell phone store in Vesu, Surat, known for reliable and knowledgeable mobile repair service. Customers highlight quick turnaround times and expert handling of complex issues like water damage.
                            </p>
                        </div>

                        <div className="relative group">
                            <div className="absolute -inset-4 bg-blue-100/50 rounded-[3rem] -z-10 blur-xl group-hover:bg-blue-200/50 transition-colors"></div>
                            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-[10px] border-white aspect-video md:h-[450px]">
                                <img
                                    src="/store.png"
                                    alt="Vesu Mobile Store Interior"
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Overlay Badge */}
                            <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-3xl shadow-xl border border-gray-100 flex items-center gap-4 max-w-[220px]">
                                <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center text-white font-bold">100%</div>
                                <div>
                                    <p className="font-bold text-gray-900 leading-tight">Reliability</p>
                                    <p className="text-xs text-gray-500 font-medium whitespace-nowrap">Local Community Choice</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
