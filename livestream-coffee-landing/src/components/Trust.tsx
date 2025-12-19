"use client";

import { Star, Users, Award, Heart } from "lucide-react";

const stats = [
    { label: "Google Rating", value: "4.4 / 5", icon: Star, color: "text-amber-500" },
    { label: "Happy Customers", value: "10,000+", icon: Users, color: "text-blue-500" },
    { label: "Reviews", value: "768+", icon: Award, color: "text-green-500" },
    { label: "Quality First", value: "Premium", icon: Heart, color: "text-rose-500" },
];

const testimonials = [
    {
        quote: "Good coffee, good ambience. Tried their cappuccino and cheesecake, it was delicious.",
        author: "Satisfied Customer",
        rating: 5,
    },
    {
        quote: "Crowd and atmosphere is also good with like minded people.",
        author: "Local Guide",
        rating: 5,
    },
    {
        quote: "Well-known for a wide variety of cheesecakes. The Blueberry cheesecake is a must try!",
        author: "Coffee Enthusiast",
        rating: 4,
    }
];

export default function Trust() {
    return (
        <section id="reviews" className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {stats.map((stat, i) => (
                        <div key={i} className="group p-8 rounded-3xl bg-stone-50 border border-stone-100 transition-all hover:shadow-xl hover:-translate-y-1">
                            <stat.icon className={cn("w-8 h-8 mb-4 transition-transform group-hover:scale-110", stat.color)} />
                            <div className="text-3xl font-serif font-black text-stone-900 mb-1">{stat.value}</div>
                            <div className="text-sm font-bold text-stone-500 uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <div className="space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-sm font-bold text-amber-800 uppercase tracking-[0.3em]">Social Proof</h2>
                        <h3 className="text-4xl md:text-5xl font-serif font-black text-stone-900 italic">Loved by the Community</h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testi, i) => (
                            <div key={i} className="relative p-10 rounded-[3rem] bg-stone-50 border border-stone-100 flex flex-col justify-between">
                                <div className="absolute top-8 right-10 flex gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={cn("w-4 h-4 fill-current", i < testi.rating ? "text-amber-400" : "text-stone-200")} />
                                    ))}
                                </div>
                                <p className="text-xl md:text-2xl text-stone-800 font-medium italic leading-relaxed mb-8">
                                    "{testi.quote}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-amber-100 border-2 border-white shadow-sm flex items-center justify-center font-bold text-amber-900">
                                        {testi.author[0]}
                                    </div>
                                    <div>
                                        <div className="font-bold text-stone-900 uppercase tracking-wider text-xs">{testi.author}</div>
                                        <div className="text-stone-500 text-[10px] font-bold uppercase tracking-widest">Verified Reviewer</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// Helper function in case import from lib is slow or needs to be self-contained
function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ");
}
