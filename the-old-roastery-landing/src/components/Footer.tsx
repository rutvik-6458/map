import { BUSINESS_DATA } from "@/data";
import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="py-16 border-t bg-background">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold mb-2">THE OLD <span className="text-primary italic font-serif">Roastery</span></h2>
                        <p className="text-muted-foreground text-sm max-w-xs uppercase tracking-widest">{BUSINESS_DATA.brand.city_area}</p>
                    </div>

                    <div className="flex gap-6">
                        <a href="#" className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                            <Twitter size={20} />
                        </a>
                    </div>

                    <div className="text-center md:text-right text-sm text-muted-foreground">
                        <p>© {new Date().getFullYear()} {BUSINESS_DATA.brand.business_name}.</p>
                        <p className="mt-1">Crafted for aesthetic coffee lovers.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
