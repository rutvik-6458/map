import { Coffee, PartyPopper, Utensils } from 'lucide-react'

export default function Services() {
    const services = [
        {
            title: "Delicious Food",
            description: "Enjoy a wide range of cafe beverages and snacks prepared with love.",
            icon: <Coffee className="w-8 h-8" />,
            image: "https://images.unsplash.com/photo-1559496417-e7f25cb24aad?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Event Decoration",
            description: "Customized decoration setups for birthdays, anniversaries, and surprises.",
            icon: <PartyPopper className="w-8 h-8" />,
            image: "https://images.unsplash.com/photo-1530103862676-de3c9da59af7?q=80&w=2070&auto=format&fit=crop"
        },
        {
            title: "Dine-in Experience",
            description: "A comfortable and private ambience perfect for couples and friends.",
            icon: <Utensils className="w-8 h-8" />,
            image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
        }
    ]

    return (
        <section id="services" className="py-24 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Our Services</h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
                        More than just coffee – we craft experiences.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((item, i) => (
                        <div key={i} className="group relative overflow-hidden rounded-3xl h-[400px]">
                            <div className="absolute inset-0">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
                                <div className="mb-4 text-primary-foreground bg-primary/20 backdrop-blur-md w-14 h-14 rounded-2xl flex items-center justify-center border border-white/10">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                                <p className="text-zinc-200/90 leading-relaxed font-light">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
