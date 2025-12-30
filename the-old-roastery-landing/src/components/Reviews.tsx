import { Star, Quote } from "lucide-react";
import { BUSINESS_DATA } from "@/data";

export function Reviews() {
    return (
        <section id="reviews" className="py-24 bg-secondary/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="flex justify-center gap-1 text-amber-400 mb-4 text-2xl">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} fill="currentColor" size={24} />
                        ))}
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight text-foreground text-balance">
                        Loved by {BUSINESS_DATA.social_proof.review_count}+ Local Customers
                    </h2>
                    <p className="text-muted-foreground font-medium uppercase tracking-widest text-sm">
                        Rated {BUSINESS_DATA.social_proof.rating}/5 on Google
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {BUSINESS_DATA.social_proof.testimonial_quotes.map((quote, idx) => (
                        <div
                            key={idx}
                            className="bg-background p-8 rounded-[2rem] border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 relative group"
                        >
                            <Quote className="absolute top-6 left-6 text-primary/10 w-12 h-12 -z-0 group-hover:text-primary/20 transition-colors" />
                            <div className="relative z-10">
                                <p className="text-lg text-muted-foreground italic mb-8 leading-relaxed">
                                    "{quote}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center font-bold text-primary text-xl">
                                        {String.fromCharCode(65 + idx)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground">Happy Customer</h4>
                                        <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">Detailed Review</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
