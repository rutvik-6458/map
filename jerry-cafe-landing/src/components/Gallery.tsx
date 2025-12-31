export default function Gallery() {
    const images = [
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&fit=crop",
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&fit=crop",
        "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=2070&fit=crop",
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&fit=crop",
        "https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?q=80&w=1974&fit=crop",
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&fit=crop"
    ]

    return (
        <section id="gallery" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Gallery</h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
                        A glimpse into our cozy space and happy moments.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((src, i) => (
                        <div key={i} className="relative aspect-square overflow-hidden rounded-xl bg-secondary/50 group">
                            <img
                                src={src}
                                alt={`Gallery image ${i + 1}`}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
