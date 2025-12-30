# Gallery Images - Integration Guide

## Current Status
The gallery section currently uses placeholder components. Replace them with actual cafe images.

## Image Requirements

Based on the photo shotlist from the data:
1. **Cafe exterior near pickleball court** - `gallery1.jpg`
2. **Interior ambience in the evening** - `gallery2.jpg`
3. **Group seating and hangout vibe** - `gallery3.jpg`
4. **Refreshments and food close-ups** - `gallery4.jpg`
5. **Night-time ambience shots** - `gallery5.jpg`
6. **Additional photo** - `gallery6.jpg`

## How to Add Images

1. Add your images to the `src/assets/` directory
2. Update `src/components/Gallery.tsx`:

```tsx
import Image from "next/image";
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import gallery4 from "@/assets/gallery4.jpg";
import gallery5 from "@/assets/gallery5.jpg";
import gallery6 from "@/assets/gallery6.jpg";

const galleryItems = [
    { id: 1, image: gallery1, alt: "Cafe exterior near pickleball court" },
    { id: 2, image: gallery2, alt: "Interior ambience in the evening" },
    { id: 3, image: gallery3, alt: "Group seating and hangout vibe" },
    { id: 4, image: gallery4, alt: "Refreshments and food close-ups" },
    { id: 5, image: gallery5, alt: "Night-time ambience shots" },
    { id: 6, image: gallery6, alt: "Additional cafe photo" },
];
```

3. Replace the placeholder div with the Image component:
```tsx
<Image
    src={item.image}
    alt={item.alt}
    fill
    className="object-cover group-hover:scale-110 transition-transform duration-500"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

## Image Recommendations
- Format: JPG or WebP
- Aspect ratio: 4:3 (recommended)
- Resolution: At least 1200x900px for best quality
- File size: Optimize for web (< 500KB per image recommended)



