import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const SocialProof = () => {
    const rating = "4.3";
    const reviewCount = "23";
    const testimonials = [
        "Try their pasta… one of the best I had in the city.",
        "Really good ambience and delicious food.",
        "Good food with some nice options."
    ];

    return (
        <section id="social-proof" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-6 h-6 ${
                                            i < Math.floor(parseFloat(rating))
                                                ? "fill-yellow-400 text-yellow-400"
                                                : "text-gray-300"
                                        }`}
                                    />
                                ))}
                            </div>
                            <span className="text-2xl font-bold text-gray-900 ml-2">
                                {rating}
                            </span>
                        </div>
                        <p className="text-gray-600 text-lg">
                            Rated {rating} by {reviewCount} customers
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {testimonials.map((testimonial, index) => (
                            <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                                <CardContent className="pt-6">
                                    <div className="flex items-center gap-1 mb-3">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                            />
                                        ))}
                                    </div>
                                    <p className="text-gray-700 italic">"{testimonial}"</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;

