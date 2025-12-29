"use client";

import Image from "next/image";

const Gallery = () => {
    const galleryImages = [
        {
            src: "/assets/Gallery1.jpg",
            alt: "Tea cups and serving counter",
            title: "Tea cups and serving counter"
        },
        {
            src: "/assets/Gallery2.jpg",
            alt: "Cheese chilli toast close-up",
            title: "Cheese chilli toast close-up"
        },
        {
            src: "/assets/Gallery3.jpg",
            alt: "Seating area at night",
            title: "Seating area at night"
        },
        {
            src: "/assets/Gallery4.jpg",
            alt: "Puff and Maggi snacks",
            title: "Puff and Maggi snacks"
        },
        {
            src: "/assets/Gallery5.jpg",
            alt: "Exterior view on Udhana - Magdalla Road",
            title: "Exterior view on Udhana - Magdalla Road"
        }
    ];

    return (
        <section id="gallery" className="py-12 sm:py-16 bg-gradient-to-b from-amber-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                        Gallery
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
                        See what makes Dhakad Cafe special
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            className="group aspect-square relative rounded-xl overflow-hidden border-2 border-amber-200 hover:border-amber-400 transition-all duration-300 hover:shadow-lg"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <p className="text-white font-medium text-sm drop-shadow-lg">
                                    {image.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;

