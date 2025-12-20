import { DATA } from '@/lib/data'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Milkshakes from '@/assets/Milkshakes.jpg'
import StuffedPita from '@/assets/stuffed-pita.jpg'
import BeetlePasta from '@/assets/beetroot-sauce-pasta.jpg'

const itemImages: Record<string, any> = {
    "Pink Sauce Pasta": BeetlePasta,
    "Stuffed Pita": StuffedPita,
    "Milkshakes": Milkshakes
}

export default function Menu() {
    return (
        <section id="menu" className="py-24 bg-slate-50">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 tracking-tight">Our Signature Delights</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Discover the tastes that make {DATA.brand.business_name} a local favorite.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    {DATA.positioning.signature_items_or_services.map((item, i) => (
                        <Card key={i} className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-none bg-white">
                            <div className="aspect-[4/3] relative group overflow-hidden">
                                {itemImages[item] ? (
                                    <Image
                                        src={itemImages[item]}
                                        alt={item}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-slate-100">
                                        <span className="text-sm">Image of {item}</span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
                            </div>
                            <CardHeader className="pb-2">
                                <CardTitle className="text-2xl font-bold">{item}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground leading-relaxed">
                                    One of our most popular choices, perfect for any time of day. Crafted with the finest ingredients and a lot of love.
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <Button size="lg" className="rounded-full px-10 h-14 text-lg shadow-lg hover:shadow-xl transition-all">
                        View Full Menu
                    </Button>
                </div>
            </div>
        </section>
    )
}
