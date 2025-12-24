"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";

const Gallery = () => {
  const galleryImages = [
    { id: 1, src: "/assets/gallery1.jpg", alt: "Rooftop seating and night ambience" },
    { id: 2, src: "/assets/gallery2.jpg", alt: "Food presentation - pasta, tacos, sizzlers" },
    { id: 3, src: "/assets/gallery3.jpg", alt: "Family and group dining setups" },
    { id: 4, src: "/assets/gallery4.jpg", alt: "Interior lighting and decor" },
    { id: 5, src: "/assets/gallery5.jpg", alt: "Building exterior and city view" },
    { id: 6, src: "/assets/gallery6.jpg", alt: "Rooftop dining experience" },
  ];

  return (
    <section
      id="gallery"
      className="py-16 px-4 bg-gradient-to-b from-orange-50 to-white"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience our beautiful rooftop ambience and delicious food
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <Card
              key={image.id}
              className="aspect-square overflow-hidden border-gray-200 shadow-sm hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className="relative w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

