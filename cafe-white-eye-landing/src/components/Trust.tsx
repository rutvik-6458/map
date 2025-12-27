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
        <section id="reviews" className="py-12 sm:py-16 md:py-20 bg-zinc-50">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-8 sm:mb-10 md:mb-12">
                    <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
                        <div className="flex text-yellow-500">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} className={`w-5 h-5 sm:w-6 sm:h-6 ${i <= 4 ? "fill-current" : i === 5 ? "fill-current opacity-50" : ""}`} />
                            ))}
                        </div>
                        <span className="font-bold text-lg sm:text-xl">4.5/5</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-3 sm:mb-4 px-2">Loved by 581+ People</h2>
                    <p className="text-sm sm:text-base text-muted-foreground px-2">Top themes: Beautiful ambience, Tasty food, Friendly staff</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                    {reviews.map((review, i) => (
                        <div key={i} className="bg-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-shadow">
                            <p className="text-sm sm:text-base text-zinc-600 mb-4 sm:mb-6 italic">"{review.text}"</p>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-400 shrink-0">
                                    <User className="w-4 h-4 sm:w-6 sm:h-6" />
                                </div>
                                <div className="font-medium text-sm sm:text-base text-zinc-900">{review.author}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
