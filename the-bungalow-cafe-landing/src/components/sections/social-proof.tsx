import { DATA } from '@/lib/data'
import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'

export default function SocialProof() {
    return (
        <section id="reviews" className="py-12 sm:py-16 md:py-20 bg-slate-50">
            <div className="container px-4 sm:px-6 mx-auto">
                <div className="text-center mb-8 sm:mb-10 md:mb-12 space-y-2 sm:space-y-3">
                    <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-yellow-500 mb-2">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6" />
                        ))}
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-heading px-2">
                        Rated {DATA.social_proof.rating} Stars by {DATA.social_proof.review_count} Happy Customers
                    </h2>
                    <p className="text-sm sm:text-base text-muted-foreground px-2">See what people are saying about {DATA.brand.business_name}</p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                    {DATA.social_proof.testimonial_quotes.map((quote, i) => (
                        <Card key={i} className="bg-white border-none shadow-md">
                            <CardContent className="p-4 sm:p-5 md:p-6">
                                <blockquote className="text-base sm:text-lg text-foreground italic leading-relaxed">
                                    "{quote}"
                                </blockquote>
                                <div className="mt-3 sm:mt-4 flex items-center gap-2 sm:gap-3">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm sm:text-base">
                                        {String.fromCharCode(65 + i)}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-sm sm:text-base">Local Guide</p>
                                        <p className="text-xs text-muted-foreground">5 star review</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
