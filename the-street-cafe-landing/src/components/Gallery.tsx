"use client";
import React, { useState } from "react";
import Image from "next/image";
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import gallery4 from "@/assets/gallery4.jpg";
import gallery5 from "@/assets/gallery5.jpg";

export default function Gallery() {
  // Gallery images from src/assets/
  const galleryImages = [
    {
      src: gallery1,
      alt: "Veg steamed momos close-up",
      placeholder: "bg-orange-100"
    },
    {
      src: gallery2,
      alt: "Peri peri fries and snacks",
      placeholder: "bg-orange-200"
    },
    {
      src: gallery3,
      alt: "Sandwiches and pasta",
      placeholder: "bg-orange-300"
    },
    {
      src: gallery4,
      alt: "Small cafe seating and vibe",
      placeholder: "bg-orange-400"
    },
    {
      src: gallery5,
      alt: "Exterior view on VIP Road",
      placeholder: "bg-orange-500"
    },
  ];

  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const [imageLoaded, setImageLoaded] = useState<Record<number, boolean>>({});

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A glimpse into The Street Cafe by Ab's Kitchen experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => {
            return (
              <div
                key={index}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-orange-200 group hover:shadow-xl transition-all"
              >
                {/* Loading placeholder */}
                {!imageLoaded[index] && !imageErrors[index] && (
                  <div className={`absolute inset-0 ${image.placeholder} flex items-center justify-center animate-pulse`}>
                    <span className="text-orange-800/30 font-semibold text-sm uppercase tracking-wider text-center px-4">
                      Loading...
                    </span>
                  </div>
                )}
                {/* Error placeholder */}
                {imageErrors[index] && (
                  <div className={`absolute inset-0 ${image.placeholder} flex items-center justify-center`}>
                    <span className="text-orange-800/50 font-semibold text-sm uppercase tracking-wider text-center px-4">
                      {image.alt}
                    </span>
                  </div>
                )}
                {/* Image */}
                {!imageErrors[index] && (
                  <div className="absolute inset-0">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={`object-cover group-hover:scale-105 transition-all duration-300 ${
                        imageLoaded[index] ? "opacity-100" : "opacity-0"
                      }`}
                      onLoad={() => {
                        setImageLoaded((prev) => ({ ...prev, [index]: true }));
                      }}
                      onError={(e) => {
                        console.error(`Failed to load image ${index}:`, image.alt, e);
                        setImageErrors((prev) => ({ ...prev, [index]: true }));
                        setImageLoaded((prev) => ({ ...prev, [index]: false }));
                      }}
                      priority={index < 3}
                      quality={90}
                      unoptimized={index === 1}
                    />
                  </div>
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

