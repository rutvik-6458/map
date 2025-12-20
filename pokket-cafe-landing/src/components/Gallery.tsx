"use client";

import { businessData } from "../data";
import { cn } from "../lib/utils";

const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
    alt: "Cafe Interior",
    menuItem: null,
  },
  {
    src: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=2071&auto=format&fit=crop",
    alt: "Cheese Burst Pizza",
    menuItem: "Cheese Burst Pizza",
  },
  {
    src: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1974&auto=format&fit=crop",
    alt: "Pasta and French Fries",
    menuItem: "Pasta and French Fries",
  },
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop",
    alt: "Blue Ocean Ice Tea",
    menuItem: "Blue Ocean Ice Tea",
  },
  {
    src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1964&auto=format&fit=crop",
    alt: "Friends Dining",
    menuItem: null,
  },
  {
    src: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=2069&auto=format&fit=crop",
    alt: "Cafe Ambience",
    menuItem: null,
  }
];

export function Gallery() {
  const handleImageClick = (menuItem: string | null) => {
    if (menuItem) {
      // Dispatch custom event to highlight menu item
      const event = new CustomEvent('highlightMenuItem', { detail: { menuItem } });
      window.dispatchEvent(event);

      // Scroll to menu section
      setTimeout(() => {
        const menuSection = document.getElementById("menu");
        if (menuSection) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = menuSection.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A glimpse into the casual and friendly atmosphere of {businessData.brand.business_name}.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {GALLERY_IMAGES.map((img, index) => (
            <div
              key={index}
              onClick={() => handleImageClick(img.menuItem)}
              className={cn(
                "relative overflow-hidden rounded-2xl group cursor-pointer break-inside-avoid transition-all duration-300",
                img.menuItem ? "hover:ring-2 hover:ring-primary hover:ring-offset-2" : ""
              )}
            >
              <div className={cn(
                "absolute inset-0 z-10 transition-opacity duration-500",
                img.menuItem
                  ? "bg-primary/20 opacity-0 group-hover:opacity-100"
                  : "bg-primary/10 opacity-0 group-hover:opacity-100"
              )} />
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 rounded-2xl"
              />
              {img.menuItem && (
                <div className="absolute bottom-4 left-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
                    <p className="text-sm font-semibold text-primary">Click to view in Menu</p>
                    <p className="text-xs text-muted-foreground mt-1">{img.menuItem}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-muted-foreground italic">
          * Note: Replace these placeholder images with actual photos of {businessData.brand.business_name} interior and food.
        </div>
      </div>
    </section>
  );
}

