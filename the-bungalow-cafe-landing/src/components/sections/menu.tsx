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
        <section id="menu" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-50">
            <div className="container px-4 sm:px-6 mx-auto">
                <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-3 sm:mb-4 tracking-tight px-2">
                        Our Signature Delights
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
                        Discover the tastes that make {DATA.brand.business_name} a local favorite.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
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
                            <CardHeader className="pb-2 px-4 sm:px-6 pt-4 sm:pt-6">
                                <CardTitle className="text-xl sm:text-2xl font-bold">{item}</CardTitle>
                            </CardHeader>
                            <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                                    One of our most popular choices, perfect for any time of day. Crafted with the finest ingredients and a lot of love.
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-10 sm:mt-12 md:mt-14 lg:mt-16">
                    <Button size="lg" className="rounded-full px-6 sm:px-8 md:px-10 h-12 sm:h-13 md:h-14 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all">
                        View Full Menu
                    </Button>
                </div>
            </div>
        </section>
    )
}
