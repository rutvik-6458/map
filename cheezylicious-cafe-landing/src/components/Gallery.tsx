"use client";
import React, { useState } from "react";
import Image from "next/image";
import { businessData } from "../data";
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import gallery4 from "@/assets/gallery4.jpg";
import gallery5 from "@/assets/gallery5.jpg";

export function Gallery() {
  const address = businessData.contact.address;
  const googleMapsLink = businessData.contact.google_maps_link || "";

  // Gallery images from src/assets/
  const galleryImages = [
    { src: gallery1, alt: "Cheese-loaded dishes close-up", placeholder: "bg-yellow-100" },
    { src: gallery2, alt: "Bunny Chow specialty item", placeholder: "bg-yellow-200" },
    { src: gallery3, alt: "Tea and coffee beverages", placeholder: "bg-yellow-300" },
    { src: gallery4, alt: "Cafe interior and seating", placeholder: "bg-yellow-400" },
    { src: gallery5, alt: "Exterior view at Aagam Square Complex", placeholder: "bg-yellow-500" },
  ];

  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  // Get directions URL
  const getDirectionsUrl = googleMapsLink || `https://www.google.com/maps?q=${encodeURIComponent(address)}`;

  return (
    <section id="gallery" className="py-16 sm:py-20 bg-white w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3 sm:mb-4">
            Gallery
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            A glimpse into the Cheezylicious Cafe experience
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {galleryImages.map((image, index) => {
            const isLastImage = index === galleryImages.length - 1;
            return (
              <div
                key={index}
                className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden border border-yellow-200 group hover:shadow-xl transition-all"
              >
                {/* Placeholder background - shows if image fails to load */}
                {imageErrors[index] && (
                  <div className={`absolute inset-0 ${image.placeholder} flex items-center justify-center`}>
                    <span className="text-yellow-600/50 font-semibold text-xs sm:text-sm uppercase tracking-wider text-center px-4">
                      {image.alt}
                    </span>
                  </div>
                )}
                {/* Image with error handling */}
                {!imageErrors[index] && (
                  <div className="absolute inset-0">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={() => setImageErrors((prev) => ({ ...prev, [index]: true }))}
                    />
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 sm:p-4 z-10">
                  <p className="text-white font-semibold text-xs sm:text-sm mb-1 sm:mb-2 line-clamp-2">{image.alt}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

