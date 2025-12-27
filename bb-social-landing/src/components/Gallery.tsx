"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const Gallery = () => {
  const galleryImages = [
    {
      src: "/assets/Gallery1.jpg",
      alt: "Poolside seating and ambience",
    },
    {
      src: "/assets/Gallery2.jpg",
      alt: "Coffee and mojito drinks",
    },
    {
      src: "/assets/Gallery3.jpg",
      alt: "Popular food items like tacos and nachos",
    },
    {
      src: "/assets/Gallery4.jpg",
      alt: "Game zone with board games",
    },
    {
      src: "/assets/Gallery5.jpg",
      alt: "Exterior view at BB Club Bhagban",
    },
  ];

  return (
    <section
      id="gallery"
      className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a look at our poolside ambience and dining experience
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className="border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden aspect-square group cursor-pointer"
            >
              <CardContent className="p-0 h-full relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                    <p className="text-white font-medium text-xs sm:text-sm">
                      {image.alt}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

