import { businessData } from "../data";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function Menu() {
    return (
        <section id="menu" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-xl">
                        <span className="text-primary font-medium tracking-wider uppercase text-sm">Our Menu</span>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2">Signature Delights</h2>
                        <p className="text-muted-foreground mt-4">Discover our most loved items, baked fresh daily for our community in Vesu.</p>
                    </div>
                    <Button variant="outline" asChild>
                        <a href={`https://wa.me/${businessData.contact.whatsapp}`} target="_blank" rel="noopener noreferrer">
                            View Full Menu <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {businessData.positioning.signature_items_or_services.map((item, idx) => (
                        <div key={idx} className="group relative overflow-hidden rounded-2xl bg-muted aspect-[4/3] flex items-end shadow-sm hover:shadow-xl transition-all duration-300">
                            {/* Placeholder Image Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 group-hover:scale-105 transition-transform duration-500">
                                {/* Replace with actual image */}
                                <div className="w-full h-full flex items-center justify-center text-muted-foreground/50 font-medium">
                                    [Image: {item}]
                                </div>
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                            <div className="relative z-10 p-6 w-full transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
                                <h3 className="text-xl font-bold text-white mb-2">{item}</h3>
                                <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
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
