import Image from "next/image";
import { cafeData } from "@/data";
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import gallery4 from "@/assets/gallery4.jpg";
import gallery5 from "@/assets/gallery5.jpg";
import gallery6 from "@/assets/gallery6.jpg";

const Gallery = () => {
  const galleryImages = [
    { src: gallery1, alt: "Cafe interior and seating" },
    { src: gallery2, alt: "Mocktails close-up shots" },
    { src: gallery3, alt: "Popular food items like noodles" },
    { src: gallery4, alt: "Friends or family dining" },
    { src: gallery5, alt: "Exterior view near Khelghar Sports Arena" },
    { src: gallery6, alt: "Cafe atmosphere and food" },
  ];

  return (
    <section id="gallery" className="py-20 px-4 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-lg text-gray-600">
            A glimpse of our delicious food and cozy atmosphere
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-shadow"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

