# Gallery Images Integration Guide

## Current Status

The Gallery component (`src/components/Gallery.tsx`) currently uses placeholder divs with colored backgrounds. You need to replace these with actual images.

## Steps to Add Images

### 1. Add Images to Project

Create an `assets` folder in `src/` and add your gallery images:

```
src/
  assets/
    gallery1.jpg  - Cafe exterior
    gallery2.jpg  - Interior seating and ambience
    gallery3.jpg  - Food and drinks close-up
    gallery4.jpg  - Menu display
    gallery5.jpg  - Overall cafe vibe
    gallery6.jpg  - Cafe atmosphere
```

### 2. Update Gallery Component

Open `src/components/Gallery.tsx` and make the following changes:

**Step 1:** Add imports at the top (after existing imports):
```typescript
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import gallery4 from "@/assets/gallery4.jpg";
import gallery5 from "@/assets/gallery5.jpg";
import gallery6 from "@/assets/gallery6.jpg";
```

**Step 2:** Update the `galleryItems` array:
```typescript
const galleryItems = [
    { id: 1, image: gallery1, alt: "Waves Cafe - Exterior view" },
    { id: 2, image: gallery2, alt: "Waves Cafe - Interior seating and ambience" },
    { id: 3, image: gallery3, alt: "Waves Cafe - Food and drinks close-up" },
    { id: 4, image: gallery4, alt: "Waves Cafe - Menu display" },
    { id: 5, image: gallery5, alt: "Waves Cafe - Overall cafe vibe" },
    { id: 6, image: gallery6, alt: "Waves Cafe - Cafe atmosphere" },
];
```

**Step 3:** Replace the placeholder div with the Image component:
```typescript
<Image
    src={item.image}
    alt={item.alt}
    fill
    className="object-cover group-hover:scale-110 transition-transform duration-500"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

**Step 4:** Remove the placeholder div code (the one with the colored background and emoji).

## Image Recommendations

- **Format:** JPG or WebP
- **Aspect Ratio:** 4:3 (recommended)
- **Size:** Optimize images to be under 500KB each for better performance
- **Dimensions:** Minimum 1200x900px for good quality on all devices

## Photo Shotlist (from data.ts)

Based on the recommended sections, you should have:
1. Cafe exterior
2. Interior seating and ambience
3. Food and drinks close-up
4. Menu display
5. Overall cafe vibe


