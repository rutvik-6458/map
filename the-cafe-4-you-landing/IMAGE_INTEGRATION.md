# Image Integration Guide

## Gallery Images

The gallery section currently uses placeholder images from Unsplash. Replace them with actual photos from The Cafe 4 You.

### Recommended Images

Based on the photo shotlist, you should replace images in `src/components/Gallery.tsx` with:

1. **Cafe interior and seating** - Show the cozy, private seating areas
2. **Friends hanging out** - Capture the social atmosphere
3. **Mint Mojito drink** - High-quality photo of the signature drink
4. **Ice Cream Brownie dessert** - Appetizing photo of the popular dessert
5. **Exterior storefront** - Front view of the cafe building

### How to Replace Images

1. **Option 1: Add images to `src/assets/` folder**
   ```typescript
   import gallery1 from "../assets/gallery1.jpg";
   import gallery2 from "../assets/gallery2.jpg";
   // ... etc

   // Then use:
   src={typeof gallery1 === 'string' ? gallery1 : gallery1.src}
   ```

2. **Option 2: Add images to `public/` folder**
   ```typescript
   // Use direct paths:
   src="/gallery1.jpg"
   ```

3. **Option 3: Use external URLs**
   ```typescript
   // Keep using URLs if hosting images elsewhere
   src="https://your-cdn.com/gallery1.jpg"
   ```

### Current Gallery Structure

The gallery component in `src/components/Gallery.tsx` has 6 placeholder images. Update the `galleryImages` array with your actual images.

### Hero Image

The hero section uses a background image. Update the `src` attribute in `src/components/Hero.tsx`:

```typescript
<img
  src="your-hero-image.jpg" // Replace this
  alt="The Cafe 4 You Ambience"
  className="w-full h-full object-cover scale-105"
/>
```

### Menu Images

The menu section in `src/components/Menu.tsx` uses placeholder images. Update the `menuImages` array with photos of:
- Mint Mojito
- Ice Cream Brownie
- Cafe-style fast food

### Image Optimization Tips

- Use WebP format for better compression
- Optimize images before adding (use tools like ImageOptim, Squoosh)
- Recommended dimensions:
  - Gallery: 800x600px minimum
  - Hero: 1920x1080px minimum
  - Menu items: 600x400px minimum





