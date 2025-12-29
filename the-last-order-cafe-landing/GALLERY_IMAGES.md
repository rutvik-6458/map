# Gallery Images Integration Guide

## Current Status

The gallery section (`src/components/Gallery.tsx`) currently uses placeholder divs. You need to replace these with actual images.

## Recommended Images

Based on the photo shotlist, add these images to `src/assets/`:

1. **Cafe interior and seating** - Show the cozy atmosphere
2. **Loaded nachos and garlic bread** - Signature dishes
3. **Pasta and lasagna close-ups** - Food presentation
4. **Staff interacting with customers** - Hospitality showcase
5. **Exterior view from VIP Road** - Location context

## How to Add Images

1. **Add images to `src/assets/` directory:**
   ```
   src/assets/
   ├── gallery1.jpg  (Cafe interior)
   ├── gallery2.jpg  (Loaded nachos)
   ├── gallery3.jpg  (Garlic bread)
   ├── gallery4.jpg  (Pasta/Lasagna)
   ├── gallery5.jpg  (Staff interaction)
   └── gallery6.jpg  (Exterior view)
   ```

2. **Update `src/components/Gallery.tsx`:**

   Replace the placeholder code with:

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
       <section id="gallery" className="py-20 px-4 bg-gradient-to-b from-stone-50 to-white">
         <div className="container mx-auto max-w-6xl">
           <div className="text-center mb-12">
             <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
               Gallery
             </h2>
             <p className="text-lg text-stone-600">
               A glimpse of our cozy atmosphere and delicious food
             </p>
           </div>

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

## Image Requirements

- **Format**: JPG or WebP (optimized)
- **Aspect Ratio**: Square (1:1) recommended
- **Size**: Minimum 800x800px, optimal 1200x1200px
- **File Size**: Keep under 500KB per image for web performance

## Notes

- The gallery currently shows 6 placeholder divs
- Images will automatically be optimized by Next.js Image component
- Hover effects and transitions are already implemented
- The grid is responsive (1 column on mobile, 2 on tablet, 3 on desktop)


