import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UtensilsCrossed, Pizza, Coffee } from "lucide-react";

const Menu = () => {
    const menuCategories = [
        {
            icon: UtensilsCrossed,
            title: "Pasta",
            description: "Our signature pasta dishes, known as some of the best in the city",
            items: ["Classic Italian pasta", "Fresh pasta varieties", "Creamy and flavorful sauces"]
        },
        {
            icon: Pizza,
            title: "Exotica Pizza",
            description: "Specialty pizzas with unique and exotic toppings",
            items: ["Exotica Pizza", "Traditional Italian pizzas", "Customizable options"]
        },
        {
            icon: Coffee,
            title: "Cafe Beverages",
            description: "Cafe-style beverages and shots to complement your meal",
            items: ["Coffee varieties", "Specialty shots", "Refreshing beverages"]
        }
    ];

    return (
        <section id="menu" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                        Our Menu
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Simple menu with Italian focus
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {menuCategories.map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <Card key={index} className="border-gray-200 hover:shadow-xl transition-all">
                                <CardHeader>
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center mb-4 mx-auto">
                                        <Icon className="w-8 h-8 text-red-600" />
                                    </div>
                                    <CardTitle className="text-2xl text-center">{category.title}</CardTitle>
                                    <p className="text-center text-gray-600 mt-2">{category.description}</p>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {category.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="flex items-start gap-2">
                                                <span className="text-red-600 mt-1">•</span>
                                                <span className="text-gray-700">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Menu;


