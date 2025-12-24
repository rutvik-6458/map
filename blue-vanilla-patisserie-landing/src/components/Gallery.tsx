"use client";
import React from "react";
import Image from "next/image";
import gallery1 from "@/assets/gallrery7.jpg";
import gallery2 from "@/assets/gallrery8.jpg";
import gallery3 from "@/assets/gallrery9.jpg";
import gallery4 from "@/assets/gallrery10.jpg";
import gallery5 from "@/assets/gallrery11.jpg";
import gallery6 from "@/assets/gallrery12.jpg";

export default function Gallery() {
  const galleryImages = [
    { id: 1, src: gallery1, alt: "Desserts and beverages display" },
    { id: 2, src: gallery2, alt: "Chocolate cake with Blue Vanilla branding" },
    { id: 3, src: gallery3, alt: "Cafe interior and elegant ambience" },
    { id: 4, src: gallery4, alt: "Dessert display case with cheesecakes and brownies" },
    { id: 5, src: gallery5, alt: "Birthday cake and celebration desserts" },
    { id: 6, src: gallery6, alt: "Exquisite desserts and patisserie items" },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a look at our elegant ambience and exquisite desserts
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

