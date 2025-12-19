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
        <section id="features" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-primary font-medium tracking-wider uppercase text-sm">Why Choose Us</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">Baking with Love & Excellence</h2>
                    <p className="text-muted-foreground mt-4">
                        {businessData.content_blocks.about_paragraph}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {businessData.content_blocks.features_bullets.map((feature, idx) => {
                        const Icon = icons[idx % icons.length];
                        return (
                            <div key={idx} className="bg-card p-6 rounded-xl shadow-sm border border-border/50 hover:shadow-md transition-shadow flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10 text-primary">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg text-foreground mb-1">
                                        {feature.split(' ').slice(0, 3).join(' ')}...
                                    </h3>
                                    <p className="text-muted-foreground text-sm">
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
