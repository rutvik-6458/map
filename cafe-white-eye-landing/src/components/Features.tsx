import { Moon, Coffee, Heart, UtensilsCrossed, ShoppingBag, Users } from "lucide-react";

export default function Features() {
    const features = [
        {
            icon: <Moon className="w-6 h-6" />,
            title: "Open Till 1 AM",
            desc: "Your late-night spot for coffee, food, and vibes."
        },
        {
            icon: <Coffee className="w-6 h-6" />,
            title: "Classy Ambience",
            desc: "A calm, beautiful space perfect for relaxing or working."
        },
        {
            icon: <UtensilsCrossed className="w-6 h-6" />,
            title: "Wide Menu",
            desc: "From Spanish Lattes to Buddha Bowls and Cheesecake."
        },
        {
            icon: <ShoppingBag className="w-6 h-6" />,
            title: "Delivery & Pickup",
            desc: "Enjoy our food at home with kerbside pickup and delivery."
        },
        {
            icon: <Heart className="w-6 h-6" />,
            title: "Inclusive Space",
            desc: "Proudly women-owned and LGBTQ+ friendly."
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Friendly Service",
            desc: "Warm hospitality that makes you feel at home."
        }
    ];

    return (
        <section id="features" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Why We are Special</h2>
                    <p className="text-muted-foreground text-lg">
                        More than just a cafe, we are a destination for comfort, quality, and community.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((item, i) => (
                        <div key={i} className="flex gap-4 p-6 rounded-2xl bg-zinc-50 border border-zinc-100/50 hover:bg-zinc-100 transition-colors">
                            <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
