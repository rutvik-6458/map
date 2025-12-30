# Image Integration Guide

## Gallery Section - Image Replacement

The Gallery component (`src/components/Gallery.tsx`) currently displays placeholder cards. Replace these with actual images.

### Current Placeholders

1. **Poolside seating and ambience**
2. **Coffee and mojito drinks**
3. **Popular food items like tacos and nachos**
4. **Game zone with board games**
5. **Exterior view at BB Club Bhagban**

### Steps to Add Images

1. **Add images to `public/` folder:**
   ```
   public/
     ├── gallery-poolside.jpg
     ├── gallery-drinks.jpg
     ├── gallery-food.jpg
     ├── gallery-games.jpg
     └── gallery-exterior.jpg
   ```

2. **Update `src/components/Gallery.tsx`:**

   Replace the placeholder CardContent with:

   ```tsx
   import Image from "next/image";

   // In the map function:
   <CardContent className="p-0 h-full relative">
     <Image
       src={`/gallery-${index + 1}.jpg`} // or use specific names
       alt={item}
       fill
       className="object-cover"
       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
     />
   </CardContent>
   ```

### Recommended Image Specifications

- **Format:** JPG or WebP (for better performance)
- **Aspect Ratio:** 1:1 (square) or 4:3
- **Size:** 800x800px minimum, 1200x1200px recommended
- **Optimization:** Use Next.js Image component for automatic optimization

## Hero Section Background (Optional)

To add a hero background image:

1. Add image to `public/hero-bg.jpg`
2. Update `src/components/Hero.tsx`:
   ```tsx
   <section
     id="hero"
     className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 bg-gradient-to-br from-blue-50 via-white to-cyan-50"
     style={{
       backgroundImage: "url('/hero-bg.jpg')",
       backgroundSize: "cover",
       backgroundPosition: "center",
     }}
   >
     {/* Add overlay for text readability */}
     <div className="absolute inset-0 bg-black/20"></div>
     {/* Rest of content */}
   </section>
   ```

## Google Maps Embed

The Location component is ready for Google Maps integration:

1. **Option 1: Embed URL**
   - Get embed URL from Google Maps
   - Update `googleMapsLink` in `src/components/Location.tsx`

2. **Option 2: Google Maps API**
   - Get API key from Google Cloud Console
   - Update the embed URL template in `Location.tsx`:
   ```tsx
   const googleMapsEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(address)}`;
   ```

3. **Option 3: Static Map Image**
   - Use Google Static Maps API
   - Display as an image instead of interactive map

## Notes

- All images should be optimized before adding
- Use descriptive alt text for accessibility
- Consider lazy loading for gallery images
- Test on mobile devices to ensure images load properly






