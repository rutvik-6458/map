# Gallery Images Required

Add the following images to the `public/` folder:

1. **gallery1.jpg** - Veg steamed momos close-up
2. **gallery2.jpg** - Peri peri fries and snacks
3. **gallery3.jpg** - Sandwiches and pasta
4. **gallery4.jpg** - Small cafe seating and vibe
5. **gallery5.jpg** - Exterior view on VIP Road

## How to Update

1. Add images to `public/` folder
2. Update `src/components/Gallery.tsx`:

Replace the placeholder imports with:
```typescript
import gallery1 from "/gallery1.jpg";
import gallery2 from "/gallery2.jpg";
import gallery3 from "/gallery3.jpg";
import gallery4 from "/gallery4.jpg";
import gallery5 from "/gallery5.jpg";
```

And update the `galleryImages` array:
```typescript
const galleryImages = [
  {
    src: gallery1,
    alt: "Veg steamed momos close-up",
    placeholder: "bg-orange-100"
  },
  // ... etc
];
```

## Image Recommendations

- **Format**: JPG or WebP
- **Size**: Optimize for web (under 500KB each)
- **Aspect Ratio**: 4:3 recommended
- **Resolution**: 1200x900px or higher


