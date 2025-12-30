"use client";

import Image from "next/image";
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import gallery4 from "@/assets/gallery4.jpg";
import gallery5 from "@/assets/gallery5.jpg";
import gallery6 from "@/assets/gallery6.jpg";

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      src: gallery1,
      alt: "Cafe exterior at Ambrosia Business Hub",
    },
    {
      id: 2,
      src: gallery2,
      alt: "Hot chocolate close-up",
    },
    {
      id: 3,
      src: gallery3,
      alt: "Sandwiches and rice dishes",
    },
    {
      id: 4,
      src: gallery4,
      alt: "Interior seating and ambience",
    },
    {
      id: 5,
      src: gallery5,
      alt: "Coffee and beverage shots",
    },
    {
      id: 6,
      src: gallery6,
      alt: "Cafe atmosphere",
    },
  ];

  return (
    <section
      id="gallery"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-amber-50 to-white"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Gallery
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-2">
            Take a look at our cafe and signature items
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative aspect-square rounded-lg overflow-hidden border-2 border-amber-200 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-amber-600/0 group-hover:bg-amber-600/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

