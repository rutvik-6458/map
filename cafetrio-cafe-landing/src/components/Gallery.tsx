"use client";
import React from "react";
import Image from "next/image";
import gallery1 from "@/assets/gallery.jpg";
import gallery2 from "@/assets/gallery1.jpg";
import gallery3 from "@/assets/gallery2.jpg";
import gallery4 from "@/assets/gallery3.jpg";
import gallery5 from "@/assets/gallery4.jpg";
import gallery6 from "@/assets/gallery5.jpg";

export default function Gallery() {
  const galleryImages = [
    { id: 1, src: gallery1, alt: "Burnt garlic rice close-up" },
    { id: 2, src: gallery2, alt: "Cafe interior and seating" },
    { id: 3, src: gallery3, alt: "Oreo shake and beverages" },
    { id: 4, src: gallery4, alt: "Happy customers and ambience" },
    { id: 5, src: gallery5, alt: "Exterior signage at Digital Asset Academy" },
    { id: 6, src: gallery6, alt: "Cafe food and drinks" },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a look at our cozy ambience and delicious food
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 group hover:shadow-xl transition-all"
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
}

