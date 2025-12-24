"use client";

import Image from "next/image";
import { cafeData } from "@/data";
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import gallery4 from "@/assets/gallery4.jpg";
import gallery5 from "@/assets/gallery5.jpg";

export default function Gallery() {
  const galleryImages = [
    { src: gallery1, alt: cafeData.assets_needed.photo_shotlist[0] || "Cafe exterior at Goldmines Shoppers" },
    { src: gallery2, alt: cafeData.assets_needed.photo_shotlist[1] || "Coffee cups and drinks close-up" },
    { src: gallery3, alt: cafeData.assets_needed.photo_shotlist[2] || "Popular food items like pasta" },
    { src: gallery4, alt: cafeData.assets_needed.photo_shotlist[3] || "Interior ambience and seating" },
    { src: gallery5, alt: cafeData.assets_needed.photo_shotlist[4] || "Happy customers and table setups" },
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A glimpse into the {cafeData.brand.business_name} experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-gray-200 group hover:shadow-xl transition-all"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 z-10">
                <p className="text-white font-semibold text-sm">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

