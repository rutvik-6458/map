"use client";

import { businessData } from "../data";
import { UtensilsCrossed } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function Menu() {
  const menuRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const [highlightedItem, setHighlightedItem] = useState<string | null>(null);

  useEffect(() => {
    const handleHighlight = (event: CustomEvent) => {
      const menuItem = event.detail.menuItem;
      setHighlightedItem(menuItem);
    };

    window.addEventListener('highlightMenuItem', handleHighlight as EventListener);

    return () => {
      window.removeEventListener('highlightMenuItem', handleHighlight as EventListener);
    };
  }, []);

  useEffect(() => {
    if (highlightedItem && itemRefs.current.has(highlightedItem)) {
      const element = itemRefs.current.get(highlightedItem);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
        element.classList.add("ring-4", "ring-primary", "ring-offset-4", "transition-all");
        setTimeout(() => {
          element.classList.remove("ring-4", "ring-primary", "ring-offset-4");
          setHighlightedItem(null);
        }, 3000);
      }
    }
  }, [highlightedItem]);

  return (
    <section id="menu" className="py-16 sm:py-20 md:py-24 bg-secondary/20 w-full overflow-x-hidden" ref={menuRef}>
      <div className="container mx-auto px-4 sm:px-6 max-w-full">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-playfair mb-4 sm:mb-6">Our Signature Menu</h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            From cheesy Bunny Chow to comfort snacks, we serve flavors that make you come back.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {businessData.positioning.signature_items_or_services.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) itemRefs.current.set(item, el);
              }}
              className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50"
            >
              <div className="h-48 sm:h-56 md:h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10" />
                <img
                  src={`https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&sig=${index}`}
                  alt={item}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20">
                  <div className="bg-white/90 backdrop-blur px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold text-primary tracking-wider uppercase">
                    Signature
                  </div>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 font-playfair group-hover:text-primary transition-colors">{item}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                  Crafted with fresh ingredients and authentic flavors. A must-try at {businessData.brand.business_name}.
                </p>
                <div className="flex items-center gap-2 text-primary text-xs sm:text-sm font-bold">
                  <UtensilsCrossed className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  <span>View More</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 md:mt-20 text-center px-4">
          <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">Also serving tea, coffee, and various cheesy snacks.</p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {businessData.positioning.best_for.map((item, i) => (
              <span key={i} className="px-3 sm:px-5 py-2 sm:py-2.5 bg-white border border-border rounded-full text-xs sm:text-sm font-medium shadow-sm">
                Perfect for {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


