# Image Integration Guide

This guide explains how to replace placeholder images in the Gallery component with actual photos of SS Coffee Cart.

## Gallery Images

The Gallery component (`src/components/Gallery.tsx`) currently uses placeholder images from Unsplash. You need to replace these with actual photos.

## Recommended Photos (from shotlist)

Based on the data, here are the recommended photos:

1. **Coffee cart setup on VIP Road** - Exterior shot showing the cart location
2. **Hot chocolate close-up** - High-quality photo of the signature hot chocolate
3. **Coffee preparation shots** - Action shots of coffee being prepared
4. **Staff serving customers** - Friendly staff interactions
5. **Evening ambience at the cart** - Evening/night atmosphere

## How to Add Images

### Option 1: Using Local Images (Recommended)

1. Add your images to `src/assets/` directory:
   - `gallery1.jpg` - Coffee cart setup
   - `gallery2.jpg` - Hot chocolate close-up
   - `gallery3.jpg` - Coffee preparation
   - `gallery4.jpg` - Staff serving
   - `gallery5.jpg` - Evening ambience
   - `gallery6.jpg` - Additional photo

2. Update `src/components/Gallery.tsx`:

```typescript
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

3. Replace the placeholder mapping with:
```typescript
{galleryImages.map((src, index) => (
  <div key={index} className="...">
    <Image
      src={src}
      alt={`Gallery image ${index + 1} - ${cafeData.brand.business_name}`}
      fill
      className="..."
    />
  </div>
))}
```

### Option 2: Using External URLs

If images are hosted elsewhere, update the `placeholderImages` array in `Gallery.tsx` with actual URLs.

## Image Requirements

- **Format**: JPG or WebP (recommended for better compression)
- **Aspect Ratio**: Square (1:1) works best for the grid layout
- **Size**: Recommended 800x800px minimum, but Next.js will optimize automatically
- **Quality**: High quality, well-lit photos work best

## Hero Image (Optional)

If you want to add a hero background image:

1. Add image to `src/assets/` (e.g., `hero.jpg`)
2. Update `src/components/Hero.tsx` to use the image instead of gradient background

## Next.js Image Optimization

Next.js automatically optimizes images, so you don't need to worry about:
- Image compression
- Responsive sizing
- Lazy loading (handled automatically)

Just ensure images are reasonably sized (under 5MB each) for faster uploads.

