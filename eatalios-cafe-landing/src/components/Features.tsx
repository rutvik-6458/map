import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UtensilsCrossed, Coffee, Heart, MapPin, Clock, Package } from "lucide-react";

const Features = () => {
    const features = [
        {
            icon: UtensilsCrossed,
            title: "Italian-style pasta and pizza",
            description: "Authentic Italian flavors with a cozy cafe vibe"
        },
        {
            icon: Coffee,
            title: "Cafe-style beverages and shots",
            description: "Enjoy our selection of cafe drinks"
        },
        {
            icon: Heart,
            title: "Calm and comfortable cafe ambience",
            description: "A pleasant atmosphere for relaxed meals"
        },
        {
            icon: MapPin,
            title: "Convenient location near Safal Square",
            description: "Easy to find in the Vesu–Althan area"
        },
        {
            icon: Clock,
            title: "Open until 11:30 pm",
            description: "Perfect for evening cafe visits"
        },
        {
            icon: Package,
            title: "Dine-in, takeaway and delivery",
            description: "Multiple options to enjoy our food"
        }
    ];

    return (
        <section id="features" className="py-16 bg-gradient-to-b from-white to-red-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                        Why Choose Eatalio's Cafe?
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Simple, tasty Italian comfort food in a cozy setting
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <Card key={index} className="border-gray-200 hover:shadow-lg transition-all hover:border-red-200">
                                <CardHeader>
                                    <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                                        <Icon className="w-6 h-6 text-red-600" />
                                    </div>
                                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">{feature.description}</p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Features;


