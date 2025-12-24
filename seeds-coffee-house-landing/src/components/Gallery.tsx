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
  const address = "International Wealth Center, 312, VIP Rd, Vesu, Surat, Gujarat 395007";
  const googleMapsLink = ""; // Update when available

  // Gallery images from src/assets/
  const galleryImages = [
    {
      src: gallery1,
      alt: "Specialty coffee close-ups",
      placeholder: "bg-amber-100"
    },
    {
      src: gallery2,
      alt: "Rooftop seating and ambience",
      placeholder: "bg-amber-200"
    },
    {
      src: gallery3,
      alt: "Barista preparing coffee",
      placeholder: "bg-amber-300"
    },
    {
      src: gallery4,
      alt: "Latte art and hot beverages",
      placeholder: "bg-amber-400"
    },
    {
      src: gallery5,
      alt: "Exterior view at International Wealth Center",
      placeholder: "bg-amber-500"
    },
  ];

  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  // Get directions URL
  const getDirectionsUrl = googleMapsLink || `https://www.google.com/maps?q=${encodeURIComponent(address)}`;

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A glimpse into the Seeds - The Coffee House experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => {
            const isLastImage = index === galleryImages.length - 1;
            return (
              <div
                key={index}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-amber-200 group hover:shadow-xl transition-all"
              >
                {/* Placeholder background - shows if image fails to load */}
                {imageErrors[index] && (
                  <div className={`absolute inset-0 ${image.placeholder} flex items-center justify-center`}>
                    <span className="text-amber-800/50 font-semibold text-sm uppercase tracking-wider text-center px-4">
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

