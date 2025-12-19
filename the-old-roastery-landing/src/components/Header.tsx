"use client";
import { Phone, MapPin } from "lucide-react";
import { BUSINESS_DATA } from "@/data";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md border-b" : "bg-transparent"}`}>
            <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                <h1 className={`text-2xl font-bold tracking-tight ${isScrolled ? "text-foreground" : "text-white"}`}>
                    THE OLD <span className="text-primary uppercase text-sm align-middle ml-1">Roastery</span>
                </h1>

                <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
                    {["Why Us", "Menu", "Reviews", "FAQ", "Location"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(" ", "-")}`}
                            className={`hover:text-primary transition-colors ${isScrolled ? "text-foreground" : "text-white"}`}
                        >
                            {item}
                        </a>
                    ))}
                </nav>

                <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild className={`rounded-full px-5 h-10 font-bold border-2 ${isScrolled ? "" : "bg-white/10 text-white border-white/20 hover:bg-white/20"}`}>
                        <a href={BUSINESS_DATA.contact.google_maps_link} target="_blank">
                            <MapPin size={16} className="mr-2" />
                            Directions
                        </a>
                    </Button>
                    <Button variant="default" size="sm" asChild className="rounded-full px-5 h-10 font-bold bg-primary hover:bg-primary/90 text-primary-foreground">
                        <a href={`tel:${BUSINESS_DATA.contact.phone}`}>
                            <Phone size={16} className="mr-2" />
                            Call Now
                        </a>
                    </Button>
                </div>
            </div>
        </header>
    );
}
