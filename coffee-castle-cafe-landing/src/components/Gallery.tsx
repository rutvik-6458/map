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
    { src: gallery2, alt: "Coffee and beverages" },
    { src: gallery3, alt: "Cafe atmosphere" },
    { src: gallery4, alt: "Food and dining" },
    { src: gallery5, alt: "Cafe ambience" },
    { src: gallery6, alt: "Cafe experience" },
  ];

  return (
    <section id="gallery" className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b from-stone-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-900 mb-3 sm:mb-4">
            Gallery
          </h2>
          <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto px-4">
            Take a look at our cozy cafe atmosphere
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="aspect-square relative rounded-lg overflow-hidden border border-stone-300 hover:shadow-lg transition-shadow"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

