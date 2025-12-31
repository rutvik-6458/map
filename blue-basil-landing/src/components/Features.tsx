import { BadgeCheck, Utensils, Users, Martini, ShoppingBag, MapPin } from "lucide-react";

export default function Features() {
    const features = [
        {
            title: "2,100+ Reviews",
            desc: "Consistently rated 4.2 stars by our loyal customers in Surat.",
            icon: BadgeCheck,
            color: "text-blue-600",
            bg: "bg-blue-50"
        },
        {
            title: "Multicuisine Menu",
            desc: "Delight in North Indian, Chinese, and more, all under one roof.",
            icon: Utensils,
            color: "text-green-600",
            bg: "bg-green-50"
        },
        {
            title: "Family Friendly",
            desc: "Comfortable seating and pleasant ambience for group dining.",
            icon: Users,
            color: "text-purple-600",
            bg: "bg-purple-50"
        },
        {
            title: "Mocktails & More",
            desc: "Enjoy refreshing starters, desserts, and signature mocktails.",
            icon: Martini,
            color: "text-orange-600",
            bg: "bg-orange-50"
        },
        {
            title: "Flexible Options",
            desc: "Dine-in, takeaway, and fast home delivery available.",
            icon: ShoppingBag,
            color: "text-rose-600",
            bg: "bg-rose-50"
        },
        {
            title: "Prime Location",
            desc: "Conveniently located near Safal Square, Magdalla area.",
            icon: MapPin,
            color: "text-amber-600",
            bg: "bg-amber-50"
        }
    ];

    return (
        <section id="features" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Blue Basil is Your <span className="text-primary tracking-tight">Preferred Choice</span></h2>
                        <p className="text-lg text-slate-600">
                            Blue Basil is a well-established multicuisine restaurant in the Magdalla–Vesu area of Surat, known for consistent food quality and warm service.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, i) => (
                        <div key={i} className="group p-8 rounded-2xl border border-slate-100 hover:border-primary/20 hover:bg-slate-50 transition-all duration-300">
                            <div className={`w-14 h-14 rounded-xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <feature.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
