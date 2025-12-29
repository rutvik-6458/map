# Gallery Images Integration Guide

## Current Status

The Gallery component (`src/components/Gallery.tsx`) currently displays placeholder divs. Replace these with actual images.

## Recommended Photos (from shotlist)

1. **Coffee and cappuccino close-ups**
2. **Sandwiches and pizzas**
3. **Cafe interior and seating**
4. **Shakes and beverages**
5. **Exterior view in Vesu**

## How to Add Images

### Option 1: Using Next.js Image Component (Recommended)

1. Add images to `src/assets/` or `public/` folder
2. Update `src/components/Gallery.tsx`:

```tsx
import Image from "next/image";
import coffeeImage from "@/assets/coffee.jpg";
import sandwichImage from "@/assets/sandwich.jpg";
// ... import other images

// Then in the component:
<Image
  src={coffeeImage}
  alt="Coffee and cappuccino close-ups"
  fill
  className="object-cover rounded-2xl"
/>
```

### Option 2: Using Public Folder

1. Add images to `public/gallery/` folder
2. Reference them as:
```tsx
<Image
  src="/gallery/coffee.jpg"
  alt="Coffee and cappuccino close-ups"
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
<div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-amber-200 group hover:shadow-xl transition-all">
  <Image
    src={imageSrc}
    alt={item}
    fill
    className="object-cover group-hover:scale-105 transition-transform duration-300"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
    <p className="text-white font-semibold text-sm">{item}</p>
  </div>
</div>
```



