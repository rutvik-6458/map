import { DATA } from '@/lib/data'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function FAQ() {
    return (
        <section id="faq" className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="container px-4 sm:px-6 mx-auto max-w-3xl">
                <div className="text-center mb-8 sm:mb-10 md:mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold font-heading mb-3 sm:mb-4 px-2">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="space-y-3 sm:space-y-4">
                    {DATA.content_blocks.faq.map((item, i) => (
                        <Card key={i} className="border shadow-none hover:border-primary/50 transition-colors">
                            <CardHeader className="px-4 sm:px-6 pt-4 sm:pt-6 pb-3">
                                <CardTitle className="text-base sm:text-lg text-primary leading-snug">{item.q}</CardTitle>
                            </CardHeader>
                            <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item.a}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
