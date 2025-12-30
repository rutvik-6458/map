# Gallery Images Integration Guide

## Current Status

The Gallery component (`src/components/Gallery.tsx`) currently displays placeholder divs with text labels. To add actual images, follow these steps:

## Step 1: Add Images to Public Folder

Add your gallery images to the `public/` folder with these recommended names:

1. **gallery-1.jpg** - Cafe exterior and location
2. **gallery-2.jpg** - Coffee drinks close-up (flat white, cappuccino)
3. **gallery-3.jpg** - Sandwiches and bakery items
4. **gallery-4.jpg** - Interior seating and ambience
5. **gallery-5.jpg** - Evening cafe vibe
6. **gallery-6.jpg** - Specialty coffee preparation

## Step 2: Update Gallery Component

Open `src/components/Gallery.tsx` and:

1. **Update the galleryItems array** (around line 7-13):

```tsx
const galleryItems = [
    { id: 1, image: "/gallery-1.jpg", alt: "Cafe exterior and location" },
    { id: 2, image: "/gallery-2.jpg", alt: "Coffee drinks close-up (flat white, cappuccino)" },
    { id: 3, image: "/gallery-3.jpg", alt: "Sandwiches and bakery items" },
    { id: 4, image: "/gallery-4.jpg", alt: "Interior seating and ambience" },
    { id: 5, image: "/gallery-5.jpg", alt: "Evening cafe vibe" },
    { id: 6, image: "/gallery-6.jpg", alt: "Specialty coffee preparation" },
];
```

2. **Uncomment the Image component** (around line 51-57):

Remove the comment markers (`/*` and `*/`) around the Image component code.

3. **Remove or comment out the placeholder div** (around line 48-50):

Comment out or remove the div that shows the placeholder text.

## Image Recommendations

- **Format**: JPG or WebP
- **Size**: 1200x900px (4:3 aspect ratio) recommended
- **File size**: Optimize to under 300KB per image for fast loading
- **Quality**: High quality, well-lit photos work best

## Alternative: Using Image Assets

If you prefer to use Next.js image imports (better optimization), you can:

1. Create an `assets` folder in `src/`:
   ```
   src/assets/gallery-1.jpg
   src/assets/gallery-2.jpg
   ...
   ```

2. Import images at the top of `Gallery.tsx`:
   ```tsx
   import gallery1 from "@/assets/gallery-1.jpg";
   import gallery2 from "@/assets/gallery-2.jpg";
   // ... etc
   ```

3. Update the galleryItems array:
   ```tsx
   const galleryItems = [
       { id: 1, image: gallery1, alt: "Cafe exterior and location" },
       // ... etc
   ];
   ```

## Photo Shotlist (from data.ts)

Based on the provided data, these are the recommended photos:

- Cafe exterior and location
- Coffee drinks close-up (flat white, cappuccino)
- Sandwiches and bakery items
- Interior seating and ambience
- Evening cafe vibe




