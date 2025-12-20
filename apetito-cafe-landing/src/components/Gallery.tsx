"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const images = [
        {
            src: "/surat-baking-company.jpg",
            alt: "Apetito Cafe - Modern Interior",
        },
        {
            src: "/Vietnamese Iced Coffee.jfif",
            alt: "Vietnamese Iced Coffee - Signature Beverage",
        },
        {
            src: "/Pesto Spaghetti.jfif",
            alt: "Pesto Spaghetti - Italian Pasta",
        },
        {
            src: "/Mix Berry Shake.webp",
            alt: "Mix Berry Shake - Refreshing Beverage",
        },
        {
            src: "/surat-baking-company.jpg",
            alt: "Cafe Ambience - Cozy & Aesthetic",
        },
        {
            src: "/Vietnamese Iced Coffee.jfif",
            alt: "Specialty Coffee Selection",
        },
    ];

    return (
        <section id="gallery" className="py-20 px-4 bg-gradient-to-b from-white to-amber-50">
            <div className="container mx-auto max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        📸 Gallery
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Experience Apetito
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        A glimpse into our aesthetic café and delicious offerings
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((image, index) => (
                        <Card
                            key={index}
                            className="group overflow-hidden cursor-pointer bg-white border-2 border-gray-100 hover:border-amber-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            onClick={() => setSelectedImage(index)}
                        >
                            <div className="relative h-72 overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100">
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                    <p className="text-white font-semibold p-4 text-lg">
                                        {image.alt}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Lightbox */}
                {selectedImage !== null && (
                    <div
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-4 right-4 text-white text-4xl hover:text-amber-400 transition-colors"
                            onClick={() => setSelectedImage(null)}
                        >
                            ×
                        </button>
                        <img
                            src={images[selectedImage].src}
                            alt={images[selectedImage].alt}
                            className="max-w-full max-h-full object-contain"
                        />
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-3 h-3 rounded-full transition-all ${index === selectedImage
                                        ? "bg-amber-500 w-8"
                                        : "bg-white/50 hover:bg-white/80"
                                        }`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedImage(index);
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {/* Note */}
                <Card className="mt-12 p-6 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200">
                    <p className="text-center text-gray-700">
                        <span className="font-semibold">✨ Gallery:</span> Click on any image to view it in full size. Showcasing our cafe interior, signature beverages, and delicious food items.
                    </p>
                </Card>
            </div>
        </section>
    );
};

export default Gallery;
