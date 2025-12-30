# Gallery Image Integration Guide

## Current Status

The Gallery component (`src/components/Gallery.tsx`) currently displays placeholder divs. You need to replace these with actual images.

## Steps to Add Images

### Option 1: Using Next.js Image Component (Recommended)

1. **Add images to your project:**
   - Create `src/assets/` folder (if it doesn't exist)
   - Add your gallery images there
   - Recommended formats: `.jpg`, `.webp`, `.png`

2. **Update Gallery.tsx:**

```tsx
import Image from "next/image";
import { cafeData } from "@/data";
import gallery1 from "@/assets/cafe-interior.jpg";
import gallery2 from "@/assets/mocktails.jpg";
import gallery3 from "@/assets/noodles.jpg";
import gallery4 from "@/assets/family-dining.jpg";
import gallery5 from "@/assets/exterior.jpg";
import gallery6 from "@/assets/mocktails-closeup.jpg";

const Gallery = () => {
  const galleryImages = [
    { src: gallery1, alt: "Cafe interior and seating" },
    { src: gallery2, alt: "Mocktails close-up shots" },
    { src: gallery3, alt: "Popular food items like noodles" },
    { src: gallery4, alt: "Friends or family dining" },
    { src: gallery5, alt: "Exterior view near Khelghar Sports Arena" },
    { src: gallery6, alt: "More mocktails" },
  ];

  return (
    <section id="gallery" className="py-20 px-4 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-lg text-gray-600">
            A glimpse of our delicious food and cozy atmosphere
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-shadow"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
```

### Option 2: Using Public Folder

1. **Add images to `public/gallery/` folder:**
   ```
   public/
     gallery/
       cafe-interior.jpg
       mocktails.jpg
       noodles.jpg
       family-dining.jpg
       exterior.jpg
       mocktails-closeup.jpg
   ```

2. **Update Gallery.tsx to use public paths:**

```tsx
const galleryImages = [
  { src: "/gallery/cafe-interior.jpg", alt: "Cafe interior and seating" },
  { src: "/gallery/mocktails.jpg", alt: "Mocktails close-up shots" },
  // ... etc
];
```

## Recommended Image Specifications

- **Format**: JPG or WebP (WebP preferred for better compression)
- **Aspect Ratio**: 1:1 (square) works best with the current grid
- **Dimensions**: Minimum 800x800px, recommended 1200x1200px
- **File Size**: Optimize to under 500KB per image for fast loading
- **Quality**: High quality but optimized for web

## Image Shotlist (from data.ts)

Based on the provided data, you should have images of:
1. Cafe interior and seating
2. Mocktails close-up shots
3. Popular food items like noodles
4. Friends or family dining
5. Exterior view near Khelghar Sports Arena

## Image Optimization Tips

1. Use tools like [Squoosh](https://squoosh.app/) or [TinyPNG](https://tinypng.com/) to compress images
2. Convert to WebP format for better compression
3. Use Next.js Image component for automatic optimization
4. Consider lazy loading for images below the fold

## Testing

After adding images:
1. Run `npm run dev`
2. Navigate to the Gallery section
3. Verify images load correctly
4. Test on mobile devices
5. Check image loading performance






