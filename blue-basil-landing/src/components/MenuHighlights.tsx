import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function MenuHighlights() {
    const categories = [
        {
            title: "North Indian",
            items: ["Paneer Butter Masala", "Dal Makhani", "Assorted Naan", "Veg Biryani"],
            image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800"
        },
        {
            title: "Chinese Starters",
            items: ["Veg Manchurian", "Paneer Chilly", "Spring Rolls", "Hakka Noodles"],
            image: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800"
        },
        {
            title: "Mocktails & Desserts",
            items: ["Virgin Mojito", "Blue Lagoon", "Gulab Jamun", "Sizzling Brownie"],
            image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800"
        }
    ];

    return (
        <section id="menu" className="py-16 md:py-24 bg-slate-900 text-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm">Delicious Variety</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">Menu Highlights</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        From aromatic Indian curries to spicy Chinese starters and refreshing mocktails, experience the best of multicuisine dining.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((cat, i) => (
                        <div key={i} className="group relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-primary/10">
                            <img
                                src={cat.image}
                                alt={cat.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8">
                                <h3 className="text-2xl font-bold mb-4">{cat.title}</h3>
                                <ul className="space-y-2 mb-8">
                                    {cat.items.map((item, index) => (
                                        <li key={index} className="text-slate-300 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Button className="bg-white text-slate-900 hover:bg-primary hover:text-white border-none rounded-full px-8 py-5 h-auto font-bold transition-all hover:scale-105 active:scale-95 self-start group/btn" asChild>
                                    <a href="#menu">
                                        View Full Menu
                                        <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                                    </a>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
