# Gallery Images Requirements

This document lists the images needed for the Seeds - The Coffee House landing page gallery section.

## Image Locations

All images should be placed in the `public/` folder at the root of the project.

## Required Images

### 1. Hero Image
- **File:** `/public/hero.jpg`
- **Description:** Main hero background image showing the rooftop coffee house ambience
- **Recommended:** Rooftop seating area, coffee cups, aesthetic atmosphere
- **Size:** 1920x1080px or larger
- **Format:** JPG or WebP

### 2. Gallery Images

#### Gallery Image 1
- **File:** `/public/gallery1.jpg`
- **Description:** Specialty coffee close-ups
- **Content:** Close-up shots of specialty coffee beverages, latte art, coffee beans
- **Size:** 1200x800px or larger

#### Gallery Image 2
- **File:** `/public/gallery2.jpg`
- **Description:** Rooftop seating and ambience
- **Content:** Rooftop seating area, overall cafe atmosphere, aesthetic setting
- **Size:** 1200x800px or larger

#### Gallery Image 3
- **File:** `/public/gallery3.jpg`
- **Description:** Barista preparing coffee
- **Content:** Barista in action, coffee preparation, brewing process
- **Size:** 1200x800px or larger

#### Gallery Image 4
- **File:** `/public/gallery4.jpg`
- **Description:** Latte art and hot beverages
- **Content:** Latte art, beautifully presented coffee drinks, hot beverages
- **Size:** 1200x800px or larger

#### Gallery Image 5
- **File:** `/public/gallery5.jpg`
- **Description:** Exterior view at International Wealth Center
- **Content:** Building exterior, entrance, signage, location context
- **Size:** 1200x800px or larger

## Image Specifications

- **Format:** JPG (recommended) or WebP
- **Quality:** High quality (80-90% compression)
- **Aspect Ratio:** 4:3 or 16:9 for gallery images
- **Optimization:** Images will be automatically optimized by Next.js Image component
- **Alt Text:** Already configured in `src/components/Gallery.tsx`

## Fallback Behavior

If images are not available or fail to load:
- The gallery will display colored placeholder backgrounds
- Placeholder text will show the image description
- The page will remain fully functional

## Photo Shotlist (from JSON data)

Based on the provided JSON data, the following shots are recommended:

1. Specialty coffee close-ups
2. Rooftop seating and ambience
3. Barista preparing coffee
4. Latte art and hot beverages
5. Exterior view at International Wealth Center

## Notes

- All images are loaded using Next.js Image component with lazy loading
- Images are responsive and will adapt to different screen sizes
- Error handling is built-in - if an image fails to load, a placeholder will be shown
- The hero image uses priority loading for better performance





