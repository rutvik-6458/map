import { BUSINESS_DATA } from "@/data";
import { Sparkles, Clock, Map, Utensils } from "lucide-react";

export function Features() {
    const icons = [Sparkles, Clock, Map, Utensils, Clock, Sparkles]; // Map icons to index or just cycle

    return (
        <section id="why-us" className="py-24 bg-background">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 italic font-serif">A Little Bit About Us</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        {BUSINESS_DATA.content_blocks.about_paragraph}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {BUSINESS_DATA.content_blocks.features_bullets.map((feature, idx) => (
                        <div key={idx} className="p-8 rounded-3xl bg-secondary/20 border hover:shadow-lg transition-all group">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                {idx % 3 === 0 ? <Sparkles size={24} /> : idx % 3 === 1 ? <Clock size={24} /> : <Utensils size={24} />}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature}</h3>
                            <p className="text-muted-foreground text-sm">Experience the premium hospitality that makes us a neighborhood favorite.</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
