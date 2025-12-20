"use client";

import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Menu = () => {
    const menuItems = [
        {
            name: "Vietnamese Iced Coffee",
            category: "Signature Beverage",
            description: "Rich, smooth coffee with a perfect balance of sweetness",
            image: "/Vietnamese Iced Coffee.jfif",
            badge: "⭐ Signature",
        },
        {
            name: "Pesto Spaghetti",
            category: "Italian Pasta",
            description: "Fresh basil pesto with perfectly cooked spaghetti",
            image: "/Pesto Spaghetti.jfif",
            badge: "⭐ Signature",
        },
        {
            name: "Mix Berry Shake",
            category: "Cold Beverage",
            description: "Refreshing blend of mixed berries and cream",
            image: "/Mix Berry Shake.webp",
            badge: "⭐ Signature",
        },
    ];

    return (
        <section id="menu" className="py-20 px-4 bg-white">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        🍽️ Our Menu
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Signature Items
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Coffee, shakes and Italian-inspired café dishes
                    </p>
                </div>

                {/* Menu Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {menuItems.map((item, index) => (
                        <Card
                            key={index}
                            className="group overflow-hidden bg-white border-2 border-gray-100 hover:border-amber-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                        >
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    onError={(e) => {
                                        const target = e.currentTarget;
                                        if (item.category.includes("Coffee") || item.category.includes("Beverage")) {
                                            target.src = "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80";
                                        } else if (item.category.includes("Pasta")) {
                                            target.src = "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80";
                                        } else {
                                            target.src = "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600&q=80";
                                        }
                                    }}
                                />
                                {/* Badge */}
                                <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                                    {item.badge}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <p className="text-sm text-amber-600 font-semibold mb-2">
                                    {item.category}
                                </p>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                                    {item.name}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Additional Info */}
                <Card className="p-8 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            More Delicious Options Available
                        </h3>
                        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                            Explore our full menu featuring specialty coffees, refreshing shakes,
                            Italian-inspired pastas, crostini, and more café favorites.
                            Visit us to discover your new favorite dish!
                        </p>
                        <div className="flex items-center justify-center gap-2">
                            <Star className="w-5 h-5 text-amber-500 fill-current" />
                            <span className="text-gray-700 font-medium">
                                All items made fresh with quality ingredients
                            </span>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default Menu;
