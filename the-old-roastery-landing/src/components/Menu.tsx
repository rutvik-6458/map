import { BUSINESS_DATA } from "@/data";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

// Import local assets
import coldCoffeeImg from "@/assets/cold-coffee-recipe-1.webp";
import nachosImg from "@/assets/Nachos-Supreme.jpg";
import friesImg from "@/assets/garlic-fries-recipe-photos-tablefortwoblog-8.jpg";

export function Menu() {
    const itemImages = [coldCoffeeImg, nachosImg, friesImg];

    return (
        <section className="py-24 bg-secondary/10" id="menu">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-4 px-4 py-1 border-primary text-primary font-bold">Signature Items</Badge>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Best Sellers</h2>
                    <p className="text-muted-foreground max-w-lg mx-auto italic">Handcrafted with premium ingredients for the perfect taste.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {BUSINESS_DATA.positioning.signature_items_or_services.map((item, idx) => (
                        <div key={idx} className="group overflow-hidden rounded-[2.5rem] bg-background border hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                            <div className="aspect-[4/5] overflow-hidden relative">
                                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                                    <Image
                                        src={itemImages[idx]}
                                        alt={item}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                {/* Visual Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                                    <h3 className="text-2xl font-bold mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">{item}</h3>
                                    <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 italic">
                                        {idx === 0 ? "Chilled & Refreshing" : idx === 1 ? "Cheesy & Spicy" : "Crispy & Golden"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
