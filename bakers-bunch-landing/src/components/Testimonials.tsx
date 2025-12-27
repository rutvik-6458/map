import { businessData } from "../data";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function Testimonials() {
    return (
        <section id="reviews" className="py-12 sm:py-16 md:py-20 bg-primary/5">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-10 sm:mb-12 md:mb-16">
                    <div className="flex justify-center gap-1 mb-3 sm:mb-4">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-5 w-5 sm:h-6 sm:w-6 fill-yellow-400 text-yellow-400" />)}
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground px-4">
                        Loved by {businessData.social_proof.review_count}+ Local Customers
                    </h2>
                    <p className="text-muted-foreground mt-3 sm:mt-4 font-medium text-sm sm:text-base">Rated {businessData.social_proof.rating}/5 on Google</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {businessData.social_proof.testimonial_quotes.map((quote, idx) => (
                        <Card key={idx} className="border-none shadow-md bg-white/60 backdrop-blur-sm">
                            <CardContent className="pt-6 sm:pt-8 relative p-4 sm:p-6">
                                <Quote className="absolute top-3 left-3 sm:top-4 sm:left-4 h-6 w-6 sm:h-8 sm:w-8 text-primary/20 rotate-180" />
                                <p className="text-gray-700 italic relative z-10 leading-relaxed text-sm sm:text-base">
                                    "{quote}"
                                </p>
                                <div className="mt-4 sm:mt-6 flex items-center gap-3">
                                    <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500 text-sm sm:text-base flex-shrink-0">
                                        {String.fromCharCode(65 + idx)}
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-xs sm:text-sm font-bold text-foreground">Happy Customer</p>
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
