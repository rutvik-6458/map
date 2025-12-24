# Gallery Images Integration Guide

## Current Status

The gallery section (`src/components/Gallery.tsx`) currently uses placeholder images from Unsplash. These need to be replaced with actual photos of OK Café Corner.

## Recommended Photo Shots

Based on the business data, here are the recommended photos to capture:

1. **Cafe seating and setup** - Show the comfortable hangout seating arrangement
2. **Coffee and beverages** - Display the coffee and cafe snacks
3. **Friends hanging out** - Capture the social, friendly atmosphere
4. **Interior vibe** - Show the overall interior ambiance
5. **Exterior view at Sun Arcade** - Display the cafe's location and exterior

## How to Replace Images

### Option 1: Using Local Images

1. Add your images to `src/assets/` folder:
   ```
   src/assets/
     ├── gallery1.jpg
     ├── gallery2.jpg
     ├── gallery3.jpg
     ├── gallery4.jpg
     ├── gallery5.jpg
     └── gallery6.jpg
   ```

2. Update `src/components/Gallery.tsx`:
   ```typescript
   import gallery1 from "@/assets/gallery1.jpg";
   import gallery2 from "@/assets/gallery2.jpg";
   // ... etc

   const galleryImages = [
     {
       src: gallery1,
       alt: "Cafe seating and setup",
       // ...
     },
     // ...
   ];
   ```

### Option 2: Using External URLs

Simply update the `src` URLs in the `galleryImages` array in `src/components/Gallery.tsx` with your hosted image URLs.

## Image Specifications

- **Aspect Ratio**: 4:3 (recommended)
- **Format**: JPG or WebP
- **Size**: Optimize for web (aim for 800-1200px width)
- **Quality**: High quality but optimized for fast loading

## Notes

- The gallery component includes error handling - if an image fails to load, it will show a colored placeholder
- Images are lazy-loaded for better performance
- Hover effects and transitions are already implemented


