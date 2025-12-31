export default function Gallery() {
    const images = [
        { url: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800", alt: "Modern Ambience" },
        { url: "/assets/gallery2.jpg", alt: "Delicious Starters" },
        { url: "/assets/gallery3.jpg", alt: "Premium Dining Area" },
        { url: "/assets/gallery4.jpg", alt: "Specialty Main Course" },
        { url: "/assets/gallery7.jpg", alt: "Signature Presentation" },
        { url: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800", alt: "Signature Mocktails" },
        { url: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800", alt: "Authentic Indian Thali" },
        { url: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=800", alt: "Crispy Chinese Starters" },
    ];

    return (
        <section id="gallery" className="py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">A Glimpse into Our World</h2>
                    <p className="text-slate-600">Explore our pleasant ambience and delicious multicuisine spread.</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((img, i) => (
                        <div
                            key={i}
                            className={`relative overflow-hidden rounded-2xl group ${i === 0 || i === 5 ? "md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-square" : "aspect-square"
                                }`}
                        >
                            <img
                                src={img.url}
                                alt={img.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white font-medium border border-white/40 px-4 py-2 rounded-full backdrop-blur-sm">
                                    {img.alt}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
