# Gallery Images Integration Guide

## Current Status

The Gallery component (`src/components/Gallery.tsx`) currently uses placeholder divs with tea emoji icons. You need to replace these with actual images.

## Recommended Images

Based on the photo shotlist from the data, you should add these 6 images:

1. **Different chai varieties served** - Show various tea cups/glasses with different chai types
2. **Tea being prepared** - Action shot of chai being made
3. **Snacks like dosa and pizza** - Food items served at the cafe
4. **Cafe interior and seating** - Interior ambiance and seating arrangement
5. **Evening crowd and ambience** - People enjoying tea in the evening
6. **Specialty chai varieties** - Close-up of Mota Bhai Chai, Hamari Wali Chai, etc.

## Steps to Add Images

### Step 1: Create Assets Folder
```
src/assets/
```

### Step 2: Add Images
Place your images in `src/assets/` with these names:
- `gallery1.jpg`
- `gallery2.jpg`
- `gallery3.jpg`
- `gallery4.jpg`
- `gallery5.jpg`
- `gallery6.jpg`

### Step 3: Update Gallery.tsx

Replace the current Gallery component content with:

```tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import gallery4 from "@/assets/gallery4.jpg";
import gallery5 from "@/assets/gallery5.jpg";
import gallery6 from "@/assets/gallery6.jpg";
import { cafeData } from "@/data";

export default function Gallery() {
    const galleryItems = [
        { id: 1, image: gallery1, alt: "Kessel Tee - Different chai varieties served" },
        { id: 2, image: gallery2, alt: "Kessel Tee - Tea being prepared" },
        { id: 3, image: gallery3, alt: "Kessel Tee - Snacks like dosa and pizza" },
        { id: 4, image: gallery4, alt: "Kessel Tee - Cafe interior and seating" },
        { id: 5, image: gallery5, alt: "Kessel Tee - Evening crowd and ambience" },
        { id: 6, image: gallery6, alt: "Kessel Tee - Specialty chai varieties" },
    ];

    return (
        <section className="py-24 bg-white" id="gallery">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                            Gallery
                        </h2>
                        <p className="text-gray-600 text-lg font-medium max-w-2xl mx-auto">
                            Take a look at our cozy ambience, specialty chai varieties, and welcoming space.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryItems.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-gray-200 shadow-lg group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                        >
                            <Image
                                src={item.image}
                                alt={item.alt}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
```

## Image Requirements

- **Format**: JPG or PNG
- **Aspect Ratio**: 4:3 (recommended)
- **Size**: Optimize images to be under 500KB each for fast loading
- **Dimensions**: Minimum 1200x900px for good quality on all devices

## Alternative: Hero Image

If you have a hero image, you can also update `src/components/Hero.tsx` to use an actual image instead of the gradient background. Follow the same pattern as the Gallery component.



