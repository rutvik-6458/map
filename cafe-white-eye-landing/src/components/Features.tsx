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
        <section id="features" className="py-12 sm:py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 sm:mb-6 px-2">Why We are Special</h2>
                    <p className="text-muted-foreground text-base sm:text-lg px-2">
                        More than just a cafe, we are a destination for comfort, quality, and community.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {features.map((item, i) => (
                        <div key={i} className="flex gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-zinc-50 border border-zinc-100/50 hover:bg-zinc-100 transition-colors">
                            <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                                {item.icon}
                            </div>
                            <div className="min-w-0 flex-1">
                                <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">{item.title}</h3>
                                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
