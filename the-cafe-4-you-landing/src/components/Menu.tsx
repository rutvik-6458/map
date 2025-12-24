"use client";

import { businessData } from "../data";
import { UtensilsCrossed } from "lucide-react";

export function Menu() {
  return (
    <section id="menu" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-playfair mb-6">Our Menu & Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From refreshing Mint Mojito to delicious Ice Cream Brownie, we serve flavors that make you come back.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {businessData.positioning.signature_items_or_services.map((item, index) => {
            const menuImages = [
              "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=800&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1551782450-17144efb9c50?q=80&w=800&auto=format&fit=crop"
            ];
            const menuImage = menuImages[index] || menuImages[0];

            return (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={menuImage}
                    alt={item}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10" />
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold text-primary tracking-wider uppercase">
                      Popular
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 font-playfair group-hover:text-primary transition-colors">{item}</h3>
                  <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                    Crafted with care and served with a smile. A must-try at {businessData.brand.business_name}.
                  </p>
                  <div className="flex items-center gap-2 text-primary text-sm font-bold">
                    <UtensilsCrossed className="h-4 w-4" />
                    <span>Available Now</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-8">Perfect for all your cafe needs and casual dining.</p>
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

