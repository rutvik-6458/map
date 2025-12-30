# Gallery Images Integration Guide

## Current Status

The Gallery component (`src/components/Gallery.tsx`) currently displays placeholder divs. Replace these with actual images.

## Recommended Photos (from shotlist)

Based on `assets_needed.photo_shotlist` in `src/data.ts`:

1. **Cafe exterior at Goldmines Shoppers**
2. **Coffee cups and drinks close-up**
3. **Popular food items like pasta**
4. **Interior ambience and seating**
5. **Happy customers and table setups**

## How to Add Images

### Option 1: Using Next.js Image Component (Recommended)

1. Create a folder for images:
   - `src/assets/gallery/` or `public/gallery/`

2. Add your images with descriptive names:
   - `cafe-exterior.jpg`
   - `coffee-closeup.jpg`
   - `pasta-dish.jpg`
   - `interior-ambience.jpg`
   - `customers-dining.jpg`

3. Update `src/components/Gallery.tsx`:

```tsx
import Image from "next/image";
import cafeExterior from "@/assets/gallery/cafe-exterior.jpg";
import coffeeCloseup from "@/assets/gallery/coffee-closeup.jpg";
// ... import other images

const galleryImages = [
  { src: cafeExterior, alt: "Cafe exterior at Goldmines Shoppers" },
  { src: coffeeCloseup, alt: "Coffee cups and drinks close-up" },
  // ... other images
];

// Then in the component:
<Image
  src={image.src}
  alt={image.alt}
  fill
  className="object-cover rounded-2xl"
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
/>
```

### Option 2: Using Public Folder

1. Add images to `public/gallery/` folder
2. Reference them as:
```tsx
<Image
  src="/gallery/cafe-exterior.jpg"
  alt="Cafe exterior at Goldmines Shoppers"
  fill
  className="object-cover rounded-2xl"
/>
```

## Image Specifications

- **Format**: JPG or WebP (WebP recommended for better performance)
- **Aspect Ratio**: 4:3 (matches current placeholder)
- **Recommended Size**: 1200x900px minimum
- **Optimization**: Next.js Image component automatically optimizes images

## Example Implementation

Replace the placeholder divs in the Gallery component with:

```tsx
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-gray-200 group hover:shadow-xl transition-all">
  <Image
    src={imageSrc}
    alt={item}
    fill
    className="object-cover group-hover:scale-105 transition-transform duration-300"
    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
  />
</div>
```



