"use client";

import { Coffee, Cake, Users, Clock, Car, Truck } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
    {
        title: "Specialty Coffee",
        desc: "From Vietnamese coffee to Mocha Frappes, we brew the perfect cup every time.",
        icon: Coffee,
        color: "bg-amber-100 text-amber-900"
    },
    {
        title: "Famous Cheesecakes",
        desc: "Blueberry, Red Velvet, New York - our wide variety of cheesecakes is legendary.",
        icon: Cake,
        color: "bg-rose-100 text-rose-900"
    },
    {
        title: "Lively Ambience",
        desc: "A great atmosphere with a like-minded crowd. Perfect for group meetups.",
        icon: Users,
        color: "bg-blue-100 text-blue-900"
    },
    {
        title: "Open Till Midnight",
        desc: "Your go-to spot for late-night coffee and dessert cravings in Vesu.",
        icon: Clock,
        color: "bg-indigo-100 text-indigo-900"
    },
    {
        title: "Drive-Through",
        desc: "In a hurry? Use our convenient drive-through to grab your favorite treats.",
        icon: Car,
        color: "bg-emerald-100 text-emerald-900"
    },
    {
        title: "Quick Delivery",
        desc: "Get your favorite cheesecakes delivered to your doorstep with no-contact delivery.",
        icon: Truck,
        color: "bg-orange-100 text-orange-900"
    }
];

export default function Features() {
    return (
        <section id="why-us" className="py-24 bg-stone-50">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-sm font-bold text-amber-800 uppercase tracking-[0.3em]">Highlights</h2>
                            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-stone-900 leading-tight italic">
                                More Than Just <br />
                                <span className="text-amber-800">A Coffee Shop</span>
                            </h3>
                        </div>

                        <p className="text-xl text-stone-600 leading-relaxed font-medium">
                            Livestream Coffee Vesu is a popular destination in Surat, loved for its signature cheesecakes and welcoming atmosphere.
                            Whether you're looking to relax or catch up with friends, we provide the perfect setting.
                        </p>

                        <div className="pt-4">
                            <div className="p-8 rounded-[2rem] bg-white border border-stone-100 shadow-xl shadow-stone-200/50">
                                <blockquote className="text-2xl font-serif font-bold text-stone-800 italic leading-snug">
                                    "Livestream Coffee Vesu is especially popular for its wide variety of cheesecakes and quality coffee that keeps the vibrant crowd coming back."
                                </blockquote>
                            </div>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {features.map((feature, i) => (
                            <div key={i} className="group p-8 rounded-[2.5rem] bg-white border border-stone-100 transition-all hover:shadow-2xl hover:-translate-y-2">
                                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:rotate-6", feature.color)}>
                                    <feature.icon className="w-7 h-7" />
                                </div>
                                <h4 className="text-xl font-bold text-stone-900 mb-3 uppercase tracking-tight">{feature.title}</h4>
                                <p className="text-stone-500 font-medium leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
