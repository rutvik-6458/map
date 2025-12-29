# Image Integration Guide

## Gallery Images

The gallery currently uses placeholder divs. To add actual images:

### Step 1: Add Images to Project

1. Create an `assets` folder in `src/`:
   ```
   src/
     └── assets/
         ├── gallery1.jpg
         ├── gallery2.jpg
         ├── gallery3.jpg
         ├── gallery4.jpg
         ├── gallery5.jpg
         └── gallery6.jpg
   ```

### Step 2: Update Gallery Component

Replace the placeholder implementation in `src/components/Gallery.tsx` with actual image imports:

```tsx
import Image from "next/image";
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import gallery4 from "@/assets/gallery4.jpg";
import gallery5 from "@/assets/gallery5.jpg";
import gallery6 from "@/assets/gallery6.jpg";

const Gallery = () => {
  const galleryImages = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
  ];

  return (
    <section id="gallery" className="py-20 px-4 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto max-w-6xl">
        {/* ... existing code ... */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-shadow"
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1} - ${cafeData.brand.business_name}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

## Recommended Photo Shot List

Based on the data in `src/data.ts`, here are the recommended photos:

1. **Coffee and cappuccino close-ups** - Showcase specialty coffee
2. **Desserts and croissants** - Display popular dessert items
3. **Indoor seating ambience** - Show the cozy indoor atmosphere
4. **Outdoor seating area** - Highlight outdoor seating option
5. **Exterior view at International Finance Centre** - Show the location/entrance
6. **Additional cafe atmosphere** - General ambiance shots

## Image Requirements

- **Format**: JPG, PNG, or WebP
- **Recommended Size**: 1200x1200px or larger (square format works best)
- **Quality**: High quality, well-lit images
- **Optimization**: Next.js will automatically optimize images, but starting with optimized images helps

## Hero Image (Optional)

If you want to add a hero background image:

1. Add the image to `src/assets/hero.jpg`
2. Update `src/components/Hero.tsx`:

```tsx
import Image from "next/image";
import heroImage from "@/assets/hero.jpg";

// In the Hero component, replace the gradient background:
<div className="absolute inset-0 z-0">
  <Image
    src={heroImage}
    alt="Brew Circle by Kohi Aura"
    fill
    className="object-cover"
    priority
    quality={90}
  />
  <div className="absolute inset-0 bg-black/40" />
</div>
```

## Notes

- Next.js Image component automatically optimizes images
- Images are lazy-loaded by default (except priority images)
- Use `priority` prop for above-the-fold images (like hero)
- Always include descriptive alt text for accessibility
- Consider image file sizes for performance (aim for <500KB per image when possible)



