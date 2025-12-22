# Image Integration Guide

## Gallery Images

The Gallery component (`src/components/Gallery.tsx`) currently uses placeholder divs. To integrate actual images:

### Step 1: Add Images to Public Folder

Create a `gallery` folder in the `public` directory and add your images:

```
public/
└── gallery/
    ├── cafe-exterior.jpg
    ├── hot-chocolate.jpg
    ├── sandwiches-rice.jpg
    ├── interior-seating.jpg
    ├── coffee-beverages.jpg
    └── cafe-atmosphere.jpg
```

### Step 2: Update Gallery Component

Replace the placeholder content in `src/components/Gallery.tsx`:

```tsx
// Replace the placeholder div with actual image
<img
  src={`/gallery/${image.filename}`}
  alt={image.alt}
  className="w-full h-full object-cover"
/>
```

### Recommended Image Specifications

- **Format**: JPG or WebP (WebP recommended for better performance)
- **Dimensions**: 1200x1200px (square) or 1200x800px (landscape)
- **File Size**: Optimize to under 200KB per image
- **Aspect Ratio**: Square (1:1) works best for the grid layout

### Image Optimization

1. Use tools like [Squoosh](https://squoosh.app/) or [TinyPNG](https://tinypng.com/) to compress images
2. Consider using Next.js Image component for automatic optimization:

```tsx
import Image from "next/image";

<Image
  src="/gallery/cafe-exterior.jpg"
  alt="Cafe exterior"
  width={400}
  height={400}
  className="object-cover"
/>
```

### Photo Shotlist

Based on the requirements, capture these images:

1. **Cafe exterior at Ambrosia Business Hub** - Show the cafe's location and exterior
2. **Hot chocolate close-up** - Highlight the signature beverage
3. **Sandwiches and rice dishes** - Showcase the food offerings
4. **Interior seating and ambience** - Display the cafe's atmosphere
5. **Coffee and beverage shots** - Feature the drink menu

### Hero Section Background (Optional)

If you want to add a background image to the Hero section:

1. Add image to `public/hero-bg.jpg`
2. Update `src/components/Hero.tsx`:

```tsx
<div className="absolute inset-0 z-0">
  <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-amber-900/40 z-10" />
  <img
    src="/hero-bg.jpg"
    alt="Rasta Street Cafe"
    className="w-full h-full object-cover"
  />
</div>
```

### Current Placeholder Implementation

The current implementation uses gradient backgrounds with emoji icons as placeholders. This ensures the layout is preserved even without images, making it easy to swap in real images later.



