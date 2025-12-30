import Image from "next/image"
import Gallery0 from "@/assets/Gallery0.avif"
import Gallery1 from "@/assets/Gallery1.jpg"
import Gallery2 from "@/assets/Gallery2.avif"
import Gallery3 from "@/assets/Gallery3.webp"
import Gallery4 from "@/assets/Gallery4.jpg"
import Gallery5 from "@/assets/Gallery5.avif"
import Gallery6 from "@/assets/Gallery6.webp"
import Gallery8 from "@/assets/Gallery8.webp"

const images = [
    Gallery0,
    Gallery1,
    Gallery2,
    Gallery3,
    Gallery4,
    Gallery5,
    Gallery6,
    Gallery8,
]

export default function Gallery() {
    return (
        <section id="gallery" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
            <div className="container px-4 sm:px-6 mx-auto">
                <div className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-3 sm:mb-4 tracking-tight px-2">
                        Gallery
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-muted-foreground px-2">A glimpse into our aesthetic.</p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
                    {images.map((image, i) => (
                        <div key={i} className="aspect-[4/5] bg-slate-100 rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden relative group shadow-sm hover:shadow-xl transition-all duration-500">
                            <Image
                                src={image}
                                alt={`Gallery image ${i + 1}`}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-gradient-to-t group-hover:from-black/40 group-hover:to-transparent transition-all duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
