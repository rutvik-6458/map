import { Star, Quote } from 'lucide-react'

export default function Trust() {
    const reviews = [
        {
            text: "It was very good place and service to celebrate any occasion at this place.",
            author: "Happy Customer",
            rating: 5
        },
        {
            text: "Awesome decoration... I love it.",
            author: "Verified Reviewer",
            rating: 5
        },
        {
            text: "Wonderful place to celebrate birthday party and other occasions.",
            author: "Local Guide",
            rating: 5
        }
    ]

    return (
        <section id="reviews" className="py-24 bg-secondary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4 text-yellow-500">
                        <Star className="w-6 h-6 fill-current" />
                        <span className="text-2xl font-bold text-foreground">4.5</span>
                        <span className="text-muted-foreground font-medium text-lg">/ 5</span>
                        <span className="text-muted-foreground ml-2">(42 Google Reviews)</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Loved by Locals in Vesu</h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
                        Our customers love the decoration, privacy, and celebration vibes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, i) => (
                        <div key={i} className="bg-card p-8 rounded-2xl shadow-sm border border-border/50 relative hover:-translate-y-1 transition-transform duration-300">
                            <Quote className="w-10 h-10 text-primary/10 absolute top-6 right-6" />
                            <div className="flex gap-1 mb-4">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                ))}
                            </div>
                            <p className="text-foreground/80 mb-6 italic leading-relaxed">"{review.text}"</p>
                            <div className="font-medium text-foreground">{review.author}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
