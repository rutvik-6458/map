export default function Gallery() {
    return (
        <section id="gallery" className="py-20 bg-background">
            <div className="container mx-auto px-4 text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">Gallery</h2>
                <p className="text-muted-foreground">A glimpse into our cozy world.</p>
            </div>
            <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    "/Gallery.jpg",
                    "/Gallery1.webp",
                    "/Gallery2.jfif",
                    "/Gallery4.jpg",
                    "/Gallery5.webp",
                    "/Gallery6.webp",
                    "/Gallery7.webp",
                    "/Gallery8.avif"
                ].map((src, i) => (
                    <div key={i} className="aspect-square bg-muted rounded-xl relative overflow-hidden group shadow-sm hover:shadow-md transition-all">
                        <img
                            src={src}
                            alt={`Gallery image ${i + 1}`}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}
