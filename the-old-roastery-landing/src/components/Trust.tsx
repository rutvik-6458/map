import { Star, CheckCircle2 } from "lucide-react";
import { BUSINESS_DATA } from "@/data";

export function Trust() {
    return (
        <section className="py-12 border-y bg-background">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-1 text-accent mb-2">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} fill="currentColor" size={20} />
                            ))}
                        </div>
                        <p className="font-bold text-3xl mb-1">{BUSINESS_DATA.social_proof.rating} Rating</p>
                        <p className="text-muted-foreground">{BUSINESS_DATA.social_proof.review_count}+ Happy Customers in Vesu</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        {BUSINESS_DATA.social_proof.top_review_themes.map((theme) => (
                            <div key={theme} className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-secondary/50 border border-border/50">
                                <CheckCircle2 size={24} className="text-primary shrink-0" />
                                <span className="font-medium text-sm leading-tight">{theme}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
