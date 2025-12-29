"use client";

import { businessData } from "./data";
import { Camera } from "lucide-react";

export function Gallery() {
    const images = [
        "/assets/gallry1.jpg",
        "/assets/gallry2.jfif",
        "/assets/gallry3.jpg",
        "/assets/gallry4.jfif"
    ];

    return (
        <section id="gallery" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 sm:mb-16 gap-6">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2 sm:gap-3 text-orange-600 mb-3 sm:mb-4 font-black tracking-widest uppercase text-xs sm:text-sm">
                            <Camera size={18} className="sm:w-5 sm:h-5" /> VISUAL FEAST
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase leading-tight">
                            Captured <span className="text-orange-600">Moments</span>
                        </h2>
                    </div>
                    <p className="text-base sm:text-lg text-gray-500 font-medium max-w-sm">
                        Take a look at why we are the top-rated fries destination in Surat.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                    {images.map((src, i) => (
                        <div key={i} className="relative group overflow-hidden rounded-2xl sm:rounded-3xl">
                            <img
                                src={src}
                                alt={`Gallery ${i + 1}`}
                                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </div>
                    ))}
                </div>

                <div className="mt-12 sm:mt-16 md:mt-20 border-t border-gray-200 pt-8 sm:pt-12 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
                    <p className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 uppercase tracking-tight text-center md:text-left">Follow us for daily cravings @LetsMeetCafe</p>
                    <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
                        {["Instagram", "Facebook", "Twitter"].map((social) => (
                            <button key={social} className="px-4 sm:px-6 py-2 rounded-full border border-gray-200 font-bold hover:bg-black hover:text-white transition-all uppercase text-xs whitespace-nowrap">
                                {social}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
