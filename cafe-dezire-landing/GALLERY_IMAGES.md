# Gallery Images Integration Guide

## Current Status

The gallery section (`src/components/Gallery.tsx`) currently displays placeholder components. You need to replace these with actual images.

## Required Images

Based on the photo shotlist, you need the following images:

1. **Cafe exterior on Udhana–Magdalla Road**
   - Recommended size: 800x600px or 4:3 aspect ratio
   - File: `gallery1.jpg`

2. **Cold coffee close-up**
   - Recommended size: 800x600px or 4:3 aspect ratio
   - File: `gallery2.jpg`

3. **Ice creams and desserts**
   - Recommended size: 800x600px or 4:3 aspect ratio
   - File: `gallery3.jpg`

4. **Dine-in seating area**
   - Recommended size: 800x600px or 4:3 aspect ratio
   - File: `gallery4.jpg`

5. **Coffee being served**
   - Recommended size: 800x600px or 4:3 aspect ratio
   - File: `gallery5.jpg`

6. **Additional cafe ambiance** (optional 6th image)
   - Recommended size: 800x600px or 4:3 aspect ratio
   - File: `gallery6.jpg`

## Steps to Add Images

### Step 1: Create Assets Folder

Create the following directory structure:
```
src/assets/
```

### Step 2: Add Images

Place your images in `src/assets/` with the names:
- `gallery1.jpg`
- `gallery2.jpg`
- `gallery3.jpg`
- `gallery4.jpg`
- `gallery5.jpg`
- `gallery6.jpg` (optional)

### Step 3: Update Gallery Component

Open `src/components/Gallery.tsx` and replace the placeholder code with:

```typescript
"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cafeData } from "@/data";
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import gallery4 from "@/assets/gallery4.jpg";
import gallery5 from "@/assets/gallery5.jpg";
import gallery6 from "@/assets/gallery6.jpg";

export default function Gallery() {
    const galleryItems = [
        { id: 1, image: gallery1, alt: "Cafe Dezire - Exterior on Udhana–Magdalla Road" },
        { id: 2, image: gallery2, alt: "Cafe Dezire - Cold coffee close-up" },
        { id: 3, image: gallery3, alt: "Cafe Dezire - Ice creams and desserts" },
        { id: 4, image: gallery4, alt: "Cafe Dezire - Dine-in seating area" },
        { id: 5, image: gallery5, alt: "Cafe Dezire - Coffee being served" },
        { id: 6, image: gallery6, alt: "Cafe Dezire - Cafe ambiance" },
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
                            Take a look at our cafe, cold coffee, and cozy atmosphere.
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

## Image Optimization Tips

- **Format**: Use JPG for photos, optimize file size (aim for < 200KB per image)
- **Aspect Ratio**: Maintain 4:3 ratio for consistency
- **Resolution**: 800x600px is sufficient for web display
- **Quality**: Use tools like TinyPNG or ImageOptim to compress without visible quality loss

## Alternative: Using External Images

If you prefer to host images externally, you can use the `next.config.ts` to configure remote patterns:

```typescript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'your-image-host.com',
    },
  ],
},
```

Then use the full URL in the gallery items instead of imports.




