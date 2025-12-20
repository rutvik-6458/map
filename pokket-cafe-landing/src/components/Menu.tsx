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
    <section id="menu" className="py-24 bg-secondary/20" ref={menuRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">Our Signature Menu</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From cheesy pizzas to comfort snacks, we serve flavors that make you come back.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {businessData.positioning.signature_items_or_services.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) itemRefs.current.set(item, el);
              }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50"
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10" />
                <img
                  src={`https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&sig=${index}`}
                  alt={item}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold text-primary tracking-wider uppercase">
                    Signature
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 font-playfair group-hover:text-primary transition-colors">{item}</h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Crafted with fresh ingredients and authentic flavors. A must-try at {businessData.brand.business_name}.
                </p>
                <div className="flex items-center gap-2 text-primary text-sm font-bold">
                  <UtensilsCrossed className="h-4 w-4" />
                  <span>View More</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-8">Also serving coffee, milkshakes, and various quick bites.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {businessData.positioning.best_for.map((item, i) => (
              <span key={i} className="px-5 py-2.5 bg-white border border-border rounded-full text-sm font-medium shadow-sm">
                Perfect for {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

