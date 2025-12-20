import { Star, User } from "lucide-react";

export default function Trust() {
    const reviews = [
        {
            text: "Awesome ambience, super service and staff.",
            author: "Satisfied Customer",
        },
        {
            text: "Great place for brunch, coffee and chilling with friends or family.",
            author: "Local Guide",
        },
        {
            text: "Great vibes, great food. Makes it a go to spot any day.",
            author: "Regular Visitor",
        },
    ];

    return (
        <section id="reviews" className="py-20 bg-zinc-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="flex text-yellow-500">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} className={`w-6 h-6 ${i <= 4 ? "fill-current" : i === 5 ? "fill-current opacity-50" : ""}`} />
                            ))}
                        </div>
                        <span className="font-bold text-xl">4.5/5</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Loved by 581+ People</h2>
                    <p className="text-muted-foreground">Top themes: Beautiful ambience, Tasty food, Friendly staff</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {reviews.map((review, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
                            <p className="text-zinc-600 mb-6 italic">"{review.text}"</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-400">
                                    <User className="w-6 h-6" />
                                </div>
                                <div className="font-medium text-zinc-900">{review.author}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
