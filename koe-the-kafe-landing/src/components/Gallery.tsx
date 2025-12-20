import { businessData } from "../data";

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=2071&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1964&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=2069&auto=format&fit=crop"
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A glimpse into the aesthetic and cozy atmosphere of KOE - The Kafe.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((src, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl group cursor-pointer break-inside-avoid"
            >
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-500" />
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 rounded-2xl"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground italic">
            * Note: Replace these placeholder images with actual photos of KOE - The Kafe interior and food.
        </div>
      </div>
    </section>
  );
}


