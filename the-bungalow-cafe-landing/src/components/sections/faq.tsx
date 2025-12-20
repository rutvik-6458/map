import { DATA } from '@/lib/data'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function FAQ() {
    return (
        <section id="faq" className="py-20 bg-white">
            <div className="container px-4 mx-auto max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold font-heading mb-4">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-4">
                    {DATA.content_blocks.faq.map((item, i) => (
                        <Card key={i} className="border shadow-none hover:border-primary/50 transition-colors">
                            <CardHeader>
                                <CardTitle className="text-lg text-primary">{item.q}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{item.a}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
