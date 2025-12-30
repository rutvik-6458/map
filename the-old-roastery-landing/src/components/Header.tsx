"use client";
import { Phone, MapPin, Menu as MenuIcon, X } from "lucide-react";
import { BUSINESS_DATA } from "@/data";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const sections = ["why-us", "menu", "reviews", "faq", "location"];

        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
        };
    }, []);

    const navItems = ["Why Us", "Menu", "Reviews", "FAQ", "Location"];

    return (
        <>
            <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled || isMobileMenuOpen ? "bg-background/95 backdrop-blur-md border-b shadow-sm" : "bg-transparent"}`}>
                <div className="container mx-auto px-4 h-20 flex items-center justify-between">
                    <h1 className={`text-2xl font-bold tracking-tight transition-colors ${isScrolled || isMobileMenuOpen ? "text-foreground" : "text-white"}`}>
                        THE OLD <span className="text-primary uppercase text-sm align-middle ml-1">Roastery</span>
                    </h1>

                    <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
                        {navItems.map((item) => {
                            const sectionId = item.toLowerCase().replace(" ", "-");
                            const isActive = activeSection === sectionId;

                            return (
                                <a
                                    key={item}
                                    href={`#${sectionId}`}
                                    className={`relative py-2 transition-colors hover:text-primary ${isScrolled ? (isActive ? "text-primary" : "text-foreground") : (isActive ? "text-primary" : "text-white")
                                        }`}
                                >
                                    {item}
                                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transition-transform duration-300 origin-left ${isActive ? "scale-x-100" : "scale-x-0"
                                        }`} />
                                </a>
                            );
                        })}
                    </nav>

                    <div className="flex items-center gap-3">
                        <div className="hidden sm:flex gap-3">
                            <Button variant="outline" size="sm" asChild className={`rounded-full px-5 h-10 font-bold border-2 transition-all ${isScrolled ? "" : "bg-white/10 text-white border-white/20 hover:bg-white/20"}`}>
                                <a href={BUSINESS_DATA.contact.google_maps_link} target="_blank">
                                    <MapPin size={16} className="mr-2" />
                                    Directions
                                </a>
                            </Button>
                            <Button variant="default" size="sm" asChild className="rounded-full px-5 h-10 font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20">
                                <a href={`tel:${BUSINESS_DATA.contact.phone}`}>
                                    <Phone size={16} className="mr-2" />
                                    Call
                                </a>
                            </Button>
                        </div>

                        <button
                            className={`lg:hidden p-2 rounded-xl transition-colors ${isScrolled || isMobileMenuOpen ? "text-foreground hover:bg-secondary" : "text-white hover:bg-white/10"}`}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`lg:hidden absolute top-20 left-0 w-full bg-background/98 backdrop-blur-xl border-b transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-[80vh] py-8 shadow-2xl" : "max-h-0 py-0"}`}>
                    <nav className="flex flex-col items-center gap-6">
                        {navItems.map((item) => {
                            const sectionId = item.toLowerCase().replace(" ", "-");
                            const isActive = activeSection === sectionId;
                            return (
                                <a
                                    key={item}
                                    href={`#${sectionId}`}
                                    className={`text-xl font-bold transition-all ${isActive ? "text-primary scale-110" : "text-foreground"}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item}
                                </a>
                            );
                        })}
                        <div className="flex flex-col w-full px-8 gap-4 mt-4">
                            <Button variant="outline" size="lg" asChild className="rounded-2xl h-14 font-bold border-2 w-full">
                                <a href={BUSINESS_DATA.contact.google_maps_link} target="_blank">
                                    <MapPin size={20} className="mr-2" />
                                    Get Directions
                                </a>
                            </Button>
                            <Button variant="default" size="lg" asChild className="rounded-2xl h-14 font-bold bg-primary w-full">
                                <a href={`tel:${BUSINESS_DATA.contact.phone}`}>
                                    <Phone size={20} className="mr-2" />
                                    Call Now
                                </a>
                            </Button>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}
