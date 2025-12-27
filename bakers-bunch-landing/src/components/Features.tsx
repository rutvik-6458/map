import { businessData } from "../data";
import { CheckCircle2, Star, Truck, ShoppingBag, Clock, MapPin } from "lucide-react";

const icons = [
    ShoppingBag,
    Star,
    CheckCircle2,
    ShoppingBag,
    Truck,
    MapPin
];

export function Features() {
    return (
        <section id="features" className="py-12 sm:py-16 md:py-20 bg-secondary/30">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16">
                    <span className="text-primary font-medium tracking-wider uppercase text-xs sm:text-sm">Why Choose Us</span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 text-foreground px-4">Baking with Love & Excellence</h2>
                    <p className="text-muted-foreground mt-3 sm:mt-4 text-sm sm:text-base px-4">
                        {businessData.content_blocks.about_paragraph}
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {businessData.content_blocks.features_bullets.map((feature, idx) => {
                        const Icon = icons[idx % icons.length];
                        return (
                            <div key={idx} className="bg-card p-4 sm:p-5 md:p-6 rounded-xl shadow-sm border border-border/50 hover:shadow-md transition-shadow flex items-start gap-3 sm:gap-4">
                                <div className="p-2 sm:p-3 rounded-full bg-primary/10 text-primary flex-shrink-0">
                                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <h3 className="font-semibold text-base sm:text-lg text-foreground mb-1 line-clamp-2">
                                        {feature.split(' ').slice(0, 3).join(' ')}...
                                    </h3>
                                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                                        {feature}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
