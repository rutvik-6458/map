# Gallery Image Integration Guide

## Current Status

The Gallery component (`src/components/Gallery.tsx`) currently uses placeholder divs. To integrate real images, follow these steps:

## Step 1: Add Images

Place your gallery images in one of these locations:
- `src/assets/` (recommended for Next.js Image optimization)
- `public/` folder

## Step 2: Update Gallery Component

Open `src/components/Gallery.tsx` and:

1. Import your images at the top:
```typescript
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
// ... etc
```

2. Replace the placeholder array with actual images:
```typescript
const galleryImages = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
];
```

3. Uncomment and update the Image component in the map function:
```typescript
<Image
  src={image}
  alt={`Gallery image ${index + 1} - ${cafeData.brand.business_name}`}
  fill
  className="object-cover group-hover:scale-105 transition-transform duration-300"
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
/>
```

4. Remove or comment out the placeholder div.

## Recommended Images

Based on the photo shotlist, include:
1. Exterior of the cafe
2. Coffee cups and espresso shots
3. Interior seating and ambience
4. Drive-through counter
5. Close-up of coffee preparation
6. Additional interior/atmosphere shots

## Image Specifications

- **Format**: JPG or WebP (WebP recommended for better compression)
- **Aspect Ratio**: Square (1:1) works best for the grid layout
- **Size**: 800x800px minimum (Next.js will optimize automatically)
- **File Size**: Keep under 500KB per image for fast loading

## Hero Image (Optional)

If you want to add a hero background image:

1. Add the image to `src/assets/`
2. Update `src/components/Hero.tsx`:
```typescript
import heroImage from "@/assets/hero.jpg";

// In the component, replace the gradient background with:
<div className="absolute inset-0 z-0">
  <Image
    src={heroImage}
    alt={`${cafeData.brand.business_name}`}
    fill
    className="object-cover"
    priority
    quality={90}
  />
  <div className="absolute inset-0 bg-black/50" />
</div>
```


