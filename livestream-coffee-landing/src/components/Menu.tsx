"use client";

import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";

const menuItems = [
    {
        category: "Signature Cheesecakes",
        items: [
            { name: "Blueberry Cheesecake", price: "₹245", desc: "Our best-seller! Creamy cheesecake with a rich blueberry swirl.", image: "/assets/images.jfif" },
            { name: "Red Velvet Cheesecake", price: "₹265", desc: "Decadent red velvet base with velvety smooth cream cheese.", image: "/assets/red-velvet-cheesecake-801717242-0e7to17i.avif" },
            { name: "New York Style", price: "₹225", desc: "Classic, dense, and creamy with a buttery graham cracker crust.", image: "/assets/sasa.jfif" },
        ]
    },
    {
        category: "Specialty Beverages",
        items: [
            { name: "Vietnamese Coffee", price: "₹185", desc: "Strong, dark roast with condensed milk. A crowd favorite!", image: "/assets/Vietnamese-Coffee-756x471.avif" },
            { name: "Mocha Frappe", price: "₹195", desc: "Blended coffee with rich chocolate and whipped cream.", image: "/assets/6987bc48fa3e3cc542e5831cd745d7e4.avif" },
            { name: "Classic Cappuccino", price: "₹165", desc: "Perfectly balanced espresso with frothy micro-foam.", image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&q=80&w=800" },
        ]
    }
];

export default function Menu() {
    const whatsappLink = "https://wa.me/919376229229?text=Hi, I would like to order...";

    return (
        <section id="menu" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-stone-900 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 mb-12 sm:mb-16">
                    <div className="space-y-3 sm:space-y-4">
                        <h2 className="text-xs sm:text-sm font-bold text-amber-500 uppercase tracking-[0.3em]">The Selection</h2>
                        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black italic">Signature Items</h3>
                    </div>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-amber-600 text-white font-bold text-sm sm:text-base hover:bg-amber-700 transition-all active:scale-95 w-full md:w-auto"
                    >
                        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>Order on WhatsApp</span>
                    </a>
                </div>

                <div className="space-y-12 sm:space-y-16 md:space-y-20">
                    {menuItems.map((group, idx) => (
                        <div key={idx} className="space-y-8 sm:space-y-10 md:space-y-12">
                            <h4 className="text-lg sm:text-xl md:text-2xl font-bold uppercase tracking-[0.2em] text-stone-400 border-b border-stone-800 pb-3 sm:pb-4">
                                {group.category}
                            </h4>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                                {group.items.map((item, i) => (
                                    <div key={i} className="group flex flex-col gap-4 sm:gap-6">
                                        <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-stone-800 relative">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                                loading="lazy"
                                            />
                                            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white text-stone-900 px-3 sm:px-4 py-1 rounded-full font-black text-xs sm:text-sm">
                                                {item.price}
                                            </div>
                                        </div>
                                        <div className="space-y-2 px-2">
                                            <h5 className="text-lg sm:text-xl md:text-2xl font-serif font-bold group-hover:text-amber-500 transition-colors uppercase italic tracking-tight">
                                                {item.name}
                                            </h5>
                                            <p className="text-sm sm:text-base text-stone-400 font-medium leading-relaxed italic">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
