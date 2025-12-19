import { useState, useEffect } from "react";
import { businessData } from "../data";
import { Button } from "./ui/button";
import { Phone, MapPin, Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
            isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
        )}>
            <div className="container mx-auto px-4 flex items-center justify-between">
                <div className="text-2xl font-bold font-serif text-primary cursor-pointer" onClick={() => scrollTo('hero')}>
                    {businessData.brand.business_name}
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    <button onClick={() => scrollTo('features')} className="text-sm font-medium hover:text-primary transition-colors">Why Us</button>
                    <button onClick={() => scrollTo('menu')} className="text-sm font-medium hover:text-primary transition-colors">Menu</button>
                    <button onClick={() => scrollTo('reviews')} className="text-sm font-medium hover:text-primary transition-colors">Reviews</button>
                    <button onClick={() => scrollTo('faq')} className="text-sm font-medium hover:text-primary transition-colors">FAQ</button>
                    <button onClick={() => scrollTo('location')} className="text-sm font-medium hover:text-primary transition-colors">Location</button>
                </nav>

                {/* CTA Buttons */}
                <div className="hidden md:flex items-center gap-3">
                    <Button variant="outline" size="sm" asChild>
                        <a href={businessData.contact.google_maps_link} target="_blank" rel="noopener noreferrer">
                            <MapPin className="mr-2 h-4 w-4" /> Directions
                        </a>
                    </Button>
                    <Button size="sm" asChild>
                        <a href={`tel:${businessData.contact.phone.replace(/\s+/g, '')}`}>
                            <Phone className="mr-2 h-4 w-4" /> Call Now
                        </a>
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-4 flex flex-col gap-4 shadow-lg md:hidden">
                    <button onClick={() => scrollTo('features')} className="text-left py-2 font-medium">Why Us</button>
                    <button onClick={() => scrollTo('menu')} className="text-left py-2 font-medium">Menu</button>
                    <button onClick={() => scrollTo('reviews')} className="text-left py-2 font-medium">Reviews</button>
                    <button onClick={() => scrollTo('faq')} className="text-left py-2 font-medium">FAQ</button>
                    <button onClick={() => scrollTo('location')} className="text-left py-2 font-medium">Location</button>
                    <div className="flex gap-2 pt-2">
                        <Button variant="outline" className="flex-1" asChild>
                            <a href={businessData.contact.google_maps_link} target="_blank" rel="noopener noreferrer">
                                <MapPin className="mr-2 h-4 w-4" /> Map
                            </a>
                        </Button>
                        <Button className="flex-1" asChild>
                            <a href={`tel:${businessData.contact.phone.replace(/\s+/g, '')}`}>
                                <Phone className="mr-2 h-4 w-4" /> Call
                            </a>
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
}
