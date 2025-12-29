import { Card } from "@/components/ui/card";
import Image from "next/image";
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import gallery4 from "@/assets/gallery4.jpg";
import gallery5 from "@/assets/gallery5.jpg";
import gallery6 from "@/assets/gallery6.jpg";

const Gallery = () => {
    const galleryImages = [
        { src: gallery1, alt: "Pasta close-up shot" },
        { src: gallery2, alt: "Exotica pizza" },
        { src: gallery3, alt: "Cafe interior and seating" },
        { src: gallery4, alt: "Food and beverage spread" },
        { src: gallery5, alt: "Exterior view at Prime Shoppers" },
        { src: gallery6, alt: "Pasta dish" }
    ];

    return (
        <section id="gallery" className="py-12 sm:py-16 bg-gradient-to-b from-red-50 to-white">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-gray-900">
                        Gallery
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
                        A glimpse of our cozy cafe and delicious food
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-6xl mx-auto">
                    {galleryImages.map((image, index) => (
                        <Card key={index} className="overflow-hidden border-gray-200 hover:shadow-xl transition-all group">
                            <div className="relative aspect-square bg-gray-100">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;

