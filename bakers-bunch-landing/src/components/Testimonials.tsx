import { businessData } from "../data";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function Testimonials() {
    return (
        <section id="reviews" className="py-20 bg-primary/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="flex justify-center gap-1 mb-4">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />)}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Loved by {businessData.social_proof.review_count}+ Local Customers</h2>
                    <p className="text-muted-foreground mt-4 font-medium">Rated {businessData.social_proof.rating}/5 on Google</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {businessData.social_proof.testimonial_quotes.map((quote, idx) => (
                        <Card key={idx} className="border-none shadow-md bg-white/60 backdrop-blur-sm">
                            <CardContent className="pt-8 relative">
                                <Quote className="absolute top-4 left-4 h-8 w-8 text-primary/20 rotate-180" />
                                <p className="text-gray-700 italic relative z-10 leading-relaxed">
                                    "{quote}"
                                </p>
                                <div className="mt-6 flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500">
                                        {String.fromCharCode(65 + idx)}
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-foreground">Happy Customer</p>
                                        <p className="text-xs text-muted-foreground">Detailed Review</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
