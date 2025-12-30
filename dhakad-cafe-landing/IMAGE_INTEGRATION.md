# Image Integration Guide

## Gallery Section

The Gallery component (`src/components/Gallery.tsx`) currently uses placeholder divs. Replace them with actual images.

### Photo Shotlist

1. **Tea cups and serving counter**
2. **Cheese chilli toast close-up**
3. **Seating area at night**
4. **Puff and Maggi snacks**
5. **Exterior view on Udhana - Magdalla Road**

### Steps to Add Images

1. Create a `public/gallery/` folder in the project root
2. Add your images with descriptive names:
   - `tea-cups-serving-counter.jpg`
   - `cheese-chilli-toast.jpg`
   - `seating-area-night.jpg`
   - `puff-maggi.jpg`
   - `exterior-view.jpg`

3. Update `src/components/Gallery.tsx`:

Replace the placeholder divs with Next.js Image components:

```tsx
import Image from "next/image";

// Replace each placeholder div with:
<div className="aspect-square relative rounded-xl overflow-hidden border-2 border-amber-200 hover:border-amber-400 transition-colors">
  <Image
    src="/gallery/tea-cups-serving-counter.jpg"
    alt="Tea cups and serving counter"
    fill
    className="object-cover"
  />
</div>
```

### Recommended Image Specifications

- **Format**: JPG or WebP
- **Size**: 1200x1200px (square) or 1200x800px (landscape)
- **Optimization**: Use Next.js Image component for automatic optimization
- **File size**: Keep under 500KB per image for fast loading

## Location Map

The Location component (`src/components/Location.tsx`) has a placeholder for Google Maps embed.

### Steps to Add Google Maps Embed

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for: "Udhana - Magdalla Rd, Someshwara Enclave, Vesu, Surat, Gujarat 395007"
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the placeholder div in `src/components/Location.tsx`:

```tsx
<div className="bg-gray-200 rounded-xl overflow-hidden h-full min-h-[400px]">
  <iframe
    src="YOUR_GOOGLE_MAPS_EMBED_URL"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
```

## Hero Section Background (Optional)

You can add a background image to the Hero section:

1. Add image to `public/hero-background.jpg`
2. Update `src/components/Hero.tsx`:

```tsx
<section
  className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-orange-50 pt-20 pb-16 px-4"
  style={{
    backgroundImage: "url('/hero-background.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundBlendMode: "overlay"
  }}
>
```







