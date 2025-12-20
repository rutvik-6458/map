import { DATA } from '@/lib/data'
import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'

export default function SocialProof() {
    return (
        <section id="reviews" className="py-20 bg-slate-50">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-12 space-y-2">
                    <div className="flex items-center justify-center gap-2 text-yellow-500 mb-2">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} fill="currentColor" className="w-6 h-6" />
                        ))}
                    </div>
                    <h2 className="text-3xl font-bold font-heading">Rated {DATA.social_proof.rating} Stars by {DATA.social_proof.review_count} Happy Customers</h2>
                    <p className="text-muted-foreground">See what people are saying about {DATA.brand.business_name}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {DATA.social_proof.testimonial_quotes.map((quote, i) => (
                        <Card key={i} className="bg-white border-none shadow-md">
                            <CardContent className="p-6">
                                <blockquote className="text-lg text-foreground italic">
                                    "{quote}"
                                </blockquote>
                                <div className="mt-4 flex items-center gap-2">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                                        {String.fromCharCode(65 + i)}
                                    </div>
                                    <div>
                                        <p className="font-semibold">Local Guide</p>
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
