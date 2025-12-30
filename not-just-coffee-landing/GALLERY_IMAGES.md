# Gallery Images Integration Guide

## Current Status

The Gallery component (`src/components/Gallery.tsx`) currently displays placeholder boxes. You need to replace these with actual images.

## Required Images

Based on the photo shotlist, you need 6 images:

1. **Cafe exterior on VIP Road** - Exterior view of the cafe
2. **Interior seating and ambience** - Inside view showing the cozy atmosphere
3. **Desserts close-up** - High-quality photo of desserts
4. **Coffee and drinks** - Beverages and coffee presentation
5. **Clean and cozy table setups** - Table arrangements and interior details
6. **Additional cafe atmosphere** - Any additional ambiance shot

## Steps to Add Images

### Step 1: Add Images to Assets Folder

1. Create the `src/assets/` folder if it doesn't exist
2. Add your images with these names:
   - `gallery1.jpg` (or `.png`, `.webp`)
   - `gallery2.jpg`
   - `gallery3.jpg`
   - `gallery4.jpg`
   - `gallery5.jpg`
   - `gallery6.jpg`

### Step 2: Update Gallery Component

Open `src/components/Gallery.tsx` and replace the placeholder code with:

```typescript
import gallery1 from "@/assets/gallery1.jpg";
import gallery2 from "@/assets/gallery2.jpg";
import gallery3 from "@/assets/gallery3.jpg";
import gallery4 from "@/assets/gallery4.jpg";
import gallery5 from "@/assets/gallery5.jpg";
import gallery6 from "@/assets/gallery6.jpg";

export default function Gallery() {
    const galleryItems = [
        { id: 1, image: gallery1, alt: "Not Just Coffee - Cafe exterior on VIP Road" },
        { id: 2, image: gallery2, alt: "Not Just Coffee - Interior seating and ambience" },
        { id: 3, image: gallery3, alt: "Not Just Coffee - Desserts close-up" },
        { id: 4, image: gallery4, alt: "Not Just Coffee - Coffee and drinks" },
        { id: 5, image: gallery5, alt: "Not Just Coffee - Clean and cozy table setups" },
        { id: 6, image: gallery6, alt: "Not Just Coffee - Cafe atmosphere" },
    ];

    return (
        <section className="py-24 bg-white" id="gallery">
            {/* ... rest of component ... */}
            {galleryItems.map((item, idx) => (
                <motion.div
                    key={item.id}
                    // ... motion props ...
                    className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-gray-200 shadow-lg group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                    <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                </motion.div>
            ))}
        </section>
    );
}
```

## Image Recommendations

- **Format**: JPG or WebP for photos
- **Aspect Ratio**: 4:3 (recommended) or 16:9
- **Size**: Optimize images to be under 500KB each for web performance
- **Resolution**: At least 1200px width for good quality on desktop
- **Quality**: High-quality, well-lit photos that showcase the cafe's ambience

## Alternative: Using External Images

If you prefer to host images externally, you can:

1. Upload images to a CDN or image hosting service
2. Update the `galleryItems` array to use full URLs instead of imports
3. Make sure to add the domain to `next.config.ts` under `images.remotePatterns`

Example:
```typescript
const galleryItems = [
    { id: 1, image: "https://your-cdn.com/gallery1.jpg", alt: "..." },
    // ...
];
```

And update `next.config.ts`:
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




