import { Cake, Heart, Sparkles, ShieldCheck } from 'lucide-react'

export default function Features() {
    const features = [
        {
            icon: <Cake className="w-6 h-6" />,
            title: "Perfect for Celebrations",
            description: "The go-to spot for birthdays, anniversaries, and small parties with custom setups."
        },
        {
            icon: <Heart className="w-6 h-6" />,
            title: "Couple Friendly",
            description: "Cozy corners and private seating arrangements designed for quality time."
        },
        {
            icon: <Sparkles className="w-6 h-6" />,
            title: "Beautiful Decorations",
            description: "We provide stunning decoration services to make your special moments magical."
        },
        {
            icon: <ShieldCheck className="w-6 h-6" />,
            title: "Hygienic & Safe",
            description: "Clean environment and top-notch hygiene standards for a worry-free experience."
        }
    ]

    return (
        <section id="features" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Why Choose Jerry Cafe?</h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
                        We specialize in creating memorable experiences for you and your loved ones.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, i) => (
                        <div key={i} className="group p-6 rounded-2xl bg-secondary/20 border border-border hover:border-primary/50 transition-colors">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
