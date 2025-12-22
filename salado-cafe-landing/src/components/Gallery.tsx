"use client";

import Image from "next/image";
import Gallery1 from "@/assets/Gallery1.jpg";
import Gallery2 from "@/assets/Gallery2.jpg";
import Gallery3 from "@/assets/Gallery3.jpg";
import Gallery4 from "@/assets/Gallery4.jpg";
import Gallery5 from "@/assets/Gallery5.jpg";
import Gallery6 from "@/assets/Gallery6.jpg";

const Gallery = () => {
    const galleryImages = [
        { id: 1, alt: "Fresh salads and healthy bowls", src: Gallery1 },
        { id: 2, alt: "Wraps and light meals", src: Gallery2 },
        { id: 3, alt: "Cafe interior and seating", src: Gallery3 },
        { id: 4, alt: "Food preparation with fresh ingredients", src: Gallery4 },
        { id: 5, alt: "Exterior view near Aagam Shopping Center", src: Gallery5 },
        { id: 6, alt: "Healthy food display", src: Gallery6 },
    ];

    return (
        <section id="gallery" className="py-20 px-4 bg-gradient-to-b from-white to-green-50">
            <div className="container mx-auto max-w-6xl">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Our <span className="text-green-600">Gallery</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        See what makes SaladO Cafe special
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((image) => (
                        <div
                            key={image.id}
                            className="relative aspect-square rounded-xl overflow-hidden border border-green-200 hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-300"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;

