"use client";
import React from "react";
import Image from "next/image";
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import gallery4 from "@/assets/gallery4.jpg";
import gallery5 from "@/assets/gallery5.jpg";

export default function Gallery() {
  const galleryImages = [
    { src: gallery1, alt: "Coffee and cappuccino close-ups" },
    { src: gallery2, alt: "Sandwiches and pizzas" },
    { src: gallery3, alt: "Cafe interior and seating" },
    { src: gallery4, alt: "Shakes and beverages" },
    { src: gallery5, alt: "Exterior view in Vesu" },
  ];

  return (
    <section id="gallery" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3 sm:mb-4">
            Gallery
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            A glimpse into the Driftt Cafe experience
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-amber-200 group hover:shadow-xl transition-all"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="text-white font-semibold text-sm">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

