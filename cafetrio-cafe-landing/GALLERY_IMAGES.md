# Gallery Images Integration Guide

## Required Images

Replace the placeholder images in `src/components/Gallery.tsx` with actual photos. Here are the recommended images based on the photo shotlist:

### Image List

1. **Burnt garlic rice close-up** - Showcase the signature dish
2. **Cafe interior and seating** - Display the cozy ambience
3. **Oreo shake and beverages** - Highlight popular drinks
4. **Happy customers and ambience** - Social proof and atmosphere
5. **Exterior signage at Digital Asset Academy** - Location identification
6. **Additional cafe food and drinks** - Menu variety

## How to Add Images

### Option 1: Using Next.js Image Component (Recommended)

1. Add images to `public/gallery/` folder:
   ```
   public/
   └── gallery/
       ├── burnt-garlic-rice.jpg
       ├── cafe-interior.jpg
       ├── oreo-shake.jpg
       ├── customers-ambience.jpg
       ├── exterior-signage.jpg
       └── cafe-food.jpg
   ```

2. Update `src/components/Gallery.tsx`:

```tsx
import Image from "next/image";

const galleryImages = [
  { id: 1, src: "/gallery/burnt-garlic-rice.jpg", alt: "Burnt garlic rice close-up" },
  { id: 2, src: "/gallery/cafe-interior.jpg", alt: "Cafe interior and seating" },
  { id: 3, src: "/gallery/oreo-shake.jpg", alt: "Oreo shake and beverages" },
  { id: 4, src: "/gallery/customers-ambience.jpg", alt: "Happy customers and ambience" },
  { id: 5, src: "/gallery/exterior-signage.jpg", alt: "Exterior signage at Digital Asset Academy" },
  { id: 6, src: "/gallery/cafe-food.jpg", alt: "Cafe food and drinks" },
];

// In the component:
{galleryImages.map((image) => (
  <div key={image.id} className="relative aspect-[4/3] rounded-2xl overflow-hidden">
    <Image
      src={image.src}
      alt={image.alt}
      fill
      className="object-cover hover:scale-110 transition-transform duration-300"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  </div>
))}
```

### Option 2: Using Imported Images

1. Add images to `src/assets/` folder
2. Import them in the component:

```tsx
import burntGarlicRice from "@/assets/burnt-garlic-rice.jpg";
import cafeInterior from "@/assets/cafe-interior.jpg";
// ... other imports
```

## Image Requirements

- **Format**: JPG or WebP (WebP recommended for better performance)
- **Aspect Ratio**: 4:3 (recommended)
- **Size**: Optimize images to be under 500KB each
- **Dimensions**: Minimum 1200px width for best quality
- **Quality**: High quality, well-lit photos

## Image Optimization Tips

1. Use tools like [Squoosh](https://squoosh.app/) or [TinyPNG](https://tinypng.com/) to compress images
2. Convert to WebP format for better compression
3. Ensure images are properly cropped and centered
4. Maintain consistent aspect ratios for a clean grid layout

## Current Status

The gallery currently shows placeholder divs with icons. Replace them with actual images following the instructions above.





