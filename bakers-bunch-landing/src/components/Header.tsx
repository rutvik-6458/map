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
            isScrolled
                ? "bg-white/90 backdrop-blur-md shadow-sm py-3 md:py-4"
                : "bg-black/20 backdrop-blur-sm py-4 md:py-6"
        )}>
            <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
                <div
                    className={cn(
                        "text-xl sm:text-2xl font-bold font-serif cursor-pointer transition-colors",
                        isScrolled ? "text-primary" : "text-white drop-shadow-lg"
                    )}
                    onClick={() => scrollTo('hero')}
                >
                    {businessData.brand.business_name}
                </div>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
                    <button
                        onClick={() => scrollTo('features')}
                        className={cn(
                            "text-sm font-medium transition-colors",
                            isScrolled
                                ? "text-foreground hover:text-primary"
                                : "text-white/90 hover:text-white drop-shadow-md"
                        )}
                    >
                        Why Us
                    </button>
                    <button
                        onClick={() => scrollTo('menu')}
                        className={cn(
                            "text-sm font-medium transition-colors",
                            isScrolled
                                ? "text-foreground hover:text-primary"
                                : "text-white/90 hover:text-white drop-shadow-md"
                        )}
                    >
                        Menu
                    </button>
                    <button
                        onClick={() => scrollTo('reviews')}
                        className={cn(
                            "text-sm font-medium transition-colors",
                            isScrolled
                                ? "text-foreground hover:text-primary"
                                : "text-white/90 hover:text-white drop-shadow-md"
                        )}
                    >
                        Reviews
                    </button>
                    <button
                        onClick={() => scrollTo('faq')}
                        className={cn(
                            "text-sm font-medium transition-colors",
                            isScrolled
                                ? "text-foreground hover:text-primary"
                                : "text-white/90 hover:text-white drop-shadow-md"
                        )}
                    >
                        FAQ
                    </button>
                    <button
                        onClick={() => scrollTo('location')}
                        className={cn(
                            "text-sm font-medium transition-colors",
                            isScrolled
                                ? "text-foreground hover:text-primary"
                                : "text-white/90 hover:text-white drop-shadow-md"
                        )}
                    >
                        Location
                    </button>
                </nav>

                {/* CTA Buttons */}
                <div className="hidden lg:flex items-center gap-2 xl:gap-3">
                    <Button
                        variant="outline"
                        size="sm"
                        className={cn(
                            isScrolled
                                ? ""
                                : "bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white backdrop-blur-sm"
                        )}
                        asChild
                    >
                        <a href={businessData.contact.google_maps_link} target="_blank" rel="noopener noreferrer">
                            <MapPin className="mr-2 h-4 w-4" />
                            <span className="xl:hidden">Map</span>
                            <span className="hidden xl:inline">Directions</span>
                        </a>
                    </Button>
                    <Button
                        size="sm"
                        className={cn(
                            isScrolled
                                ? ""
                                : "bg-primary hover:bg-primary/90"
                        )}
                        asChild
                    >
                        <a href={`tel:${businessData.contact.phone.replace(/\s+/g, '')}`}>
                            <Phone className="mr-2 h-4 w-4" />
                            <span className="xl:hidden">Call</span>
                            <span className="hidden xl:inline">Call Now</span>
                        </a>
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={cn(
                        "lg:hidden p-2 transition-colors",
                        isScrolled ? "text-foreground" : "text-white"
                    )}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 shadow-xl lg:hidden">
                    <button
                        onClick={() => scrollTo('features')}
                        className="text-left py-2 sm:py-2.5 font-medium text-foreground hover:text-primary transition-colors text-base"
                    >
                        Why Us
                    </button>
                    <button
                        onClick={() => scrollTo('menu')}
                        className="text-left py-2 sm:py-2.5 font-medium text-foreground hover:text-primary transition-colors text-base"
                    >
                        Menu
                    </button>
                    <button
                        onClick={() => scrollTo('reviews')}
                        className="text-left py-2 sm:py-2.5 font-medium text-foreground hover:text-primary transition-colors text-base"
                    >
                        Reviews
                    </button>
                    <button
                        onClick={() => scrollTo('faq')}
                        className="text-left py-2 sm:py-2.5 font-medium text-foreground hover:text-primary transition-colors text-base"
                    >
                        FAQ
                    </button>
                    <button
                        onClick={() => scrollTo('location')}
                        className="text-left py-2 sm:py-2.5 font-medium text-foreground hover:text-primary transition-colors text-base"
                    >
                        Location
                    </button>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-3 border-t border-gray-200">
                        <Button variant="outline" className="flex-1 w-full sm:w-auto" asChild>
                            <a href={businessData.contact.google_maps_link} target="_blank" rel="noopener noreferrer">
                                <MapPin className="mr-2 h-4 w-4" /> Directions
                            </a>
                        </Button>
                        <Button className="flex-1 w-full sm:w-auto" asChild>
                            <a href={`tel:${businessData.contact.phone.replace(/\s+/g, '')}`}>
                                <Phone className="mr-2 h-4 w-4" /> Call Now
                            </a>
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
}
