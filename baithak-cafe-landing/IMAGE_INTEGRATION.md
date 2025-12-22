# Image Integration Guide

## Gallery Section

The Gallery component (`src/components/Gallery.tsx`) currently displays placeholder divs. To add real images:

### Step 1: Add Images
1. Create a `public/gallery/` folder in the project root
2. Add your images with descriptive names:
   - `cheese-mysore-dosa.jpg`
   - `chinese-food.jpg`
   - `cafe-ambience.jpg`
   - `kitchen-counter.jpg`
   - `exterior-phoenix-market.jpg`
   - `additional-image.jpg`

### Step 2: Update Gallery Component

Replace the placeholder code in `src/components/Gallery.tsx`:

```tsx
import Image from "next/image";

// ... existing imports ...

const Gallery = () => {
  const images = [
    "/gallery/cheese-mysore-dosa.jpg",
    "/gallery/chinese-food.jpg",
    "/gallery/cafe-ambience.jpg",
    "/gallery/kitchen-counter.jpg",
    "/gallery/exterior-phoenix-market.jpg",
    "/gallery/additional-image.jpg",
  ];

  return (
    <section id="gallery" className="py-20 px-4 bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto max-w-6xl">
        {/* ... existing header ... */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
```

### Recommended Images (from data.ts)

Based on `assets_needed.photo_shotlist`:
1. **Cheese Mysore dosa close-up** - Showcase the signature dish
2. **Chinese food dishes** - Display popular Chinese items
3. **Cafe seating and ambience** - Show the atmosphere
4. **Clean kitchen or service counter** - Highlight hygiene
5. **Exterior view at Phoenix Market** - Help customers find the location

### Image Optimization Tips

- Use WebP format for better compression
- Recommended dimensions: 1200x1200px (square) or 1200x800px (landscape)
- Keep file sizes under 500KB per image
- Use Next.js Image component for automatic optimization

## Hero Section Background (Optional)

To add a background image to the Hero section:

1. Add image to `public/hero-bg.jpg`
2. Update `src/components/Hero.tsx`:

```tsx
<section
  id="hero"
  className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-red-50 pt-20 pb-16 px-4"
>
  <div className="absolute inset-0 z-0">
    <Image
      src="/hero-bg.jpg"
      alt="Baithak Cafe"
      fill
      className="object-cover opacity-20"
      priority
    />
  </div>
  <div className="container mx-auto max-w-6xl relative z-10">
    {/* ... existing content ... */}
  </div>
</section>
```

