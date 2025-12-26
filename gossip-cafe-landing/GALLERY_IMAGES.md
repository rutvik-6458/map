# Gallery Images Integration Guide

## Current Status

The Gallery component currently uses placeholder divs with gradient backgrounds. To add actual images, follow the steps below.

## Step 1: Add Images to Public Folder

Add your gallery images to the `public/` folder:

```
public/
├── gallery1.jpg  # Cafe exterior at Ashtha Complex
├── gallery2.jpg  # Interior seating and lighting
├── gallery3.jpg  # Cold coffee and snacks close-up
├── gallery4.jpg  # Group and couple seating areas
├── gallery5.jpg  # Decor and ambience
└── gallery6.jpg  # Privacy-focused seating
```

## Step 2: Update Gallery Component

Open `src/components/Gallery.tsx` and replace the placeholder code with actual image imports:

### Before (Placeholder):
```tsx
<div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-gray-200 shadow-lg group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
  <div className="text-center p-8">
    <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
      <span className="text-3xl">📸</span>
    </div>
    <p className="text-gray-500 text-sm font-medium">{item.alt}</p>
    <p className="text-xs text-gray-400 mt-2">Replace with actual image</p>
  </div>
</div>
```

### After (With Images):
```tsx
import Image from "next/image";
import gallery1 from "@/public/gallery1.jpg";
import gallery2 from "@/public/gallery2.jpg";
import gallery3 from "@/public/gallery3.jpg";
import gallery4 from "@/public/gallery4.jpg";
import gallery5 from "@/public/gallery5.jpg";
import gallery6 from "@/public/gallery6.jpg";

// Update the galleryItems array:
const galleryItems = [
  { id: 1, image: gallery1, alt: "Gossip Cafe - Exterior view at Ashtha Complex" },
  { id: 2, image: gallery2, alt: "Gossip Cafe - Interior seating and lighting" },
  { id: 3, image: gallery3, alt: "Gossip Cafe - Cold coffee and snacks" },
  { id: 4, image: gallery4, alt: "Gossip Cafe - Group and couple seating areas" },
  { id: 5, image: gallery5, alt: "Gossip Cafe - Decor and ambience" },
  { id: 6, image: gallery6, alt: "Gossip Cafe - Privacy-focused seating" },
];

// Then in the map function:
<Image
  src={item.image}
  alt={item.alt}
  fill
  className="object-cover group-hover:scale-110 transition-transform duration-500"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

## Recommended Photo Shotlist

Based on the cafe's positioning and features, here are recommended photos:

1. **Cafe exterior at Ashtha Complex** - Show the entrance and exterior signage
2. **Interior seating and lighting** - Capture the cozy ambience
3. **Cold coffee and snacks close-up** - Feature the signature items (cold coffee, nachos, garlic bread)
4. **Group and couple seating areas** - Highlight privacy-focused seating
5. **Decor and selfie-friendly spots** - Show the Instagram-worthy decor
6. **Evening/night atmosphere** - Since it closes at 11:00 pm

## Image Optimization Tips

- **Format**: Use JPG for photos, WebP for better compression
- **Size**: Optimize images to be under 500KB each
- **Dimensions**: Recommended aspect ratio is 4:3 (e.g., 1200x900px or 1600x1200px)
- **Quality**: Use 80-85% quality for web to balance size and visual quality

## Alternative: Using Assets Folder

If you prefer to use the `src/assets/` folder instead:

1. Create `src/assets/` folder
2. Add images there
3. Import like: `import gallery1 from "@/assets/gallery1.jpg";`

Note: Next.js Image component works better with `public/` folder for static assets, but both approaches work.
