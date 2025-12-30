"use client";

import { useState } from "react";
import { businessData } from "../data";

export function Gallery() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop",
      alt: "Cafe interior and seating",
      placeholder: "bg-amber-100"
    },
    {
      src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=800&auto=format&fit=crop",
      alt: "Friends hanging out",
      placeholder: "bg-amber-200"
    },
    {
      src: "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?q=80&w=800&auto=format&fit=crop",
      alt: "Mint Mojito drink",
      placeholder: "bg-amber-300"
    },
    {
      src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=800&auto=format&fit=crop",
      alt: "Ice Cream Brownie dessert",
      placeholder: "bg-amber-400"
    },
    {
      src: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=800&auto=format&fit=crop",
      alt: "Exterior storefront",
      placeholder: "bg-amber-500"
    },
    {
      src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
      alt: "Cafe atmosphere",
      placeholder: "bg-amber-600"
    },
  ];

  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 font-playfair">
            Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A glimpse into The Cafe 4 You experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => {
            return (
              <div
                key={index}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-amber-200 group hover:shadow-xl transition-all"
              >
                {/* Placeholder background - shows if image fails to load */}
                {imageErrors[index] && (
                  <div className={`absolute inset-0 ${image.placeholder} flex items-center justify-center`}>
                    <span className="text-amber-600/50 font-semibold text-sm uppercase tracking-wider text-center px-4">
                      {image.alt}
                    </span>
                  </div>
                )}
                {/* Image with error handling */}
                {!imageErrors[index] && (
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={() => setImageErrors((prev) => ({ ...prev, [index]: true }))}
                  />
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 z-10">
                  <p className="text-white font-semibold text-sm mb-2">{image.alt}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            📸 Replace these placeholder images with actual photos from your cafe. Recommended shots: Cafe interior and seating, Friends hanging out, Mint Mojito drink, Ice Cream Brownie dessert, Exterior storefront
          </p>
        </div>
      </div>
    </section>
  );
}





