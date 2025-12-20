import { Button } from "@/components/ui/button";

export default function Menu() {
    const items = [
        {
            name: "Spanish Latte",
            desc: "Rich espresso with sweet condensed milk, a cafe favorite.",
            price: "Signature",
            image: "/spanish-latte.jpg"
        },
        {
            name: "Buddha Bowl",
            desc: "Healthy, wholesome, and packed with fresh ingredients.",
            price: "Best Seller",
            image: "/buddha-bowl.jfif"
        },
        {
            name: "Classic Spaghetti",
            desc: "Authentic taste with rich sauces and perfect texture.",
            price: "Popular",
            image: "/classic-spaghetti.webp"
        },
        {
            name: "Cheesecake",
            desc: "Creamy, smooth, and the perfect sweet ending.",
            price: "Must Try",
            image: "/cheesecake.jpeg"
        }
    ];

    return (
        <section id="menu" className="py-20 bg-zinc-900 text-zinc-50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Our Signature Menu</h2>
                <p className="text-zinc-400 mb-12 max-w-2xl mx-auto">
                    From energizing coffee to comforting meals, we serve happiness on a plate.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((item, i) => (
                        <div key={i} className="group relative overflow-hidden rounded-2xl bg-zinc-800 border border-zinc-700 hover:border-zinc-600 transition-all">
                            <div className="aspect-[4/3] bg-zinc-700 w-full relative overflow-hidden">
                                {/* Image Placeholder */}
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6 text-left">
                                <span className="inline-block px-2 py-1 bg-primary/20 text-primary text-xs font-bold rounded mb-2 uppercase tracking-wide">
                                    {item.price}
                                </span>
                                <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12">
                    <Button size="lg" className="rounded-full px-8" asChild>
                        <a href="https://wa.me/916356353531" target="_blank" rel="noopener noreferrer">
                            View Full Menu on WhatsApp
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
