# Image Integration Guide

This guide explains where to replace placeholder images with actual photos from Odd Three Coffee Club.

## Gallery Images

The Gallery component (`src/components/Gallery.tsx`) currently uses placeholder images. Replace them with your actual cafe photos.

### Recommended Photo Shots

Based on the photo shotlist, you should have:

1. **Cafe interior and seating** - Show the cozy, chic ambience
2. **Barista preparing coffee** - Highlight the skilled baristas
3. **Cold brew and specialty coffee drinks** - Showcase your specialty items
4. **Customers working or relaxing** - Demonstrate the work-friendly environment
5. **Exterior and VIP Road view** - Show the location

### How to Replace Images

1. **Option 1: Add to public folder**
   - Place images in `public/gallery/` folder
   - Update `galleryImages` array in `src/components/Gallery.tsx`:
   ```typescript
   {
     src: "/gallery/interior.jpg",
     alt: "Cafe interior and seating",
     placeholder: "bg-amber-100"
   }
   ```

2. **Option 2: Add to src/assets folder**
   - Place images in `src/assets/` folder
   - Import them in the component:
   ```typescript
   import interiorImage from "../assets/interior.jpg";
   ```

3. **Option 3: Use external URLs**
   - If hosting images elsewhere, update the `src` URLs directly

### Current Placeholder Locations

- **Hero Section** (`src/components/Hero.tsx`): Line 23 - Background hero image
- **Features Section** (`src/components/Features.tsx`): Line 48 - Side image
- **Menu Section** (`src/components/Menu.tsx`): Lines 20-23 - Menu item images
- **Gallery Section** (`src/components/Gallery.tsx`): Lines 7-38 - All gallery images

## Image Optimization Tips

- Use WebP format for better compression
- Optimize images before adding (recommended: 1200px width for gallery, 1920px for hero)
- Use descriptive alt text for accessibility
- Consider lazy loading for gallery images (already implemented)

## SEO Image Updates

Don't forget to update the image URL in the JSON-LD schema in `src/app/layout.tsx` (line 48) with your actual hero image URL.



