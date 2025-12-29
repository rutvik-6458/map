"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import gallery4 from "@/assets/gallery4.jpg";
import gallery5 from "@/assets/gallery5.jpg";

export default function Gallery() {
  const address = "New VIP Rd, Vesu, Surat, Gujarat 395007";
  const googleMapsLink = ""; // Update when available

  // Gallery images from src/assets/
  const galleryImages = [
    { src: gallery1, alt: "Pavbhaji Pie close-up", placeholder: "bg-orange-100" },
    { src: gallery2, alt: "Cafe interior and seating", placeholder: "bg-orange-200" },
    { src: gallery3, alt: "Coffee and beverages", placeholder: "bg-orange-300" },
    { src: gallery4, alt: "Burgers and fries", placeholder: "bg-orange-400" },
    { src: gallery5, alt: "Exterior view on VIP Road", placeholder: "bg-orange-500" },
  ];

  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  // Get directions URL
  const getDirectionsUrl = googleMapsLink || `https://www.google.com/maps?q=${encodeURIComponent(address)}`;

  return (
    <section id="gallery" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3 sm:mb-4">
            Gallery
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            A glimpse into the Kenny's Kitchen experience
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {galleryImages.map((image, index) => {
            const isLastImage = index === galleryImages.length - 1;
            return (
              <div
                key={index}
                className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden border border-orange-200 group hover:shadow-xl transition-all"
              >
                {/* Placeholder background - shows if image fails to load */}
                {imageErrors[index] && (
                  <div className={`absolute inset-0 ${image.placeholder} flex items-center justify-center`}>
                    <span className="text-orange-600/50 font-semibold text-sm uppercase tracking-wider text-center px-4">
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
                  <p className="text-white font-semibold text-xs sm:text-sm mb-2">{image.alt}</p>
                  {/* Get Directions button on last image */}
                  {isLastImage && (
                    <a
                      href={getDirectionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                    >
                      {/* <button className="mt-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-bold text-sm transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-orange-600/20 flex items-center gap-2">
                        <MapPin size={16} />
                        Get Directions
                      </button> */}
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

