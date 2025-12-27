import { businessData } from "../data";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import blackForestImg from "../assets/black-forest-cake-7.webp";
import pastryImg from "../assets/chocolate-pastry-2-new.jpg";
import breadImg from "../assets/istockphoto-663898216-612x612.jpg";

export function Menu() {
    const itemImages: Record<number, any> = {
        0: blackForestImg,
        1: pastryImg,
        2: breadImg
    };

    return (
        <section id="menu" className="py-12 sm:py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-10 md:mb-12 gap-4 sm:gap-6">
                    <div className="max-w-xl">
                        <span className="text-primary font-medium tracking-wider uppercase text-xs sm:text-sm">Our Menu</span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">Signature Delights</h2>
                        <p className="text-muted-foreground mt-3 sm:mt-4 text-sm sm:text-base">Discover our most loved items, baked fresh daily for our community in Vesu.</p>
                    </div>
                    <Button variant="outline" className="w-full sm:w-auto" asChild>
                        <a href={`https://wa.me/${businessData.contact.whatsapp}`} target="_blank" rel="noopener noreferrer">
                            <span className="hidden sm:inline">View Full Menu</span>
                            <span className="sm:hidden">Full Menu</span>
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                    </Button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {businessData.positioning.signature_items_or_services.map((item, idx) => (
                        <div key={idx} className="group relative overflow-hidden rounded-2xl bg-muted aspect-[4/3] flex items-end shadow-sm hover:shadow-xl transition-all duration-300">
                            {/* Image Overlay */}
                            <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
                                <img
                                    src={itemImages[idx]?.src || itemImages[idx]}
                                    alt={item}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                            <div className="relative z-10 p-4 sm:p-5 md:p-6 w-full transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0 text-white">
                                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{item}</h3>
                                <p className="text-gray-200 text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                                    Freshly baked and prepared with premium ingredients.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
