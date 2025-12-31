import { Star, Quote, CheckCircle2 } from "lucide-react";

export default function Trust() {
    const testimonials = [
        {
            quote: "Awesome food + staff + ambiance + service.",
            author: "Local Guide",
            rating: 5
        },
        {
            quote: "Good place for North Indian dishes and starters.",
            author: "Verified Customer",
            rating: 4
        },
        {
            quote: "Highly recommended for spending quality time with family.",
            author: "Social Media Review",
            rating: 5
        }
    ];

    const themes = [
        "Good food quality",
        "Friendly and trained staff",
        "Nice ambience for families"
    ];

    return (
        <section id="trust" className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Loved by Thousands</h2>
                    <p className="text-lg text-slate-600">
                        With over 2,100 reviews and a 4.2-star rating, Blue Basil is one of the most trusted names for dining in Surat.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow relative border border-slate-100">
                            <Quote className="absolute top-6 right-8 w-10 h-10 text-slate-100" />
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, starI) => (
                                    <Star key={starI} className={`w-4 h-4 ${starI < t.rating ? "fill-yellow-400 text-yellow-400" : "text-slate-200"}`} />
                                ))}
                            </div>
                            <p className="text-slate-700 italic mb-6 leading-relaxed">"{t.quote}"</p>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs uppercase">
                                    {t.author[0]}
                                </div>
                                <span className="text-sm font-semibold text-slate-900">{t.author}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {themes.map((theme, i) => (
                        <div key={i} className="flex items-center gap-3 bg-white/50 px-6 py-4 rounded-xl border border-slate-100">
                            <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                            <span className="font-medium text-slate-800">{theme}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
