# Image Integration Guide

## Gallery Images

The Gallery component currently uses placeholders. To integrate actual images:

### Step 1: Create Gallery Directory

Create the following directory structure:
```
public/
└── gallery/
    ├── salad-bowl.jpg
    ├── wraps.jpg
    ├── interior.jpg
    ├── preparation.jpg
    ├── exterior.jpg
    └── display.jpg
```

### Step 2: Add Your Images

Add your images to the `public/gallery/` directory with these recommended names:

1. **salad-bowl.jpg** - Fresh salads and healthy bowls
2. **wraps.jpg** - Wraps and light meals
3. **interior.jpg** - Cafe interior and seating
4. **preparation.jpg** - Food preparation with fresh ingredients
5. **exterior.jpg** - Exterior view near Aagam Shopping Center
6. **display.jpg** - Healthy food display

### Step 3: Update Gallery Component

Open `src/components/Gallery.tsx` and:

1. Uncomment the `<img>` tags (lines with `{/* ... */}`)
2. Remove or hide the placeholder divs
3. Ensure image paths match your file names

### Recommended Image Specifications

- **Format**: JPG or WebP (WebP recommended for better performance)
- **Aspect Ratio**: 1:1 (square) for consistent grid layout
- **Size**: 800x800px minimum, 1200x1200px recommended
- **Optimization**: Compress images before adding (use tools like TinyPNG or ImageOptim)

### Example Code Update

In `src/components/Gallery.tsx`, replace the placeholder div with:

```tsx
<img
    src={`/gallery/${image.placeholder}.jpg`}
    alt={image.alt}
    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
/>
```

## Hero Background Image (Optional)

To add a background image to the Hero section:

1. Add your image to `public/hero-bg.jpg`
2. In `src/components/Hero.tsx`, replace the gradient div with:

```tsx
<img
    src="/hero-bg.jpg"
    alt="SaladO Cafe"
    className="w-full h-full object-cover"
/>
```

## Notes

- All images in the `public/` folder are served from the root URL
- Use Next.js Image component for better optimization (optional)
- Ensure images are properly optimized for web to maintain fast load times


