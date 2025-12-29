# Gallery Images Setup Guide

## Required Images

The Gallery component currently uses placeholder divs. Replace them with actual images by following these steps:

### Image Requirements

Add the following images to the `public/` folder:

1. **gallery1.jpg** - Bubble tea cups close-up
   - Recommended: High-quality close-up of bubble tea cups showing the tapioca pearls
   - Dimensions: 1200x900px or similar 4:3 aspect ratio

2. **gallery2.jpg** - Waffles with ice cream
   - Recommended: Waffles with ice cream and toppings
   - Dimensions: 1200x900px or similar 4:3 aspect ratio

3. **gallery3.jpg** - Cafe interior and seating
   - Recommended: Interior view showing the cafe atmosphere
   - Dimensions: 1200x900px or similar 4:3 aspect ratio

4. **gallery4.jpg** - Friends enjoying drinks
   - Recommended: People enjoying bubble tea and cafe atmosphere
   - Dimensions: 1200x900px or similar 4:3 aspect ratio

5. **gallery5.jpg** - Exterior view at Aagam Emporio
   - Recommended: Exterior view of the cafe location
   - Dimensions: 1200x900px or similar 4:3 aspect ratio

6. **gallery6.jpg** - Bubble tea preparation
   - Recommended: Bubble tea being prepared or served
   - Dimensions: 1200x900px or similar 4:3 aspect ratio

## How to Update

1. Add your images to the `public/` folder with the names above
2. Open `src/components/Gallery.tsx`
3. Uncomment the Image import and Image components (lines currently commented out)
4. Remove or comment out the placeholder divs that show text

The Gallery component is already set up to use Next.js Image optimization - just uncomment the Image components and the images will automatically be optimized.



