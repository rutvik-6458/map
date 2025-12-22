"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Coffee, Utensils, ChefHat } from "lucide-react";

const Menu = () => {
    const signatureItems = [
        {
            name: "Tea",
            description: "Different taste from others",
            icon: Coffee
        },
        {
            name: "Cheese Chilli Toast",
            description: "A must-try favorite",
            icon: Utensils
        },
        {
            name: "Puff and Maggi",
            description: "Quick comfort snacks",
            icon: ChefHat
        }
    ];

    const bestFor = [
        "Late-night tea and snacks",
        "Quick bites with friends",
        "Casual hangouts and small celebrations"
    ];

    return (
        <section id="menu" className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Our Menu
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Simple menu with popular snack items
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {signatureItems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                    <CardTitle className="text-2xl">{item.name}</CardTitle>
                                    <CardDescription className="text-base">
                                        {item.description}
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        );
                    })}
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 border border-amber-100">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                        Best For
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                        {bestFor.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-4 rounded-lg border border-amber-100 text-center"
                            >
                                <p className="text-gray-800 font-medium">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Menu;

