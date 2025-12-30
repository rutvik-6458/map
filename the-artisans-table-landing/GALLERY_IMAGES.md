# Gallery Images - Replacement Guide

The gallery section currently uses placeholder images. Follow these steps to replace them with actual cafe photos.

## Location

Gallery component: `src/components/Gallery.tsx`

## Recommended Images

Based on the photo shotlist, you should include:

1. **Interior seating and decor** - Showcase the modern, elegant interior design
2. **Outdoor seating area** - Highlight the outdoor seating option
3. **Coffee drinks close-up** - Feature specialty coffee (Vietnamese, Iced Bombon)
4. **Food plating shots** - Display freshly prepared food
5. **Evening or night ambience** - Capture the late-night atmosphere (cafe open till 1 am)

## How to Replace Images

### Option 1: Using Local Images

1. Add your images to `src/assets/` directory:
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
   ```tsx
   import gallery1 from "@/assets/gallery1.jpg";
   import gallery2 from "@/assets/gallery2.jpg";
   import gallery3 from "@/assets/gallery3.jpg";
   import gallery4 from "@/assets/gallery4.jpg";
   import gallery5 from "@/assets/gallery5.jpg";
   import gallery6 from "@/assets/gallery6.jpg";

   const galleryImages = [
     gallery1,
     gallery2,
     gallery3,
     gallery4,
     gallery5,
     gallery6,
   ];
   ```

3. Replace the `placeholderImages` array with:
   ```tsx
   {galleryImages.map((src, index) => (
     <div key={index} className="...">
       <Image
         src={src}
         alt={`Gallery image ${index + 1} - ${cafeData.brand.business_name}`}
         // ... rest of props
       />
     </div>
   ))}
   ```

### Option 2: Using External URLs

If images are hosted elsewhere, update the `placeholderImages` array in `Gallery.tsx` with your image URLs:

```tsx
const placeholderImages = [
  {
    src: "https://your-image-host.com/gallery1.jpg",
    alt: "Interior seating and decor - The Artisan's Table",
  },
  {
    src: "https://your-image-host.com/gallery2.jpg",
    alt: "Outdoor seating area - The Artisan's Table",
  },
  // ... more images
];
```

## Image Requirements

- **Format**: JPG, PNG, or WebP
- **Aspect Ratio**: Square (1:1) recommended for consistent grid layout
- **Size**: Optimize images to ~800x800px for web performance
- **Quality**: High quality but optimized for web (use tools like ImageOptim or TinyPNG)

## Current Implementation

The gallery currently displays 6 placeholder images in a responsive grid:
- 1 column on mobile
- 2 columns on tablet
- 3 columns on desktop

Each image has hover effects (scale and overlay) for better interactivity.



