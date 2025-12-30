# Gallery Images Integration Guide

This document explains how to replace the placeholder images in the Gallery section with actual photos.

## Recommended Photo Shotlist

Based on the requirements, the following images should be captured:

1. **Rooftop seating and night ambience** - Showcase the beautiful rooftop atmosphere
2. **Food presentation (pasta, tacos, sizzlers)** - Display signature dishes
3. **Family and group dining setups** - Show the space is suitable for groups
4. **Interior lighting and decor** - Highlight the ambience
5. **Building exterior and city view** - Show the location and views

## How to Add Images

### Option 1: Using Next.js Image Component (Recommended)

1. **Add images to the public folder:**
   ```
   public/
     gallery/
       rooftop-ambience.jpg
       food-pasta.jpg
       food-tacos.jpg
       food-sizzlers.jpg
       family-dining.jpg
       interior-decor.jpg
       exterior-view.jpg
   ```

2. **Update `src/components/Gallery.tsx`:**

   Replace the placeholder section with:
   ```tsx
   import Image from "next/image";

   const galleryImages = [
     { id: 1, src: "/gallery/rooftop-ambience.jpg", alt: "Rooftop seating and night ambience" },
     { id: 2, src: "/gallery/food-pasta.jpg", alt: "Food presentation - pasta" },
     { id: 3, src: "/gallery/food-tacos.jpg", alt: "Food presentation - tacos" },
     { id: 4, src: "/gallery/food-sizzlers.jpg", alt: "Food presentation - sizzlers" },
     { id: 5, src: "/gallery/family-dining.jpg", alt: "Family and group dining setups" },
     { id: 6, src: "/gallery/interior-decor.jpg", alt: "Interior lighting and decor" },
     { id: 7, src: "/gallery/exterior-view.jpg", alt: "Building exterior and city view" },
   ];

   // Then in the map function:
   <Card className="aspect-square overflow-hidden border-gray-200 shadow-sm hover:shadow-lg transition-shadow cursor-pointer group">
     <div className="relative w-full h-full">
       <Image
         src={image.src}
         alt={image.alt}
         fill
         className="object-cover group-hover:scale-105 transition-transform duration-300"
         sizes="(max-width: 768px) 50vw, 33vw"
       />
     </div>
   </Card>
   ```

### Option 2: Using External Image URLs

If hosting images externally (e.g., CDN, cloud storage):

```tsx
const galleryImages = [
  { id: 1, src: "https://your-cdn.com/gallery/rooftop.jpg", alt: "Rooftop seating and night ambience" },
  // ... more images
];
```

**Note:** When using external URLs, you may need to configure `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'your-cdn.com',
      },
    ],
  },
};
```

## Image Optimization Tips

1. **Format**: Use WebP or AVIF for best performance, fallback to JPG
2. **Dimensions**: Aim for 800x800px minimum for square images (gallery grid)
3. **File Size**: Keep images under 200KB each for fast loading
4. **Aspect Ratio**: Square (1:1) works best for the grid layout

## Example Complete Gallery Component

See the `src/components/Gallery.tsx` file for the current implementation. The component includes:
- Responsive grid layout (2 columns on mobile, 3 on desktop)
- Hover effects and transitions
- Placeholder handling
- Accessibility considerations



