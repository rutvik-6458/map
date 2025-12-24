"use client";

import { useState } from "react";
import gallery4 from "@/assets/gallery4.jpg";
import gallery5 from "@/assets/gallery5.jpg";
import gallery6 from "@/assets/gallery6.jpg";
import gallery7 from "@/assets/gallery7.jpg";

export function Gallery() {
  const galleryImages = [
    {
      src: gallery7,
      alt: "Cafe interior and seating",
      placeholder: "bg-amber-100"
    },
    {
      src: gallery4,
      alt: "Birthday celebration setup",
      placeholder: "bg-amber-200"
    },
    {
      src: gallery5,
      alt: "Cozy cafe ambience",
      placeholder: "bg-amber-300"
    },
    {
      src: gallery6,
      alt: "Cafe atmosphere and decor",
      placeholder: "bg-amber-400"
    },
  ];

  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A glimpse into the Kafe Sensation experience
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
                    src={image.src.src || image.src}
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
      </div>
    </section>
  );
}

