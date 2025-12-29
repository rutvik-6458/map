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
        <section id="reviews" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
                    {stats.map((stat, i) => (
                        <div key={i} className="group p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-stone-50 border border-stone-100 transition-all hover:shadow-xl hover:-translate-y-1">
                            <stat.icon className={cn("w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mb-3 sm:mb-4 transition-transform group-hover:scale-110", stat.color)} />
                            <div className="text-xl sm:text-2xl md:text-3xl font-serif font-black text-stone-900 mb-1">{stat.value}</div>
                            <div className="text-[10px] sm:text-xs md:text-sm font-bold text-stone-500 uppercase tracking-widest leading-tight">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <div className="space-y-8 sm:space-y-10 md:space-y-12">
                    <div className="text-center space-y-3 sm:space-y-4">
                        <h2 className="text-xs sm:text-sm font-bold text-amber-800 uppercase tracking-[0.3em]">Social Proof</h2>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-black text-stone-900 italic px-4">Loved by the Community</h3>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {testimonials.map((testi, i) => (
                            <div key={i} className="relative p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-[2.5rem] md:rounded-[3rem] bg-stone-50 border border-stone-100 flex flex-col justify-between">
                                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-10 flex gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={cn("w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 fill-current", i < testi.rating ? "text-amber-400" : "text-stone-200")} />
                                    ))}
                                </div>
                                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-stone-800 font-medium italic leading-relaxed mb-6 sm:mb-8 pr-8 sm:pr-12">
                                    "{testi.quote}"
                                </p>
                                <div className="flex items-center gap-3 sm:gap-4">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-100 border-2 border-white shadow-sm flex items-center justify-center font-bold text-amber-900 text-sm sm:text-base flex-shrink-0">
                                        {testi.author[0]}
                                    </div>
                                    <div className="min-w-0">
                                        <div className="font-bold text-stone-900 uppercase tracking-wider text-[10px] sm:text-xs truncate">{testi.author}</div>
                                        <div className="text-stone-500 text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">Verified Reviewer</div>
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
